import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link to="/" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
          Don Bergeson
        </Link>

        <div className="flex items-center gap-8">
          <Link to="/" className="text-gray-300 hover:text-white transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
            About
          </Link>
          <Link to="/tickets/login" className="bg-blue-600 hover:bg-blue-500 text-white 
            px-4 py-2 rounded-lg transition-colors font-medium">
            SmarterTickets
          </Link>
          <a href="https://github.com/doneberg" 
             target="_blank" 
             rel="noreferrer"
             className="text-gray-300 hover:text-white transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/donald-bergeson-924581223/" 
             target="_blank" 
             rel="noreferrer"
             className="text-gray-300 hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="mailto:doneberg@gmail.com" 
             className="text-gray-300 hover:text-white transition-colors">
            Contact Me
          </a>
        </div>

      </div>
    </nav>
  )
}