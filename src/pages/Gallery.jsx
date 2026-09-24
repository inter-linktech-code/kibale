import { motion } from "framer-motion";
import {
  ArrowRight,
  Camera,
  ChevronLeft,
  ChevronRight,
  Images,
  MapPin,
  MessageCircle,
  Sparkles,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import galleryHero from "../assets/gallery-hero.jpg";
import gallery01 from "../assets/gallery-01.jpg";
import gallery02 from "../assets/gallery-02.jpg";
import gallery03 from "../assets/gallery-03.jpg";
import gallery04 from "../assets/gallery-04.jpg";
import gallery05 from "../assets/gallery-05.jpg";
import gallery06 from "../assets/gallery-06.jpg";
import gallery07 from "../assets/gallery-07.jpg";
import gallery08 from "../assets/gallery-08.jpg";
import gallery09 from "../assets/gallery-09.jpg";
import gallery10 from "../assets/gallery-10.jpg";
import gallery11 from "../assets/gallery-11.jpg";
import gallery12 from "../assets/gallery-12.jpg";

import "./Gallery.css";

const galleryItems = [
  {
    image: gallery01,
    title: "The Inn",
    category: "Kibale Tourist's Inn",
  },
  {
    image: gallery02,
    title: "A Place To Stay",
    category: "Accommodation",
  },
  {
    image: gallery03,
    title: "Dining At The Inn",
    category: "Restaurant",
  },
  {
    image: gallery04,
    title: "Kibale Forest",
    category: "Nature",
  },
  {
    image: gallery05,
    title: "Wildlife Encounters",
    category: "Wildlife",
  },
  {
    image: gallery06,
    title: "Forest Trails",
    category: "Experiences",
  },
  {
    image: gallery07,
    title: "Crater Lake Country",
    category: "Landscape",
  },
  {
    image: gallery08,
    title: "Quiet Mornings",
    category: "The Inn",
  },
  {
    image: gallery09,
    title: "Evenings In Kibale",
    category: "The Inn",
  },
  {
    image: gallery10,
    title: "Camping Under The Stars",
    category: "Camping",
  },
  {
    image: gallery11,
    title: "Local Life",
    category: "Culture",
  },
  {
    image: gallery12,
    title: "Discover Western Uganda",
    category: "Adventure",
  },
];

const galleryFilters = [
  "All",
  "Accommodation",
  "Restaurant",
  "Nature",
  "Wildlife",
  "Camping",
  "Culture",
];

function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeImage, setActiveImage] = useState(null);

  const filteredItems = galleryItems.filter(
    (item) => activeFilter === "All" || item.category === activeFilter
  );

  const openImage = (item) => {
    setActiveImage(item);
  };

  const closeImage = () => {
    setActiveImage(null);
  };

  const moveImage = (direction) => {
    const currentIndex = filteredItems.indexOf(activeImage);
    const nextIndex =
      (currentIndex + direction + filteredItems.length) % filteredItems.length;

    setActiveImage(filteredItems[nextIndex]);
  };

  useEffect(() => {
    if (!activeImage) {
      return undefined;
    }

    const visibleItems = galleryItems.filter(
      (item) => activeFilter === "All" || item.category === activeFilter
    );

    const navigate = (direction) => {
      const currentIndex = visibleItems.indexOf(activeImage);
      const nextIndex =
        (currentIndex + direction + visibleItems.length) % visibleItems.length;

      setActiveImage(visibleItems[nextIndex]);
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeImage();
      if (event.key === "ArrowLeft") navigate(-1);
      if (event.key === "ArrowRight") navigate(1);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeImage, activeFilter]);

  return (
    <main className="gallery-page">
      {/* HERO */}
      <section className="gallery-hero">
        <div className="gallery-hero__image">
          <img
            src={galleryHero}
            alt="Kibale Tourist's Inn and Western Uganda"
          />
        </div>

        <div className="gallery-hero__overlay" />

        <div className="container gallery-hero__content">
          <motion.div
            className="gallery-hero__inner"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="gallery-hero__icon">
              <Images size={24} />
            </div>

            <span className="eyebrow eyebrow--light">
              KIBALE TOURIST&apos;S INN • GALLERY
            </span>

            <h1>
              See the place.
              <span>Feel the journey.</span>
            </h1>

            <p>
              A glimpse of the Inn, the landscapes around Kibale and the
              experiences that make a stay in Western Uganda memorable.
            </p>

            <div className="gallery-hero__actions">
              <a href="#gallery" className="btn btn-gold">
                Explore Gallery
                <ArrowRight size={18} />
              </a>

              <Link to="/booking" className="hero-text-link">
                Plan Your Stay
                <ArrowRight size={17} />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="gallery-hero__bottom">
          <span>
            <MapPin size={15} />
            Isunga • Kibale • Uganda
          </span>

          <span>Stay • Explore • Remember</span>
        </div>
      </section>

      {/* INTRO */}
      <section className="section gallery-intro">
        <div className="container">
          <div className="gallery-intro__grid">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="eyebrow">A GLIMPSE OF KIBALE</span>

              <h2>
                Every journey
                <span>leaves an image behind.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="lead">
                Explore a visual collection of life at Kibale Tourist&apos;s
                Inn and the landscapes surrounding us.
              </p>

              <p>
                From comfortable accommodation and relaxed dining to forest
                adventures, wildlife and the dramatic scenery of Western
                Uganda, these images offer a glimpse of what awaits.
              </p>

              <div className="gallery-intro__note">
                <Camera size={18} />
                <span>
                  Your own Kibale memories could be next.
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section gallery-main" id="gallery">
        <div className="container">
          <div className="gallery-header">
            <div>
              <span className="eyebrow">VISUAL JOURNEY</span>

              <h2>
                Around the
                <span>Inn & Kibale.</span>
              </h2>
            </div>

            <p>
              A collection of moments from accommodation, nature, dining,
              camping and experiences around Western Uganda.
            </p>
          </div>

          <div className="gallery-filters" aria-label="Filter gallery images">
            {galleryFilters.map((filter) => (
              <button
                type="button"
                className={activeFilter === filter ? "is-active" : ""}
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setActiveImage(null);
                }}
                aria-pressed={activeFilter === filter}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredItems.map((item, index) => (
              <motion.figure
                className={`gallery-item gallery-item--${(index % 6) + 1}`}
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.6,
                  delay: (index % 3) * 0.06,
                }}
                role="button"
                tabIndex="0"
                onClick={() => openImage(item)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openImage(item);
                  }
                }}
                aria-label={`View ${item.title} larger`}
              >
                <img src={item.image} alt={item.title} />

                <figcaption>
                  <span>{item.category}</span>
                  <strong>{item.title}</strong>
                </figcaption>
              </motion.figure>
            ))}
          </div>

          {activeImage && (
            <div
              className="gallery-lightbox"
              role="dialog"
              aria-modal="true"
              aria-label={`${activeImage.title} image viewer`}
              onClick={(event) => {
                if (event.target === event.currentTarget) closeImage();
              }}
            >
              <button
                type="button"
                className="gallery-lightbox__close"
                onClick={closeImage}
                aria-label="Close image viewer"
              >
                <X size={22} />
              </button>

              <button
                type="button"
                className="gallery-lightbox__arrow gallery-lightbox__arrow--previous"
                onClick={() => moveImage(-1)}
                aria-label="Previous image"
              >
                <ChevronLeft size={27} />
              </button>

              <figure className="gallery-lightbox__content">
                <img src={activeImage.image} alt={activeImage.title} />
                <figcaption>
                  <span>{activeImage.category}</span>
                  <strong>{activeImage.title}</strong>
                </figcaption>
              </figure>

              <button
                type="button"
                className="gallery-lightbox__arrow gallery-lightbox__arrow--next"
                onClick={() => moveImage(1)}
                aria-label="Next image"
              >
                <ChevronRight size={27} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* MOMENT */}
      <section className="gallery-moment">
        <div className="container">
          <motion.div
            className="gallery-moment__inner"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="gallery-moment__icon">
              <Sparkles size={24} />
            </div>

            <span className="eyebrow eyebrow--gold">
              MORE THAN A PHOTOGRAPH
            </span>

            <h2>
              Come for the view.
              <span>Stay for the feeling.</span>
            </h2>

            <p>
              The best part of Kibale cannot always be captured in a frame.
              It is the sound of the forest, the conversations after a day of
              exploring and the quiet moments between adventures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* RELATED */}
      <section className="section gallery-related">
        <div className="container">
          <div className="gallery-related__header">
            <div>
              <span className="eyebrow">SEE IT FOR YOURSELF</span>

              <h2>
                Your next memory
                <span>starts here.</span>
              </h2>
            </div>
          </div>

          <div className="gallery-related__grid">
            <Link to="/accommodation">
              <span>Accommodation</span>
              <ArrowRight size={18} />
            </Link>

            <Link to="/restaurant">
              <span>Restaurant & Bar</span>
              <ArrowRight size={18} />
            </Link>

            <Link to="/experiences">
              <span>Experiences</span>
              <ArrowRight size={18} />
            </Link>

            <Link to="/camping">
              <span>Camping</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gallery-cta">
        <div className="container">
          <motion.div
            className="gallery-cta__inner"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <MessageCircle size={27} />

            <span className="eyebrow eyebrow--gold">
              KIBALE TOURIST&apos;S INN
            </span>

            <h2>
              Ready to create
              <span>your own memories?</span>
            </h2>

            <p>
              Plan your stay and experience Kibale, Western Uganda from a
              comfortable and welcoming base.
            </p>

            <div className="gallery-cta__actions">
              <Link to="/booking" className="btn btn-gold">
                Book Your Stay
                <ArrowRight size={18} />
              </Link>

              <a
                href="https://wa.me/256755517111"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light"
              >
                <MessageCircle size={18} />
                WhatsApp Our Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default Gallery;