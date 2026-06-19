import { useState } from 'react';

export default function AccountDevices() {
  const [devices] = useState([
    {
      id: 1,
      name: 'Chrome on MacOS',
      lastActive: '2 minutes ago',
      ip: '192.168.1.1',
      location: 'San Francisco, CA',
      isCurrent: true,
    },
    {
      id: 2,
      name: 'Safari on iPhone',
      lastActive: '1 hour ago',
      ip: '192.168.1.50',
      location: 'San Francisco, CA',
      isCurrent: false,
    },
    {
      id: 3,
      name: 'Firefox on Windows',
      lastActive: '3 days ago',
      ip: '203.0.113.5',
      location: 'Unknown',
      isCurrent: false,
    },
  ]);

  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-2xl font-bold mb-6">Active Devices</h2>
        <p className="text-gray-400 mb-6">Devices where you're currently signed in. You can sign out of any device remotely.</p>

        <div className="space-y-4">
          {devices.map((device) => (
            <div
              key={device.id}
              className="bg-secondary/30 border border-secondary rounded-lg p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    {device.name}
                    {device.isCurrent && (
                      <span className="text-xs bg-accent text-dark px-2 py-1 rounded">Current device</span>
                    )}
                  </h3>
                  <p className="text-sm text-gray-400">Last active: {device.lastActive}</p>
                </div>
                {!device.isCurrent && (
                  <button className="text-red-500 hover:text-red-400 transition text-sm">
                    Sign out
                  </button>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
                <p>IP: {device.ip}</p>
                <p>Location: {device.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sign Out All */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Sign Out Everywhere</h2>
        <p className="text-gray-400 mb-4">
          This will sign you out of all devices except the current one.
        </p>
        <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-red-700 transition">
          Sign Out All Devices
        </button>
      </section>
    </div>
  );
}
