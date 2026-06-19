import { useState } from 'react';
import useStore from '../../store/useStore';

export default function AccountProfile() {
  const { user, setUser } = useStore();
  const [usernames, setUsernames] = useState(user?.usernames || []);
  const [primaryUsername, setPrimaryUsername] = useState(user?.primaryUsername || 'xxiprimary');
  const [newUsername, setNewUsername] = useState('');
  const [visibleUsernames, setVisibleUsernames] = useState(usernames);

  const handleMakePrimary = (username) => {
    setPrimaryUsername(username);
    setUser({ ...user, primaryUsername: username });
  };

  const handleRemoveUsername = (username) => {
    if (username === primaryUsername) {
      alert('Cannot remove primary username');
      return;
    }
    const updated = usernames.filter(u => u !== username);
    setUsernames(updated);
    setUser({ ...user, usernames: updated });
  };

  const handleAddUsername = () => {
    if (newUsername && !usernames.includes(newUsername)) {
      const updated = [...usernames, newUsername];
      setUsernames(updated);
      setUser({ ...user, usernames: updated });
      setNewUsername('');
    }
  };

  const toggleVisibility = (username) => {
    if (visibleUsernames.includes(username)) {
      setVisibleUsernames(visibleUsernames.filter(u => u !== username));
    } else {
      setVisibleUsernames([...visibleUsernames, username]);
    }
  };

  return (
    <div className="space-y-12">
      {/* Profile Picture */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Profile Picture</h2>
        <p className="text-gray-400 mb-4">Shown on your bio page, in chat, and the sidebar. Square images look best (max 5MB).</p>
        <div className="flex gap-6">
          <div className="w-32 h-32 bg-accent rounded-lg flex items-center justify-center text-4xl">
            {user?.profilePic ? (
              <img src={user.profilePic} alt="Profile" className="w-full h-full rounded-lg object-cover" />
            ) : (
              '👤'
            )}
          </div>
          <div>
            <button className="bg-accent text-dark px-6 py-2 rounded-lg font-bold hover:bg-pink-500 transition">
              Upload picture
            </button>
            <p className="text-sm text-gray-400 mt-2">PNG, JPG, GIF or WebP.</p>
          </div>
        </div>
      </section>

      {/* Usernames Management */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Usernames</h2>
        <p className="text-gray-400 mb-6">Every username you own lands in the same inbox, across all our domains. Your primary one is how your mail displays by default. There's no limit on how many you can hold.</p>
        
        {/* Username List */}
        <div className="space-y-3 mb-6 bg-secondary/30 border border-secondary rounded-lg p-6">
          {usernames.map((username, idx) => (
            <div key={idx} className="flex justify-between items-center">
              <p className="font-mono text-lg text-accent">
                @{username}
                {username === primaryUsername && <span className="text-sm text-gray-400 ml-2">(primary)</span>}
              </p>
              <div className="flex gap-3">
                {username !== primaryUsername && (
                  <button
                    onClick={() => handleMakePrimary(username)}
                    className="text-accent hover:text-pink-500 transition text-sm"
                  >
                    Make primary
                  </button>
                )}
                {username !== primaryUsername && (
                  <button
                    onClick={() => handleRemoveUsername(username)}
                    className="text-red-500 hover:text-red-400 transition text-sm"
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Add Username */}
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="add a username"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            className="flex-1 px-4 py-2 bg-secondary border border-secondary rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button
            onClick={handleAddUsername}
            className="bg-accent text-dark px-6 py-2 rounded-lg font-bold hover:bg-pink-500 transition"
          >
            Add
          </button>
        </div>
        <p className="text-sm text-gray-400">{usernames.length} usernames</p>
      </section>

      {/* Usernames Visibility */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Usernames on your profile</h2>
        <p className="text-gray-400 mb-6">Your other usernames are hidden by default. Enable the ones you want to show on your bio.</p>
        
        <div className="space-y-3 bg-secondary/30 border border-secondary rounded-lg p-6">
          {usernames.map((username, idx) => (
            <label key={idx} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={visibleUsernames.includes(username)}
                onChange={() => toggleVisibility(username)}
                className="w-4 h-4 rounded accent-accent"
              />
              <span className="font-mono text-lg text-accent">
                @{username}
                {username === primaryUsername && <span className="text-sm text-gray-400 ml-2">primary</span>}
              </span>
            </label>
          ))}
        </div>
      </section>
    </div>
  );
}
