import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  Check,
  Compass,
  MapPin,
  MessageCircle,
  Mountain,
  Phone,
  TentTree,
  Trees,
  Utensils,
  Waves,
} from "lucide-react";

import "./Home.css";

import heroImage from "../assets/kibale-hero.jpg";
import accommodationImage from "../assets/accommodation.jpg";
import restaurantImage from "../assets/restaurant.jpg";
import kibaleForestImage from "../assets/kibale-forest.jpg";
import craterLakesImage from "../assets/crater-lakes.jpg";
import ctaKibaleImage from "../assets/cta-kibale.jpg";
import aboutStoryImage from "../assets/about-story.jpg";

const heroSlides = [
  {
    id: 1,
    image: heroImage,
    eyebrow: "Kibale • Western Uganda",
    title: "Your Refined Stay",
    accent: "in the Heart of Kibale",
    description:
      "Welcome to Kibale Tourist's Inn — a warm and elegant base for discovering Kibale National Park, crater lakes and the extraordinary landscapes of Western Uganda.",
    primaryLabel: "Plan Your Stay",
    primaryLink: "/booking",
    secondaryLabel: "Explore Kibale",
    secondaryLink: "/experiences",
  },
  {
    id: 2,
    image: accommodationImage,
    eyebrow: "Stay • Rest • Reconnect",
    title: "Comfort After",
    accent: "Every Adventure",
    description:
      "Settle into a peaceful and welcoming environment where comfortable accommodation gives you the space to rest, recharge and prepare for another day in Kibale.",
    primaryLabel: "Discover Accommodation",
    primaryLink: "/accommodation",
    secondaryLabel: "Book Your Stay",
    secondaryLink: "/booking",
  },
  {
    id: 3,
    image: kibaleForestImage,
    eyebrow: "Nature • Wildlife • Discovery",
    title: "Step Into",
    accent: "The Forest",
    description:
      "Discover the remarkable natural world of Kibale — from ancient rainforest and wildlife to unforgettable moments beneath the forest canopy.",
    primaryLabel: "Discover Kibale",
    primaryLink: "/kibale-national-park",
    secondaryLabel: "Explore Experiences",
    secondaryLink: "/experiences",
  },
  {
    id: 4,
    image: craterLakesImage,
    eyebrow: "Scenic Exploration",
    title: "Beyond The Forest",
    accent: "Crater Lakes Await",
    description:
      "Journey into the beautiful crater lake landscapes surrounding Kibale, where rolling hills, volcanic lakes and quiet countryside create a different side of Western Uganda.",
    primaryLabel: "Explore Crater Lakes",
    primaryLink: "/crater-lakes",
    secondaryLabel: "Plan Your Journey",
    secondaryLink: "/booking",
  },
  {
    id: 5,
    image: restaurantImage,
    eyebrow: "Restaurant • Bar • Kibale",
    title: "Taste The Journey",
    accent: "Flavours of Kibale",
    description:
      "From breakfast before the day's exploration to relaxed evenings after an adventure, discover welcoming dining and refreshing drinks at Kibale Tourist's Inn.",
    primaryLabel: "Explore Restaurant",
    primaryLink: "/restaurant",
    secondaryLabel: "Stay With Us",
    secondaryLink: "/booking",
  },
];

const accommodationFeatures = [
  "Comfortable private rooms",
  "Peaceful surroundings",
  "Relaxed spaces for couples, families and travellers",
  "Convenient base for exploring Kibale",
];

const reasons = [
  {
    icon: MapPin,
    title: "A Strategic Kibale Location",
    text:
      "Stay within easy reach of Kibale's natural attractions while enjoying a calm and comfortable place to return to after a day of exploration.",
  },
  {
    icon: Compass,
    title: "Experiences Beyond the Room",
    text:
      "Discover guided experiences around Kibale National Park, crater lakes and the surrounding landscapes with experiences designed around your stay.",
  },
  {
    icon: Utensils,
    title: "Restaurant & Bar",
    text:
      "Enjoy relaxed dining, refreshing drinks and welcoming hospitality without having to leave the inn.",
  },
  {
    icon: Trees,
    title: "Nature at Your Doorstep",
    text:
      "Kibale is a destination for travellers who want to reconnect with nature and experience the landscapes, wildlife and character of Western Uganda.",
  },
];

const experiences = [
  {
    icon: Trees,
    number: "01",
    title: "Kibale National Park",
    text:
      "Explore one of Uganda's remarkable forest destinations and plan your stay around the natural experiences that make Kibale special.",
    link: "/kibale-national-park",
  },
  {
    icon: Mountain,
    number: "02",
    title: "Crater Lakes",
    text:
      "Discover the dramatic volcanic crater lake landscapes surrounding Kibale with guided excursions and scenic exploration.",
    link: "/crater-lakes",
  },
  {
    icon: Compass,
    number: "03",
    title: "Guided Tours",
    text:
      "Turn your visit into a richer journey with guided exploration of local attractions, nature and the landscapes around Kibale.",
    link: "/guided-tours",
  },
  {
    icon: TentTree,
    number: "04",
    title: "Camping",
    text:
      "For travellers who prefer a closer connection with the outdoors, our camping experience brings nature even closer.",
    link: "/camping",
  },
];

const planningPoints = [
  {
    number: "01",
    title: "Choose your stay",
    text: "Ask about private rooms, camping or a combination that suits your journey.",
    link: "/accommodation",
    linkLabel: "View stay options",
  },
  {
    number: "02",
    title: "Shape your days",
    text: "Combine forest, wildlife, crater lake and local experiences around your time in Kibale.",
    link: "/experiences",
    linkLabel: "Explore experiences",
  },
  {
    number: "03",
    title: "Ask the team",
    text: "Get current information about availability, rates, transport and special requests directly from the Inn.",
    link: "https://wa.me/256755517111?text=Hello%20Kibale%20Tourist%27s%20Inn%2C%20I%20would%20like%20help%20planning%20my%20visit.",
    linkLabel: "Talk on WhatsApp",
    external: true,
  },
];

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const timer = setInterval(() => {
      setActiveSlide(
        (current) => (current + 1) % heroSlides.length
      );
    }, 7000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  const goToPrevious = () => {
    setActiveSlide(
      (current) =>
        (current - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const goToNext = () => {
    setActiveSlide(
      (current) => (current + 1) % heroSlides.length
    );
  };

  const currentSlide = heroSlides[activeSlide];

  return (
    <main className="home-page">
      {/* HERO SLIDER */}
      <section
        className="home-hero"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <div className="home-hero__slides">
          {heroSlides.map((slide, index) => (
            <div
              className={`home-hero__slide ${
                index === activeSlide ? "is-active" : ""
              }`}
              key={slide.id}
              aria-hidden={index !== activeSlide}
            >
              <img
                src={slide.image}
                alt={`${slide.title} ${slide.accent} at Kibale Tourist's Inn`}
                className="home-hero__image"
              />

              <div className="home-hero__overlay" />
            </div>
          ))}
        </div>

        <div className="home-hero__content container">
          <div className="home-hero__copy">
            <div className="home-hero__counter">
              <span>0{activeSlide + 1}</span>

              <div className="home-hero__counter-line">
                <span
                  key={activeSlide}
                  className="home-hero__counter-progress"
                />
              </div>

              <span>0{heroSlides.length}</span>
            </div>

            <span className="eyebrow eyebrow--gold">
              {currentSlide.eyebrow}
            </span>

            <h1 key={`title-${activeSlide}`}>
              {currentSlide.title}
              <span>{currentSlide.accent}</span>
            </h1>

            <p
              className="home-hero__lead"
              key={`description-${activeSlide}`}
            >
              {currentSlide.description}
            </p>

            <div className="home-hero__actions">
              <Link
                to={currentSlide.primaryLink}
                className="btn btn--gold"
              >
                {currentSlide.primaryLabel}
                <ArrowRight size={18} />
              </Link>

              <Link
                to={currentSlide.secondaryLink}
                className="btn btn--outline-light"
              >
                {currentSlide.secondaryLabel}
              </Link>
            </div>
          </div>

          <div className="home-hero__bottom">
            <div className="hero-location">
              <MapPin size={17} />
              <span>Kibale, Western Uganda</span>
            </div>

            <div className="hero-divider" />

            <div className="hero-description">
              <span>Comfort</span>
              <span>Nature</span>
              <span>Discovery</span>
            </div>
          </div>
        </div>

        <div className="home-hero__navigation">
          <button
            type="button"
            className="home-hero__arrow"
            onClick={goToPrevious}
            aria-label="Previous slide"
          >
            <ArrowLeft size={19} />
          </button>

          <div className="home-hero__dots">
            {heroSlides.map((slide, index) => (
              <button
                type="button"
                key={slide.id}
                className={`home-hero__dot ${
                  index === activeSlide ? "is-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={
                  index === activeSlide ? "true" : undefined
                }
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </button>
            ))}
          </div>

          <button
            type="button"
            className="home-hero__arrow"
            onClick={goToNext}
            aria-label="Next slide"
          >
            <ArrowRight size={19} />
          </button>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="home-intro section">
        <div className="container">
          <div className="home-intro__grid">
            <div className="home-intro__label">
              <span className="eyebrow">
                Welcome to Kibale
              </span>

              <div className="home-intro__vertical-line" />

              <span className="home-intro__small">
                A place to stay.
                <br />
                A place to discover.
              </span>
            </div>

            <div className="home-intro__content">
              <div className="home-intro__story">
                <div className="home-intro__story-image">
                  <img
                    src={aboutStoryImage}
                    alt="Kibale Tourist's Inn hospitality in Western Uganda"
                  />

                  <div className="home-intro__story-badge">
                    <span>Our Story</span>
                    <strong>Kibale</strong>
                  </div>
                </div>

                <div className="home-intro__story-copy">
                  <span className="eyebrow">
                    Discover Our Story
                  </span>

                  <h2 className="section-heading">
                    Comfort meets the
                    <em> spirit of Western Uganda.</em>
                  </h2>

                  <p className="lead-text">
                    Kibale Tourist&apos;s Inn offers a welcoming stay for
                    travellers looking to experience the beauty, wildlife and
                    landscapes of Kibale. From restful accommodation and
                    relaxed dining to camping and guided exploration, the inn
                    brings together the essentials for a memorable Western
                    Uganda journey.
                  </p>

                  <p>
                    Whether Kibale is your destination, your base for
                    exploring the surrounding crater lakes or part of a wider
                    Uganda safari, our aim is simple: make your time here
                    comfortable, personal and connected to the destination
                    around you.
                  </p>

                  <Link to="/about" className="text-link">
                    Discover Our Story
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCOMMODATION */}
      <section className="home-stay section section--ivory">
        <div className="container">
          <div className="section-topline">
            <div>
              <span className="eyebrow">
                Stay With Us
              </span>

              <h2 className="section-heading">
                A comfortable base for
                <em> your Kibale journey.</em>
              </h2>
            </div>

            <Link
              to="/accommodation"
              className="text-link"
            >
              View Accommodation
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="home-stay__grid">
            <div className="home-image-card home-image-card--large">
              <img
                src={accommodationImage}
                alt="Comfortable accommodation at Kibale Tourist's Inn in Western Uganda"
              />

              <div className="home-image-card__caption">
                <span>Stay</span>
                <strong>Comfortable Accommodation</strong>
              </div>
            </div>

            <div className="home-stay__content">
              <span className="number-label">
                01 / ACCOMMODATION
              </span>

              <h3>
                Rest well.
                <br />
                Wake ready to explore.
              </h3>

              <p>
                After a day discovering Kibale, return to a welcoming
                environment designed around rest and convenience. Our
                accommodation provides a comfortable base for couples,
                families, independent travellers and guests exploring Western
                Uganda.
              </p>

              <ul className="feature-list">
                {accommodationFeatures.map((feature) => (
                  <li key={feature}>
                    <span>
                      <Check size={14} />
                    </span>

                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to="/accommodation"
                className="btn btn--dark"
              >
                Discover Your Stay
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DINING */}
      <section className="home-dining section">
        <div className="container">
          <div className="home-dining__grid">
            <div className="home-dining__content">
              <span className="eyebrow">
                Restaurant & Bar
              </span>

              <h2 className="section-heading">
                Taste the journey.
                <br />
                <em>Flavours of Kibale.</em>
              </h2>

              <p className="lead-text">
                Make dining part of your Uganda journey. Enjoy freshly
                prepared meals, refreshing drinks and a welcoming atmosphere
                before or after exploring Kibale National Park and the
                surrounding landscapes.
              </p>

              <p>
                From breakfast before a day of discovery to relaxed evenings
                after a forest adventure, our restaurant and bar offer
                travellers a comfortable place to refuel, refresh and share
                the stories of the journey.
              </p>

              <Link
                to="/restaurant"
                className="text-link"
              >
                Explore Restaurant & Bar
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="home-dining__visual">
              <img
                src={restaurantImage}
                alt="Restaurant and dining experience at Kibale Tourist's Inn"
              />

              <div className="home-dining__badge">
                <Utensils size={22} />
                <span>Restaurant</span>
                <strong>& Bar</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCES / DISCOVER KIBALE */}
      <section className="home-experiences section section--dark">
        <div className="container">
          <div className="home-experiences__header">
            <div>
              <span className="eyebrow eyebrow--gold">
                Discover Kibale
              </span>

              <h2 className="section-heading section-heading--light">
                Your stay is only
                <em> the beginning.</em>
              </h2>
            </div>

            <p>
              Come for a comfortable stay. Leave with stories from the forest,
              crater lakes and landscapes of Western Uganda.
            </p>
          </div>

          <div className="experience-grid">
            {experiences.map((experience) => {
              const Icon = experience.icon;

              return (
                <Link
                  to={experience.link}
                  className="experience-card"
                  key={experience.number}
                >
                  <div className="experience-card__top">
                    <span>{experience.number}</span>
                    <Icon size={24} />
                  </div>

                  <div>
                    <h3>{experience.title}</h3>

                    <p>{experience.text}</p>

                    <span className="experience-card__link">
                      Explore
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* KIBALE FEATURE */}
      <section className="home-kibale section">
        <div className="container-wide">
          <div className="home-kibale__image">
            <img
              src={kibaleForestImage}
              alt="Kibale forest landscape in Western Uganda"
            />

            <div className="home-kibale__overlay" />

            <div className="home-kibale__content">
              <span className="eyebrow eyebrow--gold">
                The Destination
              </span>

              <h2>
                Discover the wild
                <br />
                <em>side of Kibale.</em>
              </h2>

              <p>
                Kibale is a destination where forest, wildlife, crater lakes
                and rural landscapes come together. Base yourself at Kibale
                Tourist&apos;s Inn and build your journey around the
                experiences that bring you to Western Uganda.
              </p>

              <Link
                to="/kibale-national-park"
                className="btn btn--gold"
              >
                Discover Kibale National Park
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CRATER LAKES */}
      <section className="home-crater section section--sand">
        <div className="container">
          <div className="home-crater__grid">
            <div className="home-crater__visual">
              <img
                src={craterLakesImage}
                alt="Crater lake scenery around Kibale in Western Uganda"
              />

              <div className="home-crater__stamp">
                <Waves size={20} />
                <span>Western Uganda</span>
              </div>
            </div>

            <div className="home-crater__content">
              <span className="eyebrow">
                Scenic Exploration
              </span>

              <h2 className="section-heading">
                The crater lakes are
                <em> waiting to be discovered.</em>
              </h2>

              <p className="lead-text">
                Beyond the forest lies a landscape of crater lakes, rolling
                hills and quiet rural scenery that reveals another side of
                Kibale.
              </p>

              <p>
                Join a guided excursion and experience the changing scenery
                around the crater lakes while learning more about the
                landscapes and communities that make this part of Uganda
                distinctive.
              </p>

              <Link
                to="/crater-lakes"
                className="btn btn--dark"
              >
                Explore Crater Lakes
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="home-reasons section">
        <div className="container">
          <div className="home-reasons__header">
            <span className="eyebrow">
              Why Kibale Tourist&apos;s Inn
            </span>

            <h2 className="section-heading">
              More than a place to stay.
              <em> Your gateway to Kibale.</em>
            </h2>

            <p>
              We bring together comfort, hospitality and access to the
              experiences that make Kibale worth discovering.
            </p>
          </div>

          <div className="reasons-grid">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <article
                  className="reason-card"
                  key={reason.title}
                >
                  <div className="reason-card__icon">
                    <Icon size={24} />
                  </div>

                  <h3>{reason.title}</h3>

                  <p>{reason.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOCATION / SEO */}
      <section className="home-location section section--ivory">
        <div className="container">
          <div className="home-location__grid">
            <div>
              <span className="eyebrow">
                Stay in Western Uganda
              </span>

              <h2 className="section-heading">
                Your base for
                <em> Kibale exploration.</em>
              </h2>
            </div>

            <div className="home-location__content">
              <p>
                Looking for accommodation in Kibale? Kibale Tourist&apos;s Inn
                provides a convenient and welcoming base for travellers
                exploring Kibale National Park and the wider Western Uganda
                region.
              </p>

              <p>
                Plan your visit around nature experiences, crater lake
                excursions, guided tours, camping and relaxed evenings at our
                restaurant and bar. Whether you are planning a Uganda safari,
                a nature-focused getaway or a stop through the Kibale area,
                our team is here to make your stay comfortable.
              </p>

              <div className="location-tags">
                <span>Kibale Accommodation</span>
                <span>Kibale National Park</span>
                <span>Crater Lakes</span>
                <span>Western Uganda</span>
                <span>Guided Tours</span>
                <span>Camping</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLAN BEFORE ARRIVAL */}
      <section className="home-planning section">
        <div className="container">
          <div className="home-planning__header">
            <div>
              <span className="eyebrow">Before You Book</span>

              <h2 className="section-heading">
                Make the most of
                <em> your Kibale stay.</em>
              </h2>
            </div>

            <p>
              Start with the essentials, then speak with our team when you
              need current details for your dates.
            </p>
          </div>

          <div className="home-planning__grid">
            {planningPoints.map((point) => (
              <article className="home-planning__card" key={point.number}>
                <span className="home-planning__number">{point.number}</span>
                <h3>{point.title}</h3>
                <p>{point.text}</p>

                {point.external ? (
                  <a
                    href={point.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link"
                  >
                    {point.linkLabel}
                    <MessageCircle size={16} />
                  </a>
                ) : (
                  <Link to={point.link} className="text-link">
                    {point.linkLabel}
                    <ArrowRight size={16} />
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section
        className="home-cta"
        style={{
          "--cta-image": `url(${ctaKibaleImage})`,
        }}
      >
        <div className="home-cta__background" />
        <div className="home-cta__overlay" />

        <div className="container home-cta__content">
          <span className="eyebrow eyebrow--gold">
            Your Kibale Journey Starts Here
          </span>

          <h2>
            Stay. Explore.
            <br />
            <em>Experience Kibale.</em>
          </h2>

          <p>
            Tell us when you are coming and let&apos;s help you plan a
            comfortable stay in the heart of Western Uganda.
          </p>

          <div className="home-cta__actions">
            <Link
              to="/booking"
              className="btn btn--gold"
            >
              <CalendarCheck size={18} />
              Book Your Stay
            </Link>

            <a
              href="https://wa.me/256755517111"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline-light"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>

            <a
              href="tel:+256782159173"
              className="btn btn--outline-light"
            >
              <Phone size={18} />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;