import { useTheme } from '../context/ThemeContext.tsx';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const { theme } = useTheme();
  if (theme !== 'theme2') return null; // only render sidebar in theme2

  return (
    <aside className="hidden md:block w-64 bg-gray-800 text-white p-4 transition-all duration-300">
      <h2 className="text-xl font-bold mb-4">Menu</h2>
      <ul className="space-y-2">
        <li><Link to="/" className="block hover:bg-gray-700 p-2 rounded">Home</Link></li>
        <li><Link to="/about" className="block hover:bg-gray-700 p-2 rounded">About</Link></li>
        <li><Link to="/contact" className="block hover:bg-gray-700 p-2 rounded">Contact</Link></li>
      </ul>
    </aside>
  );
}