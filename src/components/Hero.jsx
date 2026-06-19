import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleClaim = (e) => {
    e.preventDefault();
    if (username.trim()) {
      navigate(`/${username}`);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-dark via-dark to-secondary pt-32 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Your <span className="text-accent">Link in Bio</span>
          <br />
          <span className="text-accent">Real Inbox</span> & <span className="text-accent">Live Chat</span>
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          One username for your profile page, a real inbox and live chat. Temp mail and file sharing are free with no account.
        </p>

        {/* Claim Username Form */}
        <form onSubmit={handleClaim} className="flex gap-2 max-w-md mx-auto mb-16">
          <input
            type="text"
            placeholder="claim your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="flex-1 px-6 py-4 bg-secondary border border-accent rounded-full text-white focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button
            type="submit"
            className="bg-accent text-dark px-8 py-4 rounded-full font-bold hover:bg-pink-500 transition"
          >
            Claim
          </button>
        </form>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-16">
          <div>
            <p className="text-3xl md:text-4xl font-bold text-accent">5,841</p>
            <p className="text-gray-400 text-sm md:text-base">Users</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-accent">97,461</p>
            <p className="text-gray-400 text-sm md:text-base">Messages</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-accent">1,847</p>
            <p className="text-gray-400 text-sm md:text-base">Mails</p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {[
            {
              icon: '🎨',
              title: 'Themes & Customize',
              desc: 'Pick a theme, custom accent, music and cursor'
            },
            {
              icon: '📧',
              title: 'Real Inbox',
              desc: 'Permanent @lycan.gg mailbox + free temp mail'
            },
            {
              icon: '💬',
              title: 'Live Chat',
              desc: 'Global chat and private DMs with everyone'
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-secondary/50 border border-secondary rounded-lg p-6 hover:border-accent transition"
            >
              <p className="text-4xl mb-4">{feature.icon}</p>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
