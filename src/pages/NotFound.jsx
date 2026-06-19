export default function NotFound() {
  return (
    <div className="min-h-screen pt-20 bg-dark flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-accent mb-4">404</h1>
        <p className="text-2xl text-white mb-8">Page not found</p>
        <a href="/" className="bg-accent text-dark px-8 py-3 rounded-full font-bold hover:bg-pink-500 transition">
          Go Home
        </a>
      </div>
    </div>
  );
}
