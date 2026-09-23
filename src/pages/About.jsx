import { motion } from "framer-motion";
import {
  ArrowRight,
  BedDouble,
  Compass,
  Heart,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Trees,
  Utensils,
} from "lucide-react";
import { Link } from "react-router-dom";

import aboutHero from "../assets/about-hero.jpg";
import aboutStory from "../assets/about-story.jpg";
import aboutHospitality from "../assets/about-hospitality.jpg";
import aboutKibale from "../assets/about-kibale.jpg";

import "./About.css";

const values = [
  {
    icon: Heart,
    number: "01",
    title: "Warm Hospitality",
    text: "We believe a memorable stay begins with genuine hospitality, thoughtful service and a welcoming atmosphere.",
  },
  {
    icon: Trees,
    number: "02",
    title: "Connected to Nature",
    text: "Our location places you close to the forests, wildlife and landscapes that make the Kibale region special.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Comfort & Care",
    text: "From accommodation to dining, we focus on creating a comfortable and dependable base for your journey.",
  },
  {
    icon: Sparkles,
    number: "04",
    title: "Meaningful Experiences",
    text: "We want your time in Kibale to be more than an overnight stay — it should become part of your story.",
  },
];

const stayFeatures = [
  {
    icon: BedDouble,
    title: "Stay",
    text: "Comfortable accommodation designed to give travellers a peaceful base in the Kibale region.",
    link: "/accommodation",
    linkText: "Explore Accommodation",
  },
  {
    icon: Utensils,
    title: "Dine",
    text: "Relaxed restaurant and bar spaces where you can enjoy meals, refreshments and unhurried evenings.",
    link: "/restaurant",
    linkText: "Discover Dining",
  },
  {
    icon: Compass,
    title: "Explore",
    text: "Discover Kibale National Park, crater lakes, forest landscapes and experiences around Western Uganda.",
    link: "/guided-tours",
    linkText: "Explore Experiences",
  },
];

const reasons = [
  "A welcoming base for exploring Kibale",
  "Comfortable accommodation",
  "Restaurant and bar facilities",
  "Access to local experiences",
  "Close connection to nature",
  "Personal and attentive hospitality",
];

function About() {
  return (
    <main className="about-page">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="about-hero">
        <div className="about-hero__image">
          <img
            src={aboutHero}
            alt="Kibale Tourist's Inn surrounded by the natural beauty of Western Uganda"
          />
        </div>

        <div className="about-hero__overlay" />

        <div className="container about-hero__content">
          <motion.div
            className="about-hero__inner"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <span className="eyebrow eyebrow--light">
              ABOUT KIBALE TOURIST'S INN
            </span>

            <h1>
              Your gateway to
              <span>the heart of Kibale.</span>
            </h1>

            <p>
              A welcoming place to stay, dine, relax and begin your
              exploration of Kibale National Park and the landscapes of
              Western Uganda.
            </p>

            <div className="about-hero__actions">
              <Link to="/accommodation" className="about-btn about-btn--gold">
                Explore Our Stay
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="about-hero__text-link"
              >
                Talk to Our Team
                <ArrowRight size={17} />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="about-hero__bottom">
          <div className="about-hero__location">
            <span className="about-hero__dot" />
            <span>Isunga • Kibale • Western Uganda</span>
          </div>

          <div className="about-hero__divider" />

          <p>
            Stay • Dine • Explore
          </p>
        </div>

        <div className="about-hero__scroll">
          <span>DISCOVER</span>
          <div />
        </div>
      </section>

      {/* =========================================================
          INTRO / STORY
      ========================================================= */}
      <section className="section about-story">
        <div className="container">
          <div className="about-story__grid">

            <motion.div
              className="about-story__heading"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="eyebrow">
                OUR STORY
              </span>

              <h2>
                More than a place
                <span>to spend the night.</span>
              </h2>

              <div className="about-story__line" />

              <p className="about-story__small">
                A comfortable base for discovering one of Uganda's
                remarkable natural regions.
              </p>
            </motion.div>

            <motion.div
              className="about-story__content"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="about-lead">
                Kibale Tourist's Inn is a welcoming accommodation and
                hospitality destination in the Kibale region of Western
                Uganda.
              </p>

              <p>
                We provide travellers with a comfortable place to stay
                while they discover the forests, wildlife, crater lakes
                and communities that make this part of Uganda so memorable.
              </p>

              <p>
                Whether you are visiting for a chimpanzee experience,
                exploring Kibale National Park, travelling through Western
                Uganda or simply looking for a peaceful place to slow down,
                the Inn gives you a convenient base from which to experience
                the region.
              </p>

              <div className="about-story__signature">
                <span className="about-story__signature-mark">
                  KT
                </span>

                <div>
                  <strong>Kibale Tourist's Inn</strong>
                  <span>Stay • Dine • Explore</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================
          IMAGE STORY
      ========================================================= */}
      <section className="about-image-story">
        <div className="container">
          <div className="about-image-story__grid">

            <motion.div
              className="about-image-story__visual"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={aboutStory}
                alt="Guests enjoying the peaceful atmosphere at Kibale Tourist's Inn"
              />

              <div className="about-image-story__badge">
                <span>01</span>
                <strong>Our Place</strong>
                <small>In Kibale</small>
              </div>
            </motion.div>

            <motion.div
              className="about-image-story__content"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="eyebrow">
                A PLACE TO PAUSE
              </span>

              <h2>
                Come for the
                <em>journey.</em>
                Stay for the feeling.
              </h2>

              <p className="about-lead">
                Travel is not only about where you go. It is also about
                where you return to at the end of the day.
              </p>

              <p>
                At Kibale Tourist's Inn, we aim to create a relaxed
                environment where travellers can rest after a day of
                exploration, share stories over a meal and wake up ready
                for another adventure.
              </p>

              <p>
                Our hospitality is rooted in the simple idea that your
                accommodation should make discovering the destination
                easier, more comfortable and more enjoyable.
              </p>

              <Link
                to="/accommodation"
                className="about-text-link"
              >
                Discover Our Accommodation
                <ArrowRight size={17} />
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================
          VALUES
      ========================================================= */}
      <section className="section about-values">
        <div className="container">

          <div className="about-section-heading">
            <span className="eyebrow">
              WHAT MATTERS TO US
            </span>

            <h2>
              Hospitality with
              <span>a sense of place.</span>
            </h2>

            <p>
              Everything we do is shaped around helping travellers feel
              comfortable, welcomed and connected to the destination.
            </p>
          </div>

          <div className="about-values__grid">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.article
                  className="about-value-card"
                  key={value.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                >
                  <div className="about-value-card__top">
                    <span>{value.number}</span>

                    <div className="about-value-card__icon">
                      <Icon size={21} />
                    </div>
                  </div>

                  <h3>{value.title}</h3>

                  <p>{value.text}</p>

                  <div className="about-value-card__line" />
                </motion.article>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================
          KIBALE CONNECTION
      ========================================================= */}
      <section className="about-kibale">
        <div className="about-kibale__background">
          <img
            src={aboutKibale}
            alt="Natural landscape around Kibale in Western Uganda"
          />
        </div>

        <div className="about-kibale__overlay" />

        <div className="container about-kibale__content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow eyebrow--light">
              OUR LOCATION
            </span>

            <h2>
              Connected to
              <span>the Kibale experience.</span>
            </h2>

            <p>
              From the forests of Kibale National Park to crater lakes,
              wildlife experiences and the wider landscapes of Western
              Uganda, the region offers travellers countless ways to
              explore.
            </p>

            <div className="about-kibale__location">
              <MapPin size={20} />

              <div>
                <span>Find Us</span>
                <strong>
                  G833+V33 Isunga, Kibale, Uganda
                </strong>
              </div>
            </div>

            <div className="about-kibale__actions">
              <Link
                to="/kibale-national-park"
                className="about-btn about-btn--gold"
              >
                Discover Kibale
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/crater-lakes"
                className="about-btn about-btn--outline"
              >
                Explore Crater Lakes
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          STAY / DINE / EXPLORE
      ========================================================= */}
      <section className="section about-features">
        <div className="container">

          <div className="about-section-heading about-section-heading--center">
            <span className="eyebrow">
              THE KIBALE TOURIST'S INN EXPERIENCE
            </span>

            <h2>
              Stay well.
              <span>Explore freely.</span>
            </h2>

            <p>
              Everything you need for a comfortable Kibale journey,
              brought together in one welcoming destination.
            </p>
          </div>

          <div className="about-features__grid">
            {stayFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  className="about-feature-card"
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                >
                  <div className="about-feature-card__icon">
                    <Icon size={23} />
                  </div>

                  <span className="about-feature-card__number">
                    0{index + 1}
                  </span>

                  <h3>{feature.title}</h3>

                  <p>{feature.text}</p>

                  <Link
                    to={feature.link}
                    className="about-text-link"
                  >
                    {feature.linkText}
                    <ArrowRight size={16} />
                  </Link>
                </motion.article>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================
          WHY STAY
      ========================================================= */}
      <section className="section about-reasons">
        <div className="container">

          <div className="about-reasons__grid">

            <motion.div
              className="about-reasons__content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="eyebrow">
                YOUR KIBALE BASE
              </span>

              <h2>
                Everything begins
                <span>with a good base.</span>
              </h2>

              <p className="about-lead">
                A great adventure becomes even better when you have a
                comfortable place to return to.
              </p>

              <p>
                Whether your trip is centred around wildlife, nature,
                photography, cultural discovery or simply taking a break
                from everyday life, Kibale Tourist's Inn gives you a
                welcoming place from which to begin.
              </p>

              <Link
                to="/contact"
                className="about-btn about-btn--dark"
              >
                Plan Your Visit
                <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div
              className="about-reasons__list"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {reasons.map((reason, index) => (
                <div
                  className="about-reason"
                  key={reason}
                >
                  <span>
                    0{index + 1}
                  </span>

                  <p>{reason}</p>
                </div>
              ))}
            </motion.div>

          </div>

        </div>
      </section>

      {/* =========================================================
          EXPERIENCE CTA
      ========================================================= */}
      <section className="about-cta">
        <div className="container">
          <motion.div
            className="about-cta__inner"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-cta__icon">
              <Sparkles size={24} />
            </div>

            <span className="eyebrow">
              STAY • DINE • EXPLORE
            </span>

            <h2>
              Your Kibale journey
              <span>starts here.</span>
            </h2>

            <p>
              Discover comfortable accommodation, welcoming dining and
              unforgettable experiences in one of Uganda's most remarkable
              natural regions.
            </p>

            <div className="about-cta__actions">
              <Link
                to="/accommodation"
                className="about-btn about-btn--gold"
              >
                Explore Accommodation
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/guided-tours"
                className="about-btn about-btn--outline"
              >
                Discover Experiences
                <ArrowRight size={18} />
              </Link>

              <a
                href="https://wa.me/256755517111"
                target="_blank"
                rel="noreferrer"
                className="about-cta__whatsapp"
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

export default About;