import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Discover from './pages/Discover';
import Mail from './pages/Mail';
import Chat from './pages/Chat';
import Account from './pages/Account';
import NotFound from './pages/NotFound';
import useStore from './store/useStore';

function App() {
  const isLoggedIn = useStore((state) => state.isLoggedIn);

  return (
    <Router>
      <div className="min-h-screen bg-dark">
        <Navbar />
        {isLoggedIn && <Sidebar />}
        <main className={isLoggedIn ? "ml-64" : ""}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:username" element={<Profile />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/mail" element={<Mail />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/account/*" element={<Account />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
