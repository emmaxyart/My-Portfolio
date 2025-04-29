import { Github, Linkedin, Mail, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ProjectCard from "@/components/project-card"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <User className="h-6 w-6" />
            <span className="text-lg font-bold">Your Name</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:underline underline-offset-4">
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" asChild>
              <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="mailto:your.email@example.com">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8 md:py-12">
        {/* Hero Section */}
        <section className="py-12 md:py-20 space-y-8 md:space-y-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Hi, I'm <span className="text-primary">Your Name</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Frontend Developer specializing in creating beautiful, responsive web experiences
              </p>
              <div className="flex gap-4 pt-4">
                <Button asChild>
                  <Link href="#contact">Contact Me</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#projects">View Projects</Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center md:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
                <Image
                  src="/placeholder.svg?height=320&width=320"
                  alt="Your Name"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-20 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg">
                I'm a passionate frontend developer with a keen eye for design and a love for creating intuitive user
                experiences. With a strong foundation in modern web technologies, I build responsive and accessible
                websites that look great on any device.
              </p>
              <p className="text-lg">
                My journey in web development started 5 years ago, and I've been continuously learning and adapting to
                new technologies ever since. I believe in clean code, thoughtful UI/UX, and the power of the web to
                connect people.
              </p>
            </div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="font-medium">🌍 Location:</span>
                    <span>Your City, Country</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium">💼 Experience:</span>
                    <span>5+ years</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium">🎓 Education:</span>
                    <span>Bachelor's in Computer Science</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium">🌱 Currently learning:</span>
                    <span>WebGL, Three.js</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium">⚡ Fun fact:</span>
                    <span>I love hiking and photography</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-20 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Tailwind CSS",
              "Sass",
              "Redux",
              "GraphQL",
              "Node.js",
              "Git",
              "Responsive Design",
              "UI/UX",
              "Figma",
              "Accessibility",
            ].map((skill) => (
              <Card key={skill} className="hover:border-primary transition-colors">
                <CardContent className="p-4 flex items-center justify-center">
                  <Badge variant="outline" className="text-base font-medium py-2 px-4">
                    {skill}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-20 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="E-commerce Website"
              description="A fully responsive e-commerce platform built with Next.js and Tailwind CSS. Features include product filtering, cart functionality, and user authentication."
              tags={["Next.js", "React", "Tailwind CSS", "Stripe"]}
              imageUrl="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              codeUrl="https://github.com/yourusername/ecommerce"
            />
            <ProjectCard
              title="Task Management App"
              description="A drag-and-drop task management application with real-time updates. Built with React, TypeScript, and Firebase."
              tags={["React", "TypeScript", "Firebase", "DnD"]}
              imageUrl="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              codeUrl="https://github.com/yourusername/task-app"
            />
            <ProjectCard
              title="Weather Dashboard"
              description="A weather application that displays current and forecasted weather data using the OpenWeather API."
              tags={["JavaScript", "API", "CSS Grid", "Chart.js"]}
              imageUrl="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              codeUrl="https://github.com/yourusername/weather-app"
            />
            <ProjectCard
              title="Portfolio Website"
              description="A personal portfolio website built with Next.js and Tailwind CSS. Features a responsive design and dark mode support."
              tags={["Next.js", "Tailwind CSS", "Framer Motion"]}
              imageUrl="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              codeUrl="https://github.com/yourusername/portfolio"
            />
            <ProjectCard
              title="Recipe Finder"
              description="A recipe search application that allows users to find recipes based on ingredients they have on hand."
              tags={["React", "API", "Styled Components"]}
              imageUrl="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              codeUrl="https://github.com/yourusername/recipe-finder"
            />
            <ProjectCard
              title="Movie Database"
              description="A movie database application that allows users to search for movies, view details, and save favorites."
              tags={["React", "Redux", "TMDB API"]}
              imageUrl="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              codeUrl="https://github.com/yourusername/movie-db"
            />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-20 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:your.email@example.com" className="hover:underline">
                      your.email@example.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <a
                      href="https://linkedin.com/in/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      linkedin.com/in/yourusername
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-primary" />
                    <a
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      github.com/yourusername
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your message"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <User className="h-5 w-5" />
            <span className="font-medium">Your Name</span>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 hover:text-primary transition-colors" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 hover:text-primary transition-colors" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:your.email@example.com">
              <Mail className="h-5 w-5 hover:text-primary transition-colors" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
