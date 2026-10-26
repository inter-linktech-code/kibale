
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  Camera,
  Check,
  ChevronLeft,
  ChevronRight,
  Images,
  MapPin,
  MessageCircle,
  Sparkles,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

import heroImage from "../assets/gallery-hero.jpg";

import image01 from "../assets/gallery-01.jpg";
import image02 from "../assets/gallery-02.jpg";
import image03 from "../assets/gallery-03.jpg";
import image04 from "../assets/gallery-04.jpg";
import image05 from "../assets/gallery-05.jpg";
import image06 from "../assets/gallery-06.jpg";
import image07 from "../assets/gallery-07.jpg";
import image08 from "../assets/gallery-08.jpg";
import image09 from "../assets/gallery-09.jpg";
import image10 from "../assets/gallery-10.jpg";
import image11 from "../assets/gallery-11.jpg";
import image12 from "../assets/gallery-12.jpg";

import image13 from "../assets/accommodation-view.jpg";
import image14 from "../assets/woodland-escape.jpg";
import image15 from "../assets/restaurant-interior.jpg";
import image16 from "../assets/wildlife-encounter.jpg";
import image17 from "../assets/forest-walk.jpg";
import image18 from "../assets/golden-hour.jpg";
import image19 from "../assets/scenic-road.jpg";
import image20 from "../assets/quiet-retreat.jpg";
import image21 from "../assets/kibale-landscape.jpg";
import image22 from "../assets/forest-trail.jpg";
import image23 from "../assets/outdoor-adventure.jpg";
import image24 from "../assets/camping-tent.jpg";
import image25 from "../assets/tropical-greenery.jpg";
import image26 from "../assets/outdoor-destination.jpg";

import "./Gallery.css";

const galleryItems = [
  {
    image: image01,
    title: "Welcome to the Inn",
    category: "The Inn",
    description: "A welcoming base for discovering the beauty of Kibale.",
    alt: "Kibale Tourist's Inn in Western Uganda",
  },
  {
    image: image02,
    title: "A Place to Unwind",
    category: "Accommodation",
    description: "Comfortable spaces to relax after a day of exploring.",
    alt: "Guest accommodation at Kibale Tourist's Inn",
  },
  {
    image: image03,
    title: "Gather Around the Table",
    category: "Restaurant",
    description: "Good food and warm hospitality are part of the journey.",
    alt: "Dining experience at Kibale Tourist's Inn",
  },
  {
    image: image04,
    title: "Into the Green",
    category: "Nature",
    description: "Discover the lush landscapes of Western Uganda.",
    alt: "Green natural landscape in Western Uganda",
  },
  {
    image: image05,
    title: "Wild Encounters",
    category: "Wildlife",
    description: "Explore the remarkable wildlife of the Kibale region.",
    alt: "Wildlife experience in the Kibale region",
  },
  {
    image: image06,
    title: "Follow the Forest Trails",
    category: "Experiences",
    description: "Let the trails lead you into the natural world around Kibale.",
    alt: "Nature trail in the Kibale region",
  },
  {
    image: image07,
    title: "Crater Lake Country",
    category: "Landscape",
    description: "Take in the striking scenery of Uganda's crater lake region.",
    alt: "Scenic crater lake landscape in Western Uganda",
  },
  {
    image: image08,
    title: "Slow Mornings",
    category: "The Inn",
    description: "Take your time, breathe deeply and enjoy the surroundings.",
    alt: "A peaceful morning at Kibale Tourist's Inn",
  },
  {
    image: image09,
    title: "Evenings in Kibale",
    category: "The Inn",
    description: "A calm place to return to after a day of adventure.",
    alt: "Evening atmosphere at Kibale Tourist's Inn",
  },
  {
    image: image10,
    title: "Sleep Under the Stars",
    category: "Camping",
    description: "Enjoy a closer connection to the outdoors.",
    alt: "Camping experience in the Kibale area",
  },
  {
    image: image11,
    title: "Discover Local Life",
    category: "Culture",
    description: "Connect with the people, traditions and stories of the region.",
    alt: "Local culture and community in Western Uganda",
  },
  {
    image: image12,
    title: "Explore Western Uganda",
    category: "Adventure",
    description: "Make the Inn your starting point for a memorable journey.",
    alt: "Adventure and scenery in Western Uganda",
  },
  {
    image: image13,
    title: "A Comfortable Stay",
    category: "Accommodation",
    description: "Settle in and enjoy a relaxing stay in the Kibale region.",
    alt: "Accommodation views at Kibale Tourist's Inn",
  },
  {
    image: image14,
    title: "A Woodland Escape",
    category: "Nature",
    description: "Find peace among the greenery and natural surroundings.",
    alt: "Woodland scenery around Kibale",
  },
  {
    image: image15,
    title: "Inside the Restaurant",
    category: "Restaurant",
    description: "A welcoming setting for good meals and conversation.",
    alt: "Restaurant interior at Kibale Tourist's Inn",
  },
  {
    image: image16,
    title: "Closer to Wildlife",
    category: "Wildlife",
    description: "Discover the wildlife and natural wonders of Western Uganda.",
    alt: "Wildlife encounter in Uganda",
  },
  {
    image: image17,
    title: "Walk Into Nature",
    category: "Experiences",
    description: "Explore the region one trail and one moment at a time.",
    alt: "Walking experience in the forest near Kibale",
  },
  {
    image: image18,
    title: "Golden Hour",
    category: "Landscape",
    description: "Take in the beautiful light and changing colours of the day.",
    alt: "Golden-hour scenery in Western Uganda",
  },
  {
    image: image19,
    title: "The Scenic Route",
    category: "Adventure",
    description: "Enjoy the journey through the beautiful Ugandan countryside.",
    alt: "Scenic road through the Ugandan countryside",
  },
  {
    image: image20,
    title: "A Quiet Retreat",
    category: "The Inn",
    description: "Slow down, recharge and make time for yourself.",
    alt: "Peaceful retreat at Kibale Tourist's Inn",
  },
  {
    image: image21,
    title: "The Kibale Landscape",
    category: "Landscape",
    description: "Experience the scenery that makes this part of Uganda special.",
    alt: "Landscape in the Kibale region",
  },
  {
    image: image22,
    title: "Into the Forest",
    category: "Nature",
    description: "Follow the trails into the lush natural surroundings.",
    alt: "Forest trail near Kibale",
  },
  {
    image: image23,
    title: "Outdoor Adventures",
    category: "Adventure",
    description: "Make room for exploration and new experiences.",
    alt: "Outdoor adventure in Western Uganda",
  },
  {
    image: image24,
    title: "Camp Under the Sky",
    category: "Camping",
    description: "Enjoy an outdoor escape surrounded by nature.",
    alt: "Camping tent in an outdoor setting",
  },
  {
    image: image25,
    title: "Tropical Greenery",
    category: "Nature",
    description: "Discover the rich greenery of Uganda's natural environment.",
    alt: "Tropical plants and greenery in Uganda",
  },
  {
    image: image26,
    title: "Your Next Destination",
    category: "Experiences",
    description: "Let Kibale be the beginning of your next memorable journey.",
    alt: "Outdoor destination in the Kibale region",
  },
];

const galleryFilters = [
  "All",
  "The Inn",
  "Accommodation",
  "Restaurant",
  "Nature",
  "Wildlife",
  "Experiences",
  "Landscape",
  "Camping",
  "Culture",
  "Adventure",
];

function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeImage, setActiveImage] = useState(null);

  const filteredItems = useMemo(
    () =>
      galleryItems.filter(
        (item) =>
          activeFilter === "All" || item.category === activeFilter
      ),
    [activeFilter]
  );

  const openImage = (item) => setActiveImage(item);
  const closeImage = () => setActiveImage(null);

  const moveImage = (direction) => {
    if (!activeImage || filteredItems.length === 0) return;

    const currentIndex = filteredItems.findIndex(
      (item) => item.title === activeImage.title
    );

    const nextIndex =
      (currentIndex + direction + filteredItems.length) %
      filteredItems.length;

    setActiveImage(filteredItems[nextIndex]);
  };

  useEffect(() => {
    if (!activeImage) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeImage();
      if (event.key === "ArrowLeft") moveImage(-1);
      if (event.key === "ArrowRight") moveImage(1);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeImage, filteredItems]);

  return (
    <main className="gallery-page">
      {/* Hero */}
      <section
        className="gallery-hero"
        aria-labelledby="gallery-hero-title"
      >
        <div className="gallery-hero__media">
          <img
            src={heroImage}
            alt="The surroundings of Kibale Tourist's Inn in Uganda"
            fetchPriority="high"
          />
        </div>

        <div className="gallery-hero__shade" />

        <div className="gallery-hero__content">
          <motion.div
            className="gallery-hero__copy"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="gallery-kicker gallery-kicker--light">
              <span className="gallery-kicker__line" />
              Kibale Tourist&apos;s Inn · Photo Journal
            </span>

            <h1 id="gallery-hero-title">
              See the place.
              <em>Feel the journey.</em>
            </h1>

            <p>
              A closer look at the Inn, the landscapes of Kibale and the
              little moments that make a stay in Western Uganda memorable.
            </p>

            <div className="gallery-hero__actions">
              <a
                href="#gallery"
                className="gallery-button gallery-button--gold"
              >
                Explore the gallery <ArrowDownRight size={18} />
              </a>

              <Link to="/booking" className="gallery-hero__text-link">
                Plan your stay <ArrowRight size={17} />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="gallery-hero__foot">
          <span>
            <MapPin size={15} /> Isunga · Kibale · Uganda
          </span>
          <span className="gallery-hero__motto">
            Stay curious. Stay a little longer.
          </span>
        </div>

        <span className="gallery-hero__index" aria-hidden="true">
          01 / 04
        </span>
      </section>

      {/* Introduction */}
      <section
        className="gallery-intro section"
        aria-labelledby="gallery-intro-title"
      >
        <div className="gallery-container gallery-intro__layout">
          <motion.div
            className="gallery-intro__heading"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span className="gallery-kicker">
              <span className="gallery-kicker__line" />
              A glimpse of Kibale
            </span>

            <h2 id="gallery-intro-title">
              Some places stay
              <em>with you.</em>
            </h2>
          </motion.div>

          <motion.div
            className="gallery-intro__body"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <p className="gallery-intro__lead">
              Explore a visual collection of life at Kibale Tourist&apos;s
              Inn and the beautiful region around us.
            </p>

            <p>
              From welcoming accommodation and relaxed dining to forest
              adventures, wildlife and dramatic scenery, every image offers
              a small glimpse of what your journey could hold.
            </p>

            <div className="gallery-intro__signature">
              <span className="gallery-intro__signature-icon">
                <Camera size={18} />
              </span>
              <span>Your own Kibale story could be next.</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Photo gallery */}
      <section
        className="gallery-main section"
        id="gallery"
        aria-labelledby="gallery-main-title"
      >
        <div className="gallery-container">
          <div className="gallery-main__heading">
            <div>
              <span className="gallery-kicker">
                <span className="gallery-kicker__line" />
                The visual journey
              </span>

              <h2 id="gallery-main-title">
                Around the Inn <em>&amp; Kibale.</em>
              </h2>
            </div>

            <p>
              Little details, wide-open landscapes and moments worth
              remembering. Explore the collection.
            </p>
          </div>

          <div
            className="gallery-filters"
            aria-label="Filter gallery images"
          >
            {galleryFilters.map((filter) => (
              <button
                type="button"
                className={`gallery-filter ${
                  activeFilter === filter ? "is-active" : ""
                }`}
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

          <div className="gallery-grid" aria-live="polite">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => {
                const originalIndex = galleryItems.findIndex(
                  (entry) => entry.title === item.title
                );

                return (
                  <motion.button
                    type="button"
                    className={`gallery-card gallery-card--${
                      (originalIndex % 6) + 1
                    }`}
                    key={item.title}
                    layout
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{
                      duration: 0.35,
                      delay: (originalIndex % 4) * 0.035,
                    }}
                    onClick={() => openImage(item)}
                    aria-label={`View ${item.title} image`}
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                    />

                    <span className="gallery-card__veil" />

                    <span className="gallery-card__number">
                      {String(originalIndex + 1).padStart(2, "0")}
                    </span>

                    <span className="gallery-card__open">
                      <Images size={18} />
                    </span>

                    <span className="gallery-card__caption">
                      <span className="gallery-card__category">
                        {item.category}
                      </span>

                      <strong>{item.title}</strong>

                      <span className="gallery-card__description">
                        {item.description}
                      </span>
                    </span>
                  </motion.button>
                );
              })}
            </AnimatePresence>
          </div>

          {filteredItems.length === 0 && (
            <p className="gallery-empty">
              No images found in this category yet.
            </p>
          )}

          <div className="gallery-count">
            <span className="gallery-count__rule" />
            Showing {filteredItems.length}{" "}
            {filteredItems.length === 1 ? "moment" : "moments"}
            <span className="gallery-count__rule" />
          </div>
        </div>

        {/* Full-screen image viewer */}
        <AnimatePresence>
          {activeImage && (
            <motion.div
              className="gallery-lightbox"
              role="dialog"
              aria-modal="true"
              aria-label={`${activeImage.title} image viewer`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                  closeImage();
                }
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
                <ChevronLeft size={28} />
              </button>

              <figure className="gallery-lightbox__figure">
                <img src={activeImage.image} alt={activeImage.alt} />

                <figcaption>
                  <span>{activeImage.category}</span>
                  <strong>{activeImage.title}</strong>
                  <p>{activeImage.description}</p>
                </figcaption>
              </figure>

              <button
                type="button"
                className="gallery-lightbox__arrow gallery-lightbox__arrow--next"
                onClick={() => moveImage(1)}
                aria-label="Next image"
              >
                <ChevronRight size={28} />
              </button>

              <span className="gallery-lightbox__hint">
                Use ← → to browse · Esc to close
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Editorial banner */}
      <section className="gallery-moment">
        <div className="gallery-container gallery-moment__layout">
          <div className="gallery-moment__mark">
            <Sparkles size={22} />
          </div>

          <div className="gallery-moment__copy">
            <span className="gallery-kicker gallery-kicker--gold">
              More than a photograph
            </span>

            <h2>
              Come for the view.
              <em>Stay for the feeling.</em>
            </h2>
          </div>

          <p>
            The best parts of Kibale go beyond the frame: the sounds of
            nature, conversations after a day out and the quiet moments
            in between.
          </p>
        </div>
      </section>

      {/* Explore other pages */}
      <section className="gallery-related section">
        <div className="gallery-container">
          <div className="gallery-related__heading">
            <div>
              <span className="gallery-kicker">
                <span className="gallery-kicker__line" />
                Make it your journey
              </span>

              <h2>
                Your next memory <em>starts here.</em>
              </h2>
            </div>

            <Link
              to="/booking"
              className="gallery-related__all-link"
            >
              Start planning <ArrowRight size={17} />
            </Link>
          </div>

          <div className="gallery-related__grid">
            <Link to="/accommodation">
              <span className="gallery-related__number">01</span>
              <span className="gallery-related__label">
                Accommodation
              </span>
              <ArrowRight size={19} />
            </Link>

            <Link to="/restaurant">
              <span className="gallery-related__number">02</span>
              <span className="gallery-related__label">
                Restaurant &amp; Bar
              </span>
              <ArrowRight size={19} />
            </Link>

            <Link to="/experiences">
              <span className="gallery-related__number">03</span>
              <span className="gallery-related__label">
                Experiences
              </span>
              <ArrowRight size={19} />
            </Link>

            <Link to="/camping">
              <span className="gallery-related__number">04</span>
              <span className="gallery-related__label">Camping</span>
              <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </section>

      {/* Booking call to action */}
      <section className="gallery-cta">
        <div className="gallery-container gallery-cta__inner">
          <div className="gallery-cta__icon">
            <MessageCircle size={24} />
          </div>

          <span className="gallery-kicker gallery-kicker--gold">
            Kibale Tourist&apos;s Inn
          </span>

          <h2>
            Ready to create <em>your own memories?</em>
          </h2>

          <p>
            Plan your stay and discover Kibale, Western Uganda from a
            welcoming base made for slowing down and exploring.
          </p>

          <div className="gallery-cta__actions">
            <Link
              to="/booking"
              className="gallery-button gallery-button--gold"
            >
              Book your stay <ArrowRight size={18} />
            </Link>

            <a
              href="https://wa.me/256755517111"
              target="_blank"
              rel="noopener noreferrer"
              className="gallery-button gallery-button--outline"
            >
              <MessageCircle size={18} />
              WhatsApp our team
            </a>
          </div>

          <span className="gallery-cta__footnote">
            <Check size={14} />
            Your Kibale experience begins with a conversation.
          </span>
        </div>
      </section>
    </main>
  );
}

export default Gallery;
