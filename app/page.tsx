import AnimatedBackground from "@/components/animated-background";
import AnimatedHero from "@/components/animated-hero";
import AnimatedSkills from "@/components/animated-skills";
import ContactSection from "@/components/contact-section";
import EducationCard from "@/components/education-card";
import ExperienceSection from "@/components/experience-section";
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
        "A modern, responsive financial tracking application built with vanilla JavaScript. Features 4 interactive charts with real-time updates, dark/light theme system, and professional UI/UX design. Demonstrates mastery of ES6+, Chart.js integration, and responsive design.",
      image: "assets/moneyflow.png",
      tags: [
        "Vanilla JavaScript",
        "Chart.js",
        "CSS Grid",
        "Theme System",
        "Responsive Design",
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
        "Capstone project: Built a full-stack game discovery e-commerce site with search, filtering, wishlist (Pixel Shelf), and an admin dashboard using JWT auth and CRUD functionality.",
      image: "assets/PixelPlayHomepage.png",
      tags: ["React", "Node.js", "MySQL", "Supabase", "JWT", "REST API"],
      url: "https://github.com/samritbasnet/PixelPlay-Capstone",
      category: "Capstone",
      featured: true,
    },
    {
      title: "TaskManager Pro - Productivity Dashboard",
      description:
        "Full-featured task management application with drag-and-drop functionality, priority levels, deadlines, and progress tracking. Built with vanilla JavaScript to demonstrate advanced DOM manipulation and state management.",
      image: "assets/taskmanager.png",
      tags: [
        "JavaScript ES6+",
        "Drag & Drop API",
        "Local Storage",
        "CSS Animations",
        "Responsive Design",
      ],
      url: "#", // Will be updated when you build this
      github: "#",
      category: "Personal Project",
    },
    {
      title: "InStock - Inventory Management System",
      description:
        "Team project: Developed a full-stack inventory platform with React, Node.js, Express, and MySQL. Implemented product listings, stock indicators, and warehouse views in an Agile Scrum environment.",
      image: "assets/Instock.png",
      tags: [
        "React",
        "Node.js",
        "MySQL",
        "Express",
        "SCSS",
        "Agile",
        "Jira",
        "PR Review",
      ],
      url: "https://github.com/samritbasnet/instock",
      category: "Team Project",
    },
    {
      title: "Warner Bros. Discovery - Industry Project",
      description:
        "Industry collaboration: Worked with UX and Data Science teams to build a responsive React app for showcasing curated entertainment content. Focused on component styling and real-time data updates.",
      image: "assets/industry.png",
      tags: ["React", "JavaScript", "Figma", "Responsive Design", "UX"],
      url: "https://team404.vercel.app/",
      category: "Industry Project",
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
      <main className="min-h-screen py-20 px-4 md:px-8 lg:px-12 max-w-5xl mx-auto">
        <AnimatedHero />

        <section id="projects" className="mb-32 scroll-mt-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of my work spanning full-stack development, from
              finance dashboards to e-commerce platforms
            </p>
          </div>

          <div className="grid gap-8">
            {projects
              .filter((p) => p.featured)
              .map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Other Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {projects
                .filter((p) => !p.featured)
                .map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
            </div>
          </div>
        </section>

        <section id="skills" className="mb-32 scroll-mt-20">
          <AnimatedSkills />
        </section>

        <ExperienceSection />

        <section id="education" className="mb-32 scroll-mt-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient">Education</span> & Certification
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A continuous learning journey spanning full-stack development,
              software engineering, and IT infrastructure
            </p>
          </div>

          <div className="space-y-8">
            {education.map((edu) => (
              <EducationCard key={edu.institution} education={edu} />
            ))}
          </div>
        </section>

        <SocialsSection />

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
