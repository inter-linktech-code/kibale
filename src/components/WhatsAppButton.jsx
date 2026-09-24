
import { Bot, MessageCircle, Send, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./WhatsAppButton.css";

const assistantTopics = [
  {
    label: "Where can I stay?",
    prompt: "What accommodation do you offer?",
    response:
      "Kibale Tourist's Inn offers comfortable private rooms in peaceful surroundings. It is a convenient base for couples, families and travellers exploring Kibale National Park, crater lakes and Western Uganda.",
    link: "/accommodation",
    linkLabel: "View accommodation",
  },
  {
    label: "Is there a restaurant?",
    prompt: "Do you have a restaurant and bar?",
    response:
      "The restaurant is a convenient place to enjoy breakfast before the forest, a relaxed meal during your stay and refreshing drinks at the end of the day. Ask our team about dining details and availability.",
    link: "/restaurant",
    linkLabel: "Explore restaurant",
  },
  {
    label: "What can I do nearby?",
    prompt: "What activities are nearby?",
    response:
      "Choose guided forest experiences, nature and walking tours, photography-friendly routes or local cultural experiences. Our team can shape the pace around your interests and time.",
    link: "/guided-tours",
    linkLabel: "See guided tours",
  },
  {
    label: "Can I go camping?",
    prompt: "Do you offer camping?",
    response:
      "The Inn also offers an outdoor camping experience for travellers who want a closer connection with nature. Contact our team to confirm what to bring, availability and arrangements for your dates.",
    link: "/camping",
    linkLabel: "Discover camping",
  },
  {
    label: "Where are you located?",
    prompt: "Where is Kibale Tourist's Inn located?",
    response:
      "Kibale Tourist's Inn is in Isunga, near Kibale National Park in Western Uganda. Open the contact page for directions, or ask our team to help you plan transport.",
    link: "/contact",
    linkLabel: "View contact details",
  },
];

function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const whatsappNumber = "256755517111";

  const lastVisitorQuestion = [...messages]
    .reverse()
    .find((message) => message.type === "visitor")?.text;

  const whatsappMessage = encodeURIComponent(
    lastVisitorQuestion
      ? `Hello Kibale Tourist's Inn, I have a question: ${lastVisitorQuestion}`
      : "Hello Kibale Tourist's Inn, I would like help planning my visit."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const askAssistant = (topic) => {
    setMessages((currentMessages) => [
      ...currentMessages,
      { type: "visitor", text: topic.prompt },
      {
        type: "assistant",
        text: topic.response,
        link: topic.link,
        linkLabel: topic.linkLabel,
      },
    ]);
  };

  return (
    <div className={`whatsapp-widget ${isOpen ? "is-open" : ""}`}>
      {/* Tourism assistant panel */}
      <div className="whatsapp-message">
        <div className="whatsapp-message__header">
          <div className="whatsapp-message__icon">
            <Bot size={18} />
          </div>

          <div>
            <strong>Kibale Guide Assistant</strong>
            <span>Quick answers, then our team</span>
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

        <div className="whatsapp-message__intro">
          <p>
            Choose a question for a quick answer. For prices, availability,
            transport or special requests, our team can help directly.
          </p>
        </div>

        {messages.length > 0 && (
          <div className="whatsapp-message__conversation" aria-live="polite">
            {messages.map((message, index) => (
              <div
                className={`whatsapp-message__bubble whatsapp-message__bubble--${message.type}`}
                key={`${message.type}-${index}`}
              >
                <span>{message.text}</span>
                {message.link && (
                  <Link to={message.link} onClick={() => setIsOpen(false)}>
                    {message.linkLabel}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="whatsapp-message__topics">
          {assistantTopics.map((topic) => (
            <button
              type="button"
              className="whatsapp-message__topic"
              key={topic.label}
              onClick={() => askAssistant(topic)}
            >
              <span>{topic.label}</span>
              <Send size={13} />
            </button>
          ))}
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-message__button"
        >
          <MessageCircle size={18} />
          <span>Talk to a human agent</span>
        </a>
      </div>

      {/* Floating Button */}
      <button
        type="button"
        className="whatsapp-floating-button"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label={
          isOpen ? "Close Kibale guide assistant" : "Open Kibale guide assistant"
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
          Quick lodge answers
        </span>
      )}
    </div>
  );
}

export default WhatsAppButton;
