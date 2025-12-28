import { useState, useRef, useEffect } from "react";
import styles from "./styles.module.css";

export default function ChatbotClient() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hello! I'm your book assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const messagesEndRef = useRef(null);

  // Toggle theme
  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    if (!isLightMode) {
      document.documentElement.classList.add('light-mode');
    } else {
      document.documentElement.classList.remove('light-mode');
    }
  };

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Check system preference on mount
  useEffect(() => {
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    if (prefersLight) {
      setIsLightMode(true);
      document.documentElement.classList.add('light-mode');
    }
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch(
        "https://thriving-heart-production-8071.up.railway.app/api/query",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: userMsg.text
          })
        }
      );

      if (!res.ok) {
        throw new Error("Server error");
      }

      const data = await res.json();

      setIsTyping(false);

      const botMsg = {
        role: "bot",
        text: data.answer || "No answer received"
      };

      setMessages(prev => [...prev, botMsg]);

    } catch (error) {
      console.error(error);
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        { role: "bot", text: "⚠️ Server error. Please try again." }
      ]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      { role: "bot", text: "Chat cleared! How can I assist you with books today?" }
    ]);
  };

  return (
    <div className={styles.container}>
      {/* Floating Button */}
      {!open && (
        <button 
          className={styles.floatingBtn}
          onClick={() => setOpen(true)}
          aria-label="Open chat"
        >
         <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
            <path d="M9.5 9h.01" />
            <path d="M14.5 9h.01" />
            <path d="M9.5 13a3.5 3.5 0 0 0 5 0" />
          </svg>
          <span className={styles.notificationBadge}>1</span>
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div className={styles.chatBox}>
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <div className={styles.avatar}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <div className={styles.headerText}>
                <h3 className={styles.title}>Book Assistant</h3>
                <span className={styles.subtitle}>Online • AI Powered</span>
              </div>
            </div>
            <div className={styles.headerRight}>
              <button 
                className={styles.themeToggle}
                onClick={toggleTheme}
                aria-label="Toggle theme"
                title="Toggle theme"
              >
                {isLightMode ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                )}
              </button>
              <button 
                className={styles.iconBtn}
                onClick={clearChat}
                aria-label="Clear chat"
                title="Clear chat"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
              </button>
              <button 
                className={styles.iconBtn}
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                title="Close"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className={styles.messages}>
            {messages.map((m, i) => (
              <div
                key={i}
                className={`${styles.message} ${m.role === "user" ? styles.userMessage : styles.botMessage}`}
              >
                {m.role === "bot" && (
                  <div className={styles.messageAvatar}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                )}
                <div className={styles.messageContent}>
                  <div className={styles.messageText}>{m.text}</div>
                  <div className={styles.messageMeta}>
                    <span className={styles.messageTime}>
                      {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                    {m.role === "user" && (
                      <span className={styles.readIndicator}>✓✓</span>
                    )}
                  </div>
                </div>
                {m.role === "user" && (
                  <div className={styles.messageAvatar}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className={styles.typingIndicator}>
                <div className={styles.typingContent}>
                  <div className={styles.typingDot}></div>
                  <div className={styles.typingDot}></div>
                  <div className={styles.typingDot}></div>
                </div>
                <span className={styles.typingText}>AI is thinking...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className={styles.inputArea}>
            <div className={styles.inputWrapper}>
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about books, recommendations, or authors..."
                className={styles.input}
              />
              <button 
                className={`${styles.sendBtn} ${input.trim() ? styles.active : ''}`}
                onClick={sendMessage}
                disabled={!input.trim()}
                aria-label="Send message"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
            <div className={styles.inputHint}>
              <span className={styles.hintText}>
                Press Enter to send • Shift + Enter for new line
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


