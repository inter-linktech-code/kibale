import { Link } from "react-router-dom";

import {
  ArrowRight,
  CalendarCheck,
  Check,
  Compass,
  MapPin,
  MessageCircle,
  Mountain,
  Sparkles,
  Trees,
} from "lucide-react";

import "./CraterLakes.css";

import craterLakesHero from "../assets/crater-lakes-hero.jpg";
import craterLake01 from "../assets/crater-lake-01.jpg";
import craterLake02 from "../assets/crater-lake-02.jpg";
import craterLakeView from "../assets/crater-lake-view.jpg";

const lakeHighlights = [
  {
    icon: Mountain,
    number: "01",
    title: "Volcanic Landscapes",
    text: "Discover the dramatic landscapes and rolling countryside surrounding the crater lakes of Western Uganda.",
  },
  {
    icon: Trees,
    number: "02",
    title: "Peaceful Nature",
    text: "Slow down beside beautiful natural scenery and experience a quieter side of the Western Uganda journey.",
  },
  {
    icon: Compass,
    number: "03",
    title: "Explore With Purpose",
    text: "Combine your crater lake visit with guided experiences, nature exploration and other attractions around Kibale.",
  },
  {
    icon: Sparkles,
    number: "04",
    title: "Unforgettable Views",
    text: "Take time to appreciate the changing scenery, tranquil waters and panoramic countryside views.",
  },
];

const explorationPoints = [
  "Scenic crater lake landscapes",
  "Peaceful countryside surroundings",
  "Opportunities for photography and nature appreciation",
  "A memorable addition to a Kibale itinerary",
  "Easy to combine with other Western Uganda experiences",
];

function CraterLakes() {
  return (
    <main className="crater-lakes-page">
      {/* HERO */}
      <section
        className="crater-lakes-hero"
        style={{
          "--crater-lakes-hero-image": `url(${craterLakesHero})`,
        }}
      >
        <div className="crater-lakes-hero__image"></div>
        <div className="crater-lakes-hero__overlay"></div>

        <div className="container crater-lakes-hero__content">
          <div className="crater-lakes-hero__copy">
            <span className="eyebrow eyebrow--gold">
              Crater Lakes • Western Uganda
            </span>

            <h1>
              Where water,
              <span>forest &amp; hills meet.</span>
            </h1>

            <p>
              Discover the remarkable crater lake landscapes around Kibale
              and Western Uganda, where peaceful waters, rolling hills and
              lush countryside create some of the region&apos;s most scenic
              experiences.
            </p>

            <div className="crater-lakes-hero__actions">
              <Link to="/guided-tours" className="btn btn--gold">
                <Compass size={18} />
                <span>Explore With A Guide</span>
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

          <div className="crater-lakes-hero__bottom">
            <div className="crater-lakes-hero__location">
              <MapPin size={17} />
              <span>Western Uganda</span>
            </div>

            <div className="crater-lakes-hero__divider"></div>

            <p>
              Lakes • Hills • Forest • Discovery
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="crater-lakes-intro section">
        <div className="container">
          <div className="crater-lakes-intro__grid">
            <div className="crater-lakes-intro__label">
              <span className="eyebrow">
                Beyond The Forest
              </span>

              <div className="crater-lakes-intro__vertical-line"></div>

              <span className="crater-lakes-intro__small">
                Water • Landscape • Discovery
              </span>
            </div>

            <div className="crater-lakes-intro__content">
              <span className="eyebrow">
                Explore The Crater Lakes
              </span>

              <h2 className="section-heading">
                Discover the landscapes
                <em>that surround Kibale.</em>
              </h2>

              <p className="lead-text">
                The crater lakes of Western Uganda offer a beautiful
                contrast to the rainforest. Quiet waters, green hills and
                expansive countryside create an experience that rewards
                travellers who take the time to explore beyond the main
                trails.
              </p>

              <p>
                From peaceful viewpoints to scenic journeys through the
                countryside, the crater lakes add depth and variety to a
                stay at Kibale Tourist&apos;s Inn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED LAKE */}
      <section className="crater-lakes-feature section section--ivory">
        <div className="container">
          <div className="crater-lakes-feature__grid">
            <div className="crater-lakes-feature__visual">
              <div className="crater-lake-image-card">
                <img
                  src={craterLake01}
                  alt="Scenic crater lake landscape in Western Uganda near Kibale"
                />

                <div className="crater-lake-image-card__caption">
                  <span>Western Uganda</span>
                  <strong>Quiet waters. Endless horizons.</strong>
                </div>
              </div>

              <div className="crater-lakes-feature__badge">
                <Mountain size={22} />

                <span>
                  Scenic
                  <strong>Landscapes</strong>
                </span>
              </div>
            </div>

            <div className="crater-lakes-feature__content">
              <span className="eyebrow">
                A Scenic Escape
              </span>

              <h2 className="section-heading">
                Take the road
                <em>less ordinary.</em>
              </h2>

              <p className="lead-text">
                A crater lake journey is about more than reaching a
                destination. It is about the changing landscape along the
                way — green hills, quiet roads, local communities and
                beautiful views unfolding around you.
              </p>

              <ul className="feature-list">
                {explorationPoints.map((point) => (
                  <li key={point}>
                    <span>
                      <Check size={15} />
                    </span>

                    <p>{point}</p>
                  </li>
                ))}
              </ul>

              <Link to="/guided-tours" className="btn btn--dark">
                <Compass size={18} />
                <span>Plan A Guided Experience</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="crater-lakes-highlights section section--dark">
        <div className="container">
          <div className="crater-lakes-highlights__header">
            <span className="eyebrow eyebrow--gold">
              The Crater Lake Experience
            </span>

            <h2 className="section-heading section-heading--light">
              A landscape worth
              <em>slowing down for.</em>
            </h2>

            <p>
              Beyond Kibale&apos;s famous forest, the surrounding region
              reveals a different side of Western Uganda — peaceful,
              expansive and full of natural beauty.
            </p>
          </div>

          <div className="crater-lakes-highlights__grid">
            {lakeHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="crater-lakes-highlight-card"
                  key={item.title}
                >
                  <div className="crater-lakes-highlight-card__top">
                    <span>{item.number}</span>

                    <div className="crater-lakes-highlight-card__icon">
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

      {/* JOURNEY */}
      <section className="crater-lakes-journey section section--sand">
        <div className="container">
          <div className="crater-lakes-journey__grid">
            <div className="crater-lakes-journey__content">
              <span className="eyebrow">
                The Journey
              </span>

              <h2 className="section-heading">
                Let the landscape
                <em>set the pace.</em>
              </h2>

              <p className="lead-text">
                Crater lake exploration invites you to slow down and
                appreciate the scenery around you rather than simply rushing
                from one attraction to another.
              </p>

              <p>
                Enjoy the changing views, take photographs, discover quiet
                places and experience the countryside that surrounds the
                Kibale region.
              </p>

              <div className="crater-lakes-journey__list">
                <div>
                  <Mountain size={18} />
                  <span>Rolling Western Uganda landscapes</span>
                </div>

                <div>
                  <Trees size={18} />
                  <span>Green countryside and natural surroundings</span>
                </div>

                <div>
                  <Sparkles size={18} />
                  <span>Scenic moments worth remembering</span>
                </div>
              </div>
            </div>

            <div className="crater-lakes-journey__visual">
              <img
                src={craterLake02}
                alt="Crater lake and green hills in Western Uganda"
              />

              <div className="crater-lakes-journey__stamp">
                <span>Explore</span>
                <strong>Beyond</strong>
                <small>Kibale</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIEW */}
      <section className="crater-lakes-view section">
        <div className="container">
          <div className="crater-lakes-view__grid">
            <div className="crater-lakes-view__visual">
              <img
                src={craterLakeView}
                alt="Panoramic view of crater lake scenery in Western Uganda"
              />

              <div className="crater-lakes-view__caption">
                <span>See The Difference</span>
                <strong>Western Uganda from a different perspective.</strong>
              </div>
            </div>

            <div className="crater-lakes-view__content">
              <span className="eyebrow">
                Take In The View
              </span>

              <h2 className="section-heading">
                Some places are
                <em>made for lingering.</em>
              </h2>

              <p className="lead-text">
                The beauty of the crater lakes lies in their atmosphere.
                There is space to pause, look out across the landscape and
                simply enjoy being somewhere different.
              </p>

              <p>
                Make the lakes part of your wider Kibale adventure and
                experience a side of Western Uganda that complements the
                forest, wildlife and cultural experiences of the region.
              </p>

              <Link to="/kibale-national-park" className="text-link">
                Explore Kibale National Park
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ITINERARY CONNECTION */}
      <section className="crater-lakes-itinerary section section--ivory">
        <div className="container">
          <div className="crater-lakes-itinerary__inner">
            <div className="crater-lakes-itinerary__icon">
              <Compass size={25} />
            </div>

            <div className="crater-lakes-itinerary__content">
              <span className="eyebrow">
                Build Your Kibale Journey
              </span>

              <h2 className="section-heading">
                Combine the lakes
                <em>with more to explore.</em>
              </h2>

              <p>
                Turn your stay into a richer Western Uganda experience by
                combining crater lake exploration with Kibale National Park,
                guided tours, nature experiences and comfortable time at the
                Inn.
              </p>

              <div className="crater-lakes-itinerary__links">
                <Link to="/kibale-national-park">
                  <span>Kibale National Park</span>
                  <ArrowRight size={17} />
                </Link>

                <Link to="/guided-tours">
                  <span>Guided Tours</span>
                  <ArrowRight size={17} />
                </Link>

                <Link to="/accommodation">
                  <span>Stay With Us</span>
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="crater-lakes-cta">
        <div className="container">
          <div className="crater-lakes-cta__inner">
            <div className="crater-lakes-cta__copy">
              <span className="eyebrow eyebrow--gold">
                Kibale Tourist&apos;s Inn
              </span>

              <h2>
                Discover the quiet beauty
                <em>of Western Uganda.</em>
              </h2>

              <p>
                Stay at Kibale Tourist&apos;s Inn and make the crater lakes
                part of your journey through Kibale and Western Uganda.
              </p>

              <div className="crater-lakes-cta__actions">
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

            <div className="crater-lakes-cta__location">
              <MapPin size={17} />
              <span>Kibale • Western Uganda</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CraterLakes;