import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, X, Bot, User } from 'lucide-react';

/**
 * SparklesAiBot - Interactive floating AI assistant chat component.
 */
const SparklesAiBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: 'Hey there! I am the Village Vignani AI Assistant. Ask me anything about Arduino, ESP8266, or our courses!' }
  ]);
  
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { id: Date.now(), sender: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    // Simulate smart responses
    setTimeout(() => {
      let botResponse = "That sounds cool! You should explore our premium courses section to dive deep, or check our YouTube Channel @villagevignani for complete step-by-step videos.";
      const query = input.toLowerCase();

      if (query.includes('arduino') || query.includes('what is arduino')) {
        botResponse = "The 'What is Arduino' course is perfect for beginners! It covers microcontrollers, digital/analog pins, programming structure, and basic electronics. You can enroll for free right on the homepage!";
      } else if (query.includes('sensor') || query.includes('10 sensor') || query.includes('sensors')) {
        botResponse = "Our '10 Sensors in 10 Days' course teaches you one new sensor everyday (like DHT11, PIR, Ultrasonic, LDR, etc.) with hands-on source code. Enroll on the home page to start learning!";
      } else if (query.includes('100 days') || query.includes('100 day') || query.includes('sms')) {
        botResponse = "The '100 Days of Code' course sends you a fresh Arduino/ESP8266 coding project via SMS every single day! Just enter your mobile number on the 100 Days Page to activate it.";
      } else if (query.includes('esp8266') || query.includes('wifi') || query.includes('nodemcu') || query.includes('zip')) {
        botResponse = "You can download fully commented ESP8266 codes, wiring circuit diagrams, and project ZIP files (like ESP8266 Web Servers, WiFi Managers) directly in our Downloads section!";
      } else if (query.includes('admin') || query.includes('login') || query.includes('edit')) {
        botResponse = "Only the channel administrator (villabgvignani@gmail.com) can modify the site content or manage course enrollers. Regular users can enroll and download all source files.";
      } else if (query.includes('youtube') || query.includes('channel') || query.includes('subscribe')) {
        botResponse = "Check out our YouTube Channel: www.youtube.com/@villagevignani for interactive video walk-throughs of all these projects!";
      }

      setMessages((prev) => [...prev, { id: Date.now() + 1, sender: 'bot', text: botResponse }]);
    }, 800);
  };

  return (
    <>
      {/* Floating Sparkle Button */}
      <button className="ai-bot-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Ask AI Assistant">
        <Sparkles size={26} color="#ffffff" />
      </button>

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="ai-chat-panel glass" style={{ border: '1px solid rgba(0, 136, 255, 0.25)' }}>
          {/* Header */}
          <div className="ai-chat-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Bot size={20} color="#0088ff" />
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: '700', margin: 0 }}>Vignani AI</h4>
                <span style={{ fontSize: '0.7rem', color: '#0088ff', fontWeight: '500' }}>ONLINE • ASSISTANT</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              style={{ background: 'none', border: 'none', color: 'var(--white-dark)', cursor: 'pointer' }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Message List */}
          <div className="ai-chat-messages">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`ai-msg ${msg.sender === 'user' ? 'ai-msg-user' : 'ai-msg-bot'}`}
              >
                <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  {msg.sender === 'bot' && <Bot size={14} style={{ marginTop: '3px', flexShrink: 0 }} />}
                  {msg.sender === 'user' && <User size={14} style={{ marginTop: '3px', flexShrink: 0 }} />}
                  <span>{msg.text}</span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Form Input */}
          <form onSubmit={handleSend} className="ai-chat-input-wrap">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Arduino, Sensors, Codes..."
              className="form-input"
              style={{ borderRadius: '20px', padding: '8px 16px', fontSize: '0.85rem' }}
            />
            <button 
              type="submit" 
              className="btn btn-primary"
              style={{ borderRadius: '50%', width: '36px', height: '36px', padding: 0, flexShrink: 0 }}
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default SparklesAiBot;
