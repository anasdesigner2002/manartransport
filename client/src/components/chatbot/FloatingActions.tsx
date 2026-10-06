import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faRobot } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { chatbotFallback, chatLanguages, findChatbotAnswer, type ChatLanguage } from "@/data/chatbotKnowledge";
import { openWhatsAppContact } from "@/utils/whatsapp";

export default function FloatingActions() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [language, setLanguage] = useState<ChatLanguage>("english");
  const [messages, setMessages] = useState<
    { from: "bot" | "user"; text: string }[]
  >([]);
  const send = (event: React.FormEvent) => {
    event.preventDefault();
    if (!message.trim()) return;
    setMessages(items => [
      ...items,
      { from: "user", text: message },
      { from: "bot", text: findChatbotAnswer(message, language) },
    ]);
    setMessage("");
  };
  return (
    <>
      <div className="floating-actions">
        <button
          className="floating-button floating-button--chat"
          aria-label="Open multilingual chatbot"
          onClick={() => setOpen(value => !value)}
        >
          <FontAwesomeIcon icon={faRobot} />
        </button>
        <button
          className="floating-button floating-button--whatsapp"
          aria-label="Chat on WhatsApp"
          onClick={() => openWhatsAppContact()}
        >
          <FontAwesomeIcon icon={faMessage} />
        </button>
      </div>
      {open && (
        <div
          className="chatbot-panel"
          role="dialog"
          aria-label="Manar Transport assistant"
        >
          <div className="chatbot-head">
            <div>
              <span className="eyebrow">Hajj Umrah &amp; Ziyarat Assistant</span>
              <strong>How can we help?</strong>
            </div>
            <select className="chatbot-language" value={language} onChange={event => setLanguage(event.target.value as ChatLanguage)} aria-label="Chatbot language">
              {chatLanguages.map(option => <option key={option.id} value={option.id}>{option.label}</option>)}
            </select>
            <button
              className="icon-button"
              onClick={() => setOpen(false)}
              aria-label="Close assistant"
            >
              ×
            </button>
          </div>
          <div className="chatbot-body">
            <div className="chat-message chat-message--bot">
              {language === "english" ? "Assalam-o-alaikum. Choose a language and ask about Hajj, Umrah, Makkah, Madinah, Ziyarat or travel." : chatbotFallback[language].split(".")[0]}
            </div>
            {messages.map((item, index) => (
              <div
                className={`chat-message chat-message--${item.from}`}
                key={`${item.text}-${index}`}
              >
                {item.text}
              </div>
            ))}
          </div>
          <form className="chatbot-form" onSubmit={send}>
            <input
              value={message}
              onChange={event => setMessage(event.target.value)}
              placeholder="Ask about a booking..."
              aria-label="Chat message"
            />
            <button type="submit">
              <FontAwesomeIcon icon={faMessage} />
            </button>
          </form>
          <button
            className="chatbot-escalate"
            onClick={() => openWhatsAppContact()}
          >
            Continue on WhatsApp
          </button>
        </div>
      )}
    </>
  );
}
