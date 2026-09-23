import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";

import "./Contact.css";

function Contact() {
  return (
    <main className="contact-page">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="contact-hero">
        <div className="contact-hero__background" />
        <div className="contact-hero__overlay" />

        <div className="container contact-hero__content">
          <motion.div
            className="contact-hero__inner"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
          >
            <span className="eyebrow eyebrow--gold">
              CONTACT • KIBALE TOURIST&apos;S INN
            </span>

            <h1>
              Let&apos;s plan your
              <span> Kibale journey.</span>
            </h1>

            <p>
              Whether you are planning your stay, asking about accommodation,
              arranging an experience or simply looking for directions, our
              team is ready to help.
            </p>

            <div className="contact-hero__actions">
              <a
                href="https://wa.me/256755517111"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--gold"
              >
                <MessageCircle size={18} />
                <span>WhatsApp Us</span>
              </a>

              <a href="tel:+256782159173" className="btn btn--outline-light">
                <Phone size={18} />
                <span>Call 0782 159 173</span>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="contact-hero__location">
          <MapPin size={17} />
          <span>Isunga • Kibale • Western Uganda</span>
        </div>
      </section>

      {/* =========================================================
          CONTACT INTRO
      ========================================================= */}
      <section className="section contact-intro">
        <div className="container">
          <div className="contact-intro__grid">
            <motion.div
              className="contact-intro__heading"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="eyebrow">GET IN TOUCH</span>

              <h2>
                From your first question
                <span> to your arrival.</span>
              </h2>
            </motion.div>

            <motion.div
              className="contact-intro__copy"
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="lead">
                A good journey starts with knowing where you are going.
              </p>

              <p>
                Contact Kibale Tourist&apos;s Inn directly for accommodation
                enquiries, restaurant information, camping, guided
                experiences, crater lake visits and other questions about
                your time in Western Uganda.
              </p>

              <p>
                Our team can help you understand your options and make your
                stay at the Inn simple and comfortable.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT CARDS
      ========================================================= */}
      <section className="section contact-details">
        <div className="container">
          <div className="contact-details__header">
            <span className="eyebrow">CONTACT DETAILS</span>

            <h2>
              We&apos;re here to
              <span> help you.</span>
            </h2>
          </div>

          <div className="contact-details__grid">
            <motion.a
              href="tel:+256782159173"
              className="contact-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="contact-card__icon">
                <Phone size={22} />
              </div>

              <span className="contact-card__label">CALL US</span>

              <h3>0782 159 173</h3>

              <p>
                Speak directly with our reservations and guest team.
              </p>

              <span className="contact-card__link">
                Call Now
                <ArrowRight size={16} />
              </span>
            </motion.a>

            <motion.a
              href="https://wa.me/256755517111"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card contact-card--featured"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              <div className="contact-card__icon">
                <MessageCircle size={22} />
              </div>

              <span className="contact-card__label">WHATSAPP</span>

              <h3>0755 517 111</h3>

              <p>
                Message us about your stay, experiences or availability.
              </p>

              <span className="contact-card__link">
                Start Conversation
                <ArrowRight size={16} />
              </span>
            </motion.a>

            <motion.a
              href="mailto:info@kibaletouristsinn.com"
              className="contact-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.16 }}
            >
              <div className="contact-card__icon">
                <Mail size={22} />
              </div>

              <span className="contact-card__label">EMAIL</span>

              <h3>Send an Enquiry</h3>

              <p>
                Send us your questions and travel details by email.
              </p>

              <span className="contact-card__link">
                Email Us
                <ArrowRight size={16} />
              </span>
            </motion.a>

            <motion.div
              className="contact-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.24 }}
            >
              <div className="contact-card__icon">
                <Clock3 size={22} />
              </div>

              <span className="contact-card__label">GUEST SUPPORT</span>

              <h3>Plan Ahead</h3>

              <p>
                Contact us before travelling so we can help you prepare for
                your stay.
              </p>

              <span className="contact-card__link">
                Ask Our Team
                <ArrowRight size={16} />
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ENQUIRY + MAP
      ========================================================= */}
      <section className="section contact-main">
        <div className="container">
          <div className="contact-main__grid">
            {/* FORM */}
            <motion.div
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="eyebrow">SEND AN ENQUIRY</span>

              <h2>
                Tell us how
                <span> we can help.</span>
              </h2>

              <p className="contact-form-wrapper__intro">
                Send us a message and include your preferred dates, number of
                guests or anything else you would like us to know.
              </p>

              <form className="contact-form">
                <div className="contact-form__row">
                  <div className="contact-form__field">
                    <label htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="contact-form__row">
                  <div className="contact-form__field">
                    <label htmlFor="phone">Phone / WhatsApp</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+256 ..."
                    />
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="subject">What Can We Help With?</label>

                    <select id="subject" name="subject" defaultValue="">
                      <option value="" disabled>
                        Select an enquiry
                      </option>
                      <option value="accommodation">
                        Accommodation
                      </option>
                      <option value="restaurant">
                        Restaurant &amp; Bar
                      </option>
                      <option value="camping">Camping</option>
                      <option value="guided-tours">
                        Guided Experiences
                      </option>
                      <option value="kibale">
                        Kibale National Park
                      </option>
                      <option value="crater-lakes">
                        Crater Lakes
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="contact-form__field">
                  <label htmlFor="message">Your Message</label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Tell us about your plans..."
                  />
                </div>

                <button type="submit" className="btn btn--dark">
                  <Send size={17} />
                  <span>Send Enquiry</span>
                </button>
              </form>
            </motion.div>

            {/* MAP */}
            <motion.div
              className="contact-map-wrapper"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="contact-map-wrapper__header">
                <div>
                  <span className="eyebrow">FIND US</span>

                  <h2>
                    Visit
                    <span> Kibale Tourist&apos;s Inn.</span>
                  </h2>
                </div>

                <MapPin size={24} />
              </div>

              <div className="contact-map">
                <iframe
                  title="Kibale Tourist's Inn location"
                  src="https://www.google.com/maps?q=0.504640,30.302670&z=15&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="contact-location">
                <div className="contact-location__icon">
                  <MapPin size={19} />
                </div>

                <div>
                  <span>LOCATION</span>

                  <strong>G833+V33 Isunga</strong>

                  <p>
                    0.504640, 30.302670
                    <br />
                    Kibale, Western Uganda
                  </p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=0.504640,30.302670"
                target="_blank"
                rel="noopener noreferrer"
                className="map-directions"
              >
                <span>Get Directions</span>
                <ArrowRight size={17} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LOCATION STRIP
      ========================================================= */}
      <section className="contact-location-strip">
        <div className="container">
          <div className="contact-location-strip__inner">
            <div className="contact-location-strip__icon">
              <MapPin size={24} />
            </div>

            <div>
              <span className="eyebrow eyebrow--gold">
                YOUR KIBALE BASE
              </span>

              <h2>
                Stay close to
                <span> the adventure.</span>
              </h2>

              <p>
                From the Inn, begin your journey into the forests, wildlife,
                crater lakes and communities of Western Uganda.
              </p>
            </div>

            <Link
              to="/kibale-national-park"
              className="btn btn--outline-light"
            >
              <span>Explore Kibale</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="contact-cta">
        <div className="container">
          <motion.div
            className="contact-cta__inner"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow eyebrow--gold">
              KIBALE TOURIST&apos;S INN
            </span>

            <h2>
              Your next adventure
              <span> starts with a conversation.</span>
            </h2>

            <p>
              Tell us when you are coming, what you would like to experience
              and how we can make your stay more comfortable.
            </p>

            <div className="contact-cta__actions">
              <a
                href="https://wa.me/256755517111"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--gold"
              >
                <MessageCircle size={18} />
                <span>WhatsApp Our Team</span>
              </a>

              <Link to="/accommodation" className="btn btn--outline-light">
                <span>Explore Accommodation</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
