export default function About() {
  return (
    <div className="pt-20 min-h-screen px-6">
      <div className="max-w-3xl mx-auto py-20">
        <h1 className="text-4xl font-bold text-white mb-8">About Me</h1>
        
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            I'm a full stack developer based in Phoenix, Arizona with experience 
            building data-driven web applications across the .NET ecosystem and 
            modern JavaScript frameworks.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            My background includes building a C# MVC anonymous patient question 
            portal, a React/WordPress public website, and most recently a full 
            stack ticket management system in .NET 10 with Blazor and React frontends.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            I bring an analytical mindset to every problem — debugging feels natural 
            to me, and I enjoy the architecture decisions that make software 
            maintainable and scalable.
          </p>
        </div>

        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6">Experience</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-blue-500 pl-6">
              <h3 className="text-white font-semibold">Full Stack Developer</h3>
              <p className="text-blue-400 text-sm mb-2">Community 43</p>
              <p className="text-gray-400 text-sm">
                Built an anonymous patient question portal using C# ASP.NET MVC 
                and SQL Server, working alongside a data architect. Also developed 
                the public facing website using WordPress and React.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}