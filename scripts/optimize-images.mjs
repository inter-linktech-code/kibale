
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const projectRoot = process.cwd();
const assetsDirectory = path.join(projectRoot, "src", "assets");

// Backups are stored outside the Git repository.
const backupDirectory = path.resolve(
  projectRoot,
  "..",
  `${path.basename(projectRoot)}-image-backup`
);

const supportedExtensions = new Set([".jpg", ".jpeg"]);

const MAX_DIMENSION = 2000;
const QUALITY = 82;
const SKIP_BELOW_KB = 450;

async function findImages(directory) {
  const entries = await fs.readdir(directory, {
    withFileTypes: true,
  });

  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await findImages(fullPath)));
    } else if (
      entry.isFile() &&
      supportedExtensions.has(path.extname(entry.name).toLowerCase())
    ) {
      files.push(fullPath);
    }
  }

  return files;
}

async function main() {
  const images = await findImages(assetsDirectory);

  if (images.length === 0) {
    console.log("No JPG or JPEG images were found.");
    return;
  }

  let originalTotal = 0;
  let optimizedTotal = 0;
  let processed = 0;
  let skipped = 0;

  console.log(`Found ${images.length} JPEG images.`);
  console.log(`Backups: ${backupDirectory}\n`);

  for (const imagePath of images) {
    const relativePath = path.relative(assetsDirectory, imagePath);
    const backupPath = path.join(backupDirectory, relativePath);
    const tempPath = `${imagePath}.optimized.tmp.jpg`;

    const originalStats = await fs.stat(imagePath);
    const originalSize = originalStats.size;

    originalTotal += originalSize;

    const metadata = await sharp(imagePath).metadata();

    const alreadySmall =
      originalSize < SKIP_BELOW_KB * 1024 &&
      metadata.width <= MAX_DIMENSION &&
      metadata.height <= MAX_DIMENSION;

    if (alreadySmall) {
      optimizedTotal += originalSize;
      skipped++;
      console.log(`SKIPPED  ${relativePath}`);
      continue;
    }

    try {
      // Preserve the original before changing anything.
      await fs.mkdir(path.dirname(backupPath), {
        recursive: true,
      });

      try {
        await fs.access(backupPath);
      } catch {
        await fs.copyFile(imagePath, backupPath);
      }

      await sharp(imagePath)
        .rotate()
        .resize({
          width: MAX_DIMENSION,
          height: MAX_DIMENSION,
          fit: "inside",
          withoutEnlargement: true,
        })
        .jpeg({
          quality: QUALITY,
          mozjpeg: true,
          progressive: true,
        })
        .toFile(tempPath);

      const newStats = await fs.stat(tempPath);

      // Replace the original only after successful processing.
      await fs.rename(tempPath, imagePath);

      optimizedTotal += newStats.size;
      processed++;

      const savedPercent =
        (1 - newStats.size / originalSize) * 100;

      console.log(
        `OPTIMIZED ${relativePath}: ` +
          `${(originalSize / 1024 / 1024).toFixed(2)} MB -> ` +
          `${(newStats.size / 1024).toFixed(0)} KB ` +
          `(${savedPercent.toFixed(1)}% smaller)`
      );
    } catch (error) {
      await fs.rm(tempPath, { force: true }).catch(() => {});

      optimizedTotal += originalSize;

      console.error(`FAILED ${relativePath}: ${error.message}`);
    }
  }

  console.log("\n========== SUMMARY ==========");
  console.log(`Images found: ${images.length}`);
  console.log(`Images optimized: ${processed}`);
  console.log(`Images skipped: ${skipped}`);
  console.log(
    `Original total: ${(originalTotal / 1024 / 1024).toFixed(2)} MB`
  );
  console.log(
    `Current total: ${(optimizedTotal / 1024 / 1024).toFixed(2)} MB`
  );
  console.log(
    `Space saved: ${((originalTotal - optimizedTotal) / 1024 / 1024).toFixed(2)} MB`
  );
  console.log(`\nOriginal backups: ${backupDirectory}`);
}

main().catch((error) => {
  console.error("Image optimization failed:", error);
  process.exitCode = 1;
});
