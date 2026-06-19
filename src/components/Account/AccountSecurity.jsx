import { useState } from 'react';
import useStore from '../../store/useStore';

export default function AccountSecurity() {
  const { user } = useStore();
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [showRecoveryCodes, setShowRecoveryCodes] = useState(false);
  const [recoveryCodes, setRecoveryCodes] = useState([
    'ABC123XYZ789',
    'DEF456UVW012',
    'GHI789RST345',
    'JKL012QOP678',
    'MNO345LMN901',
    'PQR678IJK234',
    'STU901FGH567',
    'VWX234CDE890',
  ]);
  const [usedCodes, setUsedCodes] = useState([]);

  const handleEnableTwoFactor = () => {
    setTwoFactorEnabled(true);
    alert('Two-factor authentication enabled! Scan the QR code with your authenticator app.');
  };

  const handleGenerateNewCodes = () => {
    const newCodes = Array(8)
      .fill(0)
      .map(() =>
        Math.random().toString(36).substring(2, 15).toUpperCase() +
        Math.random().toString(36).substring(2, 15).toUpperCase()
      );
    setRecoveryCodes(newCodes);
    setUsedCodes([]);
  };

  return (
    <div className="space-y-12">
      {/* Password Change */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Password</h2>
        <div className="space-y-4">
          <input
            type="password"
            placeholder="Current password"
            className="w-full px-4 py-2 bg-secondary border border-secondary rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <input
            type="password"
            placeholder="New password"
            className="w-full px-4 py-2 bg-secondary border border-secondary rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <input
            type="password"
            placeholder="Confirm new password"
            className="w-full px-4 py-2 bg-secondary border border-secondary rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button className="bg-accent text-dark px-6 py-2 rounded-lg font-bold hover:bg-pink-500 transition">
            Change Password
          </button>
        </div>
      </section>

      {/* Two-Factor Authentication */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Two-Factor Authentication</h2>
        <p className="text-gray-400 mb-6">
          Add a second step at login using an authenticator app (Authy, Google Authenticator, etc). Strongly recommended - it stops anyone who only has your password from getting in or moving your usernames.
        </p>

        {!twoFactorEnabled ? (
          <button
            onClick={handleEnableTwoFactor}
            className="bg-accent text-dark px-6 py-2 rounded-lg font-bold hover:bg-pink-500 transition"
          >
            Set up two-factor
          </button>
        ) : (
          <div className="bg-secondary/30 border border-secondary rounded-lg p-6">
            <p className="text-accent font-bold mb-4">✓ Two-factor authentication enabled</p>
            <div className="w-32 h-32 bg-secondary rounded-lg mb-4 flex items-center justify-center text-sm text-center p-2">
              [QR Code Here]
            </div>
            <p className="text-sm text-gray-400">Scan this QR code with your authenticator app</p>
          </div>
        )}
      </section>

      {/* Protected Actions */}
      <section>
        <h2 className="text-2xl font-bold mb-6">What's protected</h2>
        <p className="text-gray-400 mb-4">
          Every sensitive action on your account is gated. With two-factor on, they require your authenticator code; otherwise your password.
        </p>
        <div className="bg-secondary/30 border border-secondary rounded-lg p-6 space-y-2">
          {[
            'Log in',
            'Change / remove a username',
            'Transfer a username',
            'Trade usernames',
            'Sell or buy on the market',
            'Bid on an auction',
            'Withdraw your balance',
            'Open Settings',
          ].map((action, i) => (
            <p key={i} className="flex items-center gap-3">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              {action} - <span className="text-gray-400">password</span>
            </p>
          ))}
        </div>
      </section>

      {/* Recovery Codes */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Recovery Codes</h2>
        <p className="text-gray-400 mb-6">
          Backup codes to reset your password if you forget it (no email needed). Each works once. Save them somewhere safe.
        </p>

        <div className="mb-4">
          <p className="text-sm text-gray-400 mb-2">{recoveryCodes.length - usedCodes.length} unused codes left</p>
          <button
            onClick={handleGenerateNewCodes}
            className="bg-secondary border border-secondary px-6 py-2 rounded-lg hover:border-accent transition"
          >
            Generate new codes
          </button>
        </div>

        <button
          onClick={() => setShowRecoveryCodes(!showRecoveryCodes)}
          className="text-accent hover:text-pink-500 transition mb-4"
        >
          {showRecoveryCodes ? 'Hide codes' : 'Show codes'}
        </button>

        {showRecoveryCodes && (
          <div className="bg-secondary/30 border border-secondary rounded-lg p-6 font-mono text-sm space-y-2">
            {recoveryCodes.map((code, i) => (
              <p key={i} className={usedCodes.includes(i) ? 'text-gray-600 line-through' : 'text-gray-300'}>
                {code}
              </p>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
