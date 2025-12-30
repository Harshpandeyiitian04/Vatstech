"use client"
// import React, { useState, useRef, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function ChatWidget() {
  // const [open, setOpen] = useState(false);
  // const [messages, setMessages] = useState<{ from: 'user' | 'bot'; text: string }[]>([]);
  // const [text, setText] = useState('');
  // const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <button
        aria-label="Chat with us on WhatsApp"
        className="fixed z-50 right-3 sm:right-4 md:right-6 lg:right-7 bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-7 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white shadow-xl hover:shadow-2xl rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 group"
      >
        <a
          href="https://wa.me/919576894955"
          className="flex items-center justify-center w-full h-full rounded-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#25D366]" />
          <span className="absolute -top-10 right-0 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden lg:block">
            Chat with us on WhatsApp
          </span>
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-ping group-hover:animate-none"></span>
        </a>
      </button>

      {/* Uncomment and add responsive styles if you want to enable the chatbot modal in the future */}
      {/* {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center p-2 sm:p-4">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="relative w-full max-w-md mx-auto bg-white rounded-lg sm:rounded-xl shadow-xl overflow-hidden flex flex-col max-h-[80vh] sm:max-h-[70vh]" role="dialog" aria-modal="true">
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <strong className="text-sm sm:text-base">PRIYA AI</strong>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => { setMessages([]); setText(''); }}
                  className="text-xs sm:text-sm text-gray-600 hover:text-gray-900"
                >
                  Clear
                </button>
                <button onClick={() => setOpen(false)} aria-label="Close" className="text-gray-600 hover:text-gray-900 text-lg">✕</button>
              </div>
            </div>

            <div className="p-3 sm:p-4 flex-1 overflow-auto" style={{ minHeight: 150 }}>
              {messages.length === 0 && (
                <p className="text-xs sm:text-sm text-gray-500">Hi! Ask me anything — this is a demo chatbot.</p>
              )}
              <div className="space-y-2 sm:space-y-3">
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`${m.from === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'} px-3 py-2 rounded-lg max-w-[85%] text-sm sm:text-base`}>
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 border-t flex gap-2">
              <input
                ref={inputRef}
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') send(); }}
                className="flex-1 px-3 py-2 border rounded-md outline-none text-sm sm:text-base"
                placeholder="Type your message..."
              />
              <button onClick={send} className="bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base">Send</button>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
}