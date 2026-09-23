import { Link } from "react-router-dom";

import {
  ArrowRight,
  CalendarCheck,
  Check,
  Coffee,
  MessageCircle,
  Utensils,
  Wine,
} from "lucide-react";

import "./Restaurant.css";

import restaurantHero from "../assets/restaurant-hero.jpg";
import restaurantDining from "../assets/restaurant-dining.jpg";
import restaurantFood from "../assets/restaurant-food.jpg";
import restaurantBreakfast from "../assets/restaurant-breakfast.jpg";
import restaurantBar from "../assets/restaurant-bar.jpg";
import restaurantEvening from "../assets/restaurant-evening.jpg";

const diningHighlights = [
  {
    icon: Utensils,
    number: "01",
    title: "Restaurant Dining",
    text: "Enjoy relaxed dining in a welcoming setting after a day exploring Kibale National Park and Western Uganda.",
  },
  {
    icon: Coffee,
    number: "02",
    title: "Breakfast",
    text: "Start your morning with a satisfying breakfast before heading into the forest, visiting crater lakes or continuing your journey.",
  },
  {
    icon: Wine,
    number: "03",
    title: "Bar & Drinks",
    text: "Unwind with a refreshing drink and enjoy relaxed evenings in the comfortable atmosphere of the Inn.",
  },
  {
    icon: Utensils,
    number: "04",
    title: "Relaxed Evenings",
    text: "Slow down, share stories and enjoy the peaceful rhythm of an evening at Kibale Tourist's Inn.",
  },
];

const diningFeatures = [
  "Comfortable restaurant setting",
  "Breakfast for travellers starting their day",
  "A selection of meals and refreshments",
  "Relaxed bar atmosphere",
  "Convenient dining during your stay",
];

function Restaurant() {
  return (
    <main className="restaurant-page">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        className="restaurant-hero"
        style={{
          "--restaurant-hero-image": `url(${restaurantHero})`,
        }}
      >
        <div className="restaurant-hero__image"></div>
        <div className="restaurant-hero__overlay"></div>

        <div className="container restaurant-hero__content">
          <div className="restaurant-hero__copy">
            <span className="eyebrow eyebrow--gold">
              Restaurant &amp; Bar • Kibale, Uganda
            </span>

            <h1>
              Taste the journey.
              <span>Slow down and savour it.</span>
            </h1>

            <p>
              Enjoy relaxed dining, breakfast, refreshments and welcoming
              evening moments at Kibale Tourist&apos;s Inn, your comfortable
              base for discovering Kibale National Park and Western Uganda.
            </p>

            <div className="restaurant-hero__actions">
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

          <div className="restaurant-hero__bottom">
            <div className="restaurant-hero__location">
              <span className="restaurant-hero__dot"></span>
              <span>Kibale • Western Uganda</span>
            </div>

            <div className="restaurant-hero__divider"></div>

            <p>
              Restaurant • Breakfast • Bar • Evening Dining
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}
      <section className="restaurant-intro section">
        <div className="container">
          <div className="restaurant-intro__grid">
            <div className="restaurant-intro__label">
              <span className="eyebrow">At The Inn</span>

              <div className="restaurant-intro__vertical-line"></div>

              <span className="restaurant-intro__small">
                Food • Drinks • Conversation
              </span>
            </div>

            <div className="restaurant-intro__content">
              <span className="eyebrow">
                Dining in Kibale
              </span>

              <h2 className="section-heading">
                Good food belongs
                <em> to every great journey.</em>
              </h2>

              <p className="lead-text">
                At Kibale Tourist&apos;s Inn, dining is part of the experience.
                Our restaurant and bar provide a comfortable place to enjoy
                meals, refreshments and unhurried moments during your stay.
              </p>

              <p>
                Whether you are preparing for an early day in the forest,
                returning from a guided experience or simply enjoying a
                quiet evening, our dining spaces give you somewhere welcoming
                to pause, eat and recharge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED DINING
      ========================================================= */}
      <section className="restaurant-dining section section--ivory">
        <div className="container">
          <div className="restaurant-dining__grid">
            <div className="restaurant-dining__visual">
              <div className="restaurant-dining__image-card">
                <img
                  src={restaurantDining}
                  alt="Restaurant dining area at Kibale Tourist's Inn in Western Uganda"
                />

                <div className="restaurant-dining__caption">
                  <span>Restaurant</span>
                  <strong>
                    Relaxed dining in Kibale.
                  </strong>
                </div>
              </div>

              <div className="restaurant-dining__badge">
                <Utensils size={21} />

                <span>
                  Dining
                  <strong>At The Inn</strong>
                </span>
              </div>
            </div>

            <div className="restaurant-dining__content">
              <span className="eyebrow">
                Restaurant Dining
              </span>

              <h2 className="section-heading">
                Settle in,
                <em> enjoy the moment.</em>
              </h2>

              <p className="lead-text">
                After a day of discovering Kibale, there is something special
                about returning to a welcoming table and taking your time over
                a meal.
              </p>

              <ul className="feature-list">
                {diningFeatures.map((feature) => (
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
                <span>Stay &amp; Dine</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOD FEATURE
      ========================================================= */}
      <section className="restaurant-food section">
        <div className="container">
          <div className="restaurant-food__grid">
            <div className="restaurant-food__content">
              <span className="eyebrow">
                From The Kitchen
              </span>

              <h2 className="section-heading">
                Simple pleasures,
                <em> beautifully enjoyed.</em>
              </h2>

              <p className="lead-text">
                Our dining experience is designed around comfort and
                convenience, giving guests a welcoming place to enjoy food
                while discovering the natural beauty of Western Uganda.
              </p>

              <p>
                From breakfast before a day of adventure to a relaxed meal
                after exploring the region, the restaurant is an easy part of
                your stay at Kibale Tourist&apos;s Inn.
              </p>

              <Link to="/booking" className="text-link">
                Plan Your Stay
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="restaurant-food__visual">
              <img
                src={restaurantFood}
                alt="Food served at Kibale Tourist's Inn restaurant in Kibale, Uganda"
              />

              <div className="restaurant-food__stamp">
                <span>Good</span>
                <strong>Food</strong>
                <small>At The Inn</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BREAKFAST
      ========================================================= */}
      <section className="restaurant-breakfast section section--sand">
        <div className="container">
          <div className="restaurant-breakfast__grid">
            <div className="restaurant-breakfast__visual">
              <img
                src={restaurantBreakfast}
                alt="Breakfast at Kibale Tourist's Inn in Western Uganda"
              />

              <div className="restaurant-breakfast__number">
                <span>Start</span>
                <strong>01</strong>
              </div>
            </div>

            <div className="restaurant-breakfast__content">
              <span className="eyebrow">
                Start Your Day
              </span>

              <h2 className="section-heading">
                Breakfast before
                <em> the forest calls.</em>
              </h2>

              <p className="lead-text">
                Mornings in Kibale begin with possibilities. Enjoy breakfast
                at the Inn before setting out for chimpanzee experiences,
                forest walks, crater lakes and other Western Uganda
                adventures.
              </p>

              <p>
                For travellers on an early schedule, breakfast is an
                important part of preparing for the day ahead. For everyone
                else, it is simply a chance to slow down and enjoy the
                morning.
              </p>

              <div className="restaurant-breakfast__quote">
                <Coffee size={19} />

                <span>
                  Wake up. Eat well.
                  <strong>Go discover.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DINING HIGHLIGHTS
      ========================================================= */}
      <section className="restaurant-highlights section section--dark">
        <div className="container">
          <div className="restaurant-highlights__header">
            <span className="eyebrow eyebrow--gold">
              More Than A Meal
            </span>

            <h2 className="section-heading section-heading--light">
              Dining is part of
              <em> the Kibale experience.</em>
            </h2>

            <p>
              From morning coffee to evening drinks, the restaurant and bar
              create relaxed spaces to recharge during your journey.
            </p>
          </div>

          <div className="restaurant-highlights__grid">
            {diningHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="restaurant-highlight-card"
                  key={item.title}
                >
                  <div className="restaurant-highlight-card__top">
                    <span>{item.number}</span>

                    <div className="restaurant-highlight-card__icon">
                      <Icon size={21} />
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

      {/* =========================================================
          BAR + EVENING
      ========================================================= */}
      <section className="restaurant-evening section">
        <div className="container">
          <div className="restaurant-evening__grid">
            <div className="restaurant-evening__visual">
              <div className="restaurant-evening__image-main">
                <img
                  src={restaurantBar}
                  alt="Bar area at Kibale Tourist's Inn in Uganda"
                />
              </div>

              <div className="restaurant-evening__image-secondary">
                <img
                  src={restaurantEvening}
                  alt="Evening atmosphere at Kibale Tourist's Inn"
                />
              </div>

              <div className="restaurant-evening__badge">
                <Wine size={20} />
                <span>Evenings at the Inn</span>
              </div>
            </div>

            <div className="restaurant-evening__content">
              <span className="eyebrow">
                Bar &amp; Evenings
              </span>

              <h2 className="section-heading">
                Slow evenings,
                <em> good conversation.</em>
              </h2>

              <p className="lead-text">
                As the day cools and the pace of the forest settles, the Inn
                becomes a place to unwind with a refreshing drink and enjoy
                the company of fellow travellers.
              </p>

              <p>
                Whether you have returned from Kibale National Park, spent
                the afternoon around the crater lakes or simply enjoyed a
                quiet day at the Inn, our bar provides a relaxed setting for
                the evening.
              </p>

              <div className="restaurant-evening__link">
                <Link to="/experiences" className="text-link">
                  Explore Kibale Experiences
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EXPERIENCE CONNECTION
      ========================================================= */}
      <section className="restaurant-experience">
        <div className="container">
          <div className="restaurant-experience__inner">
            <div className="restaurant-experience__copy">
              <span className="eyebrow eyebrow--gold">
                Stay • Dine • Explore
              </span>

              <h2>
                Make every part
                <em> of your Kibale journey count.</em>
              </h2>

              <p>
                Stay comfortably, enjoy good food and discover the forests,
                wildlife and crater lakes of Western Uganda from one
                welcoming base.
              </p>

              <div className="restaurant-experience__actions">
                <Link
                  to="/accommodation"
                  className="btn btn--gold"
                >
                  <span>Explore Accommodation</span>
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/kibale-national-park"
                  className="btn btn--outline-light"
                >
                  <span>Discover Kibale</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="restaurant-cta">
        <div className="restaurant-cta__background">
          <img
            src={restaurantEvening}
            alt=""
            aria-hidden="true"
          />
        </div>

        <div className="restaurant-cta__overlay"></div>

        <div className="container restaurant-cta__content">
          <span className="eyebrow eyebrow--gold">
            Kibale Tourist&apos;s Inn
          </span>

          <h2>
            Come hungry.
            <em> Leave with memories.</em>
          </h2>

          <p>
            Experience comfortable accommodation, welcoming dining and
            unforgettable adventures in Kibale and Western Uganda.
          </p>

          <div className="restaurant-cta__actions">
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
              className="restaurant-cta__phone"
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

export default Restaurant;