import { Link } from "react-router-dom";

import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import "./Footer.css";
import logo from "../assets/logo.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      {/* =========================================
          MAIN FOOTER
      ========================================= */}

      <div className="site-footer__main">
        <div className="container">
          <div className="site-footer__grid">
            {/* BRAND */}

            <div className="site-footer__brand">
              <Link
                to="/"
                className="site-footer__logo"
                aria-label="Kibale Tourist's Inn home"
              >
                <span className="site-footer__logo-image">
                  <img
                    src={logo}
                    alt="Kibale Tourist's Inn logo"
                  />
                </span>

                <span className="site-footer__logo-text">
                  <strong>
                    Kibale Tourist&apos;s Inn
                  </strong>

                  <small>
                    Comfort • Nature • Discovery
                  </small>
                </span>
              </Link>

              <p className="site-footer__description">
                Discover refined comfort in the heart of
                Western Uganda. Kibale Tourist&apos;s Inn offers
                welcoming accommodation, restaurant and bar
                experiences, camping, and guided adventures
                around Kibale National Park and the crater lakes.
              </p>

            </div>

            {/* EXPLORE */}

            <div className="site-footer__column">
              <span className="site-footer__eyebrow">
                Explore
              </span>

              <h3>Discover Your Stay</h3>

              <nav className="site-footer__links">
                <Link to="/">
                  Home
                </Link>

                <Link to="/accommodation">
                  Accommodation
                </Link>

                <Link to="/restaurant">
                  Restaurant &amp; Bar
                </Link>

                <Link to="/camping">
                  Camping
                </Link>

                <Link to="/gallery">
                  Gallery
                </Link>

                <Link to="/about">
                  About Us
                </Link>
              </nav>
            </div>

            {/* EXPERIENCES */}

            <div className="site-footer__column">
              <span className="site-footer__eyebrow">
                Experiences
              </span>

              <h3>Explore Kibale</h3>

              <nav className="site-footer__links">
                <Link to="/kibale-national-park">
                  Kibale National Park
                </Link>

                <Link to="/crater-lakes">
                  Crater Lakes
                </Link>

                <Link to="/guided-tours">
                  Guided Tours
                </Link>

                <Link to="/experiences">
                  Things To Do
                </Link>

                <Link to="/booking">
                  Plan Your Stay
                </Link>

                <Link to="/contact">
                  Contact Us
                </Link>
              </nav>
            </div>

            {/* CONTACT */}

            <div className="site-footer__column site-footer__contact">
              <span className="site-footer__eyebrow">
                Contact
              </span>

              <h3>
                Let&apos;s Plan Your Visit
              </h3>

              <div className="site-footer__contact-list">
                {/* PHONE */}

                <a href="tel:+256782159173">
                  <span className="site-footer__contact-icon">
                    <Phone size={16} />
                  </span>

                  <span>
                    <small>
                      Call Us
                    </small>

                    <strong>
                      0782 159 173
                    </strong>
                  </span>
                </a>

                {/* SECOND PHONE */}

                <a href="tel:+256786197552">
                  <span className="site-footer__contact-icon">
                    <Phone size={16} />
                  </span>

                  <span>
                    <small>
                      Reservations
                    </small>

                    <strong>
                      0786 197 552
                    </strong>
                  </span>
                </a>

                {/* WHATSAPP */}

                <a
                  href="https://wa.me/256755517111"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="site-footer__contact-icon">
                    <MessageCircle size={16} />
                  </span>

                  <span>
                    <small>
                      WhatsApp
                    </small>

                    <strong>
                      0755 517 111
                    </strong>
                  </span>
                </a>

                {/* LOCATION */}

                <a
                  href="https://www.google.com/maps/search/?api=1&query=0.504640,30.302670"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="site-footer__contact-icon">
                    <MapPin size={16} />
                  </span>

                  <span>
                    <small>
                      Location
                    </small>

                    <strong>
                      Kibale, Western Uganda
                    </strong>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          BOOKING STRIP
      ========================================= */}

      <div className="site-footer__booking">
        <div className="container">
          <div className="site-footer__booking-inner">
            <div>
              <span className="site-footer__booking-eyebrow">
                Your Kibale Escape
              </span>

              <h3>
                Stay close to nature.
                <em>
                  Experience more.
                </em>
              </h3>
            </div>

            <Link
              to="/booking"
              className="site-footer__booking-button"
            >
              <span>
                Book Your Stay
              </span>

              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* =========================================
          BOTTOM FOOTER
      ========================================= */}

      <div className="site-footer__bottom">
        <div className="container">
          <div className="site-footer__bottom-inner">
            <p>
              © {currentYear} Kibale Tourist&apos;s Inn.
              All rights reserved.
            </p>

            <div className="site-footer__bottom-links">
              <Link to="/about">
                About
              </Link>

              <Link to="/contact">
                Contact
              </Link>

              <Link to="/booking">
                Reservations
              </Link>
            </div>

            <a
              href="mailto:info@kibaletouristsinn.com"
              className="site-footer__email"
            >
              <Mail size={14} />

              <span>
                Get in touch
              </span>
            </a>
          </div>

          {/* =====================================
              POWERED BY
          ===================================== */}

          <div className="site-footer__powered">
            <span>
              Powered by
            </span>

            <a
              href="https://inter-linktech.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Inter-Link Tech
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;