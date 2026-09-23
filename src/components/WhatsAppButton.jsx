
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import "./WhatsAppButton.css";

function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = "256755517111";

  const whatsappMessage = encodeURIComponent(
    "Hello Kibale Tourist's Inn, I would like to make an enquiry about staying at the Inn."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className={`whatsapp-widget ${isOpen ? "is-open" : ""}`}>
      {/* Message Bubble */}
      <div className="whatsapp-message">
        <div className="whatsapp-message__header">
          <div className="whatsapp-message__icon">
            <MessageCircle size={17} />
          </div>

          <div>
            <strong>Kibale Tourist&apos;s Inn</strong>
            <span>Usually replies quickly</span>
          </div>

          <button
            type="button"
            className="whatsapp-message__close"
            onClick={() => setIsOpen(false)}
            aria-label="Close WhatsApp message"
          >
            <X size={16} />
          </button>
        </div>

        <p>
          Planning a stay in Kibale? Chat with our team about accommodation,
          dining, camping and experiences.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-message__button"
        >
          <MessageCircle size={18} />
          <span>Chat on WhatsApp</span>
        </a>
      </div>

      {/* Floating Button */}
      <button
        type="button"
        className="whatsapp-floating-button"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label={
          isOpen ? "Close WhatsApp contact panel" : "Open WhatsApp contact panel"
        }
        aria-expanded={isOpen}
      >
        <span className="whatsapp-floating-button__pulse" />

        <span className="whatsapp-floating-button__icon">
          {isOpen ? <X size={24} /> : <MessageCircle size={25} />}
        </span>
      </button>

      {/* Tooltip */}
      {!isOpen && (
        <span className="whatsapp-tooltip">
          Chat with us
        </span>
      )}
    </div>
  );
}

export default WhatsAppButton;
