import React, { useState } from 'react';
import { useChat } from '@ai-sdk/react';
import { X, MessageCircle, Send } from 'lucide-react';

export default function ChatPopup() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      handleSubmit(e);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 z-50 flex items-center gap-2"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="text-sm font-medium">Chat with us</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 bg-white rounded-2xl shadow-2xl w-96 max-h-[600px] flex flex-col z-50 overflow-hidden transition-all duration-300 animate-slideUp">
          {/* Header */}
          <div className="flex justify-between items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-t-2xl">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold">Chat Assistant</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:bg-blue-400 p-1 rounded-full transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px] max-h-[400px] bg-gray-50">
            {messages.map(m => (
              <div 
                key={m.id} 
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-2xl whitespace-pre-wrap text-sm
                    ${m.role === 'user' 
                      ? 'bg-blue-500 text-white rounded-tr-none' 
                      : 'bg-white shadow-md rounded-tl-none'
                    }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleFormSubmit} className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center gap-2">
              <input
                className="flex-1 p-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                value={input}
                placeholder="Type your message..."
                onChange={handleInputChange}
              />
              <button 
                type="submit"
                className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!input.trim()}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}