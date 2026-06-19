import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import useStore from '../store/useStore';
import AccountProfile from './Account/AccountProfile';
import AccountAppearance from './Account/AccountAppearance';
import AccountSecurity from './Account/AccountSecurity';
import AccountDevices from './Account/AccountDevices';

const AccountNav = () => {
  const location = useLocation();
  const activeLink = (path) => location.pathname.includes(path) ? 'text-accent border-b-2 border-accent' : '';

  return (
    <div className="flex gap-8 border-b border-secondary pb-4 mb-6 overflow-x-auto">
      <Link to="/account" className={`hover:text-accent transition ${activeLink('/account') && !location.pathname.includes('appearance') && !location.pathname.includes('security') && !location.pathname.includes('devices') ? activeLink('/account') : ''}`}>
        Profile
      </Link>
      <Link to="/account/appearance" className={`hover:text-accent transition ${activeLink('appearance')}`}>
        Appearance
      </Link>
      <Link to="/account/security" className={`hover:text-accent transition ${activeLink('security')}`}>
        Security
      </Link>
      <Link to="/account/devices" className={`hover:text-accent transition ${activeLink('devices')}`}>
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
