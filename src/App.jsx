import "./App.css";

function App() {
  const links = {
    github: "https://github.com/NkechiOgbuji",
    linkedin: "https://www.linkedin.com/in/nkechiogbuji",
    hashnode: "https://queenethcloudjouney.hashnode.dev",
    medium: "https://medium.com/@ogbujiqueeneth13",
    upwork: "https://www.upwork.com/freelancers/~011dc05d447201095f",
    x: "https://x.com/kykycloud",
    email: "mailto:nkechiogbuji13@gmail.com",
    resume: "/Nkechi_Queeneth_Ogbuji_Resume.pdf",
  };

  const marqueeSkills = [
    "AWS",
    "Azure",
    "Kubernetes",
    "Terraform",
    "Docker",
    "GitHub Actions",
    "Azure DevOps",
    "Argo CD",
    "Prometheus",
    "Grafana",
    "Helm",
    "Linux",
    "Ansible",
    "Nginx",
    "Claude Code",
    "Agentic AI",
  ];

  const projects = [
    {
      badge: "TEAM CAPSTONE",
      title: "Spring PetClinic Microservices on AWS EKS",
      desc: "Collaborated with a DevOps team to deploy a production-style Spring PetClinic microservices platform on Amazon EKS using Terraform, Helm, Argo CD, GitHub Actions, AWS Secrets Manager, External Secrets, Prometheus, and Grafana.",
      contribution:
        "My contribution focused on Kubernetes manifests, API Gateway, GenAI service deployment, External Secrets, Ingress configuration, service routing, deployment troubleshooting, and validation.",
      tags: [
        "AWS EKS",
        "Kubernetes",
        "Terraform",
        "Helm",
        "Argo CD",
        "GitHub Actions",
        "Prometheus",
        "Grafana",
      ],
      repo: "https://github.com/Goodnessoj/platform-petclinic",
    },
    {
      badge: "PERSONAL PROJECT",
      title: "Enterprise DevOps Platform",
      desc: "Designed a platform repository for infrastructure, Kubernetes, GitOps, monitoring, and SRE configuration for a modern DevOps environment.",
      contribution:
        "This project shows my ability to structure infrastructure repositories, manage deployment workflows, and think in terms of reusable platform engineering.",
      tags: ["Kubernetes", "GitOps", "Monitoring", "SRE", "Terraform", "Argo CD"],
      repo: "https://github.com/NkechiOgbuji/enterprise-devops-platform",
    },
    {
      badge: "PERSONAL PROJECT",
      title: "Kubernetes Observability Stack",
      desc: "Built a Kubernetes observability platform using Prometheus, Grafana, Alertmanager, and Gmail SMTP notifications.",
      contribution:
        "Configured monitoring, dashboards, alerting, and notification workflows to improve visibility into Kubernetes workloads.",
      tags: ["Kubernetes", "Prometheus", "Grafana", "Alertmanager", "Monitoring"],
      repo: "https://github.com/NkechiOgbuji/kubernetes-observability-stack",
    },
    {
      badge: "PERSONAL PROJECT",
      title: "Azure DevOps Self-Hosted Agent",
      desc: "Configured a self-hosted Ubuntu agent in Azure DevOps with PAT authentication, agent pool configuration, and YAML pipeline execution.",
      contribution:
        "Built an end-to-end Azure DevOps pipeline setup to support CI/CD automation and system monitoring tasks.",
      tags: ["Azure DevOps", "Ubuntu", "CI/CD", "YAML", "Linux"],
      repo: "https://github.com/NkechiOgbuji/azure-devops-selfhosted-agent",
    },
    {
      badge: "PERSONAL PROJECT",
      title: "AWS Book Review Infrastructure",
      desc: "Built production-grade AWS infrastructure with Terraform for a scalable book review platform using secure networking, load balancing, EC2, and RDS.",
      contribution:
        "Designed modular Terraform infrastructure for VPC, compute, database, and application delivery components.",
      tags: ["Terraform", "AWS", "VPC", "EC2", "RDS", "ALB"],
      repo: "https://github.com/NkechiOgbuji/my-bookreview-terraform-nkechiogbuji",
    },
    {
      badge: "PERSONAL PROJECT",
      title: "EpicBook Cloud Deployment",
      desc: "Deployed EpicBook using Terraform, Docker, Docker Compose, Nginx, Ansible, Linux configuration, health checks, environment variables, and persistent storage.",
      contribution:
        "Provisioned infrastructure, configured runtime services, automated deployment steps, and validated the application health workflow.",
      tags: ["Docker", "Terraform", "Ansible", "Nginx", "Linux"],
      repo: "https://github.com/NkechiOgbuji/terraform-epicbook-aws",
    },
  ];

  const certifications = [
    {
      title: "DevOps Micro-Internship with Agentic AI",
      desc: "Completed hands-on DevOps training covering Linux, Git, CI/CD, AWS, Azure, Terraform, Ansible, Docker, Kubernetes, and Agentic AI concepts.",
      image: "/certificates/dmi-devops-certificate.png",
      link: "/certificates/dmi-devops-certificate.png",
    },
    {
      title: "Champion of the Week — DMI Cohort 2",
      desc: "Awarded for outstanding performance, consistency, and hands-on excellence during the DevOps Micro-Internship.",
      image: "/certificates/champion-week-10.png",
      link: "/certificates/champion-week-10.png",
    },
    {
      title: "DevOps & Cloud Security Certification",
      desc: "Completed Cloud Security and DevOps training covering AWS, Azure, Terraform, Kubernetes, Docker, CI/CD, monitoring, and cloud security practices.",
      image: "/certificates/cloud-security.png",
      link: "/certificates/cloud-security.png",
    },
  ];

  const blogs = [
    {
      platform: "Hashnode",
      title: "Deployment Stories and Engineering Lessons",
      desc: "Explore my Hashnode articles where I share DevOps lessons, microservices deployment, Kubernetes practice, Docker workflows, and real project documentation.",
      link: links.hashnode,
    },
    {
      platform: "Medium",
      title: "Cloud, DevOps, and Infrastructure Articles",
      desc: "Read my technical articles covering CI/CD automation, Azure DevOps, Terraform, Docker deployments, AWS infrastructure, Kubernetes, and Agentic AI workflows.",
      link: links.medium,
    },
  ];
return (
    <main className="bg-white text-[#111827] min-h-screen font-sans">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <a href="#home" className="text-2xl font-black text-[#111827]">
            NQ<span className="text-[#CC5500]">.</span>
          </a>

          <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-700">
            <a href="#home" className="hover:text-[#CC5500]">Home</a>
            <a href="#about" className="hover:text-[#CC5500]">About</a>
            <a href="#projects" className="hover:text-[#CC5500]">Projects</a>
            <a href="#certifications" className="hover:text-[#CC5500]">Certifications</a>
            <a href="#blog" className="hover:text-[#CC5500]">Blog</a>
            <a href="#contact" className="hover:text-[#CC5500]">Contact</a>
          </div>

          <a
            href={links.resume}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-block bg-[#CC5500] text-white px-5 py-3 rounded-xl font-bold hover:bg-[#a94700]"
          >
            Download CV
          </a>
        </div>
      </nav>

      {/* Availability Bar */}
      <a href="#contact" className="flex justify-center py-6 bg-white">
        <div className="inline-flex items-center gap-3 bg-[#FFF3F0] border border-[#F6C7B8] text-[#CC5500] px-8 py-4 rounded-full shadow-sm hover:shadow-lg hover:scale-105 transition">
          <span className="w-3 h-3 bg-[#CC5500] rounded-full animate-pulse"></span>
          <span className="font-bold">
            Open to Remote Cloud, DevOps & Technical Support Opportunities
          </span>
        </div>
      </a>

      {/* Hero Section */}
      <section
        id="home"
        className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center bg-gradient-to-br from-white via-orange-50 to-white text-[#111827]"
      >
        <div>
          <p className="uppercase tracking-[4px] text-[#CC5500] font-bold text-sm">
            AI Cloud & DevOps Engineer
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-black leading-tight">
            Building secure cloud infrastructure, automating deployments, and scaling applications.
          </h1>

          <p className="mt-6 text-gray-700 text-lg leading-8 max-w-2xl">
            I design, deploy, and support reliable cloud systems using AWS, Azure,
            Kubernetes, Terraform, Docker, CI/CD, and Agentic AI tools like Claude Code
            to improve engineering speed, troubleshooting, and documentation.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {["AWS", "Azure", "Kubernetes", "Terraform", "Docker", "GitHub Actions", "Claude Code"].map((item) => (
              <span
                key={item}
                className="bg-white border border-[#CC5500]/30 text-[#111827] px-4 py-2 rounded-lg text-sm font-semibold shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#projects"
              className="bg-[#CC5500] text-white px-7 py-4 rounded-xl font-bold hover:bg-[#a94700] shadow-md hover:shadow-xl transition"
            >
              View Projects →
            </a>

            <a
              href={links.resume}
              target="_blank"
              rel="noreferrer"
              className="border border-gray-300 bg-white px-7 py-4 rounded-xl font-bold hover:border-[#CC5500] hover:text-[#CC5500] shadow-sm hover:shadow-md transition"
            >
              Download Resume
            </a>

            <a
              href="#blog"
              className="border border-gray-300 bg-white px-7 py-4 rounded-xl font-bold hover:border-[#CC5500] hover:text-[#CC5500] shadow-sm hover:shadow-md transition"
            >
              Read My Blog ↗
            </a>
          </div>
        </div>

        <div className="relative max-w-md mx-auto w-full">
          <img
            src="/queeneth.jpg"
            alt="Nkechi Queeneth Ogbuji"
            className="w-full rounded-3xl object-cover shadow-2xl"
          />

          <div className="absolute bottom-0 left-0 right-0 bg-[#0f172a]/95 backdrop-blur-md rounded-b-3xl p-8">
            <p className="uppercase tracking-[4px] text-[#CC5500] text-sm font-bold">
              CLOUD. AUTOMATION. RELIABILITY.
            </p>

            <h2 className="text-3xl font-black text-white mt-3">
              Nkechi Queeneth Ogbuji
            </h2>

            <p className="text-gray-300 mt-2">
              AI Cloud & DevOps Engineer | Technical Support
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {["AWS", "Azure", "Kubernetes", "Terraform", "Docker"].map((tag) => (
                <span
                  key={tag}
                  className="bg-[#CC5500] text-white px-3 py-2 rounded-full text-xs font-bold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="max-w-7xl mx-auto px-6 py-12 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ["30+", "Cloud Projects"],
            ["20+", "Technical Articles"],
            ["10+", "Deployments"],
            ["99.9%", "Reliability Focus"],
          ].map(([num, label]) => (
            <div
              key={label}
              className="bg-white border border-gray-200 rounded-3xl p-6 text-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-4xl font-black text-[#CC5500]">{num}</h3>
              <p className="text-gray-600 font-semibold mt-2">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="relative bg-white py-8 overflow-hidden border-y border-gray-200 my-4">
        <div className="absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-white to-transparent"></div>
        <div className="absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-white to-transparent"></div>

        <div className="text-center mb-6">
          <p className="uppercase tracking-[4px] text-[#CC5500] font-bold text-sm">
            Trusted Technologies
          </p>
          <p className="text-gray-600 mt-2">
            The cloud-native tools I use to build, automate, deploy, and monitor modern infrastructure.
          </p>
        </div>

        <div className="marquee-track flex gap-6 whitespace-nowrap">
          {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/90 backdrop-blur-md px-8 py-4 text-base font-semibold text-[#111827] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#CC5500] hover:shadow-2xl"
            >
              <span className="h-3 w-3 rounded-full bg-[#CC5500] shadow-[0_0_12px_#CC5500]"></span>
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Profile Card */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-xl">
          <div className="flex items-center gap-5">
            <img
              src="/queeneth.jpg"
              alt="Nkechi Queeneth Ogbuji"
              className="w-20 h-20 rounded-2xl object-cover border-2 border-[#CC5500]"
            />

            <div>
              <h3 className="text-3xl font-bold text-[#111827]">
                Nkechi Queeneth Ogbuji
              </h3>
              <p className="text-[#CC5500] font-semibold mt-1">
                AI Cloud • DevOps Engineer
              </p>
              <p className="text-gray-600">Technical Support Engineer</p>
            </div>
          </div>

          <div className="mt-8 space-y-5">
            {[
              "Open to Remote Cloud, DevOps & Technical Support Roles",
              "Available for Freelance Projects & Technical Consulting",
              "AWS • Azure • Kubernetes • Terraform • CI/CD • GitOps",
              "Using Agentic AI tools like Claude Code to improve DevOps productivity",
            ].map((item) => (
              <p key={item} className="flex items-center gap-3 text-gray-700 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-[#CC5500]"></span>
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white text-[#111827]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <p className="uppercase tracking-[4px] text-[#CC5500] font-bold text-sm">
              About Me
            </p>

            <h2 className="text-4xl md:text-5xl font-black mt-4 leading-tight">
              Building cloud solutions that are reliable, secure, and built to scale.
            </h2>

            <div className="mt-8 space-y-5 text-gray-700 leading-8">
              <p>
                I’m Nkechi Queeneth Ogbuji, an AI Cloud & DevOps Engineer with a passion for
                building modern cloud infrastructure, automating deployments, and making software
                delivery faster, more reliable, and easier to manage.
              </p>

              <p>
                My journey into Cloud and DevOps started with curiosity about how applications move
                from a developer’s computer into production. That curiosity grew into hands-on work
                with Infrastructure as Code, Kubernetes, CI/CD automation, cloud architecture,
                monitoring, and platform engineering.
              </p>

              <p>
                I’ve built and deployed projects across AWS, Azure, Docker, Kubernetes, Terraform,
                GitHub Actions, Azure DevOps, Argo CD, Prometheus, and Grafana. I enjoy solving real
                engineering problems through automation and clear documentation.
              </p>

              <p>
                I also use Agentic AI tools such as Claude Code to improve my engineering workflow.
                Claude Code helps me review Terraform modules, write automation scripts, debug
                deployment issues, understand unfamiliar tools faster, and create better technical
                documentation. I see AI as a productivity partner, not a replacement for engineering
                thinking.
              </p>

              <p>
                I’m currently open to Cloud Engineering, DevOps Engineering, Platform Engineering,
                and Technical Support Engineering opportunities where I can contribute, grow, and
                build scalable cloud solutions that make a real impact.
              </p>
            </div>
          </div>

          <div className="bg-[#FFF7F2] border border-[#F6C7B8] rounded-3xl p-10">
            <h3 className="text-3xl font-black">Quick Facts</h3>

            <div className="space-y-7 mt-8">
              {[
                ["Based In", "Abuja, Nigeria"],
                ["Specialization", "Cloud Engineering • DevOps • Platform Engineering"],
                ["Currently Exploring", "Agentic AI • Claude Code • Platform Engineering • Kubernetes"],
                ["Open To", "Remote • Hybrid • Full-time • Contract • Freelance"],
              ].map(([title, value]) => (
                <div key={title}>
                  <span className="text-[#CC5500] font-bold">{title}</span>
                  <p className="text-gray-700 mt-1">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

            {/* Projects Section */}
      <section id="projects" className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="uppercase tracking-[4px] text-[#CC5500] font-bold text-sm">
            Featured Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-4 text-[#111827] max-w-4xl">
            Cloud, DevOps, automation, and infrastructure projects.
          </h2>

          <div className="grid lg:grid-cols-3 gap-6 mt-12">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#CC5500]"
              >
                <span className="inline-block bg-[#FFF2EB] text-[#CC5500] px-3 py-1 rounded-full text-xs font-bold">
                  {project.badge}
                </span>

                <h3 className="text-2xl font-black mt-5 text-[#111827]">
                  {project.title}
                </h3>

                <p className="text-gray-700 mt-4 leading-8">
                  {project.desc}
                </p>

                <p className="text-gray-600 mt-4 text-sm leading-7">
                  {project.contribution}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white border border-[#CC5500]/40 text-[#CC5500] px-3 py-2 rounded-full text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center mt-8 bg-[#CC5500] text-white px-5 py-3 rounded-xl font-semibold hover:bg-[#b34700] transition"
                >
                  View Project Repository ↗
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="bg-white text-[#111827] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="uppercase tracking-[4px] text-[#CC5500] font-bold text-sm">
            Certifications & Recognition
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-4 max-w-4xl">
            Learning applied through hands-on cloud projects.
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="bg-gray-50 border border-gray-200 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <a href={cert.link} target="_blank" rel="noreferrer">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="rounded-2xl w-full h-52 object-cover bg-gray-100 shadow-md"
                  />
                </a>

                <h3 className="font-black text-xl mt-5 text-[#111827]">
                  {cert.title}
                </h3>

                <p className="text-gray-600 mt-3 text-sm leading-7">
                  {cert.desc}
                </p>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-5 text-[#CC5500] font-bold hover:underline"
                >
                  View Certificate →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="uppercase tracking-[4px] text-[#CC5500] font-bold text-sm">
            Technical Writing
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-4 max-w-4xl text-[#111827]">
            Sharing what I build, learn, troubleshoot, and improve.
          </h2>

          <p className="text-gray-600 mt-6 max-w-4xl leading-8">
            I document my learning journey through technical articles on DevOps,
            cloud infrastructure, Docker, Kubernetes, Terraform, CI/CD,
            observability, Agentic AI, and deployment workflows.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {blogs.map((blog) => (
              <div
                key={blog.platform}
                className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#CC5500]"
              >
                <p className="text-[#CC5500] font-bold uppercase">
                  {blog.platform}
                </p>

                <h3 className="text-3xl font-black text-[#111827] mt-4">
                  {blog.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {blog.desc}
                </p>

                <a
                  href={blog.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-[#CC5500] text-white mt-7 px-6 py-4 rounded-xl font-bold shadow-md hover:bg-[#B84A00] hover:shadow-lg transition-all duration-300"
                >
                  Read on {blog.platform} ↗
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-white text-[#111827]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="uppercase tracking-[4px] text-[#CC5500] text-sm font-bold">
            Skills & Tools
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-4 max-w-4xl">
            Tools I use to build, automate, deploy, monitor, and support cloud systems.
          </h2>

          <div className="grid md:grid-cols-5 gap-10 mt-12">
            {[
              {
                title: "Cloud",
                items: ["AWS", "Microsoft Azure", "Amazon EKS", "EC2", "VPC", "RDS", "IAM"],
              },
              {
                title: "Containers",
                items: ["Docker", "Docker Compose", "Kubernetes", "Helm"],
              },
              {
                title: "Automation",
                items: ["GitHub Actions", "Azure DevOps", "Argo CD", "Bash", "YAML"],
              },
              {
                title: "Infrastructure",
                items: ["Terraform", "Ansible", "Linux", "Nginx", "Git"],
              },
              {
                title: "Agentic AI",
                items: ["Claude Code", "AI-assisted DevOps", "Prompt Engineering", "Script Review", "Documentation"],
              },
            ].map((group) => (
              <div
                key={group.title}
                className="bg-[#F8FAFC] border border-gray-200 rounded-3xl p-6 shadow-md"
              >
                <h3 className="text-2xl font-black mb-4 text-[#111827]">
                  {group.title}
                </h3>

                <div className="space-y-3">
                  {group.items.map((item) => (
                    <p key={item} className="text-gray-700 font-medium">
                      <span className="text-[#CC5500]">●</span> {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-b from-white to-[#F8FAFC] text-[#111827]"
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <p className="uppercase tracking-[4px] text-[#CC5500] font-bold mb-4">
              Contact
            </p>

            <h2 className="text-5xl md:text-6xl font-black leading-tight text-[#111827]">
              Let’s build something reliable.
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-8">
              I’m open to remote Cloud, DevOps, Platform Engineering and Technical
              Support opportunities, freelance projects, collaborations, and conversations
              about cloud infrastructure, automation, Kubernetes, and modern DevOps practices.
            </p>

            <div className="mt-10 bg-white rounded-3xl p-8 border border-gray-200 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-[#111827]">
                Contact Information
              </h3>

              <p className="text-gray-500 text-sm uppercase tracking-wide">
                Email
              </p>

              <a
                href={links.email}
                className="text-[#111827] font-semibold hover:text-[#CC5500]"
              >
                nkechiogbuji13@gmail.com
              </a>

              <div className="flex gap-4 mt-8">
                {[
                  ["GH", links.github],
                  ["in", links.linkedin],
                  ["X", links.x],
                  ["M", links.medium],
                  ["H", links.hashnode],
                ].map(([label, url]) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-full bg-gray-100 border border-gray-300 text-[#111827] flex items-center justify-center font-bold hover:bg-[#CC5500] hover:text-white transition"
                  >
                    {label}
                  </a>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href={links.upwork}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#CC5500] text-white px-6 py-4 rounded-xl font-bold hover:bg-[#a94700]"
                >
                  Hire Me on Upwork ↗
                </a>

                <a
                  href={links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-gray-300 text-[#111827] px-6 py-4 rounded-xl font-bold hover:border-[#CC5500] hover:text-[#CC5500] transition"
                >
                  Visit My GitHub ↗
                </a>
              </div>
            </div>
          </div>

          <form
            action="https://formsubmit.co/nkechiogbuji13@gmail.com"
            method="POST"
            className="bg-white p-10 rounded-3xl space-y-6 border border-gray-200 shadow-xl"
          >
            <input type="hidden" name="_captcha" value="false" />

            <h3 className="text-4xl font-bold text-[#111827]">
              Send a Message
            </h3>

            <input
              type="text"
              name="Name"
              placeholder="Your name"
              required
              className="w-full rounded-xl bg-gray-50 border border-gray-300 text-[#111827] px-5 py-4 outline-none focus:border-[#CC5500] focus:ring-2 focus:ring-[#CC5500]/20"
            />

            <input
              type="email"
              name="Email"
              placeholder="you@example.com"
              required
              className="w-full rounded-xl bg-gray-50 border border-gray-300 text-[#111827] px-5 py-4 outline-none focus:border-[#CC5500] focus:ring-2 focus:ring-[#CC5500]/20"
            />

            <input
              type="text"
              name="Subject"
              placeholder="What's this about?"
              className="w-full rounded-xl bg-gray-50 border border-gray-300 text-[#111827] px-5 py-4 outline-none focus:border-[#CC5500] focus:ring-2 focus:ring-[#CC5500]/20"
            />

            <textarea
              name="Message"
              rows="7"
              placeholder="Tell me about your project or opportunity..."
              required
              className="w-full rounded-xl bg-gray-50 border border-gray-300 text-[#111827] px-5 py-4 outline-none focus:border-[#CC5500] focus:ring-2 focus:ring-[#CC5500]/20"
            />

            <button
              type="submit"
              className="w-full bg-[#CC5500] text-white py-5 rounded-xl font-bold text-xl hover:bg-[#a94700] transition"
            >
              Send Message →
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-gray-200 py-8 text-center text-gray-500 bg-[#F8FAFC]">
        © 2026 Nkechi Queeneth Ogbuji. Built with React, Tailwind CSS, GitHub, and Netlify.
      </footer>
    </main>
  );
}
export default App;