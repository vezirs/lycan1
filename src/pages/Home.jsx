import Hero from '../components/Hero';
import Domains from '../components/Domains';

export default function Home() {
  return (
    <div className="bg-dark">
      <Hero />
      <Domains />
      
      {/* Footer */}
      <footer className="bg-secondary/30 border-t border-secondary px-4 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            © 2026 Lycan. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-accent transition">Privacy</a>
            <a href="#" className="hover:text-accent transition">Terms</a>
            <a href="#" className="hover:text-accent transition">Contact</a>
            <a href="#" className="hover:text-accent transition">Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
