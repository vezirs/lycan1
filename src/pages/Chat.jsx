import { useState, useRef, useEffect } from 'react';
import ProfileModal from '../components/ProfileModal';

const CHANNELS = [
  { id: 1, name: 'global', icon: '#' },
  { id: 2, name: 'private', icon: '🔒' },
];

const INITIAL_MESSAGES = [
  {
    id: 1,
    user: 'plauge',
    username: '@plauge',
    avatar: '😈',
    message: '.cf 100',
    timestamp: '21:34',
    badges: [],
    balance: null,
    handle: 'plauge',
    bio: 'just vibing',
  },
  {
    id: 2,
    user: 'py',
    username: '@py',
    avatar: '💜',
    message: 'bro',
    timestamp: '21:34',
    badges: [],
    balance: null,
    handle: 'py',
    bio: 'always online',
  },
  {
    id: 3,
    user: 'frog',
    username: '@frog',
    avatar: '🐸',
    message: 'HEADS! You bet heads — won 100 🎲 Balance: 200 🎲',
    timestamp: '21:34',
    badges: ['VERIFIED'],
    balance: 200,
    handle: 'frog',
    bio: 'ribbit ribbit',
    location: 'Swamp',
  },
  {
    id: 4,
    user: 'plauge',
    username: '@plauge',
    avatar: '😈',
    message: '.cf 200',
    timestamp: '21:34',
    badges: [],
    balance: null,
    handle: 'plauge',
    bio: 'just vibing',
  },
  {
    id: 5,
    user: 'py',
    username: '@py',
    avatar: '💜',
    message: '.cf 1000',
    timestamp: '21:34',
    badges: [],
    balance: null,
    handle: 'py',
    bio: 'always online',
  },
  {
    id: 6,
    user: 'frog',
    username: '@frog',
    avatar: '🐸',
    message: 'HEADS! You bet tails — lost 200 🎲 Balance: 0 🎲',
    timestamp: '21:34',
    badges: [],
    balance: 0,
    handle: 'frog',
    bio: 'ribbit ribbit',
  },
  {
    id: 7,
    user: 'demon',
    username: '@demon',
    avatar: '😈',
    message: "that's what happened to me",
    timestamp: '21:34',
    badges: [],
    balance: null,
    handle: 'demon',
    bio: 'dark vibes only',
  },
  {
    id: 8,
    user: 'mystic',
    username: '@mystic',
    avatar: '✨',
    message: 'sell all acc @demon and @mystic',
    timestamp: '21:34',
    badges: ['PREMIUM'],
    balance: null,
    handle: 'mystic',
    bio: 'i made you forget',
    location: 'LA',
    music: {
      title: 'Ran To Atlanta (feat. Future & Molly Santana)',
      artist: 'Drake, Future, Molly Santana',
      spotify: 'https://open.spotify.com',
    },
    links: [
      {
        icon: '🔗',
        title: 'My Website',
        url: 'https://example.com',
      },
      {
        icon: '🛍️',
        title: 'Shop',
        url: 'https://shop.example.com',
      },
    ],
    socials: [
      { icon: '✈️', name: 'Telegram', url: '#' },
      { icon: '🎵', name: 'TikTok', url: '#' },
    ],
    followers: 1500,
    views: 91,
  },
];

const ONLINE_USERS = [
  { username: 'angel', badge: 'MANAGER', avatar: '😇', status: 'online', handle: 'angel', bio: 'managing things', badges: ['MANAGER'] },
  { username: 'pretty', badge: 'MANAGER', avatar: '💄', status: 'online', handle: 'pretty', bio: 'stay pretty', badges: ['MANAGER'] },
  { username: 'qix', badge: 'BUG HUNTER', avatar: '🐛', status: 'online', handle: 'qix', bio: 'finding bugs', badges: ['BUG HUNTER'] },
  { username: 'mmm', badge: 'VERIFIED', avatar: '✅', status: 'online', handle: 'mmm', bio: 'verified user', badges: ['VERIFIED'] },
  { username: 'cat', badge: 'PREMIUM', avatar: '🐱', status: 'online', handle: 'cat', bio: 'meow', badges: ['PREMIUM'] },
  { username: 'celebrity', badge: 'LINKED', avatar: '⭐', status: 'online', handle: 'celebrity', bio: 'linked account', badges: [] },
  { username: 'ew', badge: 'LINKED', avatar: '😠', status: 'online', handle: 'ew', bio: 'ew vibes', badges: [] },
  { username: 'greed', badge: '', avatar: '🤑', status: 'online', handle: 'greed', bio: 'money money', badges: [] },
  { username: 'h', badge: '', avatar: '🤔', status: 'online', handle: 'h', bio: 'thinking', badges: [] },
  { username: 'jeffery', badge: 'LINKED', avatar: '👔', status: 'online', handle: 'jeffery', bio: 'professional', badges: [] },
  { username: 'lose', badge: '', avatar: '😢', status: 'online', handle: 'lose', bio: 'lost it all', badges: [] },
  { username: 'oh', badge: 'LINKED', avatar: '😮', status: 'online', handle: 'oh', bio: 'surprised', badges: [] },
  { username: 'omg', badge: 'LINKED', avatar: '😱', status: 'online', handle: 'omg', bio: 'shocked', badges: [] },
  { username: 'princess', badge: '', avatar: '👑', status: 'online', handle: 'princess', bio: 'royal vibes', badges: [] },
  { username: 'py', badge: '', avatar: '💜', status: 'online', handle: 'py', bio: 'purple life', badges: [] },
  { username: 'tero...', badge: 'LINKED', avatar: '🔥', status: 'online', handle: 'tero', bio: 'fire', badges: [] },
  { username: 'playtoy', badge: '', avatar: '🎮', status: 'online', handle: 'playtoy', bio: 'gaming', badges: [] },
  { username: 'aa', badge: 'LINKED', avatar: '🔤', status: 'online', handle: 'aa', bio: 'double a', badges: [] },
];

export default function Chat() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [activeChannel, setActiveChannel] = useState('global');
  const endRef = useRef(null);
  const [onlineUsers, setOnlineUsers] = useState(ONLINE_USERS);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const newMessage = {
        id: messages.length + 1,
        user: 'you',
        username: '@xxiprimary',
        avatar: '🐺',
        message: inputValue,
        timestamp: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
        badges: [],
        balance: null,
        handle: 'xxiprimary',
        bio: 'lycan wolf',
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  const handleUserClick = (user) => {
    setSelectedProfile(user);
    setIsProfileOpen(true);
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      <div className="flex h-[calc(100vh-80px)] pt-20 bg-dark">
        {/* Left Sidebar - Channels */}
        <aside className="w-48 bg-secondary/30 border-r border-secondary overflow-y-auto">
          {/* Server Info */}
          <div className="p-4 border-b border-secondary">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🐺</span>
              <div>
                <p className="font-bold">Lycan</p>
                <p className="text-xs text-gray-400">47 online</p>
              </div>
            </div>
          </div>

          {/* Channels */}
          <div className="p-4">
            <p className="text-xs text-gray-500 uppercase font-bold mb-3">Channels</p>
            <div className="space-y-2">
              {CHANNELS.map((channel) => (
                <button
                  key={channel.id}
                  onClick={() => setActiveChannel(channel.name)}
                  className={`w-full text-left px-3 py-2 rounded transition ${
                    activeChannel === channel.name
                      ? 'bg-accent/20 text-accent'
                      : 'hover:bg-secondary/50 text-gray-300'
                  }`}
                >
                  <span>{channel.icon} {channel.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="p-4 border-t border-secondary">
            <p className="text-xs text-gray-500 uppercase font-bold mb-3">Tools</p>
            <div className="space-y-2 text-sm">
              <a href="#" className="block px-3 py-2 rounded hover:bg-secondary/50 transition">
                ⛓️ Blockchain
              </a>
              <a href="#" className="block px-3 py-2 rounded hover:bg-secondary/50 transition">
                🔍 Discover
              </a>
              <a href="#" className="block px-3 py-2 rounded hover:bg-secondary/50 transition">
                🌐 Domains
              </a>
              <a href="#" className="block px-3 py-2 rounded hover:bg-secondary/50 transition">
                📧 Temp Mail
              </a>
              <a href="#" className="block px-3 py-2 rounded hover:bg-secondary/50 transition">
                📁 Files
              </a>
            </div>
          </div>

          {/* Account */}
          <div className="p-4 border-t border-secondary">
            <p className="text-xs text-gray-500 uppercase font-bold mb-3">Account</p>
            <div className="space-y-2 text-sm">
              <a href="#" className="block px-3 py-2 rounded hover:bg-secondary/50 transition">
                💬 Chat
              </a>
              <a href="#" className="block px-3 py-2 rounded hover:bg-secondary/50 transition">
                🔒 Private
              </a>
              <a href="#" className="block px-3 py-2 rounded hover:bg-secondary/50 transition">
                📬 Mail
              </a>
              <a href="#" className="block px-3 py-2 rounded hover:bg-secondary/50 transition">
                👤 Bio
              </a>
              <a href="#" className="block px-3 py-2 rounded hover:bg-secondary/50 transition">
                💰 Market
              </a>
            </div>
          </div>

          {/* Socials */}
          <div className="p-4 border-t border-secondary">
            <p className="text-xs text-gray-500 uppercase font-bold mb-3">Socials</p>
            <div className="space-y-2 text-sm">
              <a href="#" className="block px-3 py-2 rounded hover:bg-secondary/50 transition">
                ✈️ Telegram
              </a>
              <a href="#" className="block px-3 py-2 rounded hover:bg-secondary/50 transition">
                🎮 Discord
              </a>
            </div>
          </div>
        </aside>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col bg-dark border-r border-secondary">
          {/* Header */}
          <div className="bg-secondary/20 border-b border-secondary px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="text-2xl">#</span>
              <h2 className="text-xl font-bold">{activeChannel}</h2>
            </div>
            <div className="flex items-center gap-4 text-gray-400">
              <button className="hover:text-accent transition">
                🔍
              </button>
              <button className="hover:text-accent transition">
                🔔
              </button>
              <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">47 online</span>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-2">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className="group hover:bg-secondary/30 px-4 py-1 rounded transition cursor-pointer"
                onClick={() => handleUserClick(msg)}
              >
                <div className="flex gap-3">
                  {/* Avatar */}
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-lg flex-shrink-0 hover:scale-110 transition">
                    {msg.avatar}
                  </div>

                  {/* Message Content */}
                  <div className="flex-1 min-w-0">
                    {/* Header: Username, Badges, Time */}
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-accent hover:underline">
                        {msg.username}
                      </span>
                      {msg.badges && msg.badges.includes('VERIFIED') && (
                        <span className="text-xs bg-secondary px-2 py-0.5 rounded text-gray-300">VERIFIED</span>
                      )}
                      {msg.badges && msg.badges.includes('PREMIUM') && (
                        <span className="text-xs bg-accent text-dark px-2 py-0.5 rounded font-bold">PREMIUM</span>
                      )}
                      <span className="text-xs text-gray-500">{msg.timestamp}</span>
                    </div>

                    {/* Message Text */}
                    <p className="text-white break-words">{msg.message}</p>

                    {/* Balance Info */}
                    {msg.balance !== null && (
                      <p className="text-xs text-accent mt-1">Balance: {msg.balance} 🎲</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          {/* Input Area */}
          <div className="bg-secondary/20 border-t border-secondary p-4">
            <form onSubmit={handleSend} className="flex gap-3">
              <button
                type="button"
                className="text-gray-400 hover:text-accent transition text-xl"
              >
                ➕
              </button>
              <input
                type="text"
                placeholder={`Message #${activeChannel}`}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 px-4 py-2 bg-secondary border border-secondary rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="button"
                className="text-gray-400 hover:text-accent transition text-xl"
              >
                🎤
              </button>
              <button
                type="submit"
                className="bg-accent text-dark px-6 py-2 rounded-lg font-bold hover:bg-pink-500 transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Right Sidebar - Online Users */}
        <aside className="w-56 bg-secondary/30 border-l border-secondary overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-secondary/50 border-b border-secondary px-4 py-3">
            <p className="text-xs text-gray-500 uppercase font-bold">47 Online</p>
          </div>

          {/* User Categories */}
          <div className="p-4 space-y-6">
            {/* Managers */}
            {onlineUsers.some(u => u.badge === 'MANAGER') && (
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold mb-3">MANAGER</p>
                <div className="space-y-2">
                  {onlineUsers
                    .filter(u => u.badge === 'MANAGER')
                    .map((user) => (
                      <button
                        key={user.username}
                        onClick={() => handleUserClick(user)}
                        className="w-full flex items-center gap-2 px-3 py-2 rounded hover:bg-accent/20 cursor-pointer transition group text-left"
                      >
                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-sm flex-shrink-0">
                          {user.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold truncate">{user.username}</p>
                        </div>
                        <span className="text-xs bg-accent text-dark px-2 py-1 rounded font-bold group-hover:block hidden flex-shrink-0">
                          {user.badge}
                        </span>
                      </button>
                    ))}
                </div>
              </div>
            )}

            {/* Bug Hunters */}
            {onlineUsers.some(u => u.badge === 'BUG HUNTER') && (
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold mb-3">BUG HUNTER</p>
                <div className="space-y-2">
                  {onlineUsers
                    .filter(u => u.badge === 'BUG HUNTER')
                    .map((user) => (
                      <button
                        key={user.username}
                        onClick={() => handleUserClick(user)}
                        className="w-full flex items-center gap-2 px-3 py-2 rounded hover:bg-accent/20 cursor-pointer transition text-left"
                      >
                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-sm flex-shrink-0">
                          {user.avatar}
                        </div>
                        <p className="text-sm font-bold truncate">{user.username}</p>
                      </button>
                    ))}
                </div>
              </div>
            )}

            {/* Verified Users */}
            {onlineUsers.some(u => u.badge === 'VERIFIED') && (
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold mb-3">VERIFIED</p>
                <div className="space-y-2">
                  {onlineUsers
                    .filter(u => u.badge === 'VERIFIED')
                    .map((user) => (
                      <button
                        key={user.username}
                        onClick={() => handleUserClick(user)}
                        className="w-full flex items-center gap-2 px-3 py-2 rounded hover:bg-accent/20 cursor-pointer transition text-left"
                      >
                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-sm flex-shrink-0">
                          {user.avatar}
                        </div>
                        <p className="text-sm font-bold truncate">{user.username}</p>
                      </button>
                    ))}
                </div>
              </div>
            )}

            {/* Premium Users */}
            {onlineUsers.some(u => u.badge === 'PREMIUM') && (
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold mb-3">PREMIUM</p>
                <div className="space-y-2">
                  {onlineUsers
                    .filter(u => u.badge === 'PREMIUM')
                    .map((user) => (
                      <button
                        key={user.username}
                        onClick={() => handleUserClick(user)}
                        className="w-full flex items-center gap-2 px-3 py-2 rounded hover:bg-accent/20 cursor-pointer transition text-left"
                      >
                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-sm flex-shrink-0">
                          {user.avatar}
                        </div>
                        <p className="text-sm font-bold truncate">{user.username}</p>
                      </button>
                    ))}
                </div>
              </div>
            )}

            {/* Linked Users */}
            {onlineUsers.some(u => u.badge === 'LINKED') && (
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold mb-3">LINKED</p>
                <div className="space-y-2">
                  {onlineUsers
                    .filter(u => u.badge === 'LINKED')
                    .map((user) => (
                      <button
                        key={user.username}
                        onClick={() => handleUserClick(user)}
                        className="w-full flex items-center gap-2 px-3 py-2 rounded hover:bg-accent/20 cursor-pointer transition text-left"
                      >
                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-sm flex-shrink-0">
                          {user.avatar}
                        </div>
                        <p className="text-sm font-bold truncate">{user.username}</p>
                      </button>
                    ))}
                </div>
              </div>
            )}

            {/* Regular Users */}
            {onlineUsers.some(u => !u.badge) && (
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold mb-3">CUTE</p>
                <div className="space-y-2">
                  {onlineUsers
                    .filter(u => !u.badge)
                    .map((user) => (
                      <button
                        key={user.username}
                        onClick={() => handleUserClick(user)}
                        className="w-full flex items-center gap-2 px-3 py-2 rounded hover:bg-accent/20 cursor-pointer transition text-left"
                      >
                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-sm flex-shrink-0">
                          {user.avatar}
                        </div>
                        <p className="text-sm font-bold truncate">{user.username}</p>
                      </button>
                    ))}
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>

      {/* Profile Modal */}
      <ProfileModal
        user={selectedProfile}
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />
    </>
  );
}
