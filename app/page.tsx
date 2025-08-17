import AnimatedBackground from "@/components/animated-background";
import AnimatedHero from "@/components/animated-hero";
import AnimatedSkills from "@/components/animated-skills";
import ContactSection from "@/components/contact-section";
import EducationCard from "@/components/education-card";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ProjectCard from "@/components/project-card";
import ScrollAnimations from "@/components/scroll-animations";
import SocialsSection from "@/components/socials-section";

export default function Home() {
  const projects = [
    {
      title: "MoneyFlow - Personal Finance Dashboard",
      description:
        "A comprehensive finance dashboard featuring interactive charts, real-time data visualization, and responsive design. Built with vanilla JavaScript and Chart.js.",
      image: "assets/moneyflow.png",
      tags: [
        "Vanilla JavaScript",
        "Chart.js",
        "CSS Grid",
        "Theme System",
        "Data Visualization",
      ],
      url: "https://moneyflow-liard.vercel.app/",
      github: "https://github.com/samritbasnet/moneyflow",
      category: "Personal Project",
      featured: true,
    },
    {
      title: "PixelPlay - Game Discovery Platform",
      description:
        "Full-stack game discovery e-commerce platform with search, filtering, wishlist features, and admin dashboard using modern web technologies.",
      image: "assets/PixelPlayHomepage.png",
      tags: ["React", "Node.js", "MySQL", "Supabase", "JWT", "REST API"],
      url: "https://github.com/samritbasnet/PixelPlay-Capstone",
      category: "Capstone Project",
      featured: true,
    },
    {
      title: "InStock - Inventory Management System",
      description:
        "Collaborative full-stack inventory platform with product management, stock tracking, and warehouse views built in Agile environment.",
      image: "assets/Instock.png",
      tags: ["React", "Node.js", "MySQL", "Express", "SCSS", "Agile"],
      url: "https://github.com/samritbasnet/instock",
      category: "Team Project",
      featured: false,
    },
    {
      title: "BrainStation Industry Project",
      description:
        "Industry collaboration building responsive React applications with focus on modern UI/UX design and component architecture.",
      image: "assets/industry.png",
      tags: ["React", "JavaScript", "Responsive Design", "Team Collaboration"],
      url: "https://team404.vercel.app/",
      category: "Industry Project",
      featured: false,
    },
  ];

  const education = [
    {
      institution: "BrainStation",
      degree: "Diploma, Software Engineering",
      duration: "Jan 2025 – Apr 2025",
      description:
        "Completed an intensive full-time program focused on full-stack web development using Agile methodologies. Learned React, Node.js, MySQL, Express, REST APIs, and CI/CD practices.",
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "MySQL",
        "REST API",
        "JavaScript (ES6+)",
        "Agile/Scrum",
        "Git & GitHub",
        "Full-Stack Development",

        "Component-Based Architecture",
        "CRUD Operations",

        "Postman & API Testing",
        "Responsive Web Design",
        "HTML5 & CSS3",
        "SASS/SCSS",
        "JWT Authentication",
        "Axios & Fetch API",
        "Deployment (Netlify, Render)",
      ],
    },
    {
      institution: "Conestoga College",
      degree: "Post Graduate Certificate in Computer Application Development",
      duration: "Sept 2023 – Apr 2024",
      description:
        "Focused on software engineering principles, modern software practices, and system development life cycles with practical experience in Java and database design.",
      skills: [
        "C#",
        "ASP.NET",
        "HTML",
        "CSS",
        "JavaScript",
        "SQL",
        "OOP (Object-Oriented Programming)",
        "System Design",
        "Entity Framework",
        "LINQ",
        "MVC Architecture",
        "Agile & Scrum Methodologies",
        "Version Control (Git, GitHub)",
        "Visual Studio",
        "Azure DevOps",
        "Responsive Web Design",
        "Debugging & Troubleshooting",
        "Database Design & Normalization",
      ],
    },
    {
      institution: "Fanshawe College",
      degree: "Post Graduate Certificate in IT Infrastructure",
      duration: "Sept 2022 – Apr 2023",
      description:
        "Trained in enterprise IT operations, networking fundamentals, Linux systems, and IT service management best practices.",
      skills: [
        "Linux",
        "Networking",
        "Cisco",
        "ITSM",
        "Windows Server Administration",
        "Virtualization (VMware, Hyper-V)",
        "Cloud Computing (Azure, AWS)",
        "Network Security",
        "Firewalls & VPNs",
        "Active Directory",
        "Incident Management",
        "ITIL Foundations",
        "Troubleshooting & Diagnostics",
        "TCP/IP & Subnetting",
        "Backup & Disaster Recovery",
        "Technical Support",
        "Service Desk Operations",
      ],
    },
    {
      institution: "Softwarica College",
      degree: "BSc (Hons) Computing, partnered with Coventry University",
      duration: "Jan 2017 – Apr 2020",
      description:
        "Bachelor’s degree focused on full-stack development, software engineering, and database architecture. Gained strong academic foundations and project experience.",
      skills: [
        "Java",
        "Object-Oriented Programming (OOP)",
        "Data Structures & Algorithms",
        "Database Management Systems (MySQL, MongoDB)",
        "Web Development (HTML, CSS, JavaScript)",
        "Software Engineering Principles",
        "Operating Systems",
        "Networking Fundamentals",
        "System Analysis & Design",
        "Cloud Computing (AWS Basics, Azure Fundamentals)",
        "Mobile App Development (Android)",
        "Agile & Scrum Methodologies",
        "Version Control (Git/GitHub)",
        "UI/UX Fundamentals",
        "Technical Documentation & Presentation",
      ],
    },
  ];

  return (
    <>
      <AnimatedBackground />
      <ScrollAnimations />
      <Header />
      <main className="min-h-screen">
        <AnimatedHero />

        <section id="projects" className="section-clean scroll-mt-20">
          <div className="professional-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Featured <span className="text-gradient">Projects</span>
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-readable">
                Recent work showcasing full-stack development skills
              </p>
            </div>

            <div className="grid gap-10">
              {projects
                .filter((p) => p.featured)
                .map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
            </div>

            <div className="mt-20">
              <h3 className="text-2xl md:text-3xl font-semibold mb-12 text-center">
                Other Projects
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {projects
                  .filter((p) => !p.featured)
                  .map((project) => (
                    <ProjectCard key={project.title} project={project} />
                  ))}
              </div>
            </div>
          </div>
        </section>

        <AnimatedSkills />

        <section id="education" className="section-clean scroll-mt-20">
          <div className="professional-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient">Education</span>
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-readable">
                Formal training in software engineering and web development
              </p>
            </div>

            <div className="space-y-8">
              {education.map((edu) => (
                <EducationCard key={edu.institution} education={edu} />
              ))}
            </div>
          </div>
        </section>

        <SocialsSection />

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
