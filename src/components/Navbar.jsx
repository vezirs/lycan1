import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-dark/95 backdrop-blur border-b border-secondary z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-accent">
          🐺 LYCAN
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/discover" className="hover:text-accent transition">
            Discover
          </Link>
          <Link to="/mail" className="hover:text-accent transition">
            📧 Mail
          </Link>
          <Link to="/chat" className="hover:text-accent transition">
            💬 Chat
          </Link>
          <button className="bg-accent text-dark px-6 py-2 rounded-full font-bold hover:bg-pink-500 transition">
            Sign In
          </button>
        </div>

        {/* Mobile Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-secondary border-t border-secondary p-4 space-y-4">
          <Link to="/discover" className="block hover:text-accent transition">
            Discover
          </Link>
          <Link to="/mail" className="block hover:text-accent transition">
            📧 Mail
          </Link>
          <Link to="/chat" className="block hover:text-accent transition">
            💬 Chat
          </Link>
          <button className="w-full bg-accent text-dark px-6 py-2 rounded-full font-bold">
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
}
