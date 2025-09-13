import { useState, useEffect } from "react";
import { Bot, User, Send } from "lucide-react";
import { PremiumButton } from "./ui/premium-button";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatDemo = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const botResponses = [
    "I can help you with tasks, answer questions, and provide insights across various domains.",
    "That's a great question! I'm designed to assist with complex problem-solving and creative tasks.",
    "I'm here 24/7 to support your workflow and help you achieve your goals more efficiently.",
    "My capabilities include data analysis, content creation, coding assistance, and strategic planning.",
  ];

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="glass-card p-6 h-96 flex flex-col">
        <div className="flex-1 overflow-y-auto space-y-4 mb-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-3 animate-slide-up ${
                message.isBot ? "justify-start" : "justify-end"
              }`}
            >
              {message.isBot && (
                <div className="w-8 h-8 rounded-full bg-electric flex items-center justify-center animate-pulse-glow">
                  <Bot className="w-4 h-4 text-primary-foreground" />
                </div>
              )}
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                  message.isBot
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-electric text-primary-foreground"
                }`}
              >
                <p className="text-sm">{message.text}</p>
              </div>
              {!message.isBot && (
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  <User className="w-4 h-4 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
          {isTyping && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-electric flex items-center justify-center animate-pulse-glow">
                <Bot className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-2xl">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-electric rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-electric rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                  <div className="w-2 h-2 bg-electric rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Type your message..."
            className="flex-1 bg-input border border-border rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-electric"
          />
          <PremiumButton
            onClick={handleSendMessage}
            size="icon"
            className="rounded-xl"
          >
            <Send className="w-4 h-4" />
          </PremiumButton>
        </div>
      </div>
    </div>
  );
};

export default ChatDemo;