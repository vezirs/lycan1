import { useParams } from 'react-router-dom';
import { useState } from 'react';

export default function Profile() {
  const { username } = useParams();
  const [profile] = useState({
    username: username || 'username',
    bio: 'Customize your bio here',
    theme: 'dark',
    links: [],
    music: null,
  });

  return (
    <div className="min-h-screen pt-20 bg-dark">
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-5xl font-bold text-accent mb-4">@{profile.username}</h1>
        <p className="text-gray-300 mb-8">{profile.bio}</p>
        
        <div className="bg-secondary/50 border border-secondary rounded-lg p-8">
          <p className="text-gray-400">No links added yet</p>
        </div>
      </div>
    </div>
  );
}
