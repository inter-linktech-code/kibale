import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  Camera,
  Check,
  Compass,
  MapPin,
  MessageCircle,
  Sparkles,
  Trees,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

import toursHero from "../assets/tours-hero.jpg";
import guidedTour from "../assets/guided-tour.jpg";
import natureWalk from "../assets/nature-walk.jpg";
import localExperience from "../assets/local-experience.jpg";

import "./GuidedTours.css";

const tourHighlights = [
  "Private and small-group experiences",
  "Knowledgeable local guides",
  "Flexible timing and pacing",
  "Nature, wildlife and cultural discovery",
  "Photography-friendly routes",
  "Experiences tailored to your stay",
];

const experiences = [
  {
    number: "01",
    title: "Guided Forest Experiences",
    text: "Explore the landscapes around Kibale with a local guide who helps you notice the details, stories and natural character that make this region extraordinary.",
    image: guidedTour,
    icon: Trees,
  },
  {
    number: "02",
    title: "Nature & Walking Tours",
    text: "Slow down and experience the beauty of western Uganda on foot, from forest surroundings and scenic trails to quiet moments immersed in nature.",
    image: natureWalk,
    icon: Compass,
  },
  {
    number: "03",
    title: "Local Experiences",
    text: "Go beyond sightseeing and connect with the people, traditions, landscapes and everyday life that give the Kibale region its distinctive character.",
    image: localExperience,
    icon: Users,
  },
];

const journeySteps = [
  {
    number: "01",
    title: "Tell Us What You Want to Discover",
    text: "Share your interests, available time and preferred pace with our team.",
  },
  {
    number: "02",
    title: "We Shape the Experience",
    text: "We help you select an experience that fits naturally into your stay.",
  },
  {
    number: "03",
    title: "Meet Your Guide",
    text: "Begin your journey with local knowledge, thoughtful guidance and time to explore.",
  },
  {
    number: "04",
    title: "Return With a Story",
    text: "Come back to the Inn with photographs, memories and a deeper connection to Kibale.",
  },
];

function GuidedTours() {
  return (
    <div className="guided-tours-page">
      {/* HERO */}
      <section className="tours-hero">
        <div className="tours-hero-image">
          <img
            src={toursHero}
            alt="Guided tourism experience around Kibale, Uganda"
          />
        </div>

        <div className="tours-hero-overlay" />

        <div className="container tours-hero-content">
          <motion.div
            className="tours-hero-inner"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <span className="eyebrow eyebrow-light">
              GUIDED EXPERIENCES • KIBALE, UGANDA
            </span>

            <h1>
              Discover Kibale
              <span>With Local Insight</span>
            </h1>

            <p>
              Thoughtfully guided journeys through the landscapes,
              communities and natural beauty surrounding Kibale Tourist&apos;s
              Inn.
            </p>

            <div className="tours-hero-actions">
              <Link to="/booking" className="btn btn-gold">
                Plan Your Experience
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/kibale-national-park"
                className="hero-text-link"
              >
                Explore Kibale National Park
                <ArrowRight size={17} />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="tours-hero-scroll">
          <span>EXPLORE</span>
          <div />
        </div>
      </section>

      {/* INTRO */}
      <section className="section tours-intro">
        <div className="container">
          <div className="tours-intro-grid">
            <motion.div
              className="tours-intro-heading"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="eyebrow">BEYOND THE LODGE</span>

              <h2>
                The best journeys
                <span>feel personal.</span>
              </h2>
            </motion.div>

            <motion.div
              className="tours-intro-copy"
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="lead">
                Kibale is more than a destination to see. It is a place to
                slow down, explore and experience.
              </p>

              <p>
                At Kibale Tourist&apos;s Inn, our guided experiences are
                designed to connect you with the character of western Uganda.
                Whether you are interested in nature, photography, walking,
                wildlife or local culture, we help you discover the region at
                a comfortable and considered pace.
              </p>

              <div className="tours-intro-note">
                <Sparkles size={19} />

                <span>
                  Ask our team about creating an experience around your stay.
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE CARDS */}
      <section className="section tours-experiences">
        <div className="container">
          <div className="section-heading-centered">
            <span className="eyebrow">WAYS TO EXPLORE</span>

            <h2>
              Guided experiences
              <span>with a sense of place.</span>
            </h2>

            <p>
              Choose the style of discovery that suits your journey, then let
              our local knowledge take care of the details.
            </p>
          </div>

          <div className="tour-experience-list">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <motion.article
                  className={`tour-experience-card ${
                    index % 2 !== 0 ? "reverse" : ""
                  }`}
                  key={experience.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="tour-experience-image">
                    <img
                      src={experience.image}
                      alt={experience.title}
                    />

                    <span className="tour-experience-number">
                      {experience.number}
                    </span>
                  </div>

                  <div className="tour-experience-content">
                    <div className="tour-experience-icon">
                      <Icon size={21} />
                    </div>

                    <span className="small-label">
                      GUIDED EXPERIENCE
                    </span>

                    <h3>{experience.title}</h3>

                    <p>{experience.text}</p>

                    <Link to="/booking" className="inline-link">
                      Enquire About This Experience
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="section tours-highlights">
        <div className="container">
          <div className="tours-highlights-grid">
            <motion.div
              className="tours-highlights-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="eyebrow eyebrow-light">
                DESIGNED AROUND YOU
              </span>

              <h2>
                Discovery without
                <span>unnecessary hurry.</span>
              </h2>

              <p>
                Your time in Kibale should feel rewarding rather than
                rushed. Our experiences can be shaped around your interests,
                schedule and preferred way of travelling.
              </p>

              <Link
                to="/contact"
                className="btn btn-outline-light"
              >
                Speak With Our Team
                <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div
              className="tours-highlights-list"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {tourHighlights.map((item) => (
                <div
                  className="tour-highlight-item"
                  key={item}
                >
                  <span className="highlight-check">
                    <Check size={15} />
                  </span>

                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="section tours-journey">
        <div className="container">
          <div className="section-heading-centered">
            <span className="eyebrow">YOUR JOURNEY</span>

            <h2>
              From first enquiry
              <span>to the experience.</span>
            </h2>

            <p>
              We keep the planning simple, personal and connected to your
              overall stay at Kibale Tourist&apos;s Inn.
            </p>
          </div>

          <div className="journey-grid">
            {journeySteps.map((step, index) => (
              <motion.div
                className="journey-step"
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
              >
                <span className="journey-number">
                  {step.number}
                </span>

                <div className="journey-line" />

                <h3>{step.title}</h3>

                <p>{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTOGRAPHY / MEMORY */}
      <section className="tours-memory">
        <div className="tours-memory-background">
          <img
            src={guidedTour}
            alt="Guided experience in the Kibale region"
          />
        </div>

        <div className="tours-memory-overlay" />

        <div className="container tours-memory-content">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="memory-icon">
              <Camera size={22} />
            </div>

            <span className="eyebrow eyebrow-light">
              MOMENTS WORTH KEEPING
            </span>

            <h2>
              See more.
              <span>Remember more.</span>
            </h2>

            <p>
              From quiet forest paths to unforgettable encounters with the
              landscapes around Kibale, let your journey unfold at its own
              pace.
            </p>
          </motion.div>
        </div>
      </section>

      {/* RELATED EXPERIENCES */}
      <section className="section tours-related">
        <div className="container">
          <div className="tours-related-header">
            <div>
              <span className="eyebrow">CONTINUE EXPLORING</span>

              <h2>
                More ways to experience
                <span>Kibale.</span>
              </h2>
            </div>

            <Link to="/experiences" className="inline-link">
              View All Experiences
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="related-links">
            <Link
              to="/kibale-national-park"
              className="related-link-card"
            >
              <div>
                <Trees size={21} />
                <span>Kibale National Park</span>
              </div>

              <ArrowRight size={19} />
            </Link>

            <Link
              to="/crater-lakes"
              className="related-link-card"
            >
              <div>
                <MapPin size={21} />
                <span>Crater Lakes</span>
              </div>

              <ArrowRight size={19} />
            </Link>

            <Link
              to="/camping"
              className="related-link-card"
            >
              <div>
                <Compass size={21} />
                <span>Camping</span>
              </div>

              <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="tours-cta">
        <div className="container">
          <motion.div
            className="tours-cta-inner"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="tours-cta-icon">
              <CalendarCheck size={24} />
            </div>

            <span className="eyebrow">
              READY TO DISCOVER KIBALE?
            </span>

            <h2>
              Let&apos;s plan your
              <span>next experience.</span>
            </h2>

            <p>
              Tell us when you are visiting and what you would love to
              discover. Our team will help you shape your experience.
            </p>

            <div className="tours-cta-actions">
              <Link to="/booking" className="btn btn-gold">
                Plan Your Experience
                <ArrowRight size={18} />
              </Link>

              <a
                href="https://wa.me/256755517111"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                <MessageCircle size={18} />
                WhatsApp Our Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default GuidedTours;