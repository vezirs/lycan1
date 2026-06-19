import { Link } from 'react-router-dom';
import useStore from '../store/useStore';

export default function Sidebar() {
  const { user } = useStore();

  return (
    <aside className="fixed left-0 top-20 w-64 h-[calc(100vh-80px)] bg-secondary/50 border-r border-secondary overflow-y-auto p-6 z-30">
      <div className="space-y-6">
        {/* User Info */}
        <div className="text-center border-b border-secondary pb-6">
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent to-pink-600 rounded-full mb-3 flex items-center justify-center text-2xl border-2 border-accent/50">
            {user?.profilePic ? (
              <img src={user.profilePic} alt="Profile" className="w-full h-full rounded-full object-cover" />
            ) : (
              '🐺'
            )}
          </div>
          <p className="text-lg font-bold text-accent">@{user?.primaryUsername}</p>
          <p className="text-sm text-gray-400 truncate">{user?.email}</p>
        </div>

        {/* Account Section */}
        <div className="space-y-2">
          <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Account</p>
          <Link to="/account" className="block px-4 py-2 rounded hover:bg-accent/20 hover:text-accent transition text-sm">
            ⚙️ Settings
          </Link>
          <Link to="/account/appearance" className="block px-4 py-2 rounded hover:bg-accent/20 hover:text-accent transition text-sm">
            🎨 Appearance
          </Link>
          <Link to="/account/security" className="block px-4 py-2 rounded hover:bg-accent/20 hover:text-accent transition text-sm">
            🔐 Security
          </Link>
        </div>

        {/* Features */}
        <div className="space-y-2">
          <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Features</p>
          <Link to="/mail" className="block px-4 py-2 rounded hover:bg-accent/20 hover:text-accent transition text-sm">
            📧 Mail
          </Link>
          <Link to="/chat" className="block px-4 py-2 rounded hover:bg-accent/20 hover:text-accent transition text-sm">
            💬 Chat
          </Link>
          <a href="#" className="block px-4 py-2 rounded hover:bg-accent/20 hover:text-accent transition text-sm">
            🛍️ Market
          </a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-accent/20 hover:text-accent transition text-sm">
            🌍 Domains
          </a>
        </div>

        {/* Tools */}
        <div className="space-y-2 border-t border-secondary pt-6">
          <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Tools</p>
          <a href="#" className="block px-4 py-2 rounded hover:bg-accent/20 hover:text-accent transition text-sm">
            ⛓️ Blockchain
          </a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-accent/20 hover:text-accent transition text-sm">
            🔍 Discovery
          </a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-accent/20 hover:text-accent transition text-sm">
            📮 Temp Mail
          </a>
        </div>

        {/* Community */}
        <div className="space-y-2 border-t border-secondary pt-6">
          <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Community</p>
          <a href="#" className="block px-4 py-2 rounded hover:bg-accent/20 hover:text-accent transition text-sm">
            ✈️ Telegram
          </a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-accent/20 hover:text-accent transition text-sm">
            🎮 Discord
          </a>
        </div>
      </div>
    </aside>
  );
}
