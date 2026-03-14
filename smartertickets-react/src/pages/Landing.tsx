import { Link } from 'react-router-dom'

interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  link?: string
  github?: string
}

interface Skill {
  category: string
  items: string[]
}

const skills: Skill[] = [
  {
    category: "Languages",
    items: ["C#", "Python", "Java", "JavaScript", "TypeScript", "Dart", "HTML", "CSS"]
  },
  {
    category: "Frameworks",
    items: ["ASP.NET Core", "Blazor", "React", "Flutter", "MVC"]
  },
  {
    category: "Tools",
    items: ["Rider", "VS Code", "Git", "Swagger", "Entity Framework"]
  },
  {
    category: "Databases",
    items: ["SQLite", "SQL Server", "MySQL"]
  },
  {
    category: "Concepts",
    items: ["REST APIs", "Responsive Design", "Unit Testing", "Dependency Injection", "Agile"]
  }
]

const projects: Project[] = [
  {
    id: 1,
    title: "SmarterTickets",
    description: "Full stack ticket management system with a REST API, Blazor admin dashboard, role-based authentication, and React customer portal. Built on .NET 10.",
    tech: ["C#", ".NET 10", "Blazor", "React", "Entity Framework", "SQLite"],
    link: "/tickets/login",
    github: "https://github.com/doneberg/SmarterTickets"
  },
  {
    id: 2,
    title: "PromptLab",
    description: "Backend-first AI workflow engine that executes multi-step prompt chains against LLM providers, with full execution tracking, JWT authentication, and a modular Vanilla JS dashboard.",
    tech: ["Python", "FastAPI", "SQLAlchemy", "JWT", "Vanilla JS"],
    github: "https://github.com/doneberg/promptlab"
  },
  {
    id: 3,
    title: "Community 43",
    description: "Anonymous patient question portal built with C# MVC and SQL Server. Features an authenticated admin interface and a public-facing WordPress/React website.",
    tech: ["C#", "ASP.NET MVC", "SQL Server", "React", "WordPress"],
  }
]

export default function Landing() {
  return (
    <div className="pt-20">

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-white mb-6">
            Don Bergeson
          </h1>
          <h2 className="text-2xl text-blue-400 font-medium mb-8">
            Full Stack Developer
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            Software developer with proven experience building full-stack applications 
            across C#, .NET, and modern JavaScript frameworks. I bring an analytical 
            mindset to every problem — whether that's architecting a multi-layered REST API, 
            debugging a tricky database relationship, or designing a clean user experience.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#projects" 
               className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 
                          rounded-lg font-medium transition-colors">
              View My Work
            </a>
            <Link to="/about"
               className="border border-gray-600 hover:border-gray-400 text-gray-300 
                          hover:text-white px-8 py-3 rounded-lg font-medium transition-colors">
              About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div key={skill.category} 
                   className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-blue-400 font-semibold mb-4">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} 
                          className="bg-gray-700 text-gray-300 px-3 py-1 
                                     rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id}
                   className="bg-gray-800 rounded-xl p-6 border border-gray-700 
                              flex flex-col justify-between hover:border-blue-500 
                              transition-colors">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span key={t}
                            className="bg-blue-900/50 text-blue-300 px-2 py-1 
                                       rounded text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  {project.link && (
                    <Link to={project.link}
                          className="bg-blue-600 hover:bg-blue-500 text-white 
                                     px-4 py-2 rounded-lg text-sm transition-colors">
                      Live Demo
                    </Link>
                  )}
                  {project.github && (
                    <a href={project.github}
                       target="_blank"
                       rel="noreferrer"
                       className="border border-gray-600 hover:border-gray-400 
                                  text-gray-300 hover:text-white px-4 py-2 
                                  rounded-lg text-sm transition-colors">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800 text-center text-gray-500">
        <p>© 2025 Don Bergeson — Built with React, TypeScript & Tailwind CSS</p>
      </footer>

    </div>
  )
}