export default function TicketLogin() {
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center px-6">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 w-full max-w-md">
        <h2 className="text-2xl font-bold text-white text-center mb-2">
          🎫 SmarterTickets
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Sign in to continue
        </p>
        <a href="https://smartertickets.onrender.com/"
           className="block w-full bg-blue-600 hover:bg-blue-500 text-white 
                      text-center px-6 py-3 rounded-lg font-medium 
                      transition-colors mb-3">
          Go to Ticket Manager
        </a>
        <p className="text-gray-500 text-center text-sm mt-4">
          Use demo login buttons to explore without credentials
        </p>
      </div>
    </div>
  )
}