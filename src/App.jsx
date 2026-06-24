function App() {
  const projects = [
    {
      title: "Kubernetes Observability Stack",
      desc: "Built a Kubernetes observability platform using Prometheus, Grafana, Alertmanager, and Gmail SMTP notifications.",
      tools: ["Kubernetes", "Prometheus", "Grafana", "Alertmanager"],
      link: "https://github.com/NkechiOgbuji/kubernetes-observability-stack",
    },
    {
      title: "Enterprise DevOps Platform",
      desc: "Infrastructure, Kubernetes, GitOps, monitoring, and SRE configurations for a multi-cloud DevOps platform.",
      tools: ["Kubernetes", "GitOps", "Monitoring", "SRE"],
      link: "https://github.com/NkechiOgbuji/enterprise-devops-platform",
    },
    {
      title: "Enterprise DevOps App",
      desc: "Application source code for an enterprise multi-cloud DevOps platform.",
      tools: ["JavaScript", "Cloud", "DevOps"],
      link: "https://github.com/NkechiOgbuji/enterprise-devops-app",
    },
    {
      title: "Mini Finance DevOps Project",
      desc: "End-to-end DevOps project using Terraform, Ansible, Azure DevOps, and Nginx.",
      tools: ["Terraform", "Ansible", "Azure DevOps", "Nginx"],
      link: "https://github.com/NkechiOgbuji/mini-finance-devops-project",
    },
    {
      title: "Azure DevOps Self-Hosted Agent",
      desc: "Configured a self-hosted Ubuntu agent in Azure DevOps with PAT authentication, agent pool setup, and CI pipeline execution.",
      tools: ["Azure DevOps", "Ubuntu", "YAML", "CI/CD"],
      link: "https://github.com/NkechiOgbuji/azure-devops-selfhosted-agent",
    },
    {
      title: "Book Review AWS Infrastructure",
      desc: "Production-grade AWS infrastructure built with Terraform, including EC2, RDS, and networking.",
      tools: ["AWS", "Terraform", "EC2", "RDS"],
      link: "https://github.com/NkechiOgbuji/my-bookreview-terraform-nkechiogbuji",
    },
    {
      title: "Terraform EpicBook AWS",
      desc: "Infrastructure as Code project for deploying EpicBook on AWS using Terraform.",
      tools: ["AWS", "Terraform", "Infrastructure"],
      link: "https://github.com/NkechiOgbuji/terraform-epicbook-aws",
    },
    {
      title: "Agentic DevOps with Claude Code",
      desc: "Built, deployed, and operated AWS infrastructure using AI agents, DevOps automation, and safety guardrails.",
      tools: ["AWS", "AI", "DevOps", "Claude Code"],
      link: "https://github.com/NkechiOgbuji/Ultimate-Agentic-DevOps-with-Claude-Code",
    },
  ];

  const skills = [
    "AWS",
    "Azure",
    "Kubernetes",
    "Terraform",
    "Docker",
    "Linux",
    "GitHub Actions",
    "Azure DevOps",
    "ArgoCD",
    "Helm",
    "Prometheus",
    "Grafana",
    "CI/CD",
    "AI Automation",
    "Technical Support",
  ];

  const certifications = [
    "AWS Cloud Practitioner",
    "Microsoft Azure Fundamentals (AZ-900)",
    "DMI DevOps Micro-Internship",
    "Terraform Associate (In Progress)",
    "Kubernetes (In Progress)",
  ];

  const blogs = [
    {
      title: "How I Deployed Spring PetClinic Microservices Locally",
      link: "https://queenethcloudjouney.hashnode.dev",
    },
    {
      title: "Deploying 8 Microservices with Docker Compose",
      link: "https://queenethcloudjouney.hashnode.dev",
    },
    {
      title: "My Journey into Kubernetes, CI/CD, and Cloud Automation",
      link: "https://queenethcloudjouney.hashnode.dev",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f6f2] text-[#111827]">
      <nav className="w-full bg-[#f8f6f2]/90 border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold">
            NQ<span className="text-[#CC5500]">.</span>
          </h1>

          <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-700 items-center">
            <a href="#home" className="text-[#CC5500]">
              Home
            </a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#blogs">Blog</a>
            <a href="#contact">Contact</a>

            <a
              href="/Nkechi_Queeneth_Ogbuji_Resume.pdf"
              download
              className="border border-[#CC5500] text-[#CC5500] px-4 py-2 rounded-lg font-semibold hover:bg-[#fff1e6]"
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

          <p className="mt-8 text-gray-600 leading-relaxed max-w-xl">
            I design and support scalable cloud infrastructure, automate
            deployment workflows, and improve operational reliability using AWS,
            Azure, Kubernetes, Terraform, Docker, Linux, and CI/CD. I also use
            AI-powered tools to streamline engineering workflows and accelerate
            software delivery.
          </p>

          <p className="mt-5 text-gray-800 font-semibold">
            <span className="text-green-500">●</span> Available for Cloud
            Engineering, DevOps, Platform Engineering, and Technical Support
            opportunities.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-[#CC5500] text-white px-7 py-4 rounded-lg font-bold shadow hover:bg-[#b84b00]"
            >
              View My Projects →
            </a>

            <a
              href="#contact"
              className="border border-gray-300 bg-white px-7 py-4 rounded-lg font-bold hover:bg-gray-50"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-5 text-sm font-semibold text-gray-700">
            <a
              href="https://github.com/NkechiOgbuji"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#CC5500]"
            >
              GitHub
            </a>
  
            <a
              href="https://www.upwork.com/freelancers/~011dc05d447201095f"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#CC5500]"
            >
              Upwork
            </a>

            <a
              href="https://x.com/kykycloud"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#CC5500]"
            >
              X
            </a>
    
            <a
              href="https://www.linkedin.com/in/nkechiogbuji"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#CC5500]"
            >
              LinkedIn
            </a>

            <a
              href="https://queenethcloudjouney.hashnode.dev"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#CC5500]"
            >
              Hashnode
            </a>

            <a
              href="mailto:nkechiogbuji13@gmail.com"
              className="hover:text-[#CC5500]"
            >
              Email
            </a>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-2xl relative bg-white">
          <img
            src="/queeneth.jpg"
            alt="Nkechi Queeneth Ogbuji"
            className="w-full h-[580px] object-cover object-top"
          />

          <div className="bg-black/90 text-white px-8 py-7 rounded-t-[34px] -mt-28 relative z-10">
            <p className="text-[#ff6a00] text-xs font-bold tracking-[3px] uppercase mb-3">
              Cloud Engineering • AI Automation • Platform Reliability
            </p>

            <h3 className="text-4xl font-extrabold">
              Nkechi Queeneth Ogbuji
            </h3>

            <p className="text-lg text-gray-200 mt-2">
              AI Cloud & DevOps Engineer | Technical Support Specialist
            </p>

            <div className="flex flex-wrap gap-3 mt-5">
              {[
                "AWS",
                "Azure",
                "Kubernetes",
                "Terraform",
                "Docker",
                "CI/CD",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-[#CC5500] text-white px-4 py-2 rounded-full text-sm font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 pb-16 text-center">
        {[
          ["15+", "Projects Built"],
          ["8+", "Cloud Deployments"],
          ["10+", "DevOps Tools Used"],
          ["99.9%", "Reliability Focus"],
        ].map(([number, label]) => (
          <div
            key={label}
            className="bg-white rounded-2xl p-6 shadow border border-gray-100"
          >
            <h3 className="text-4xl font-extrabold text-[#CC5500]">
              {number}
            </h3>
            <p className="text-gray-600 font-semibold">{label}</p>
          </div>
        ))}
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-3xl shadow border border-gray-100 p-10">
          <h2 className="text-4xl font-extrabold mb-6">About Me</h2>

          <p className="text-gray-600 leading-relaxed text-lg">
            I am a Cloud and DevOps Engineer with hands-on experience building,
            deploying, and supporting cloud-native applications. My work includes
            Kubernetes deployments, CI/CD pipelines, infrastructure automation,
            monitoring, Docker-based deployments, and technical support. I enjoy
            turning complex systems into reliable, repeatable, and well-documented
            solutions.
          </p>
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-extrabold mb-10">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-3xl p-8 shadow border border-gray-100 hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold">{project.title}</h3>

              <p className="text-gray-600 mt-4">{project.desc}</p>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="bg-[#fff1e6] text-[#CC5500] px-3 py-1 rounded-full text-xs font-semibold"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-6">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#CC5500] text-white px-5 py-3 rounded-lg font-semibold hover:bg-[#b84b00]"
                >
                  GitHub Repo
                </a>

                <a
                  href="https://queenethcloudjouney.hashnode.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#CC5500] text-[#CC5500] px-5 py-3 rounded-lg font-semibold hover:bg-[#fff1e6]"
                >
                  Blog
                </a>
              </div>
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
          {certifications.map((cert) => (
            <div
              key={cert}
              className="bg-white rounded-2xl p-6 shadow border border-gray-100"
            >
              <h3 className="font-bold text-lg">{cert}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="blogs" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-extrabold mb-8">Technical Blog</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <a
              key={blog.title}
              href={blog.link}
              target="_blank"
              rel="noreferrer"
              className="bg-white rounded-2xl p-6 shadow border border-gray-100 hover:shadow-xl transition"
            >
              <h3 className="font-bold text-lg">{blog.title}</h3>
              <p className="text-[#CC5500] mt-4 font-bold">
                Read on Hashnode →
              </p>
            </a>
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
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nkechiogbuji13@gmail.com&su=Portfolio%20Contact&body=Hello%20Nkechi%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
              target="_blank"
              rel="noreferrer"
              className="bg-[#CC5500] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#b84b00]" 
            >
              Email Me
            </a>

            <a
              href="https://github.com/NkechiOgbuji"
              target="_blank"
              rel="noreferrer"
              className="border border-gray-300 bg-white px-8 py-4 rounded-lg font-bold hover:bg-gray-50"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/nkechiogbuji"
              target="_blank"
              rel="noreferrer"
              className="border border-gray-300 bg-white px-8 py-4 rounded-lg font-bold hover:bg-gray-50"
            >
              LinkedIn
            </a>

            <a
              href="https://www.upwork.com/freelancers/~011dc05d447201095f"
              target="_blank"
              rel="noreferrer"
              className="border border-gray-300 bg-white px-8 py-4 rounded-lg font-bold"
            >
              Upwork
            </a>

            <a
              href="https://x.com/kykycloud"
              target="_blank"
              rel="noreferrer"
              className="border border-gray-300 bg-white px-8 py-4 rounded-lg font-bold"
            >
              X
            </a>

            <a
              href="https://queenethcloudjouney.hashnode.dev"
              target="_blank"
              rel="noreferrer"
              className="border border-gray-300 bg-white px-8 py-4 rounded-lg font-bold hover:bg-gray-50"
            >
              Hashnode Blog
            </a>

            <a
              href="/Nkechi_Queeneth_Ogbuji_Resume.pdf"
              download
              className="border border-[#CC5500] text-[#CC5500] px-8 py-4 rounded-lg font-bold hover:bg-[#fff1e6]"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 py-8 text-center text-gray-500 text-sm">
        <p>
          © 2026 Nkechi Queeneth Ogbuji. Built with React, Tailwind CSS, GitHub,
          and Netlify.
        </p>
      </footer>
    </div>
  );
}

export default App;