import { useState } from 'react';

const ProfileModal = ({ user, isOpen, onClose }) => {
  if (!isOpen || !user) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 pt-20"
      onClick={onClose}
    >
      <div
        className="bg-gradient-to-b from-secondary via-secondary to-dark rounded-2xl border border-secondary p-8 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ID Badge */}
        <div className="absolute top-4 left-4 bg-secondary/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-accent">
          #{user.id}
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition text-xl"
        >
          ✕
        </button>

        {/* Profile Section */}
        <div className="text-center mb-8 mt-8">
          {/* Avatar */}
          <div className="w-24 h-24 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center text-5xl border-4 border-accent/50">
            {user.avatar}
          </div>

          {/* Username & Badges */}
          <h2 className="text-2xl font-bold text-accent mb-1">{user.username}</h2>
          <p className="text-gray-400 text-sm mb-3">@{user.handle || user.username.toLowerCase()}</p>

          {/* Badges */}
          {user.badges && user.badges.length > 0 && (
            <div className="flex justify-center gap-2 mb-4 flex-wrap">
              {user.badges.map((badge, i) => (
                <span
                  key={i}
                  className={`text-xs px-3 py-1 rounded-full font-bold ${
                    badge === 'VERIFIED'
                      ? 'bg-blue-500/20 text-blue-400'
                      : badge === 'PREMIUM'
                      ? 'bg-accent/20 text-accent'
                      : badge === 'MANAGER'
                      ? 'bg-purple-500/20 text-purple-400'
                      : 'bg-secondary text-gray-300'
                  }`}
                >
                  {badge}
                </span>
              ))}
            </div>
          )}

          {/* Bio */}
          <p className="text-white text-center mb-6 text-sm leading-relaxed">
            {user.bio}
          </p>

          {/* Location */}
          {user.location && (
            <p className="text-gray-400 text-sm mb-6">📍 {user.location}</p>
          )}
        </div>

        {/* Music Player (if enabled) */}
        {user.music && (
          <div className="bg-dark border border-secondary rounded-lg p-4 mb-6">
            <div className="flex gap-3 items-center">
              <div className="w-12 h-12 bg-secondary rounded flex items-center justify-center text-lg flex-shrink-0">
                🎵
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold truncate">{user.music.title}</p>
                <p className="text-xs text-gray-400 truncate">{user.music.artist}</p>
              </div>
              <button className="bg-accent text-dark p-2 rounded-full hover:bg-pink-500 transition flex-shrink-0">
                ▶
              </button>
            </div>
            {user.music.spotify && (
              <a
                href={user.music.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-accent hover:text-pink-500 transition mt-3 flex items-center gap-2 justify-center"
              >
                <span>🎧</span> Save on Spotify
              </a>
            )}
          </div>
        )}

        {/* Links Section */}
        {user.links && user.links.length > 0 && (
          <div className="space-y-3 mb-6">
            {user.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-secondary/50 border border-secondary hover:border-accent rounded-lg p-4 transition"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{link.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-white truncate">{link.title}</p>
                    <p className="text-xs text-gray-400 truncate">{link.url}</p>
                  </div>
                  <span className="text-gray-400">→</span>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Social Links */}
        {user.socials && user.socials.length > 0 && (
          <div className="flex justify-center gap-4 mb-6">
            {user.socials.map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-accent/20 flex items-center justify-center transition text-lg"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6 bg-secondary/30 rounded-lg p-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-accent">{user.views || 91}</p>
            <p className="text-xs text-gray-400">VIEWS</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-accent">{user.followers || 234}</p>
            <p className="text-xs text-gray-400">FOLLOWERS</p>
          </div>
        </div>

        {/* Reactions */}
        <div className="flex justify-between items-center mb-6 px-2">
          <button className="flex items-center gap-2 hover:text-accent transition text-gray-400 text-sm">
            👍 {user.likes || 0}
          </button>
          <button className="flex items-center gap-2 hover:text-accent transition text-gray-400 text-sm">
            👎 {user.dislikes || 2}
          </button>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-secondary border border-secondary hover:border-accent px-4 py-2 rounded-lg font-bold transition">
            Message
          </button>
          <button className="bg-accent text-dark px-4 py-2 rounded-lg font-bold hover:bg-pink-500 transition">
            Follow
          </button>
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-500 text-right mt-6 pt-4 border-t border-secondary">
          LYCAN.GG
        </p>
      </div>
    </div>
  );
};

export default ProfileModal;
