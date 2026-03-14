export default function About() {
  return (
    <div className="pt-20 min-h-screen px-6">
      <div className="max-w-3xl mx-auto py-20">
        <h1 className="text-4xl font-bold text-white mb-8">About Me</h1>

        {/* Bio Section */}
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            I'm a software developer based in Mesa, Arizona with hands-on experience
            in C# and ASP.NET MVC web applications, systems support, and structured
            software quality workflows. I'm local to Phoenix and available full-time on-site.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            My background includes building and maintaining MVC-based applications,
            REST service principles, Windows and Linux environments, and disciplined
            debugging practices. I'm comfortable supporting the full development
            lifecycle — implementation, testing, troubleshooting, and iterative improvement.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            I bring an analytical mindset to every problem — debugging feels natural
            to me, and I enjoy the architecture decisions that make software
            maintainable and scalable. I hold a B.A. Summa Cum Laude and am
            finishing a B.S. in Software Engineering at ASU with 8 credits remaining.
          </p>
        </div>

        {/* Experience Section */}
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Experience</h2>
          <div className="space-y-8">

            <div className="border-l-2 border-blue-500 pl-6">
              <h3 className="text-white font-semibold">AI Trainer and Data Quality Specialist</h3>
              <p className="text-blue-400 text-sm mb-1">Outlier AI — Remote</p>
              <p className="text-gray-500 text-sm mb-2">May 2024 – Present</p>
              <ul className="text-gray-400 text-sm space-y-1 list-disc list-inside">
                <li>Perform structured quality control on logic-driven datasets, reinforcing disciplined debugging and edge-case analysis.</li>
                <li>Evaluate multi-step reasoning outputs for correctness, logical consistency, and specification adherence.</li>
                <li>Contribute to refinement of evaluation guidelines, improving consistency across distributed technical contributors.</li>
                <li>Maintain detailed documentation to support traceability and reproducibility of review workflows.</li>
              </ul>
            </div>

            <div className="border-l-2 border-blue-500 pl-6">
              <h3 className="text-white font-semibold">AI Training Contributor</h3>
              <p className="text-blue-400 text-sm mb-1">DataAnnotation.Tech — Remote</p>
              <p className="text-gray-500 text-sm mb-2">Feb 2024 – Jul 2024</p>
              <ul className="text-gray-400 text-sm space-y-1 list-disc list-inside">
                <li>Evaluated model-generated outputs across coding and logic domains using standardized rubrics.</li>
                <li>Applied consistent validation standards across high-volume structured tasks supporting model refinement cycles.</li>
              </ul>
            </div>

            <div className="border-l-2 border-blue-500 pl-6">
              <h3 className="text-white font-semibold">Web and IT Support Specialist</h3>
              <p className="text-blue-400 text-sm mb-1">Community 43 — Phoenix, AZ</p>
              <p className="text-gray-500 text-sm mb-2">Jun 2022 – Feb 2024</p>
              <ul className="text-gray-400 text-sm space-y-1 list-disc list-inside">
                <li>Maintained and enhanced an internal C# ASP.NET MVC intranet application, supporting feature updates, debugging, and structured code modifications.</li>
                <li>Diagnosed and resolved application-level issues involving backend logic, user access, and deployment environments.</li>
                <li>Managed and updated WordPress-based web content, ensuring responsive layout consistency and reliable content delivery.</li>
                <li>Supported Windows-based systems and user environments, minimizing operational disruptions.</li>
                <li>Developed internal troubleshooting documentation that improved repeat issue resolution efficiency.</li>
              </ul>
            </div>

            <div className="border-l-2 border-blue-500 pl-6">
              <h3 className="text-white font-semibold">Microsoft Support Concierge</h3>
              <p className="text-blue-400 text-sm mb-1">Strada Education Network — Tempe, AZ</p>
              <p className="text-gray-500 text-sm mb-2">Jun 2020 – May 2022</p>
              <ul className="text-gray-400 text-sm space-y-1 list-disc list-inside">
                <li>Troubleshot authentication, Exchange Online, MFA, and access-control issues within Microsoft environments.</li>
                <li>Managed concurrent technical cases while maintaining a 96% customer satisfaction rating.</li>
              </ul>
            </div>

            <div className="border-l-2 border-blue-500 pl-6">
              <h3 className="text-white font-semibold">Undergraduate Teaching Assistant — Computer Systems Fundamentals (SER 232)</h3>
              <p className="text-blue-400 text-sm mb-1">Arizona State University — Tempe, AZ</p>
              <p className="text-gray-500 text-sm mb-2">Jan 2022 – Dec 2022</p>
              <ul className="text-gray-400 text-sm space-y-1 list-disc list-inside">
                <li>Assisted with instruction in systems logic, structured programming, and debugging methodologies.</li>
                <li>Reinforced disciplined problem decomposition and testing strategies.</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Education Section */}
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Education</h2>
          <div className="space-y-6">

            <div className="border-l-2 border-blue-500 pl-6">
              <h3 className="text-white font-semibold">B.S. Software Engineering — In Progress</h3>
              <p className="text-blue-400 text-sm mb-1">Arizona State University — Tempe, AZ</p>
              <p className="text-gray-400 text-sm">GPA 3.67 · Dean's List · 8 Credits Remaining</p>
            </div>

            <div className="border-l-2 border-blue-500 pl-6">
              <h3 className="text-white font-semibold">B.A. History, Summa Cum Laude</h3>
              <p className="text-blue-400 text-sm mb-1">Arizona State University — Tempe, AZ</p>
              <p className="text-gray-400 text-sm">GPA 3.86 · Minor in Political Science</p>
            </div>

          </div>
        </div>

        {/* Technical Skills Section */}
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6">Technical Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <div>
              <h3 className="text-blue-400 font-semibold mb-2">Languages</h3>
              <p className="text-gray-400 text-sm">C#, Python, Java, JavaScript, HTML, CSS</p>
            </div>

            <div>
              <h3 className="text-blue-400 font-semibold mb-2">Frameworks & Patterns</h3>
              <p className="text-gray-400 text-sm">ASP.NET MVC, REST principles, MVC architecture</p>
            </div>

            <div>
              <h3 className="text-blue-400 font-semibold mb-2">Tools</h3>
              <p className="text-gray-400 text-sm">Visual Studio, Git with branching and pull requests</p>
            </div>

            <div>
              <h3 className="text-blue-400 font-semibold mb-2">Systems</h3>
              <p className="text-gray-400 text-sm">Windows, Linux (Ubuntu VM environments)</p>
            </div>

            <div>
              <h3 className="text-blue-400 font-semibold mb-2">Web & Application</h3>
              <p className="text-gray-400 text-sm">Responsive design, cross-browser compatibility, structured debugging</p>
            </div>

            <div>
              <h3 className="text-blue-400 font-semibold mb-2">Systems & Infrastructure</h3>
              <p className="text-gray-400 text-sm">Microsoft 365, Exchange, identity and access management, VM configuration</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}