import { useState, useRef, useEffect } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, user: '@sarcastic', text: 'Hey everyone!', timestamp: '2:30 PM' },
    { id: 2, user: '@wtf', text: 'Welcome to Lycan chat', timestamp: '2:31 PM' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const endRef = useRef(null);

  const handleSend = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const newMessage = {
        id: messages.length + 1,
        user: '@you',
        text: inputValue,
        timestamp: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="min-h-screen pt-20 bg-dark px-4 flex flex-col">
      <div className="max-w-4xl mx-auto w-full flex flex-col h-[calc(100vh-120px)] bg-secondary/30 rounded-lg border border-secondary">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map(msg => (
            <div key={msg.id} className="flex gap-4">
              <div className="flex-1">
                <p className="text-accent font-bold text-sm">{msg.user}</p>
                <p className="text-white">{msg.text}</p>
                <p className="text-gray-500 text-xs mt-1">{msg.timestamp}</p>
              </div>
            </div>
          ))}
          <div ref={endRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="border-t border-secondary p-4 flex gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 px-4 py-3 bg-dark border border-secondary rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button
            type="submit"
            className="bg-accent text-dark px-6 py-3 rounded-lg font-bold hover:bg-pink-500 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
