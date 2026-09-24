import { Link } from "react-router-dom";

import {
  ArrowRight,
  CalendarCheck,
  Check,
  Compass,
  Footprints,
  MapPin,
  MessageCircle,
  Mountain,
  TreePine,
  Trees,
  Binoculars,
} from "lucide-react";

import "./KibaleNationalPark.css";

import kibaleHero from "../assets/kibale-hero.jpg";
import chimpanzeeImage from "../assets/chimpanzee.jpg";
import kibaleForestImage from "../assets/kibale-forest.jpg";
import forestWalkImage from "../assets/forest-walk.jpg";
import wildlifeImage from "../assets/wildlife.jpg";
import canopyImage from "../assets/canopy.jpg";

const highlights = [
  {
    icon: Binoculars,
    number: "01",
    title: "Chimpanzee Experiences",
    text: "Discover the remarkable chimpanzees of Kibale and experience one of Uganda's most memorable primate destinations.",
  },
  {
    icon: Trees,
    number: "02",
    title: "Kibale Forest",
    text: "Explore the rich tropical forest landscape that makes Kibale one of Western Uganda's most distinctive natural destinations.",
  },
  {
    icon: Footprints,
    number: "03",
    title: "Forest Walks",
    text: "Experience the forest at a slower pace through guided walks surrounded by trees, birds and the sounds of nature.",
  },
  {
    icon: Mountain,
    number: "04",
    title: "Western Uganda",
    text: "Use Kibale as a base for discovering crater lakes, rolling landscapes, cultural experiences and other attractions in the region.",
  },
];

const wildlifeFeatures = [
  "Chimpanzee tracking experiences",
  "Guided forest exploration",
  "Rich birdlife and forest species",
  "Scenic tropical forest landscapes",
  "Nature-focused experiences",
];

function KibaleNationalPark() {
  return (
    <main className="kibale-page">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section
        className="kibale-hero"
        style={{
          "--kibale-hero-image": `url(${kibaleHero})`,
        }}
      >
        <div className="kibale-hero__image" />
        <div className="kibale-hero__overlay" />

        <div className="container kibale-hero__content">
          <div className="kibale-hero__copy">
            <span className="eyebrow eyebrow--gold">
              Kibale National Park • Western Uganda
            </span>

            <h1>
              Discover the forest.
              <span>Meet the wild side of Uganda.</span>
            </h1>

            <p>
              Explore Kibale National Park from a comfortable base at Kibale
              Tourist&apos;s Inn, with opportunities to discover chimpanzees,
              tropical forest, birdlife and the extraordinary landscapes of
              Western Uganda.
            </p>

            <div className="kibale-hero__actions">
              <Link to="/booking" className="btn btn--gold">
                <CalendarCheck size={18} />
                <span>Plan Your Stay</span>
              </Link>

              <a
                href="https://wa.me/256755517111"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline-light"
              >
                <MessageCircle size={18} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          <div className="kibale-hero__bottom">
            <div className="kibale-hero__location">
              <span className="kibale-hero__dot" />
              <span>Kibale • Western Uganda</span>
            </div>

            <div className="kibale-hero__divider" />

            <p>
              Forest • Chimpanzees • Wildlife • Nature
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}

      <section className="kibale-intro section">
        <div className="container">
          <div className="kibale-intro__grid">
            <div className="kibale-intro__label">
              <span className="eyebrow">The Destination</span>

              <div className="kibale-intro__vertical-line" />

              <span className="kibale-intro__small">
                Forest.
                <br />
                Wildlife.
                <br />
                Discovery.
              </span>
            </div>

            <div className="kibale-intro__content">
              <span className="eyebrow">
                About Kibale National Park
              </span>

              <h2 className="section-heading">
                One forest.
                <em> Countless ways to explore.</em>
              </h2>

              <p className="lead-text">
                Kibale National Park is one of Uganda&apos;s best-known forest
                destinations, offering travellers the opportunity to experience
                chimpanzees, primates, birds and a remarkable tropical
                environment in Western Uganda.
              </p>

              <p>
                Whether you are visiting for chimpanzee tracking, forest walks,
                birdwatching or simply to experience the atmosphere of one of
                Uganda&apos;s great natural landscapes, Kibale offers an
                unforgettable setting for exploration.
              </p>

              <Link to="/accommodation" className="text-link">
                Stay Near Kibale
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CHIMPANZEE FEATURE
      ========================================================= */}

      <section className="kibale-chimp section section--ivory">
        <div className="container">
          <div className="kibale-chimp__grid">
            <div className="kibale-chimp__visual">
              <div className="kibale-chimp__image-card">
                <img
                  src={chimpanzeeImage}
                  alt="Chimpanzee in Kibale National Park, Uganda"
                />

                <div className="kibale-chimp__caption">
                  <span>Wildlife</span>
                  <strong>Chimpanzee Experiences</strong>
                </div>
              </div>

              <div className="kibale-chimp__badge">
                <Binoculars size={21} />

                <span>
                  Meet
                  <strong>The Forest</strong>
                </span>
              </div>
            </div>

            <div className="kibale-chimp__content">
              <span className="eyebrow">
                The Chimpanzees
              </span>

              <h2 className="section-heading">
                Come for the forest.
                <em> Stay for the encounters.</em>
              </h2>

              <p className="lead-text">
                Kibale is particularly known for its chimpanzee experiences,
                making it an important destination for travellers interested
                in Uganda&apos;s primates and forest wildlife.
              </p>

              <p>
                A visit to Kibale can become much more than a single activity.
                The surrounding forest, birdlife, scenery and changing sounds
                create an experience that stays with you long after you leave.
              </p>

              <ul className="feature-list">
                {wildlifeFeatures.map((feature) => (
                  <li key={feature}>
                    <span>
                      <Check size={15} />
                    </span>

                    <p>{feature}</p>
                  </li>
                ))}
              </ul>

              <Link to="/guided-tours" className="btn btn--dark">
                <Compass size={18} />
                <span>Explore Guided Tours</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOREST FEATURE
      ========================================================= */}

      <section className="kibale-forest section">
        <div className="container">
          <div className="kibale-forest__grid">
            <div className="kibale-forest__content">
              <span className="eyebrow">
                Tropical Forest
              </span>

              <h2 className="section-heading">
                Step into
                <em> Kibale Forest.</em>
              </h2>

              <p className="lead-text">
                The forest is at the heart of the Kibale experience. Its dense
                greenery, towering trees and extraordinary biodiversity create
                an environment that feels worlds away from everyday life.
              </p>

              <p>
                Guided exploration allows visitors to slow down and appreciate
                the details of the forest, from birds moving through the canopy
                to the sounds and movement of wildlife around the trails.
              </p>

              <Link to="/guided-tours" className="text-link">
                Explore Forest Experiences
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="kibale-forest__visual">
              <img
                src={kibaleForestImage}
                alt="Kibale tropical forest in Western Uganda"
              />

              <div className="kibale-forest__stamp">
                <TreePine size={20} />

                <span>
                  Kibale
                  <strong>Forest</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOREST WALK
      ========================================================= */}

      <section className="kibale-walk section section--sand">
        <div className="container">
          <div className="kibale-walk__grid">
            <div className="kibale-walk__visual">
              <img
                src={forestWalkImage}
                alt="Forest walking experience in Kibale National Park"
              />

              <div className="kibale-walk__number">
                <span>Explore</span>
                <strong>01</strong>
              </div>
            </div>

            <div className="kibale-walk__content">
              <span className="eyebrow">
                Forest Exploration
              </span>

              <h2 className="section-heading">
                Walk beneath
                <em> the forest canopy.</em>
              </h2>

              <p className="lead-text">
                Forest walks provide a chance to experience Kibale at a
                different pace, surrounded by trees, wildlife sounds and the
                natural atmosphere of Western Uganda.
              </p>

              <p>
                Take your time, follow the forest trails and allow the
                environment to become part of the journey. With a guide,
                visitors can learn more about the forest and the wildlife that
                depends on it.
              </p>

              <div className="kibale-walk__quote">
                <Footprints size={19} />

                <span>
                  Slow down.
                  <strong>Look closer.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HIGHLIGHTS
      ========================================================= */}

      <section className="kibale-highlights section section--dark">
        <div className="container">
          <div className="kibale-highlights__header">
            <span className="eyebrow eyebrow--gold">
              Why Visit Kibale
            </span>

            <h2 className="section-heading section-heading--light">
              A destination built around
              <em> discovery.</em>
            </h2>

            <p>
              From chimpanzees and forest walks to birdlife and Western
              Uganda&apos;s landscapes, Kibale offers different ways to
              experience nature.
            </p>
          </div>

          <div className="kibale-highlights__grid">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="kibale-highlight-card"
                  key={item.title}
                >
                  <div className="kibale-highlight-card__top">
                    <span>{item.number}</span>

                    <div className="kibale-highlight-card__icon">
                      <Icon size={21} />
                    </div>
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <Link to="/guided-tours">
                    Explore
                    <ArrowRight size={15} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          WILDLIFE
      ========================================================= */}

      <section className="kibale-wildlife section">
        <div className="container">
          <div className="kibale-wildlife__grid">
            <div className="kibale-wildlife__visual">
              <img
                src={wildlifeImage}
                alt="Wildlife in Kibale National Park, Uganda"
              />

              <div className="kibale-wildlife__badge">
                <Binoculars size={20} />

                <span>
                  Wildlife
                  <strong>Discovery</strong>
                </span>
              </div>
            </div>

            <div className="kibale-wildlife__content">
              <span className="eyebrow">
                Wildlife & Biodiversity
              </span>

              <h2 className="section-heading">
                Look beyond
                <em> the chimpanzees.</em>
              </h2>

              <p className="lead-text">
                Although chimpanzee experiences are one of Kibale&apos;s major
                attractions, the forest is also home to a wider range of
                wildlife and bird species.
              </p>

              <p>
                Every forest visit can feel different. The sounds, movement,
                vegetation and changing light create an environment where
                travellers can slow down and pay attention to the details of
                nature.
              </p>

              <div className="kibale-wildlife__stats">
                <div>
                  <strong>Forest</strong>
                  <span>Natural landscapes</span>
                </div>

                <div>
                  <strong>Wildlife</strong>
                  <span>Nature encounters</span>
                </div>

                <div>
                  <strong>Birdlife</strong>
                  <span>Forest discovery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CANOPY FEATURE
      ========================================================= */}

      <section className="kibale-canopy section section--ivory">
        <div className="container">
          <div className="kibale-canopy__grid">
            <div className="kibale-canopy__content">
              <span className="eyebrow">
                Above & Around The Forest
              </span>

              <h2 className="section-heading">
                See Kibale
                <em> from another perspective.</em>
              </h2>

              <p className="lead-text">
                The forest canopy creates another layer of the Kibale
                experience, revealing how much life exists above the forest
                floor.
              </p>

              <p>
                From the movement of birds to the changing patterns of light
                through the trees, the canopy is a reminder that Kibale is a
                living ecosystem rather than simply a destination to pass
                through.
              </p>

              <Link to="/experiences" className="btn btn--dark">
                <Compass size={18} />
                <span>Explore Experiences</span>
              </Link>
            </div>

            <div className="kibale-canopy__visual">
              <img
                src={canopyImage}
                alt="Forest canopy in Kibale National Park"
              />

              <div className="kibale-canopy__overlay">
                <span>Look Up</span>
                <strong>Discover More</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STAY CONNECTION
      ========================================================= */}

      <section className="kibale-stay">
        <div className="container">
          <div className="kibale-stay__inner">
            <div className="kibale-stay__icon">
              <MapPin size={25} />
            </div>

            <div className="kibale-stay__content">
              <span className="eyebrow">
                Your Kibale Base
              </span>

              <h2>
                Stay close to the
                <em> experience.</em>
              </h2>

              <p>
                Make Kibale Tourist&apos;s Inn your comfortable base for
                exploring the forest, chimpanzees, crater lakes and wider
                Western Uganda.
              </p>
            </div>

            <Link to="/accommodation" className="btn btn--gold">
              <span>Explore Accommodation</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          SEO LOCATION SECTION
      ========================================================= */}

      <section className="kibale-location section">
        <div className="container">
          <div className="kibale-location__grid">
            <div>
              <span className="eyebrow">
                Explore Western Uganda
              </span>

              <h2 className="section-heading">
                More than a park.
                <em> A gateway to discovery.</em>
              </h2>
            </div>

            <div className="kibale-location__content">
              <p>
                Kibale National Park sits within one of Uganda&apos;s most
                rewarding travel regions, where tropical forest, crater lakes,
                rolling hills and rural landscapes come together.
              </p>

              <p>
                Staying at Kibale Tourist&apos;s Inn allows travellers to
                combine their visit to Kibale National Park with accommodation,
                restaurant dining, guided tours, camping and other experiences
                around Western Uganda.
              </p>

              <div className="kibale-location__tags">
                <span>Kibale National Park</span>
                <span>Chimpanzee Tracking</span>
                <span>Kibale Forest</span>
                <span>Western Uganda</span>
                <span>Forest Walks</span>
                <span>Wildlife</span>
                <span>Birdwatching</span>
                <span>Uganda Safari</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="kibale-cta">
        <div className="kibale-cta__background">
          <img
            src={kibaleForestImage}
            alt=""
            aria-hidden="true"
          />
        </div>

        <div className="kibale-cta__overlay" />

        <div className="container kibale-cta__content">
          <span className="eyebrow eyebrow--gold">
            Kibale Tourist&apos;s Inn
          </span>

          <h2>
            Come for the forest.
            <em>Stay for the journey.</em>
          </h2>

          <p>
            Stay comfortably, explore Kibale National Park and discover the
            natural beauty of Western Uganda from one welcoming base.
          </p>

          <div className="kibale-cta__actions">
            <Link to="/booking" className="btn btn--gold">
              <CalendarCheck size={18} />
              <span>Book Your Stay</span>
            </Link>

            <a
              href="https://wa.me/256755517111"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline-light"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Us</span>
            </a>

            <a
              href="tel:+256782159173"
              className="kibale-cta__phone"
            >
              <span>Reservations</span>
              <strong>0782 159 173</strong>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default KibaleNationalPark;