import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  MessageCircle,
  CalendarDays,
} from "lucide-react";
import "./Navbar.css";

// Change this filename to the exact name of your logo file
import logo from "../assets/logo.png";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const closeMobile = () => {
    setMobileOpen(false);
    setOpenMenu(null);
  };

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <header className="site-header">
      {/* =====================================================
          TOP INFORMATION BAR
      ===================================================== */}

      <div className="top-bar">
        <div className="top-bar-inner">
          <div className="top-bar-location">
            <span className="top-bar-dot"></span>
            <span>Kibale, Western Uganda</span>
          </div>

          <div className="top-bar-right">
            <a href="tel:+256782159173">
              <Phone size={14} />
              <span>0782 159 173</span>
            </a>

            <a
              href="https://wa.me/256755517111"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={14} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN NAVIGATION
      ===================================================== */}

      <nav className="navbar">
        <div className="navbar-inner">
          {/* =================================================
              BRAND
          ================================================= */}

          <Link
            to="/"
            className="brand"
            onClick={closeMobile}
            aria-label="Kibale Tourist's Inn home"
          >
            <div className="brand-logo">
              <img
                src={logo}
                alt="Kibale Tourist's Inn logo"
              />
            </div>

            <div className="brand-text">
              <span className="brand-name">
                Kibale Tourist&apos;s Inn
              </span>

              <span className="brand-tagline">
                Comfort • Nature • Discovery
              </span>
            </div>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <div className="desktop-navigation">
            {/* HOME */}

            <NavLink
              to="/"
              onClick={() => setOpenMenu(null)}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              Home
            </NavLink>

            {/* =================================================
                STAY DROPDOWN
            ================================================= */}

            <div className="nav-dropdown">
              <button
                type="button"
                className={`nav-link dropdown-trigger ${
                  openMenu === "stay" ? "active" : ""
                }`}
                onClick={() => toggleMenu("stay")}
                aria-expanded={openMenu === "stay"}
              >
                <span>Stay</span>
                <ChevronDown size={15} />
              </button>

              <div
                className={`dropdown-menu ${
                  openMenu === "stay" ? "show" : ""
                }`}
              >
                <div className="dropdown-heading">
                  <span className="dropdown-eyebrow">
                    Stay With Us
                  </span>

                  <strong>
                    Comfortable accommodation in Kibale
                  </strong>
                </div>

                <Link
                  to="/accommodation"
                  onClick={() => setOpenMenu(null)}
                >
                  <span className="dropdown-item-title">
                    Accommodation
                  </span>

                  <span className="dropdown-item-description">
                    Discover comfortable rooms designed for
                    relaxing stays near Kibale National Park.
                  </span>
                </Link>

                <Link
                  to="/booking"
                  onClick={() => setOpenMenu(null)}
                >
                  <span className="dropdown-item-title">
                    Book Your Stay
                  </span>

                  <span className="dropdown-item-description">
                    Send us your travel dates and accommodation
                    enquiry.
                  </span>
                </Link>
              </div>
            </div>

            {/* =================================================
                RESTAURANT
            ================================================= */}

            <NavLink
              to="/restaurant"
              onClick={() => setOpenMenu(null)}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              Restaurant &amp; Bar
            </NavLink>

            {/* =================================================
                EXPERIENCES DROPDOWN
            ================================================= */}

            <div className="nav-dropdown">
              <button
                type="button"
                className={`nav-link dropdown-trigger ${
                  openMenu === "experiences" ? "active" : ""
                }`}
                onClick={() => toggleMenu("experiences")}
                aria-expanded={openMenu === "experiences"}
              >
                <span>Experiences</span>
                <ChevronDown size={15} />
              </button>

              <div
                className={`dropdown-menu experiences-menu ${
                  openMenu === "experiences" ? "show" : ""
                }`}
              >
                <div className="dropdown-heading">
                  <span className="dropdown-eyebrow">
                    Explore Kibale
                  </span>

                  <strong>
                    Discover the landscapes around us
                  </strong>
                </div>

                <Link
                  to="/kibale-national-park"
                  onClick={() => setOpenMenu(null)}
                >
                  <span className="dropdown-item-title">
                    Kibale National Park
                  </span>

                  <span className="dropdown-item-description">
                    Explore one of Uganda&apos;s remarkable
                    rainforest destinations.
                  </span>
                </Link>

                <Link
                  to="/crater-lakes"
                  onClick={() => setOpenMenu(null)}
                >
                  <span className="dropdown-item-title">
                    Crater Lakes
                  </span>

                  <span className="dropdown-item-description">
                    Experience the scenic crater-lake landscapes
                    around Fort Portal and Kibale.
                  </span>
                </Link>

                <Link
                  to="/guided-tours"
                  onClick={() => setOpenMenu(null)}
                >
                  <span className="dropdown-item-title">
                    Guided Tours
                  </span>

                  <span className="dropdown-item-description">
                    Discover nature, culture and unforgettable
                    local experiences with a guide.
                  </span>
                </Link>

                <Link
                  to="/camping"
                  onClick={() => setOpenMenu(null)}
                >
                  <span className="dropdown-item-title">
                    Camping
                  </span>

                  <span className="dropdown-item-description">
                    Sleep closer to nature with our outdoor
                    camping experience.
                  </span>
                </Link>
              </div>
            </div>

            {/* GALLERY */}

            <NavLink
              to="/gallery"
              onClick={() => setOpenMenu(null)}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              Gallery
            </NavLink>

            {/* ABOUT */}

            <NavLink
              to="/about"
              onClick={() => setOpenMenu(null)}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              About
            </NavLink>

            {/* CONTACT */}

            <NavLink
              to="/contact"
              onClick={() => setOpenMenu(null)}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* =================================================
              DESKTOP BOOKING CTA
          ================================================= */}

          <div className="navbar-actions">
            <Link to="/booking" className="navbar-book-button">
              <CalendarDays size={17} />
              <span>Book Your Stay</span>
            </Link>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={
              mobileOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </button>
        </div>

        {/* =====================================================
            MOBILE NAVIGATION
        ===================================================== */}

        <div
          className={`mobile-navigation ${
            mobileOpen ? "mobile-navigation-open" : ""
          }`}
        >
          <div className="mobile-navigation-inner">
            {/* HOME */}

            <NavLink
              to="/"
              onClick={closeMobile}
              className="mobile-nav-link"
            >
              Home
            </NavLink>

            {/* =================================================
                MOBILE STAY
            ================================================= */}

            <div className="mobile-nav-group">
              <button
                type="button"
                className="mobile-nav-parent"
                onClick={() => toggleMenu("mobile-stay")}
              >
                <span>Stay</span>

                <ChevronDown
                  size={18}
                  className={
                    openMenu === "mobile-stay"
                      ? "mobile-chevron-open"
                      : ""
                  }
                />
              </button>

              <div
                className={`mobile-submenu ${
                  openMenu === "mobile-stay"
                    ? "mobile-submenu-open"
                    : ""
                }`}
              >
                <NavLink
                  to="/accommodation"
                  onClick={closeMobile}
                >
                  Accommodation
                </NavLink>

                <NavLink
                  to="/booking"
                  onClick={closeMobile}
                >
                  Book Your Stay
                </NavLink>
              </div>
            </div>

            {/* RESTAURANT */}

            <NavLink
              to="/restaurant"
              onClick={closeMobile}
              className="mobile-nav-link"
            >
              Restaurant &amp; Bar
            </NavLink>

            {/* =================================================
                MOBILE EXPERIENCES
            ================================================= */}

            <div className="mobile-nav-group">
              <button
                type="button"
                className="mobile-nav-parent"
                onClick={() =>
                  toggleMenu("mobile-experiences")
                }
              >
                <span>Experiences</span>

                <ChevronDown
                  size={18}
                  className={
                    openMenu === "mobile-experiences"
                      ? "mobile-chevron-open"
                      : ""
                  }
                />
              </button>

              <div
                className={`mobile-submenu ${
                  openMenu === "mobile-experiences"
                    ? "mobile-submenu-open"
                    : ""
                }`}
              >
                <NavLink
                  to="/kibale-national-park"
                  onClick={closeMobile}
                >
                  Kibale National Park
                </NavLink>

                <NavLink
                  to="/crater-lakes"
                  onClick={closeMobile}
                >
                  Crater Lakes
                </NavLink>

                <NavLink
                  to="/guided-tours"
                  onClick={closeMobile}
                >
                  Guided Tours
                </NavLink>

                <NavLink
                  to="/camping"
                  onClick={closeMobile}
                >
                  Camping
                </NavLink>
              </div>
            </div>

            {/* GALLERY */}

            <NavLink
              to="/gallery"
              onClick={closeMobile}
              className="mobile-nav-link"
            >
              Gallery
            </NavLink>

            {/* ABOUT */}

            <NavLink
              to="/about"
              onClick={closeMobile}
              className="mobile-nav-link"
            >
              About
            </NavLink>

            {/* CONTACT */}

            <NavLink
              to="/contact"
              onClick={closeMobile}
              className="mobile-nav-link"
            >
              Contact
            </NavLink>

            {/* =================================================
                MOBILE BOOKING
            ================================================= */}

            <div className="mobile-booking">
              <Link
                to="/booking"
                onClick={closeMobile}
                className="mobile-book-button"
              >
                <CalendarDays size={18} />
                Book Your Stay
              </Link>

              <a
                href="https://wa.me/256755517111"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-whatsapp-button"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </div>

            {/* =================================================
                MOBILE CONTACT
            ================================================= */}

            <div className="mobile-contact">
              <a href="tel:+256782159173">
                <Phone size={15} />
                0782 159 173
              </a>

              <a href="tel:+256786197552">
                <Phone size={15} />
                0786 197 552
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;