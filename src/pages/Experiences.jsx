import { motion } from "framer-motion";
import {
  ArrowRight,
  Camera,
  Compass,
  MapPin,
  MessageCircle,
  Mountain,
  Sparkles,
  Trees,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

import experiencesHero from "../assets/experiences-hero.jpg";
import experienceChimpanzee from "../assets/experience-chimpanzee.jpg";
import experienceForest from "../assets/experience-forest.jpg";
import experienceCrater from "../assets/experience-crater.jpg";
import experienceCulture from "../assets/experience-culture.jpg";
import experienceNature from "../assets/experience-nature.jpg";
import experienceAdventure from "../assets/experience-adventure.jpg";

import "./Experiences.css";

const experiences = [
  {
    number: "01",
    title: "Kibale National Park",
    category: "Wildlife",
    text: "Discover one of Uganda's remarkable forest landscapes and experience the biodiversity surrounding Kibale.",
    image: experienceChimpanzee,
    icon: Trees,
    link: "/kibale-national-park",
  },
  {
    number: "02",
    title: "Forest Experiences",
    category: "Nature",
    text: "Walk through beautiful forest surroundings and experience the sights, sounds and atmosphere of Kibale.",
    image: experienceForest,
    icon: Compass,
    link: "/guided-tours",
  },
  {
    number: "03",
    title: "Crater Lakes",
    category: "Scenery",
    text: "Explore the dramatic landscapes and peaceful waters of the crater-lake region around Fort Portal and Kibale.",
    image: experienceCrater,
    icon: Mountain,
    link: "/crater-lakes",
  },
  {
    number: "04",
    title: "Local Experiences",
    category: "Culture",
    text: "Connect with local communities, traditions and everyday life across Western Uganda.",
    image: experienceCulture,
    icon: Users,
    link: "/guided-tours",
  },
];

const experienceFeatures = [
  "Wildlife and forest discovery",
  "Scenic landscapes and crater lakes",
  "Guided walking experiences",
  "Photography opportunities",
  "Local and cultural encounters",
  "Flexible experiences around your stay",
];

function Experiences() {
  return (
    <main className="experiences-page">
      {/* HERO */}
      <section className="experiences-hero">
        <div className="experiences-hero__image">
          <img
            src={experiencesHero}
            alt="Experiences around Kibale Tourist's Inn"
          />
        </div>

        <div className="experiences-hero__overlay" />

        <div className="container experiences-hero__content">
          <motion.div
            className="experiences-hero__inner"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <span className="eyebrow eyebrow--light">
              EXPERIENCE KIBALE • WESTERN UGANDA
            </span>

            <h1>
              There is more
              <span>to discover.</span>
            </h1>

            <p>
              From ancient forests and wildlife to crater lakes, local
              communities and unforgettable landscapes, let Kibale become part
              of your story.
            </p>

            <div className="experiences-hero__actions">
              <a href="#experiences" className="btn btn-gold">
                Explore Experiences
                <ArrowRight size={18} />
              </a>

              <Link to="/booking" className="hero-text-link">
                Plan Your Stay
                <ArrowRight size={17} />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="experiences-hero__bottom">
          <span>
            <MapPin size={15} />
            Kibale • Western Uganda
          </span>

          <span>Wildlife • Nature • Culture • Adventure</span>
        </div>
      </section>

      {/* INTRO */}
      <section className="section experiences-intro">
        <div className="container">
          <div className="experiences-intro__grid">
            <motion.div
              className="experiences-intro__heading"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="eyebrow">BEYOND YOUR ROOM</span>

              <h2>
                Stay somewhere.
                <span>Experience somewhere.</span>
              </h2>
            </motion.div>

            <motion.div
              className="experiences-intro__copy"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="lead">
                Kibale is a destination made for curiosity.
              </p>

              <p>
                Use Kibale Tourist&apos;s Inn as your base while discovering
                the forests, wildlife, crater lakes, communities and landscapes
                that make Western Uganda so memorable.
              </p>

              <div className="experiences-intro__note">
                <Sparkles size={19} />
                <span>
                  Ask our team about experiences that fit naturally around
                  your stay.
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE GRID */}
      <section className="section experiences-list" id="experiences">
        <div className="container">
          <div className="section-heading-centered">
            <span className="eyebrow">WAYS TO EXPLORE</span>

            <h2>
              Choose your
              <span>kind of adventure.</span>
            </h2>

            <p>
              Discover the experiences that can turn a comfortable stay into a
              memorable journey through Western Uganda.
            </p>
          </div>

          <div className="experiences-grid">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <motion.article
                  className="experience-card"
                  key={experience.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                  }}
                >
                  <Link to={experience.link} className="experience-card__image">
                    <img src={experience.image} alt={experience.title} />

                    <span className="experience-card__number">
                      {experience.number}
                    </span>

                    <span className="experience-card__category">
                      {experience.category}
                    </span>
                  </Link>

                  <div className="experience-card__content">
                    <div className="experience-card__icon">
                      <Icon size={21} />
                    </div>

                    <h3>{experience.title}</h3>

                    <p>{experience.text}</p>

                    <Link to={experience.link} className="inline-link">
                      Discover More
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURE SPLIT */}
      <section className="section experiences-feature">
        <div className="container">
          <div className="experiences-feature__grid">
            <motion.div
              className="experiences-feature__visual"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={experienceNature}
                alt="Nature experience around Kibale"
              />

              <div className="experiences-feature__stamp">
                <Camera size={21} />

                <span>
                  Moments
                  <strong>Worth Keeping</strong>
                </span>
              </div>
            </motion.div>

            <motion.div
              className="experiences-feature__content"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="eyebrow">DISCOVER AT YOUR OWN PACE</span>

              <h2>
                Your journey
                <span>doesn't need to be rushed.</span>
              </h2>

              <p className="lead">
                Some travellers come for wildlife. Others come for landscapes,
                photography, culture or simply the opportunity to slow down.
              </p>

              <p>
                Whatever brings you to Kibale, we believe the best experiences
                leave enough room to notice the details, meet people and enjoy
                the journey itself.
              </p>

              <ul className="experience-feature-list">
                {experienceFeatures.map((feature) => (
                  <li key={feature}>
                    <span>
                      <Sparkles size={14} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link to="/guided-tours" className="btn btn-dark">
                Explore Guided Tours
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ADVENTURE BANNER */}
      <section className="experiences-adventure">
        <div className="experiences-adventure__image">
          <img
            src={experienceAdventure}
            alt="Adventure experience in Western Uganda"
          />
        </div>

        <div className="experiences-adventure__overlay" />

        <div className="container experiences-adventure__content">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow eyebrow--gold">
              WESTERN UGANDA AWAITS
            </span>

            <h2>
              Go beyond
              <span>the expected.</span>
            </h2>

            <p>
              Discover forests, wildlife, landscapes and communities from a
              comfortable base at Kibale Tourist&apos;s Inn.
            </p>

            <Link to="/booking" className="btn btn-gold">
              Plan Your Stay
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* RELATED */}
      <section className="section experiences-related">
        <div className="container">
          <div className="experiences-related__header">
            <div>
              <span className="eyebrow">CONTINUE EXPLORING</span>

              <h2>
                Make Kibale
                <span>your next story.</span>
              </h2>
            </div>

            <Link to="/contact" className="inline-link">
              Speak With Our Team
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="experiences-related__grid">
            <Link to="/kibale-national-park">
              <Trees size={21} />
              <span>Kibale National Park</span>
              <ArrowRight size={18} />
            </Link>

            <Link to="/crater-lakes">
              <Mountain size={21} />
              <span>Crater Lakes</span>
              <ArrowRight size={18} />
            </Link>

            <Link to="/camping">
              <Compass size={21} />
              <span>Camping</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="experiences-cta">
        <div className="container">
          <motion.div
            className="experiences-cta__inner"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <MessageCircle size={27} />

            <span className="eyebrow eyebrow--gold">
              PLAN YOUR KIBALE EXPERIENCE
            </span>

            <h2>
              Tell us what
              <span>you want to discover.</span>
            </h2>

            <p>
              We can help you connect your accommodation with experiences
              around Kibale and Western Uganda.
            </p>

            <div className="experiences-cta__actions">
              <Link to="/booking" className="btn btn-gold">
                Plan Your Experience
                <ArrowRight size={18} />
              </Link>

              <a
                href="https://wa.me/256755517111"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light"
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

export default Experiences;