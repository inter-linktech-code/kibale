import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

import bookingHero from "../assets/booking-hero.jpg";
import bookingRoom from "../assets/booking-room.jpg";
import bookingDining from "../assets/booking-dining.jpg";
import bookingNature from "../assets/booking-nature.jpg";

import "./Booking.css";

const bookingBenefits = [
  {
    icon: ShieldCheck,
    title: "Direct Enquiry",
    text: "Speak directly with the Inn team about your preferred dates and stay.",
  },
  {
    icon: Users,
    title: "Personal Service",
    text: "Tell us what you need and we can help shape your stay around your journey.",
  },
  {
    icon: MapPin,
    title: "Kibale Location",
    text: "Use the Inn as a comfortable base for exploring Kibale and Western Uganda.",
  },
  {
    icon: Clock3,
    title: "Flexible Planning",
    text: "Ask about accommodation, dining, camping and local experiences together.",
  },
];

const stayOptions = [
  {
    number: "01",
    title: "Accommodation",
    text: "Comfortable rooms and a welcoming base for your time around Kibale.",
    image: bookingRoom,
    link: "/accommodation",
  },
  {
    number: "02",
    title: "Restaurant & Bar",
    text: "Enjoy breakfast, meals, refreshments and relaxed evenings at the Inn.",
    image: bookingDining,
    link: "/restaurant",
  },
  {
    number: "03",
    title: "Kibale Experiences",
    text: "Discover forests, wildlife, crater lakes and local experiences.",
    image: bookingNature,
    link: "/experiences",
  },
];

function Booking() {
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const checkin = formData.get("checkin");
    const checkout = formData.get("checkout");

    if (new Date(checkout) <= new Date(checkin)) {
      setSubmissionMessage("Check-out must be after check-in.");
      return;
    }

    const enquiry = [
      "Hello Kibale Tourist's Inn, I would like to make a booking enquiry.",
      `Name: ${formData.get("name")}`,
      `Email: ${formData.get("email") || "Not provided"}`,
      `Phone / WhatsApp: ${formData.get("phone")}`,
      `Guests: ${formData.get("guests")}`,
      `Check-in: ${checkin}`,
      `Check-out: ${checkout}`,
      `Stay preference: ${formData.get("stay")}`,
      `Experience interest: ${formData.get("experience") || "Not decided"}`,
      `Message: ${formData.get("message") || "None"}`,
    ].join("\n");

    window.open(
      `https://wa.me/256755517111?text=${encodeURIComponent(enquiry)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSubmissionMessage("Your enquiry is ready in WhatsApp for our team.");
  };

  return (
    <main className="booking-page">
      {/* HERO */}
      <section className="booking-hero">
        <div className="booking-hero__image">
          <img
            src={bookingHero}
            alt="Kibale Tourist's Inn in Western Uganda"
          />
        </div>

        <div className="booking-hero__overlay" />

        <div className="container booking-hero__content">
          <motion.div
            className="booking-hero__inner"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <span className="eyebrow eyebrow--light">
              KIBALE TOURIST&apos;S INN • UGANDA
            </span>

            <h1>
              Plan your stay.
              <span>Begin your Kibale journey.</span>
            </h1>

            <p>
              Tell us when you would like to visit, what you need during your
              stay and what you would love to discover around Kibale.
            </p>

            <div className="booking-hero__actions">
              <a
                href="https://wa.me/256755517111"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
              >
                <MessageCircle size={18} />
                WhatsApp Reservations
              </a>

              <a href="#booking-form" className="hero-text-link">
                Send an Enquiry
                <ArrowRight size={17} />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="booking-hero__bottom">
          <div>
            <MapPin size={16} />
            <span>Isunga • Kibale • Western Uganda</span>
          </div>

          <span>Accommodation • Dining • Experiences</span>
        </div>
      </section>

      {/* INTRO */}
      <section className="section booking-intro">
        <div className="container">
          <div className="booking-intro__grid">
            <motion.div
              className="booking-intro__heading"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="eyebrow">YOUR STAY STARTS HERE</span>

              <h2>
                One place.
                <span>Many ways to experience Kibale.</span>
              </h2>
            </motion.div>

            <motion.div
              className="booking-intro__copy"
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="lead">
                Whether you are visiting for wildlife, nature, relaxation or
                simply passing through Western Uganda, Kibale Tourist&apos;s
                Inn gives you a welcoming base from which to explore.
              </p>

              <p>
                Send us your preferred dates and requirements. Our team can
                help you understand the available accommodation options and
                connect your stay with dining, camping and local experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section className="section booking-form-section" id="booking-form">
        <div className="container">
          <div className="booking-form-layout">
            <motion.div
              className="booking-form-intro"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="eyebrow">RESERVATIONS</span>

              <h2>
                Tell us about
                <span>your stay.</span>
              </h2>

              <p>
                Complete the enquiry form and our team can get back to you
                with information about your preferred dates and requirements.
              </p>

              <div className="booking-contact-card">
                <div className="booking-contact-card__icon">
                  <MessageCircle size={21} />
                </div>

                <div>
                  <span>Prefer WhatsApp?</span>

                  <a
                    href="https://wa.me/256755517111"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat with our reservations team
                  </a>
                </div>
              </div>

              <div className="booking-contact-list">
                <a href="tel:+256782159173">
                  <Phone size={17} />
                  <span>0782 159 173</span>
                </a>

                <a href="mailto:info@kibaletouristsinn.com">
                  <Mail size={17} />
                  <span>Email our team</span>
                </a>

                <div>
                  <MapPin size={17} />
                  <span>G833+V33 Isunga, Uganda</span>
                </div>
              </div>
            </motion.div>

            <motion.form
              className="booking-form"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              onSubmit={handleSubmit}
            >
              <div className="booking-form__top">
                <div>
                  <span className="small-label">BOOKING ENQUIRY</span>
                  <h3>Plan Your Visit</h3>
                </div>

                <CalendarCheck size={25} />
              </div>

              <div className="booking-form__grid">
                <label>
                  Full Name
                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    required
                  />
                </label>

                <label>
                  Email Address
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                  />
                </label>

                <label>
                  Phone / WhatsApp
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+256..."
                    required
                  />
                </label>

                <label>
                  Number of Guests
                  <select name="guests" defaultValue="" required>
                    <option value="" disabled>
                      Select guests
                    </option>
                    <option value="1">1 guest</option>
                    <option value="2">2 guests</option>
                    <option value="3">3 guests</option>
                    <option value="4">4 guests</option>
                    <option value="5">5 guests</option>
                    <option value="6+">6+ guests</option>
                  </select>
                </label>

                <label>
                  Check-in
                  <input type="date" name="checkin" required />
                </label>

                <label>
                  Check-out
                  <input type="date" name="checkout" required />
                </label>

                <label>
                  Stay Preference
                  <select name="stay" defaultValue="" required>
                    <option value="" disabled>
                      Choose an option
                    </option>
                    <option value="room">Accommodation</option>
                    <option value="camping">Camping</option>
                    <option value="both">Accommodation + Camping</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </label>

                <label>
                  Experience Interest
                  <select name="experience" defaultValue="">
                    <option value="" disabled>
                      Choose an option
                    </option>
                    <option value="kibale">Kibale National Park</option>
                    <option value="crater-lakes">Crater Lakes</option>
                    <option value="guided-tours">Guided Tours</option>
                    <option value="wildlife">Wildlife & Nature</option>
                    <option value="none">No experience planned yet</option>
                  </select>
                </label>

                <label className="booking-form__full">
                  Message
                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Tell us anything that would help us plan your stay..."
                  />
                </label>
              </div>

              <div className="booking-form__footer">
                {submissionMessage && (
                  <p className="form-submission-message" role="status">
                    {submissionMessage}
                  </p>
                )}

                <p>
                  Your enquiry is a request for information. Our team will
                  confirm availability and arrangements with you.
                </p>

                <button type="submit" className="btn btn-dark">
                  Send Booking Enquiry
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section booking-benefits">
        <div className="container">
          <div className="section-heading-centered">
            <span className="eyebrow">WHY BOOK DIRECTLY</span>

            <h2>
              Make planning
              <span>part of the experience.</span>
            </h2>

            <p>
              Tell us what matters to you and let us help connect the pieces
              of your Kibale journey.
            </p>
          </div>

          <div className="booking-benefits__grid">
            {bookingBenefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="booking-benefit-card"
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                >
                  <div className="booking-benefit-card__number">
                    0{index + 1}
                  </div>

                  <div className="booking-benefit-card__icon">
                    <Icon size={21} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* STAY OPTIONS */}
      <section className="section booking-options">
        <div className="container">
          <div className="booking-options__header">
            <div>
              <span className="eyebrow">BUILD YOUR STAY</span>

              <h2>
                Stay.
                <span>Dine. Explore.</span>
              </h2>
            </div>

            <p>
              Explore the different parts of the Kibale Tourist&apos;s Inn
              experience before you arrive.
            </p>
          </div>

          <div className="booking-options__grid">
            {stayOptions.map((option, index) => (
              <motion.article
                className="booking-option-card"
                key={option.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <div className="booking-option-card__image">
                  <img src={option.image} alt={option.title} />
                  <span>{option.number}</span>
                </div>

                <div className="booking-option-card__content">
                  <h3>{option.title}</h3>

                  <p>{option.text}</p>

                  <Link to={option.link} className="inline-link">
                    Explore
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="booking-cta">
        <div className="container">
          <motion.div
            className="booking-cta__inner"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <CalendarCheck size={28} />

            <span className="eyebrow eyebrow--gold">
              KIBALE TOURIST&apos;S INN
            </span>

            <h2>
              Your Kibale story
              <span>starts here.</span>
            </h2>

            <p>
              Send us your dates and requirements and let&apos;s start planning
              your stay in Western Uganda.
            </p>

            <div className="booking-cta__actions">
              <a
                href="https://wa.me/256755517111"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
              >
                <MessageCircle size={18} />
                WhatsApp Reservations
              </a>

              <a href="#booking-form" className="btn btn-outline-light">
                Send an Enquiry
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default Booking;