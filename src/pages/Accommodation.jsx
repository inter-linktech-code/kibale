
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
    text: "Discover the forests, crater lakes and landscapes that make Western Uganda a remarkable destination.",
  },
  {
    icon: Utensils,
    title: "Restaurant & Bar",
    text: "Enjoy convenient dining and refreshing drinks during your stay.",
  },
  {
    icon: ShieldCheck,
    title: "A Relaxed Base",
    text: "Return to a welcoming place to rest after wildlife, nature and cultural experiences.",
  },
];

const roomTypes = [
  {
    image: room01,
    number: "01",
    title: "Comfortable Guest Rooms",
    text: "A welcoming private room for resting after exploring Kibale National Park and the surrounding countryside.",
  },
  {
    image: room02,
    number: "02",
    title: "A Peaceful Place to Rest",
    text: "Slow down, recharge and prepare for another day discovering Western Uganda.",
  },
  {
    image: roomInterior,
    number: "03",
    title: "Thoughtful Interiors",
    text: "Simple, comfortable interiors for short stays, longer visits and nature-focused journeys.",
  },
];

const faqs = [
  {
    question: "How can I enquire about room availability?",
    answer:
      "Use the booking form to share your dates and number of guests. Your enquiry will open in WhatsApp so you can send it directly to our team. Availability is confirmed by the Inn.",
  },
  {
    question: "Can I combine accommodation with local experiences?",
    answer:
      "Yes. Include your interests in Kibale National Park, crater lakes, guided tours or other local experiences in your enquiry so our team can discuss suitable arrangements.",
  },
  {
    question: "Does Kibale Tourist's Inn offer camping?",
    answer:
      "Camping is one of the experiences offered by the Inn. Contact our team to enquire about your preferred dates and camping arrangements.",
  },
  {
    question: "Can I enquire about restaurant and bar services?",
    answer:
      "Yes. Contact the Inn to discuss restaurant and bar services and any requirements for your visit.",
  },
];

function getToday() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function Accommodation() {
  const navigate = useNavigate();
  const today = getToday();

  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");
  const [dateError, setDateError] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();

    if (!checkin || !checkout) {
      setDateError("Please select both your arrival and departure dates.");
      return;
    }

    if (checkin < today) {
      setDateError("Check-in cannot be in the past.");
      return;
    }

    if (checkout <= checkin) {
      setDateError("Check-out must be after check-in.");
      return;
    }

    setDateError("");

    const params = new URLSearchParams({
      checkin,
      checkout,
      adults,
      children,
      stay: "room",
      room: "Regular Comfort",
    });

    navigate(`/booking?${params.toString()}`);
  };

  return (
    <main className="accommodation-page">
      {/* HERO */}
      <section
        className="accommodation-hero"
        style={{
          "--accommodation-hero-image": `url("${accommodationHero}")`,
        }}
      >
        <div className="accommodation-hero__image" />
        <div className="accommodation-hero__overlay" />

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
              <Link to="/booking?stay=room&room=Regular%20Comfort" className="btn btn--gold">
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

            <div className="accommodation-hero__divider" />

            <p>Rooms • Restaurant & Bar • Camping • Guided Experiences</p>
          </div>
        </div>
      </section>

      {/* DATE SEARCH */}
      <section className="accommodation-search">
        <div className="container">
          <form className="accommodation-search__form" onSubmit={handleSearch}>
            <div className="accommodation-search__heading">
              <span className="eyebrow">Plan Your Visit</span>
              <h2>Find your dates</h2>
              <p>Start your accommodation enquiry.</p>
            </div>

            <label>
              Check-in
              <input
                type="date"
                value={checkin}
                min={today}
                onChange={(event) => setCheckin(event.target.value)}
                required
              />
            </label>

            <label>
              Check-out
              <input
                type="date"
                value={checkout}
                min={checkin || today}
                onChange={(event) => setCheckout(event.target.value)}
                required
              />
            </label>

            <label>
              Adults
              <select
                value={adults}
                onChange={(event) => setAdults(event.target.value)}
              >
                {Array.from({ length: 10 }, (_, index) => index + 1).map(
                  (number) => (
                    <option value={String(number)} key={number}>
                      {number} {number === 1 ? "adult" : "adults"}
                    </option>
                  )
                )}
              </select>
            </label>

            <label>
              Children
              <select
                value={children}
                onChange={(event) => setChildren(event.target.value)}
              >
                {Array.from({ length: 7 }, (_, index) => index).map(
                  (number) => (
                    <option value={String(number)} key={number}>
                      {number} {number === 1 ? "child" : "children"}
                    </option>
                  )
                )}
              </select>
            </label>

            <button type="submit" className="btn btn--dark">
              Check Dates
              <ArrowRight size={17} />
            </button>

            {dateError && (
              <p className="accommodation-search__error" role="alert">
                {dateError}
              </p>
            )}
          </form>
        </div>
      </section>

      {/* INTRO */}
      <section className="accommodation-intro section">
        <div className="container">
          <div className="accommodation-intro__grid">
            <div className="accommodation-intro__label">
              <span className="eyebrow">Stay With Us</span>
              <div className="accommodation-intro__vertical-line" />
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
                travellers looking to experience Kibale and Western Uganda
                with a peaceful place to stay.
              </p>

              <p>
                Whether you are visiting for chimpanzee experiences, forest
                walks, crater lake tours, cultural experiences or a relaxing
                journey through Western Uganda, the Inn offers a place to
                rest between adventures.
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
                  alt="Guest room at Kibale Tourist's Inn in Western Uganda"
                  loading="lazy"
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
              <span className="eyebrow">A Restful Stay</span>

              <h2 className="section-heading">
                Come back from adventure
                <em>to comfort.</em>
              </h2>

              <p className="lead-text">
                After a day in the forest, around the crater lakes or
                discovering Western Uganda, your room should be a place to
                slow down.
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

              <Link
                to="/booking?stay=room&room=Regular%20Comfort"
                className="btn btn--dark"
              >
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
              <span className="eyebrow">Your Stay</span>
              <h2 className="section-heading">
                Spaces designed
                <em>for rest.</em>
              </h2>
            </div>

            <p>
              Explore the welcoming spaces of Kibale Tourist&apos;s Inn.
              Contact our team to discuss room arrangements and availability
              for your dates.
            </p>
          </div>

          <div className="accommodation-rooms__grid">
            {roomTypes.map((room) => (
              <article className="accommodation-room-card" key={room.number}>
                <div className="accommodation-room-card__image">
                  <img
                    src={room.image}
                    alt={`${room.title} at Kibale Tourist's Inn`}
                    loading="lazy"
                  />
                  <span>{room.number}</span>
                </div>

                <div className="accommodation-room-card__content">
                  <span className="eyebrow">Kibale Tourist&apos;s Inn</span>
                  <h3>{room.title}</h3>
                  <p>{room.text}</p>

                  <div className="accommodation-room-card__actions">
                    <Link
                      to={`/booking?stay=room&room=${encodeURIComponent(
                        "Regular Comfort"
                      )}&roomView=${encodeURIComponent(room.title)}`}
                      className="accommodation-room-card__book"
                    >
                      <CalendarCheck size={17} />
                      <span>Enquire About This Room</span>
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="accommodation-highlights section section--dark">
        <div className="container">
          <div className="accommodation-highlights__header">
            <span className="eyebrow eyebrow--gold">More Than a Room</span>

            <h2 className="section-heading section-heading--light">
              Everything you need
              <em>for a comfortable journey.</em>
            </h2>

            <p>
              Your experience extends beyond the room. Enjoy a relaxed
              environment with dining, nature and local experiences to explore.
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
                    <span>{String(index + 1).padStart(2, "0")}</span>
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

      {/* ROOM DETAILS */}
      <section className="accommodation-details section section--sand">
        <div className="container">
          <div className="accommodation-details__grid">
            <div className="accommodation-details__content">
              <span className="eyebrow">Thoughtful Comfort</span>

              <h2 className="section-heading">
                Settle in,
                <em>slow down.</em>
              </h2>

              <p className="lead-text">
                The best lodge experiences are not only about where you go.
                They are also about having somewhere welcoming to return to.
              </p>

              <p>
                Our rooms and interiors offer a comfortable environment for
                travellers balancing adventure with rest while exploring
                Kibale and Western Uganda.
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
                  alt="Interior of a guest room at Kibale Tourist's Inn"
                  loading="lazy"
                />
              </div>

              <div className="accommodation-details__image accommodation-details__image--small">
                <img
                  src={bathroom}
                  alt="Bathroom at Kibale Tourist's Inn"
                  loading="lazy"
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
                loading="lazy"
              />

              <div className="accommodation-property__caption">
                <span>Kibale • Western Uganda</span>
                <strong>Your home between adventures.</strong>
              </div>
            </div>

            <div className="accommodation-property__content">
              <span className="eyebrow">A Place to Return To</span>

              <h2 className="section-heading">
                Stay close to nature,
                <em>comfortably.</em>
              </h2>

              <p className="lead-text">
                Kibale Tourist&apos;s Inn gives travellers a welcoming base
                from which to experience the region&apos;s forests, crater
                lakes, wildlife and local attractions.
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

      {/* FAQ */}
      <section className="accommodation-faq section">
        <div className="container accommodation-faq__layout">
          <div className="accommodation-faq__heading">
            <span className="eyebrow">Before You Enquire</span>
            <h2 className="section-heading">
              Questions about
              <em>your stay?</em>
            </h2>
            <p>
              If you need specific information about room arrangements,
              facilities or dates, our team can help.
            </p>

            <a
              href="https://wa.me/256755517111"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--dark"
            >
              <MessageCircle size={18} />
              Ask Us on WhatsApp
            </a>
          </div>

          <div className="accommodation-faq__items">
            {faqs.map((faq) => (
              <details className="accommodation-faq__item" key={faq.question}>
                <summary>
                  <span>{faq.question}</span>
                  <span className="accommodation-faq__plus">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="accommodation-cta"
        style={{
          "--accommodation-cta-image": `url("${lodgeExterior}")`,
        }}
      >
        <div className="accommodation-cta__background" />
        <div className="accommodation-cta__overlay" />

        <div className="container accommodation-cta__content">
          <span className="eyebrow eyebrow--gold">Your Kibale Escape</span>

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
            <Link
              to="/booking?stay=room&room=Regular%20Comfort"
              className="btn btn--gold"
            >
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

            <a href="tel:+256782159173" className="accommodation-cta__phone">
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
