import { useState } from 'react';

const DOMAINS = [
  'lycan.gg',
  'hubber.cc',
  'ageplay.lol',
  'fang.rip',
  'tip.cx',
  '764.lol',
];

export default function Domains() {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Claim your name on any domain</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {DOMAINS.map((domain) => (
            <button
              key={domain}
              className="bg-secondary border border-secondary hover:border-accent rounded-lg p-4 text-center transition transform hover:scale-105"
            >
              <p className="font-mono text-lg text-accent">{domain}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
