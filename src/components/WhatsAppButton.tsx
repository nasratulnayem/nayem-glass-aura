import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '8801962351470';
  
  const faqs = [
    {
      question: "I need a custom WordPress website",
      message: "Hi! I'm interested in getting a custom WordPress website developed. Can we discuss the requirements?"
    },
    {
      question: "WordPress theme customization",
      message: "Hello! I need help with customizing my WordPress theme. Can you assist me with this?"
    },
    {
      question: "Website maintenance services",
      message: "Hi Nasratul! I'm looking for ongoing website maintenance services. What packages do you offer?"
    },
    {
      question: "E-commerce development",
      message: "Hello! I need an e-commerce website built. Can we discuss the project details and timeline?"
    },
    {
      question: "General inquiry",
      message: "Hi! I have a web development project in mind. Can we schedule a consultation?"
    }
  ];

  const sendMessage = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="glass-intense hover-lift w-16 h-16 rounded-full bg-background text-text-primary border-2 border-border-glass shadow-xl"
          size="lg"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* FAQ Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 glass-intense rounded-lg p-6 shadow-2xl animate-scale-in">
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            Quick Questions
          </h3>
          
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {faqs.map((faq, index) => (
              <button
                key={index}
                onClick={() => sendMessage(faq.message)}
                className="w-full text-left p-3 text-sm text-text-secondary hover:text-text-primary hover:bg-surface-hover rounded-lg transition-all duration-200 border border-border-glass hover:border-border-hover"
              >
                <div className="flex items-center justify-between">
                  <span>{faq.question}</span>
                  <Send className="h-4 w-4 opacity-50" />
                </div>
              </button>
            ))}
          </div>
          
          <div className="mt-4 pt-4 border-t border-border-glass">
            <button
              onClick={() => sendMessage("Hi Nasratul! I'd like to discuss a custom project with you.")}
              className="w-full p-3 text-sm font-medium text-text-primary bg-surface-glass hover:bg-surface-hover rounded-lg transition-all duration-200 border border-border-glass hover:border-border-hover"
            >
              Send Custom Message
            </button>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-20"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default WhatsAppButton;