
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
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

import bookingHero from "../assets/booking-hero.jpg";
import bookingRoom from "../assets/booking-room.jpg";
import bookingDining from "../assets/booking-dining.jpg";
import bookingNature from "../assets/booking-nature.jpg";

import "./Booking.css";

const WHATSAPP_NUMBER = "256755517111";

const bookingBenefits = [
  {
    icon: ShieldCheck,
    title: "Direct Enquiry",
    text: "Speak directly with the Inn team about your preferred dates and stay.",
  },
  {
    icon: Users,
    title: "Personal Service",
    text: "Tell us what you need and discuss your stay with our team.",
  },
  {
    icon: MapPin,
    title: "Kibale Location",
    text: "Use the Inn as a base for exploring Kibale and Western Uganda.",
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
    text: "Ask about meals, refreshments and dining during your stay.",
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

function getToday() {
  const date = new Date();

  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");
}

function isValidDateString(value) {
  if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;

  const date = new Date(`${value}T00:00:00`);

  return (
    !Number.isNaN(date.getTime()) &&
    date.toISOString().slice(0, 10) === value
  );
}

function Booking() {
  const [searchParams] = useSearchParams();
  const today = getToday();

  
const requestedCheckin =
  searchParams.get("checkin") ||
  searchParams.get("checkIn") ||
  "";

const requestedCheckout =
  searchParams.get("checkout") ||
  searchParams.get("checkOut") ||
  "";

const requestedAdults = searchParams.get("adults") || "2";
const requestedChildren = searchParams.get("children") || "0";
const requestedRooms = searchParams.get("rooms") || "1";

const requestedRoom = searchParams.get("room") || "";
const requestedRoomView = searchParams.get("roomView") || "";
const requestedStay = searchParams.get("stay") || "";


  const initialCheckin =
    isValidDateString(requestedCheckin) && requestedCheckin >= today
      ? requestedCheckin
      : "";

  const initialCheckout =
    isValidDateString(requestedCheckout) &&
    requestedCheckout > (initialCheckin || today)
      ? requestedCheckout
      : "";

  const [checkin, setCheckin] = useState(initialCheckin);
  const [checkout, setCheckout] = useState(initialCheckout);

  const [adults, setAdults] = useState(
    /^[1-9]\d*$/.test(requestedAdults) &&
      Number(requestedAdults) <= 10
      ? requestedAdults
      : "2"
  );

  const [children, setChildren] = useState(
    /^\d+$/.test(requestedChildren) &&
      Number(requestedChildren) <= 6
      ? requestedChildren
      : "0"
  );

  const [stay, setStay] = useState(
    ["room", "camping", "both", "unsure"].includes(requestedStay)
      ? requestedStay
      : requestedRoom
        ? "room"
        : ""
  );

  
const [rooms, setRooms] = useState(
  /^\d+$/.test(requestedRooms) &&
    Number(requestedRooms) >= 1 &&
    Number(requestedRooms) <= 10
    ? requestedRooms
    : "1"
);


  const [experience, setExperience] = useState("");
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [submissionError, setSubmissionError] = useState("");

  const handleCheckinChange = (event) => {
    const nextCheckin = event.target.value;

    setCheckin(nextCheckin);
    setSubmissionMessage("");
    setSubmissionError("");

    if (checkout && nextCheckin && checkout <= nextCheckin) {
      setCheckout("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmissionMessage("");
    setSubmissionError("");

    if (!checkin || !checkout) {
      setSubmissionError("Please select both check-in and check-out dates.");
      return;
    }

    if (checkin < today) {
      setSubmissionError("Check-in cannot be in the past.");
      return;
    }

    if (checkout <= checkin) {
      setSubmissionError("Check-out must be after check-in.");
      return;
    }

    const formData = new FormData(event.currentTarget);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !phone || !stay) {
      setSubmissionError(
        "Please complete your name, phone number and stay preference."
      );
      return;
    }

    const stayLabels = {
      room: "Accommodation — Regular Comfort",
      camping: "Camping",
      both: "Accommodation + Camping",
      unsure: "Not sure yet",
    };

    const experienceLabels = {
      kibale: "Kibale National Park",
      "crater-lakes": "Crater Lakes",
      "guided-tours": "Guided Tours",
      wildlife: "Wildlife & Nature",
      none: "No experience planned yet",
      "": "Not decided",
    };

    const totalGuests = Number(adults) + Number(children);

    const enquiry = [
      "Hello Kibale Tourist's Inn, I would like to make a booking enquiry.",
      "",
      `Full name: ${name}`,
      `Email: ${email || "Not provided"}`,
      `Phone / WhatsApp: ${phone}`,
      `Adults: ${adults}`,
      `Children: ${children}`,
      `Total guests: ${totalGuests}`,
      `Check-in: ${checkin}`,
      `Check-out: ${checkout}`,
      `Stay preference: ${stayLabels[stay] || stay}`,
      `Room preference: ${requestedRoom || "Regular Comfort / to be discussed"}`,
      `Room details of interest: ${requestedRoomView || "No specific room view selected"}`,
      `Experience interest: ${experienceLabels[experience] || "Not decided"}`,
      `Additional message: ${message || "None"}`,
      "",
      "Please confirm availability, rates and arrangements. I understand this is an enquiry and not a confirmed reservation.",
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(enquiry)}`;

    const whatsappWindow = window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );

    if (whatsappWindow) {
      setSubmissionMessage(
        "WhatsApp should open with your enquiry. Review the details and press Send to contact our team."
      );
    } else {
      setSubmissionMessage(
        "Your enquiry is ready. If WhatsApp did not open, use the WhatsApp button below to contact our team."
      );
    }
  };

  return (
    <main className="booking-page">
      {/* HERO */}
      <section className="booking-hero">
        <div className="booking-hero__image">
          <img
            src={bookingHero}
            alt="Kibale Tourist's Inn in Western Uganda"
            fetchPriority="high"
          />
        </div>

        <div className="booking-hero__overlay" />

        <div className="container booking-hero__content">
          <motion.div
            className="booking-hero__inner"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
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
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
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
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="eyebrow">YOUR STAY STARTS HERE</span>

              <h2>
                One place.
                <span>Many ways to experience Kibale.</span>
              </h2>
            </motion.div>

            <motion.div
              className="booking-intro__copy"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="lead">
                Whether you are visiting for wildlife, nature, relaxation or
                travelling through Western Uganda, Kibale Tourist&apos;s Inn
                offers a welcoming base for your journey.
              </p>

              <p>
                Send us your preferred dates and requirements. Our team can
                discuss accommodation, dining, camping and local experiences
                with you.
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
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="eyebrow">RESERVATIONS</span>

              <h2>
                Tell us about
                <span>your stay.</span>
              </h2>

              <p>
                Complete the enquiry form so our team can discuss your dates
                and requirements. Your reservation is not confirmed until
                the Inn confirms availability and arrangements.
              </p>

              <div className="booking-contact-card">
                <div className="booking-contact-card__icon">
                  <MessageCircle size={21} />
                </div>

                <div>
                  <span>Prefer WhatsApp?</span>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
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

                <a href="tel:+256786197552">
                  <Phone size={17} />
                  <span>0786 197 552</span>
                </a>

                <a href="mailto:Kibaleinn@gmailcom">
                  <Mail size={17} />
                  <span>Email our team</span>
                </a>

                <div>
                  <MapPin size={17} />
                  <span>Isunga, Kibale, Uganda</span>
                </div>
              </div>
            </motion.div>

            <motion.form
              className="booking-form"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
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
                  Full Name *
                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    autoComplete="name"
                    required
                  />
                </label>

                <label>
                  Email Address
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </label>

                <label>
                  Phone / WhatsApp *
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+256..."
                    autoComplete="tel"
                    required
                  />
                </label>

                <label>
                  Adults *
                  <select
                    name="adults"
                    value={adults}
                    onChange={(event) => setAdults(event.target.value)}
                    required
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
                    name="children"
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

                <label>
                  Check-in *
                  <input
                    type="date"
                    name="checkin"
                    value={checkin}
                    min={today}
                    onChange={handleCheckinChange}
                    required
                  />
                </label>

                <label>
                  Check-out *
                  <input
                    type="date"
                    name="checkout"
                    value={checkout}
                    min={checkin || today}
                    onChange={(event) => {
                      setCheckout(event.target.value);
                      setSubmissionMessage("");
                      setSubmissionError("");
                    }}
                    required
                  />
                </label>

                <label>
                  Stay Preference *
                  <select
                    name="stay"
                    value={stay}
                    onChange={(event) => setStay(event.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Choose an option
                    </option>
                    <option value="room">Accommodation — Regular Comfort</option>
                    <option value="camping">Camping</option>
                    <option value="both">Accommodation + Camping</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </label>

                <label>
                  Experience Interest
                  <select
                    name="experience"
                    value={experience}
                    onChange={(event) => setExperience(event.target.value)}
                  >
                    <option value="">Choose an option</option>
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
                    rows={5}
                    placeholder="Tell us anything that would help us plan your stay..."
                  />
                </label>
              </div>

              
{(requestedRoom || requestedRoomView) && (
  <p className="booking-selected-room">
    <BedDouble size={17} aria-hidden="true" />
    Room preference:{" "}
    <strong>
      {[requestedRoom, requestedRoomView]
        .filter(Boolean)
        .join(" — ")}
    </strong>
  </p>
)}


              {submissionError && (
                <p className="form-error-message" role="alert">
                  {submissionError}
                </p>
              )}

              {submissionMessage && (
                <div className="form-submission-message" role="status">
                  <p>{submissionMessage}</p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open WhatsApp
                    <ArrowRight size={16} />
                  </a>
                </div>
              )}

              <div className="booking-form__footer">
                <p>
                  This form prepares a booking enquiry in WhatsApp. Your
                  reservation is not confirmed until our team confirms
                  availability and arrangements.
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

      
<label>
  Rooms *
  <select
    name="rooms"
    value={rooms}
    onChange={(event) => setRooms(event.target.value)}
    required
  >
    {Array.from({ length: 10 }, (_, index) => index + 1).map(
      (number) => (
        <option value={String(number)} key={number}>
          {number} {number === 1 ? "room" : "rooms"}
        </option>
      )
    )}
  </select>
</label>


      {/* BENEFITS */}
      <section className="section booking-benefits">
        <div className="container">
          <div className="section-heading-centered">
            <span className="eyebrow">WHY CONTACT US DIRECTLY</span>

            <h2>
              Make planning
              <span>part of the experience.</span>
            </h2>

            <p>
              Tell us what matters to you and discuss the details of your
              Kibale journey directly with the Inn team.
            </p>
          </div>

          <div className="booking-benefits__grid">
            {bookingBenefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="booking-benefit-card"
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="booking-option-card__image">
                  <img src={option.image} alt={option.title} loading="lazy" />
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
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

function BedDoubleIcon() {
  return <CalendarCheck size={17} aria-hidden="true" />;
}

export default Booking;
