import { Link } from "react-router-dom";

import {
  ArrowRight,
  BedDouble,
  CalendarCheck,
  Check,
  Coffee,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Trees,
  Utensils,
} from "lucide-react";

import "./Accommodation.css";

import accommodationHero from "../assets/accommodation-hero.jpg";
import room01 from "../assets/room-01.jpg";
import room02 from "../assets/room-02.jpg";
import roomInterior from "../assets/room-interior.jpg";
import bathroom from "../assets/bathroom.jpg";
import lodgeExterior from "../assets/lodge-exterior.jpg";

const accommodationFeatures = [
  "Comfortable private rooms",
  "Peaceful surroundings",
  "Welcoming spaces for couples, families and travellers",
  "A convenient base for exploring Kibale and Western Uganda",
];

const stayHighlights = [
  {
    icon: BedDouble,
    title: "Comfortable Rooms",
    text: "Settle into welcoming accommodation designed to give you a peaceful place to rest before and after exploring Kibale.",
  },
  {
    icon: Trees,
    title: "Close to Nature",
    text: "Stay close to the landscapes, forests and crater lakes that make Western Uganda such a remarkable destination.",
  },
  {
    icon: Utensils,
    title: "Restaurant & Bar",
    text: "Enjoy convenient dining and refreshing drinks without having to leave the comfort of the Inn.",
  },
  {
    icon: ShieldCheck,
    title: "A Relaxed Base",
    text: "Whether you are visiting Kibale for wildlife, nature, adventure or a longer Western Uganda journey, enjoy a comfortable base to return to.",
  },
];

const roomTypes = [
  {
    image: room01,
    number: "01",
    title: "Comfortable Guest Rooms",
    text: "Relax in a welcoming private room after a day of exploring Kibale National Park and the surrounding countryside.",
  },
  {
    image: room02,
    number: "02",
    title: "A Peaceful Place to Rest",
    text: "Enjoy a calm atmosphere where you can slow down, recharge and prepare for another day of discovery.",
  },
  {
    image: roomInterior,
    number: "03",
    title: "Thoughtful Interiors",
    text: "Simple, comfortable interiors create an inviting environment for short stays, longer visits and nature-focused journeys.",
  },
];

function Accommodation() {
  return (
    <main className="accommodation-page">
      {/* HERO */}
      <section
        className="accommodation-hero"
        style={{
          "--accommodation-hero-image": `url(${accommodationHero})`,
        }}
      >
        <div className="accommodation-hero__image"></div>
        <div className="accommodation-hero__overlay"></div>

        <div className="container accommodation-hero__content">
          <div className="accommodation-hero__copy">
            <span className="eyebrow eyebrow--gold">
              Accommodation in Kibale, Uganda
            </span>

            <h1>
              A Comfortable
              <span>Place to Stay in Kibale.</span>
            </h1>

            <p>
              Discover welcoming accommodation at Kibale Tourist&apos;s Inn,
              your comfortable base for exploring Kibale National Park,
              crater lakes and the remarkable landscapes of Western Uganda.
            </p>

            <div className="accommodation-hero__actions">
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
            </div>
          </div>

          <div className="accommodation-hero__bottom">
            <div className="accommodation-hero__location">
              <MapPin size={17} />
              <span>Kibale • Western Uganda</span>
            </div>

            <div className="accommodation-hero__divider"></div>

            <p>
              Rooms • Restaurant & Bar • Camping • Guided Experiences
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="accommodation-intro section">
        <div className="container">
          <div className="accommodation-intro__grid">
            <div className="accommodation-intro__label">
              <span className="eyebrow">Stay With Us</span>

              <div className="accommodation-intro__vertical-line"></div>

              <span className="accommodation-intro__small">
                Comfort • Nature • Discovery
              </span>
            </div>

            <div className="accommodation-intro__content">
              <span className="eyebrow">
                Accommodation Near Kibale National Park
              </span>

              <h2 className="section-heading">
                Your comfortable base
                <em>for discovering Kibale.</em>
              </h2>

              <p className="lead-text">
                Kibale Tourist&apos;s Inn offers welcoming accommodation for
                travellers looking to experience the beauty of Kibale and
                Western Uganda without giving up the comfort of a peaceful
                place to stay.
              </p>

              <p>
                Whether you are visiting for chimpanzee experiences, forest
                walks, crater lake tours, cultural experiences or simply a
                relaxing journey through Western Uganda, the Inn gives you a
                comfortable place to rest between adventures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED ACCOMMODATION */}
      <section className="accommodation-feature section section--ivory">
        <div className="container">
          <div className="accommodation-feature__grid">
            <div className="accommodation-feature__visual">
              <div className="accommodation-image-card">
                <img
                  src={room01}
                  alt="Comfortable guest room at Kibale Tourist's Inn in Uganda"
                />

                <div className="accommodation-image-card__caption">
                  <span>Stay at the Inn</span>
                  <strong>Comfortable. Peaceful. Welcoming.</strong>
                </div>
              </div>

              <div className="accommodation-feature__badge">
                <BedDouble size={22} />

                <span>
                  Guest
                  <strong>Rooms</strong>
                </span>
              </div>
            </div>

            <div className="accommodation-feature__content">
              <span className="eyebrow">
                A Restful Stay
              </span>

              <h2 className="section-heading">
                Come back from adventure
                <em>to comfort.</em>
              </h2>

              <p className="lead-text">
                After a day in the forest, around the crater lakes or
                discovering the communities of Western Uganda, your room
                should feel like a place where you can truly slow down.
              </p>

              <ul className="feature-list">
                {accommodationFeatures.map((feature) => (
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
                <span>Plan Your Stay</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ROOMS */}
      <section className="accommodation-rooms section">
        <div className="container">
          <div className="accommodation-rooms__header">
            <div>
              <span className="eyebrow">
                Your Stay
              </span>

              <h2 className="section-heading">
                Spaces designed
                <em>for rest.</em>
              </h2>
            </div>

            <p>
              From comfortable guest rooms to welcoming interiors, every
              space at Kibale Tourist&apos;s Inn is designed around the simple
              pleasures of a peaceful stay.
            </p>
          </div>

          <div className="accommodation-rooms__grid">
            {roomTypes.map((room) => (
              <article
                className="accommodation-room-card"
                key={room.number}
              >
                <div className="accommodation-room-card__image">
                  <img
                    src={room.image}
                    alt={`${room.title} at Kibale Tourist's Inn`}
                  />

                  <span>{room.number}</span>
                </div>

                <div className="accommodation-room-card__content">
                  <span className="eyebrow">
                    Kibale Tourist&apos;s Inn
                  </span>

                  <h3>{room.title}</h3>

                  <p>{room.text}</p>

                  <Link to="/booking" className="text-link">
                    Enquire About Your Stay
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="accommodation-highlights section section--dark">
        <div className="container">
          <div className="accommodation-highlights__header">
            <span className="eyebrow eyebrow--gold">
              More Than a Room
            </span>

            <h2 className="section-heading section-heading--light">
              Everything you need
              <em>for a comfortable journey.</em>
            </h2>

            <p>
              Your experience at Kibale Tourist&apos;s Inn extends beyond the
              room. Enjoy a relaxed environment with dining, nature and local
              experiences close at hand.
            </p>
          </div>

          <div className="accommodation-highlights__grid">
            {stayHighlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  className="accommodation-highlight-card"
                  key={item.title}
                >
                  <div className="accommodation-highlight-card__top">
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="accommodation-highlight-card__icon">
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

      {/* ROOM INTERIOR + BATHROOM */}
      <section className="accommodation-details section section--sand">
        <div className="container">
          <div className="accommodation-details__grid">
            <div className="accommodation-details__content">
              <span className="eyebrow">
                Thoughtful Comfort
              </span>

              <h2 className="section-heading">
                Settle in,
                <em>slow down.</em>
              </h2>

              <p className="lead-text">
                The best lodge experiences are not only about where you go.
                They are also about having somewhere comfortable to return
                to.
              </p>

              <p>
                Our rooms and interiors provide a welcoming environment for
                travellers who want to balance adventure with rest while
                exploring Kibale and Western Uganda.
              </p>

              <div className="accommodation-details__list">
                <div>
                  <Sparkles size={18} />
                  <span>Relaxed guest spaces</span>
                </div>

                <div>
                  <ShieldCheck size={18} />
                  <span>Comfort-focused accommodation</span>
                </div>

                <div>
                  <Coffee size={18} />
                  <span>Convenient access to dining</span>
                </div>
              </div>
            </div>

            <div className="accommodation-details__visual">
              <div className="accommodation-details__image accommodation-details__image--large">
                <img
                  src={roomInterior}
                  alt="Room interior at Kibale Tourist's Inn"
                />
              </div>

              <div className="accommodation-details__image accommodation-details__image--small">
                <img
                  src={bathroom}
                  alt="Bathroom facilities at Kibale Tourist's Inn"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROPERTY */}
      <section className="accommodation-property section">
        <div className="container">
          <div className="accommodation-property__grid">
            <div className="accommodation-property__visual">
              <img
                src={lodgeExterior}
                alt="Exterior of Kibale Tourist's Inn in Western Uganda"
              />

              <div className="accommodation-property__caption">
                <span>Kibale • Western Uganda</span>
                <strong>Your home between adventures.</strong>
              </div>
            </div>

            <div className="accommodation-property__content">
              <span className="eyebrow">
                A Place to Return To
              </span>

              <h2 className="section-heading">
                Stay close to nature,
                <em>comfortably.</em>
              </h2>

              <p className="lead-text">
                Located in the Kibale area, Kibale Tourist&apos;s Inn gives
                travellers a welcoming base from which to experience the
                region&apos;s forests, crater lakes, wildlife and local
                attractions.
              </p>

              <div className="accommodation-property__links">
                <Link to="/kibale-national-park">
                  <span>Kibale National Park</span>
                  <ArrowRight size={17} />
                </Link>

                <Link to="/crater-lakes">
                  <span>Crater Lakes</span>
                  <ArrowRight size={17} />
                </Link>

                <Link to="/guided-tours">
                  <span>Guided Tours</span>
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="accommodation-cta"
        style={{
          "--accommodation-cta-image": `url(${lodgeExterior})`,
        }}
      >
        <div className="accommodation-cta__background"></div>
        <div className="accommodation-cta__overlay"></div>

        <div className="container accommodation-cta__content">
          <span className="eyebrow eyebrow--gold">
            Your Kibale Escape
          </span>

          <h2>
            Stay close to nature.
            <em>Experience more.</em>
          </h2>

          <p>
            Make Kibale Tourist&apos;s Inn your comfortable base for
            discovering the forest, crater lakes and remarkable landscapes
            of Western Uganda.
          </p>

          <div className="accommodation-cta__actions">
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
              className="accommodation-cta__phone"
            >
              <Phone size={17} />
              <span>0782 159 173</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Accommodation;