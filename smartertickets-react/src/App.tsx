import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import About from './pages/About'
import TicketLogin from './pages/tickets/TicketLogin'
import SubmitTicket from './pages/tickets/SubmitTicket'

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/tickets/login" element={<TicketLogin />} />
        <Route path="/tickets/submit" element={<SubmitTicket />} />
      </Routes>
    </div>
  )
}

export default App