import { useState } from 'react';

const USERS = [
  { id: 1, username: 'sarcastic', bio: 'nft', followers: 234 },
  { id: 2, username: 'wtf', bio: 'Are you lost?', followers: 567 },
  { id: 3, username: 'once', bio: 'too glam, to give a damn', followers: 891 },
  { id: 4, username: 'princess', bio: 'The highest goodness is like water', followers: 345 },
  { id: 5, username: 'nya', bio: 'Manager | May Women Rule The World', followers: 234 },
];

export default function Discover() {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = USERS.filter(user =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-20 bg-dark px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Discover Users</h1>
        
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-6 py-3 bg-secondary border border-accent rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent mb-8"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(user => (
            <div
              key={user.id}
              className="bg-secondary/50 border border-secondary rounded-lg p-6 hover:border-accent transition"
            >
              <h3 className="text-2xl font-bold text-accent mb-2">@{user.username}</h3>
              <p className="text-gray-300 mb-4">{user.bio}</p>
              <p className="text-sm text-gray-400">{user.followers} followers</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
