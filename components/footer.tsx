import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-12 mt-12">
      <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">Samrit Basnet</h3>
            <p className="text-muted-foreground mb-4">
              Full-Stack Developer & Software Engineer specializing in building scalable web applications.
            </p>
            <div className="flex items-center gap-2">
              <Link
                href="https://github.com/samritbasnet"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Github className="h-4 w-4" />
                </Button>
              </Link>
              <Link
                href="https://linkedin.com/in/samrit-basnet"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </Link>
              <Link
                href="https://twitter.com/samritbasnet"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Twitter className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="mailto:contact@samritbasnet.com" aria-label="Email">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Mail className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#education" className="text-muted-foreground hover:text-primary transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <address className="not-italic text-muted-foreground">
              <p>Toronto, Canada</p>
              <p className="mt-2">
                <a href="mailto:contact@samritbasnet.com" className="hover:text-primary transition-colors">
                  contact@samritbasnet.com
                </a>
              </p>
            </address>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Samrit Basnet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
