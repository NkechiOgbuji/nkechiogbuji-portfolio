function App() {
  const projects = [
    {
      title: "Spring PetClinic Microservices on AWS EKS",
      desc: "Deployed 8 microservices on AWS EKS with Kubernetes, ingress, external secrets, and monitoring.",
      tools: ["AWS", "EKS", "Kubernetes", "Docker"],
    },
    {
      title: "GitOps Deployment with ArgoCD",
      desc: "Implemented GitOps workflow for automated deployments, image updates, and environment consistency.",
      tools: ["ArgoCD", "GitHub Actions", "Helm"],
    },
    {
      title: "EpicBook Docker Deployment",
      desc: "Containerized and deployed a full-stack application using Docker, Nginx, MySQL, and PM2.",
      tools: ["Docker", "Nginx", "Linux"],
    },
    {
      title: "Azure DevOps Static Website Deployment",
      desc: "Built a CI/CD workflow to deploy a static website to an Ubuntu VM through Azure DevOps.",
      tools: ["Azure", "CI/CD", "Linux"],
    },
  ];

  const skills = [
    "AWS",
    "Azure",
    "Kubernetes",
    "Terraform",
    "Docker",
    "GitHub Actions",
    "Linux",
    "Prometheus",
    "Grafana",
    "ArgoCD",
    "CI/CD",
    "AI Automation",
    "Technical Support",
  ];

  return (
    <div className="min-h-screen bg-[#f8f6f2] text-[#111827]">
      <nav className="w-full bg-[#f8f6f2]/90 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold">
            NQ<span className="text-[#CC5500]">.</span>
          </h1>

          <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-700 items-center">
            <a href="#home" className="text-[#CC5500]">
              Home
            </a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#certifications">Certifications</a>
            <a href="#contact">Contact</a>

            <a
              href="/Nkechi_Queeneth_Ogbuji_Resume.pdf"
              download
              className="border border-[#CC5500] text-[#CC5500] px-4 py-2 rounded-lg font-semibold"
            >
              Download Resume
            </a>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-14 items-center"
      >
        <div>
          <p className="text-[#CC5500] text-xs font-bold tracking-widest mb-6 uppercase">
            Scalable Cloud Solutions • AI Automation • Platform Reliability
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Nkechi Queeneth
            <br />
            <span className="text-[#CC5500]">Ogbuji.</span>
          </h2>

          <h3 className="mt-8 text-2xl font-semibold text-gray-800 leading-snug">
            AI Cloud & DevOps Engineer | Platform Engineer | Technical Support
            Specialist
          </h3>

          <div className="mt-5 flex flex-wrap gap-3 text-gray-700 font-semibold">
            <span>AWS</span>
            <span className="text-[#CC5500]">|</span>
            <span>Azure</span>
            <span className="text-[#CC5500]">|</span>
            <span>Kubernetes</span>
            <span className="text-[#CC5500]">|</span>
            <span>Terraform</span>
            <span className="text-[#CC5500]">|</span>
            <span>Docker</span>
            <span className="text-[#CC5500]">|</span>
            <span>CI/CD</span>
            <span className="text-[#CC5500]">|</span>
            <span>Linux</span>
          </div>

          <p className="mt-8 text-gray-600 leading-relaxed max-w-xl">
            I design and support scalable cloud infrastructure, automate
            deployment workflows, and improve operational reliability using AWS,
            Azure, Kubernetes, Terraform, Docker, Linux, and CI/CD. I also
            leverage AI-powered tools to streamline engineering workflows,
            enhance productivity, and accelerate software delivery.
          </p>

          <p className="mt-5 text-gray-800 font-semibold">
            <span className="text-green-500">●</span> Available for Cloud
            Engineering, DevOps, Platform Engineering, and Technical Support
            opportunities.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-[#CC5500] text-white px-7 py-4 rounded-lg font-bold shadow"
            >
              View My Projects →
            </a>

            <a
              href="#contact"
              className="border border-gray-300 bg-white px-7 py-4 rounded-lg font-bold"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-5 text-sm font-semibold text-gray-700">
            <a
              href="https://github.com/official-mary"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a
              href="https://queenethcloudjouney.hashnode.dev"
              target="_blank"
              rel="noreferrer"
            >
              Hashnode
            </a>
            <a href="mailto:ogbujiqueeneth13@gmail.com">Email</a>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-2xl relative bg-white">
          <img
            src="/queeneth.jpg"
            alt="Nkechi Queeneth Ogbuji"
            className="w-full h-[580px] object-cover object-top"
          />

          <div className="bg-black/90 text-white px-8 py-7 rounded-t-[34px] -mt-28 relative z-10">
            <p className="text-[#ff6a00] text-xs font-bold tracking-[3px] uppercase leading-relaxed mb-3">
              Scalable Cloud Solutions • AI Automation • Platform Reliability
            </p>

            <h3 className="text-4xl font-extrabold leading-tight">
              Nkechi Queeneth Ogbuji
            </h3>

            <p className="text-lg text-gray-200 mt-2">
              AI Cloud & DevOps Engineer | Technical Support Specialist
            </p>

            <div className="flex flex-wrap gap-3 mt-5">
              {["AWS", "Azure", "Kubernetes", "Terraform", "Docker", "CI/CD"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="bg-[#CC5500] text-white px-4 py-2 rounded-full text-sm font-semibold"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 pb-16 text-center">
        <div className="bg-white rounded-2xl p-6 shadow border border-gray-100">
          <h3 className="text-4xl font-extrabold text-[#CC5500]">8+</h3>
          <p className="text-gray-600 font-semibold">Microservices Deployed</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow border border-gray-100">
          <h3 className="text-4xl font-extrabold text-[#CC5500]">5+</h3>
          <p className="text-gray-600 font-semibold">Cloud Projects Completed</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow border border-gray-100">
          <h3 className="text-4xl font-extrabold text-[#CC5500]">10+</h3>
          <p className="text-gray-600 font-semibold">DevOps Tools Used</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow border border-gray-100">
          <h3 className="text-4xl font-extrabold text-[#CC5500]">99.9%</h3>
          <p className="text-gray-600 font-semibold">Reliability Focus</p>
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-extrabold mb-8">Recent Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl p-6 shadow border border-gray-100"
            >
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-600 mt-3">{project.desc}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="bg-[#fff1e6] text-[#CC5500] px-3 py-1 rounded-full text-xs font-bold"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <a href="#" className="inline-block mt-5 text-[#CC5500] font-bold">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-extrabold mb-8">Technical Skills</h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-white border border-gray-200 text-gray-700 px-5 py-3 rounded-full font-bold shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="certifications" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-extrabold mb-8">Certifications</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "AWS Cloud Practitioner",
            "Microsoft Azure Fundamentals (AZ-900)",
            "Terraform Associate (In Progress)",
            "Kubernetes (In Progress)",
          ].map((cert) => (
            <div
              key={cert}
              className="bg-white rounded-2xl p-6 shadow border border-gray-100"
            >
              <h3 className="font-bold text-lg">{cert}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-3xl shadow p-10 text-center border border-gray-100">
          <h2 className="text-4xl font-extrabold">Let’s Work Together</h2>

          <p className="text-gray-600 mt-4">
            Open to Cloud Engineering, DevOps, Platform Engineering, Technical
            Support, and remote collaboration opportunities.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:ogbujiqueeneth13@gmail.com"
              className="bg-[#CC5500] text-white px-8 py-4 rounded-lg font-bold"
            >
              Email Me
            </a>

            <a
              href="https://github.com/official-mary"
              target="_blank"
              rel="noreferrer"
              className="border border-gray-300 bg-white px-8 py-4 rounded-lg font-bold"
            >
              GitHub
            </a>

            <a
              href="https://queenethcloudjouney.hashnode.dev"
              target="_blank"
              rel="noreferrer"
              className="border border-gray-300 bg-white px-8 py-4 rounded-lg font-bold"
            >
              Hashnode
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;