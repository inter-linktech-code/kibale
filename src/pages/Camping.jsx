import { Link } from "react-router-dom";

import {
  ArrowRight,
  CalendarCheck,
  Check,
  Flame,
  MapPin,
  MessageCircle,
  Moon,
  ShieldCheck,
  TentTree,
  Trees,
} from "lucide-react";

import "./Camping.css";

import campingHero from "../assets/camping-hero.jpg";
import campingTent from "../assets/camping-tent.jpg";
import campingEvening from "../assets/camping-evening.jpg";
import campingFire from "../assets/camping-fire.jpg";

const campingHighlights = [
  {
    icon: TentTree,
    number: "01",
    title: "Outdoor Camping",
    text: "Experience a peaceful outdoor stay surrounded by the natural atmosphere of Kibale and Western Uganda.",
  },
  {
    icon: Trees,
    number: "02",
    title: "Closer To Nature",
    text: "Wake up to a different side of Kibale and enjoy a slower, more immersive way to experience the region.",
  },
  {
    icon: Moon,
    number: "03",
    title: "Evenings Under The Sky",
    text: "As the day fades, settle into the calm of the outdoors and enjoy the beauty of a quiet evening.",
  },
  {
    icon: Flame,
    number: "04",
    title: "Campfire Moments",
    text: "Gather around the fire, share stories and make the most of relaxed evenings during your stay.",
  },
];

const campingFeatures = [
  "Dedicated outdoor camping experience",
  "Peaceful natural surroundings",
  "A memorable alternative to conventional accommodation",
  "Ideal for travellers seeking a closer connection with nature",
  "Convenient access to Kibale experiences and attractions",
];

function Camping() {
  return (
    <main className="camping-page">
      {/* HERO */}
      <section
        className="camping-hero"
        style={{
          "--camping-hero-image": `url(${campingHero})`,
        }}
      >
        <div className="camping-hero__image"></div>
        <div className="camping-hero__overlay"></div>

        <div className="container camping-hero__content">
          <div className="camping-hero__copy">
            <span className="eyebrow eyebrow--gold">
              Camping in Kibale • Western Uganda
            </span>

            <h1>
              Sleep closer
              <span>to the wild.</span>
            </h1>

            <p>
              Experience the outdoors at Kibale Tourist&apos;s Inn with a
              peaceful camping experience designed for travellers who want
              to connect more closely with nature while exploring Kibale and
              Western Uganda.
            </p>

            <div className="camping-hero__actions">
              <Link to="/booking" className="btn btn--gold">
                <CalendarCheck size={18} />
                <span>Plan Your Camping Stay</span>
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

          <div className="camping-hero__bottom">
            <div className="camping-hero__location">
              <MapPin size={17} />
              <span>Kibale • Western Uganda</span>
            </div>

            <div className="camping-hero__divider"></div>

            <p>
              Camping • Nature • Evenings • Adventure
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="camping-intro section">
        <div className="container">
          <div className="camping-intro__grid">
            <div className="camping-intro__label">
              <span className="eyebrow">Under The Open Sky</span>

              <div className="camping-intro__vertical-line"></div>

              <span className="camping-intro__small">
                Nature • Freedom • Discovery
              </span>
            </div>

            <div className="camping-intro__content">
              <span className="eyebrow">
                Camping at Kibale Tourist&apos;s Inn
              </span>

              <h2 className="section-heading">
                A different way
                <em>to experience Kibale.</em>
              </h2>

              <p className="lead-text">
                Camping brings a more intimate connection to the landscapes
                of Western Uganda. At Kibale Tourist&apos;s Inn, guests can
                choose an outdoor experience that allows them to slow down,
                breathe in the surroundings and enjoy the natural character
                of the region.
              </p>

              <p>
                Whether you are travelling through Uganda, exploring Kibale
                National Park or looking for a memorable outdoor stay,
                camping adds another dimension to your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CAMPING */}
      <section className="camping-feature section section--ivory">
        <div className="container">
          <div className="camping-feature__grid">
            <div className="camping-feature__visual">
              <div className="camping-image-card">
                <img
                  src={campingTent}
                  alt="Camping tent experience at Kibale Tourist's Inn in Uganda"
                />

                <div className="camping-image-card__caption">
                  <span>Camping at the Inn</span>
                  <strong>Closer to nature. Further from ordinary.</strong>
                </div>
              </div>

              <div className="camping-feature__badge">
                <TentTree size={22} />

                <span>
                  Outdoor
                  <strong>Escape</strong>
                </span>
              </div>
            </div>

            <div className="camping-feature__content">
              <span className="eyebrow">
                The Outdoor Experience
              </span>

              <h2 className="section-heading">
                Leave the ordinary behind,
                <em>sleep beneath the stars.</em>
              </h2>

              <p className="lead-text">
                Camping offers travellers another way to experience Kibale:
                slower, simpler and closer to the outdoors.
              </p>

              <ul className="feature-list">
                {campingFeatures.map((feature) => (
                  <li key={feature}>
                    <span>
                      <Check size={15} />
                    </span>

                    <p>{feature}</p>
                  </li>
                ))}
              </ul>

              <Link to="/booking" className="btn btn--dark">
                <CalendarCheck size={18} />
                <span>Enquire About Camping</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="camping-highlights section section--dark">
        <div className="container">
          <div className="camping-highlights__header">
            <span className="eyebrow eyebrow--gold">
              The Camping Experience
            </span>

            <h2 className="section-heading section-heading--light">
              More than a place
              <em>to spend the night.</em>
            </h2>

            <p>
              Camping at Kibale Tourist&apos;s Inn is about experiencing the
              quieter side of travel — nature, fresh air, open skies and
              memorable evenings around the camp.
            </p>
          </div>

          <div className="camping-highlights__grid">
            {campingHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="camping-highlight-card"
                  key={item.title}
                >
                  <div className="camping-highlight-card__top">
                    <span>{item.number}</span>

                    <div className="camping-highlight-card__icon">
                      <Icon size={22} />
                    </div>
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* EVENING */}
      <section className="camping-evening section section--sand">
        <div className="container">
          <div className="camping-evening__grid">
            <div className="camping-evening__content">
              <span className="eyebrow">
                After The Day
              </span>

              <h2 className="section-heading">
                When the sun goes down,
                <em>the experience continues.</em>
              </h2>

              <p className="lead-text">
                There is something special about an evening spent outdoors.
                The pace changes, the surroundings become quieter and the
                journey takes on a different character.
              </p>

              <p>
                After exploring Kibale National Park, visiting crater lakes
                or discovering the communities of Western Uganda, return to
                camp and enjoy a slower evening surrounded by nature.
              </p>

              <div className="camping-evening__list">
                <div>
                  <Moon size={18} />
                  <span>Peaceful outdoor evenings</span>
                </div>

                <div>
                  <Flame size={18} />
                  <span>Campfire atmosphere</span>
                </div>

                <div>
                  <Trees size={18} />
                  <span>Closer connection with nature</span>
                </div>
              </div>
            </div>

            <div className="camping-evening__visual">
              <img
                src={campingEvening}
                alt="Evening camping atmosphere at Kibale Tourist's Inn"
              />

              <div className="camping-evening__stamp">
                <span>Slow</span>
                <strong>Evenings</strong>
                <small>In Kibale</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAMPFIRE */}
      <section className="camping-fire section">
        <div className="container">
          <div className="camping-fire__grid">
            <div className="camping-fire__visual">
              <img
                src={campingFire}
                alt="Campfire experience at Kibale Tourist's Inn"
              />

              <div className="camping-fire__caption">
                <span>Gather • Relax • Remember</span>
                <strong>Stories are better around a fire.</strong>
              </div>
            </div>

            <div className="camping-fire__content">
              <span className="eyebrow">
                Campfire Moments
              </span>

              <h2 className="section-heading">
                End the day
                <em>around the fire.</em>
              </h2>

              <p className="lead-text">
                After a day of adventure, the simple pleasure of gathering
                around a fire can become one of the most memorable parts of
                the journey.
              </p>

              <p>
                Share stories with fellow travellers, take in the evening
                atmosphere and enjoy a slower rhythm before another day of
                discovery in Kibale.
              </p>

              <Link to="/experiences" className="text-link">
                Explore Kibale Experiences
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RESPONSIBLE / CONNECTION */}
      <section className="camping-connection section section--ivory">
        <div className="container">
          <div className="camping-connection__inner">
            <div className="camping-connection__icon">
              <ShieldCheck size={25} />
            </div>

            <div className="camping-connection__content">
              <span className="eyebrow">
                Travel With Purpose
              </span>

              <h2 className="section-heading">
                Experience nature
                <em>with respect.</em>
              </h2>

              <p>
                Camping is an opportunity to appreciate the landscapes and
                natural environment that make Kibale special. Guests are
                encouraged to enjoy the outdoors responsibly and leave the
                surrounding environment as they found it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE CONNECTION */}
      <section className="camping-experience">
        <div className="container">
          <div className="camping-experience__inner">
            <div className="camping-experience__copy">
              <span className="eyebrow eyebrow--gold">
                Stay • Camp • Explore
              </span>

              <h2>
                Make Kibale
                <em>part of your story.</em>
              </h2>

              <p>
                Combine your outdoor stay with the forests, wildlife,
                crater lakes and guided experiences of Western Uganda.
              </p>

              <div className="camping-experience__actions">
                <Link to="/kibale-national-park" className="btn btn--gold">
                  <span>Discover Kibale</span>
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/guided-tours"
                  className="btn btn--outline-light"
                >
                  <span>Explore Guided Tours</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="camping-cta">
        <div className="camping-cta__background">
          <img
            src={campingEvening}
            alt=""
            aria-hidden="true"
          />
        </div>

        <div className="camping-cta__overlay"></div>

        <div className="container camping-cta__content">
          <span className="eyebrow eyebrow--gold">
            Kibale Tourist&apos;s Inn
          </span>

          <h2>
            Come closer
            <em>to nature.</em>
          </h2>

          <p>
            Discover a different way to experience Kibale with camping,
            comfortable accommodation, welcoming dining and unforgettable
            adventures in Western Uganda.
          </p>

          <div className="camping-cta__actions">
            <Link to="/booking" className="btn btn--gold">
              <CalendarCheck size={18} />
              <span>Book Your Camping Stay</span>
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
              className="camping-cta__phone"
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

export default Camping;
