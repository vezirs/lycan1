import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import useStore from '../store/useStore';
import AccountProfile from '../components/Account/AccountProfile';
import AccountAppearance from '../components/Account/AccountAppearance';
import AccountSecurity from '../components/Account/AccountSecurity';
import AccountDevices from '../components/Account/AccountDevices';

const AccountNav = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname.includes(path);

  return (
    <div className="flex gap-8 border-b border-secondary pb-4 mb-6 overflow-x-auto sticky top-0 bg-dark z-10">
      <Link
        to="/account"
        className={`pb-2 transition whitespace-nowrap ${
          location.pathname === '/account'
            ? 'text-accent border-b-2 border-accent'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        Profile
      </Link>
      <Link
        to="/account/appearance"
        className={`pb-2 transition whitespace-nowrap ${
          isActive('appearance')
            ? 'text-accent border-b-2 border-accent'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        Appearance
      </Link>
      <Link
        to="/account/security"
        className={`pb-2 transition whitespace-nowrap ${
          isActive('security')
            ? 'text-accent border-b-2 border-accent'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        Security
      </Link>
      <Link
        to="/account/devices"
        className={`pb-2 transition whitespace-nowrap ${
          isActive('devices')
            ? 'text-accent border-b-2 border-accent'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        Devices
      </Link>
    </div>
  );
};

export default function Account() {
  const { user } = useStore();

  if (!user) {
    return (
      <div className="min-h-screen pt-32 px-4 text-center">
        <p className="text-xl text-gray-400">Please log in to access your account</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 px-4 pb-20">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Account Settings</h1>
        <AccountNav />
        <Routes>
          <Route path="/" element={<AccountProfile />} />
          <Route path="/appearance" element={<AccountAppearance />} />
          <Route path="/security" element={<AccountSecurity />} />
          <Route path="/devices" element={<AccountDevices />} />
        </Routes>
      </div>
    </div>
  );
}
