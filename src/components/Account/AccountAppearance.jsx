import { useState } from 'react';
import useStore from '../../store/useStore';

const THEMES = [
  { name: 'Dark', value: 'dark', colors: ['#0a0e27', '#ff006e'] },
  { name: 'Purple', value: 'purple', colors: ['#2d1b69', '#b85cf5'] },
  { name: 'Ocean', value: 'ocean', colors: ['#0a1628', '#00d4ff'] },
  { name: 'Forest', value: 'forest', colors: ['#0d2818', '#00ff88'] },
];

const EFFECTS = [
  'None',
  'Glow',
  'Blur',
  'Fade',
  'Wave',
  'Pulse',
];

export default function AccountAppearance() {
  const { user, setUser } = useStore();
  const [theme, setTheme] = useState('dark');
  const [accentColor, setAccentColor] = useState('#ff006e');
  const [effect, setEffect] = useState('None');
  const [backgroundMusic, setBackgroundMusic] = useState('');
  const [customCursor, setCustomCursor] = useState('default');

  const handleSave = () => {
    setUser({
      ...user,
      appearance: {
        theme,
        accentColor,
        effect,
        backgroundMusic,
        customCursor,
      },
    });
    alert('Appearance saved!');
  };

  return (
    <div className="space-y-12">
      {/* Theme Selection */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Themes</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {THEMES.map((t) => (
            <button
              key={t.value}
              onClick={() => setTheme(t.value)}
              className={`p-6 rounded-lg border-2 transition ${
                theme === t.value
                  ? 'border-accent bg-secondary'
                  : 'border-secondary hover:border-accent'
              }`}
            >
              <div className="flex gap-2 justify-center mb-2">
                {t.colors.map((color, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 rounded"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <p className="text-sm font-bold">{t.name}</p>
            </button>
          ))}
        </div>
      </section>

      {/* Accent Color */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Accent Color</h2>
        <div className="flex gap-4 items-center">
          <input
            type="color"
            value={accentColor}
            onChange={(e) => setAccentColor(e.target.value)}
            className="w-16 h-16 rounded-lg cursor-pointer"
          />
          <div>
            <p className="font-mono text-accent">{accentColor}</p>
            <p className="text-sm text-gray-400">Choose your custom accent color</p>
          </div>
        </div>
      </section>

      {/* Effects */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Effects</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {EFFECTS.map((eff) => (
            <button
              key={eff}
              onClick={() => setEffect(eff)}
              className={`px-4 py-2 rounded-lg border transition ${
                effect === eff
                  ? 'border-accent bg-accent/20'
                  : 'border-secondary hover:border-accent'
              }`}
            >
              {eff}
            </button>
          ))}
        </div>
      </section>

      {/* Background Music */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Background Music</h2>
        <div className="space-y-4">
          <input
            type="url"
            placeholder="Paste music URL (Spotify, SoundCloud, etc.)"
            value={backgroundMusic}
            onChange={(e) => setBackgroundMusic(e.target.value)}
            className="w-full px-4 py-2 bg-secondary border border-secondary rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent"
          />
          {backgroundMusic && (
            <p className="text-sm text-accent">✓ Music URL added</p>
          )}
        </div>
      </section>

      {/* Custom Cursor */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Custom Cursor</h2>
        <select
          value={customCursor}
          onChange={(e) => setCustomCursor(e.target.value)}
          className="w-full px-4 py-2 bg-secondary border border-secondary rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <option value="default">Default</option>
          <option value="pointer">Pointer</option>
          <option value="hand">Hand</option>
          <option value="crosshair">Crosshair</option>
        </select>
      </section>

      {/* Save Button */}
      <div>
        <button
          onClick={handleSave}
          className="bg-accent text-dark px-8 py-3 rounded-lg font-bold hover:bg-pink-500 transition"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
