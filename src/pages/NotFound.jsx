import { useState } from 'react';

const FEATURED_USERS = [
  { name: 'angel', role: 'Manager', followers: 2500 },
  { name: 'pretty', role: 'Manager', followers: 2100 },
  { name: 'mmm', role: 'Verified', followers: 1800 },
];

export default function NotFound() {
  return (
    <div className="min-h-screen pt-20 bg-dark flex flex-col items-center justify-center px-4 pb-20">
      <div className="text-center">
        {/* 404 */}
        <h1 className="text-9xl font-black text-accent mb-4 drop-shadow-lg">
          404
        </h1>
        <p className="text-3xl font-bold text-white mb-4">Page Not Found</p>
        <p className="text-gray-400 text-lg mb-8 max-w-md">
          Oops! The page you're looking for doesn't exist or has been removed.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="/"
            className="bg-accent text-dark px-8 py-3 rounded-lg font-bold hover:bg-pink-500 transition"
          >
            Back to Home
          </a>
          <a
            href="/discover"
            className="bg-secondary border border-secondary hover:border-accent px-8 py-3 rounded-lg font-bold transition"
          >
            Discover Users
          </a>
        </div>

        {/* Suggestions */}
        <div className="max-w-2xl">
          <p className="text-gray-400 mb-6">✨ Featured Users</p>
          <div className="grid md:grid-cols-3 gap-4">
            {FEATURED_USERS.map((user, i) => (
              <a
                key={i}
                href={`/${user.name}`}
                className="bg-secondary/50 border border-secondary rounded-lg p-4 hover:border-accent transition"
              >
                <p className="font-bold text-accent">@{user.name}</p>
                <p className="text-sm text-gray-400">{user.role}</p>
                <p className="text-xs text-gray-500 mt-2">{user.followers} followers</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
