import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useStore from '../store/useStore';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { isLoggedIn, setUser, logout, user } = useStore();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleAuth = (e) => {
    e.preventDefault();
    if (email && password) {
      setUser({
        username: 'xxiprimary',
        email,
        profilePic: null,
        primaryUsername: 'xxiprimary',
        usernames: ['xxiprimary', 'digger', 'rct', 'cki'],
      });
      setShowAuthModal(false);
      setEmail('');
      setPassword('');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-dark/95 backdrop-blur border-b border-secondary z-40">
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
            {isLoggedIn ? (
              <div className="flex items-center gap-4">
                <Link to="/account" className="hover:text-accent transition">
                  ⚙️ Account
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-6 py-2 rounded-full font-bold hover:bg-red-700 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowAuthModal(true)}
                className="bg-accent text-dark px-6 py-2 rounded-full font-bold hover:bg-pink-500 transition"
              >
                Sign In
              </button>
            )}
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
            {isLoggedIn ? (
              <>
                <Link to="/account" className="block hover:text-accent transition">
                  ⚙️ Account
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full bg-red-600 text-white px-6 py-2 rounded-full font-bold"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => setShowAuthModal(true)}
                className="w-full bg-accent text-dark px-6 py-2 rounded-full font-bold"
              >
                Sign In
              </button>
            )}
          </div>
        )}
      </nav>

      {/* Left Sidebar (when logged in) */}
      {isLoggedIn && (
        <aside className="fixed left-0 top-20 w-64 h-[calc(100vh-80px)] bg-secondary/50 border-r border-secondary overflow-y-auto p-6">
          <div className="space-y-6">
            {/* User Info */}
            <div className="text-center border-b border-secondary pb-6">
              <div className="w-16 h-16 mx-auto bg-accent rounded-full mb-3 flex items-center justify-center text-2xl">
                {user?.profilePic ? (
                  <img src={user.profilePic} alt="Profile" className="w-full h-full rounded-full object-cover" />
                ) : (
                  '👤'
                )}
              </div>
              <p className="text-lg font-bold">@{user?.primaryUsername}</p>
              <p className="text-sm text-gray-400">{user?.email}</p>
            </div>

            {/* Quick Links */}
            <div className="space-y-2">
              <p className="text-xs text-gray-500 uppercase font-bold">Account</p>
              <Link to="/account" className="block px-4 py-2 rounded hover:bg-accent/20 hover:text-accent transition">
                Profile
              </Link>
              <Link to="/account/appearance" className="block px-4 py-2 rounded hover:bg-accent/20 hover:text-accent transition">
                Appearance
              </Link>
              <Link to="/account/discord" className="block px-4 py-2 rounded hover:bg-accent/20 hover:text-accent transition">
                Discord
              </Link>
              <Link to="/account/security" className="block px-4 py-2 rounded hover:bg-accent/20 hover:text-accent transition">
                Security
              </Link>
              <Link to="/account/devices" className="block px-4 py-2 rounded hover:bg-accent/20 hover:text-accent transition">
                Devices
              </Link>
            </div>

            {/* Main Features */}
            <div className="space-y-2">
              <p className="text-xs text-gray-500 uppercase font-bold">Features</p>
              <Link to="/mail" className="block px-4 py-2 rounded hover:bg-accent/20 hover:text-accent transition">
                Mail
              </Link>
              <Link to="/chat" className="block px-4 py-2 rounded hover:bg-accent/20 hover:text-accent transition">
                Chat
              </Link>
              <a href="#" className="block px-4 py-2 rounded hover:bg-accent/20 hover:text-accent transition">
                Market
              </a>
              <a href="#" className="block px-4 py-2 rounded hover:bg-accent/20 hover:text-accent transition">
                Domains
              </a>
            </div>

            {/* External Links */}
            <div className="space-y-2 border-t border-secondary pt-6">
              <p className="text-xs text-gray-500 uppercase font-bold">Community</p>
              <a href="#" className="block px-4 py-2 rounded hover:bg-accent/20 hover:text-accent transition">
                Telegram
              </a>
              <a href="#" className="block px-4 py-2 rounded hover:bg-accent/20 hover:text-accent transition">
                Discord
              </a>
            </div>
          </div>
        </aside>
      )}

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 pt-20">
          <div className="bg-secondary border border-secondary rounded-lg p-8 max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold mb-6">{
              isSignUp ? 'Create Account' : 'Sign In'
            }</h2>
            <form onSubmit={handleAuth} className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-dark border border-secondary rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-dark border border-secondary rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="w-full bg-accent text-dark py-2 rounded-lg font-bold hover:bg-pink-500 transition"
              >
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </button>
            </form>
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="w-full text-center mt-4 text-accent hover:text-pink-500 transition text-sm"
            >
              {isSignUp ? 'Already have an account?' : 'Create account'}
            </button>
            <button
              onClick={() => setShowAuthModal(false)}
              className="w-full text-center mt-4 text-gray-400 hover:text-white transition text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
