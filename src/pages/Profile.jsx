import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';

const MOCK_PROFILE = {
  username: 'username',
  primaryUsername: 'xxiprimary',
  bio: 'Customize your bio here with a cool message',
  location: 'Internet',
  avatar: '🐺',
  theme: 'dark',
  accentColor: '#ff006e',
  links: [
    { icon: '🔗', title: 'Website', url: '#' },
    { icon: '🛍️', title: 'Shop', url: '#' },
  ],
  socials: [
    { icon: '✈️', name: 'Telegram', url: '#' },
    { icon: '🎵', name: 'TikTok', url: '#' },
  ],
  music: {
    title: 'My Favorite Track',
    artist: 'Artist Name',
    spotify: '#',
  },
  stats: {
    views: 1234,
    followers: 567,
  },
};

export default function Profile() {
  const { username } = useParams();
  const [profile] = useState(MOCK_PROFILE);

  if (!username) {
    return (
      <div className="min-h-screen pt-32 px-4 text-center">
        <h1 className="text-4xl font-bold text-accent mb-4">User Not Found</h1>
        <Link to="/" className="text-accent hover:text-pink-500 transition">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-dark to-secondary">
      <div className="max-w-2xl mx-auto p-6">
        {/* Profile Card */}
        <div className="bg-secondary/50 border border-secondary rounded-2xl p-8 text-center">
          {/* Avatar */}
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-accent to-pink-600 rounded-full flex items-center justify-center text-5xl border-4 border-accent/50">
            {profile.avatar}
          </div>

          {/* Info */}
          <h1 className="text-4xl font-bold text-accent mb-2">@{username}</h1>
          <p className="text-gray-400 text-sm mb-4">Primary: @{profile.primaryUsername}</p>
          <p className="text-white text-lg mb-4">{profile.bio}</p>
          <p className="text-gray-400 mb-8">📍 {profile.location}</p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-8 bg-dark/50 rounded-lg p-4">
            <div>
              <p className="text-2xl font-bold text-accent">{profile.stats.views}</p>
              <p className="text-xs text-gray-400">VIEWS</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-accent">{profile.stats.followers}</p>
              <p className="text-xs text-gray-400">FOLLOWERS</p>
            </div>
          </div>

          {/* Links */}
          {profile.links.length > 0 && (
            <div className="space-y-3 mb-8">
              {profile.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  className="block bg-accent/10 border border-accent/30 hover:border-accent rounded-lg p-4 transition"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{link.icon}</span>
                    <div className="flex-1 text-left">
                      <p className="font-bold text-white">{link.title}</p>
                    </div>
                    <span className="text-accent">→</span>
                  </div>
                </a>
              ))}
            </div>
          )}

          {/* Socials */}
          {profile.socials.length > 0 && (
            <div className="flex justify-center gap-4 mb-8">
              {profile.socials.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  className="w-12 h-12 rounded-full bg-secondary hover:bg-accent/20 flex items-center justify-center transition text-lg"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          )}

          {/* Actions */}
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-secondary border border-secondary hover:border-accent px-6 py-3 rounded-lg font-bold transition">
              💬 Message
            </button>
            <button className="bg-accent text-dark px-6 py-3 rounded-lg font-bold hover:bg-pink-500 transition">
              ⭐ Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
