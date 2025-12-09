"use client"
import React, { useState, useRef, useEffect } from 'react';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ from: 'user' | 'bot'; text: string }[]>([]);
  const [text, setText] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  function send() {
    const t = text.trim();
    if (!t) return;
    setMessages(m => [...m, { from: 'user', text: t }]);
    setText('');

    // Placeholder AI response (echo + small delay). Replace with real API call later.
    setTimeout(() => {
      setMessages(m => [...m, { from: 'bot', text: `Bot: I heard "${t}" — this is a demo response.` }]);
    }, 700);
  }

  return (
    <>
      {/* Floating button */}
      <button
        aria-label="Open chat"
        onClick={() => setOpen(true)}
        className="fixed z-50 right-21 bottom-21 w-28 h-28  text-white px-4 py-2   text-white rounded-full shadow-lg flex items-center justify-center"
      >
         <img
          src="/1.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover rounded-full "
          style={{ objectPosition: '50% 10%' }} // center horizontally, 30% from top vertically
        />
        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4-.86L3 20l1.16-3.03A7.992 7.992 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg> */}
      </button >
      <button className="relative fixed z-50 right-6 bottom-6 w-14 h-14 rounded-full overflow-hidden shadow-lg" aria-label="Open chat"
        onClick={() => setOpen(true)}>
       
        {/* overlay/icon */}
      </button>

      {/* Modal */}
      {
        open && (
          <div className="fixed inset-0 z-50 flex items-end justify-center">
            <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
            <div className="relative w-full max-w-md mx-4 mb-6 bg-white rounded-xl shadow-xl overflow-hidden flex flex-col" role="dialog" aria-modal="true">
              <div className="flex items-center justify-between px-4 py-3 border-b">
                <strong>PRIYA AI</strong>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => { setMessages([]); setText(''); }}
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Clear
                  </button>
                  <button onClick={() => setOpen(false)} aria-label="Close" className="text-gray-600 hover:text-gray-900">✕</button>
                </div>
              </div>

              <div className="p-4 flex-1 overflow-auto" style={{ minHeight: 200 }}>
                {messages.length === 0 && (
                  <p className="text-sm text-gray-500">Hi! Ask me anything — this is a demo chatbot.</p>
                )}
                <div className="space-y-3">
                  {messages.map((m, i) => (
                    <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`${m.from === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'} px-3 py-2 rounded-lg max-w-[80%]`}>
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
                  className="flex-1 px-3 py-2 border rounded-md outline-none"
                  placeholder="Type your message..."
                />
                <button onClick={send} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Send</button>
              </div>
            </div>
          </div>
        )
      }
    </>
  );
}
