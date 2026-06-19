import { useState } from 'react';

const USERS = [
  { id: 1, username: 'sarcastic', avatar: '😏', bio: 'nft vibes', followers: 234, verified: true },
  { id: 2, username: 'wtf', avatar: '🤔', bio: 'Are you lost?', followers: 567, verified: false },
  { id: 3, username: 'once', avatar: '✨', bio: 'too glam, to give a damn', followers: 891, verified: true },
  { id: 4, username: 'princess', avatar: '👑', bio: 'The highest goodness is like water', followers: 345, verified: false },
  { id: 5, username: 'nya', avatar: '😺', bio: 'Manager | May Women Rule The World', followers: 234, verified: true },
  { id: 6, username: 'demon', avatar: '😈', bio: 'dark vibes only', followers: 789, verified: false },
  { id: 7, username: 'mystic', avatar: '🔮', bio: 'i made you forget', followers: 1500, verified: true },
  { id: 8, username: 'angel', avatar: '😇', bio: 'managing the chaos', followers: 2100, verified: true },
];

export default function Discover() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('followers');

  const filtered = USERS.filter(user =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a, b) => {
    if (sortBy === 'followers') return b.followers - a.followers;
    return a.username.localeCompare(b.username);
  });

  return (
    <div className="min-h-screen pt-20 bg-dark px-4 pb-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-8 text-accent">🔍 Discover Users</h1>
          
          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-6 py-3 bg-secondary border border-secondary rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent transition"
            />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-6 py-3 bg-secondary border border-secondary rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent transition"
            >
              <option value="followers">Most Followers</option>
              <option value="name">Name (A-Z)</option>
            </select>
          </div>
        </div>

        {/* User Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(user => (
            <div
              key={user.id}
              className="bg-gradient-to-br from-secondary/50 to-secondary border border-secondary rounded-xl p-6 hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition transform hover:scale-105"
            >
              {/* Avatar */}
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-3xl mb-4 mx-auto border-2 border-accent/50">
                {user.avatar}
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold text-accent text-center mb-1">@{user.username}</h3>
              {user.verified && (
                <p className="text-xs text-center text-blue-400 font-bold mb-2">✓ VERIFIED</p>
              )}
              <p className="text-gray-300 text-center text-sm mb-4">{user.bio}</p>

              {/* Stats */}
              <div className="bg-dark/50 rounded-lg p-3 mb-4 text-center">
                <p className="text-lg font-bold text-accent">{user.followers}</p>
                <p className="text-xs text-gray-400">followers</p>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button className="flex-1 bg-secondary hover:bg-accent/20 border border-secondary hover:border-accent px-4 py-2 rounded-lg font-bold transition text-sm">
                  View
                </button>
                <button className="flex-1 bg-accent text-dark hover:bg-pink-500 px-4 py-2 rounded-lg font-bold transition text-sm">
                  Follow
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-400">No users found matching "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
}
