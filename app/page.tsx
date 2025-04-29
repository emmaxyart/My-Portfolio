"use client"

import { Briefcase, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ProjectCard from "@/components/project-card"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function Portfolio() {
  return (
    <motion.div
      className="min-h-screen bg-background"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <motion.header
        className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container flex h-16 items-center justify-between">
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Briefcase className="h-5 w-5" />
            <span className="text-lg font-bold">Edobor Emmanuel Ucheka</span>
          </motion.div>
          <nav className="hidden md:flex items-center gap-6">
            {["About", "Skills", "Projects", "Contact"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium hover:underline underline-offset-4"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </nav>
          <motion.div
            className="flex items-center gap-2"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {[
              { icon: <Github className="h-4 w-4" />, href: "https://github.com/yourusername", label: "GitHub" },
              {
                icon: <Linkedin className="h-4 w-4" />,
                href: "https://linkedin.com/in/yourusername",
                label: "LinkedIn",
              },
              { icon: <Mail className="h-4 w-4" />, href: "mailto:your.email@example.com", label: "Email" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                variants={fadeInUp}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.1 }}
              >
                <Button variant="outline" size="icon" asChild>
                  <Link href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.icon}
                    <span className="sr-only">{item.label}</span>
                  </Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.header>

      <main className="container py-8 md:py-12">
        {/* Hero Section */}
        <motion.section
          className="py-12 md:py-20 space-y-8 md:space-y-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div
              className="flex-1 space-y-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Hi, I'm{" "}
                <motion.span
                  className="text-primary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Edobor Emmanuel Ucheka
                </motion.span>
              </motion.h1>
              <motion.p
                className="text-xl text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Frontend Developer specializing in creating beautiful, responsive web experiences
              </motion.p>
              <motion.div
                className="flex gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <Button asChild>
                  <Link href="#contact">Contact Me</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#projects">View Projects</Link>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              className="flex-1 flex justify-center md:justify-end"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
            >
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Image
                  src="/placeholder.svg?height=320&width=320"
                  alt="Edobor Emmanuel Ucheka"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          className="py-12 md:py-20 scroll-mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
                  <motion.ul
                    className="space-y-2"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { emoji: "🌍", label: "Location:", value: "Your City, Country" },
                      { emoji: "💼", label: "Experience:", value: "5+ years" },
                      { emoji: "🎓", label: "Education:", value: "Bachelor's in Computer Science" },
                      { emoji: "🌱", label: "Currently learning:", value: "WebGL, Three.js" },
                      { emoji: "⚡", label: "Fun fact:", value: "I love hiking and photography" },
                    ].map((item, index) => (
                      <motion.li
                        key={item.label}
                        className="flex items-start gap-2"
                        variants={fadeInUp}
                        transition={{ delay: 0.1 * index }}
                      >
                        <span className="font-medium">
                          {item.emoji} {item.label}
                        </span>
                        <span>{item.value}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          className="py-12 md:py-20 scroll-mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Skills
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Tailwind CSS",
              "Node.js",
              "Git",
              "Responsive Design",
              "UI/UX",
              "Figma",
              "Accessibility",
            ].map((skill, index) => (
              <motion.div
                key={skill}
                variants={fadeInUp}
                transition={{ delay: 0.05 * index }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="hover:border-primary transition-colors">
                  <CardContent className="p-4 flex items-center justify-center">
                    <Badge variant="outline" className="text-base font-medium py-2 px-4">
                      {skill}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="py-12 md:py-20 scroll-mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Projects
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "E-commerce Website",
                description:
                  "A fully responsive e-commerce platform built with Next.js and Tailwind CSS. Features include product filtering, cart functionality, and user authentication.",
                tags: ["Next.js", "React", "Tailwind CSS", "Stripe"],
                imageUrl: "/placeholder.svg?height=400&width=600",
                demoUrl: "https://example.com",
                codeUrl: "https://github.com/yourusername/ecommerce",
              },
              {
                title: "Task Management App",
                description:
                  "A drag-and-drop task management application with real-time updates. Built with React, TypeScript, and Firebase.",
                tags: ["React", "TypeScript", "Firebase", "DnD"],
                imageUrl: "/placeholder.svg?height=400&width=600",
                demoUrl: "https://example.com",
                codeUrl: "https://github.com/yourusername/task-app",
              },
              {
                title: "Weather Dashboard",
                description:
                  "A weather application that displays current and forecasted weather data using the OpenWeather API.",
                tags: ["JavaScript", "API", "CSS Grid", "Chart.js"],
                imageUrl: "/placeholder.svg?height=400&width=600",
                demoUrl: "https://example.com",
                codeUrl: "https://github.com/yourusername/weather-app",
              },
              {
                title: "Portfolio Website",
                description:
                  "A personal portfolio website built with Next.js and Tailwind CSS. Features a responsive design and dark mode support.",
                tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
                imageUrl: "/placeholder.svg?height=400&width=600",
                demoUrl: "https://example.com",
                codeUrl: "https://github.com/yourusername/portfolio",
              },
              {
                title: "Recipe Finder",
                description:
                  "A recipe search application that allows users to find recipes based on ingredients they have on hand.",
                tags: ["React", "API", "Styled Components"],
                imageUrl: "/placeholder.svg?height=400&width=600",
                demoUrl: "https://example.com",
                codeUrl: "https://github.com/yourusername/recipe-finder",
              },
              {
                title: "Movie Database",
                description:
                  "A movie database application that allows users to search for movies, view details, and save favorites.",
                tags: ["React", "Redux", "TMDB API"],
                imageUrl: "/placeholder.svg?height=400&width=600",
                demoUrl: "https://example.com",
                codeUrl: "https://github.com/yourusername/movie-db",
              },
            ].map((project, index) => (
              <motion.div key={project.title} variants={fadeInUp} transition={{ delay: 0.1 * index }}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  imageUrl={project.imageUrl}
                  demoUrl={project.demoUrl}
                  codeUrl={project.codeUrl}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="py-12 md:py-20 scroll-mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">Contact Information</h3>
                  <motion.div
                    className="space-y-3"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      {
                        icon: <Mail className="h-5 w-5 text-primary" />,
                        href: "mailto:your.email@example.com",
                        label: "your.email@example.com",
                      },
                      {
                        icon: <Linkedin className="h-5 w-5 text-primary" />,
                        href: "https://linkedin.com/in/yourusername",
                        label: "linkedin.com/in/yourusername",
                      },
                      {
                        icon: <Github className="h-5 w-5 text-primary" />,
                        href: "https://github.com/yourusername",
                        label: "github.com/yourusername",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={item.href}
                        className="flex items-center gap-3"
                        variants={fadeInUp}
                        transition={{ delay: 0.1 * index }}
                        whileHover={{ x: 5 }}
                      >
                        {item.icon}
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {item.label}
                        </a>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <motion.div
                      className="grid gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your name"
                      />
                    </motion.div>
                    <motion.div
                      className="grid gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your email"
                      />
                    </motion.div>
                    <motion.div
                      className="grid gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your message"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer
        className="border-t py-6 md:py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Briefcase className="h-5 w-5" />
            <span className="font-medium">Edobor Emmanuel Ucheka</span>
          </motion.div>
          <motion.p
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            © {new Date().getFullYear()} Edobor Emmanuel Ucheka. All rights reserved.
          </motion.p>
          <motion.div
            className="flex items-center gap-4"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                icon: <Github className="h-5 w-5 hover:text-primary transition-colors" />,
                href: "https://github.com/yourusername",
                label: "GitHub",
              },
              {
                icon: <Linkedin className="h-5 w-5 hover:text-primary transition-colors" />,
                href: "https://linkedin.com/in/yourusername",
                label: "LinkedIn",
              },
              {
                icon: <Mail className="h-5 w-5 hover:text-primary transition-colors" />,
                href: "mailto:your.email@example.com",
                label: "Email",
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                variants={fadeInUp}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -3 }}
              >
                <Link href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.icon}
                  <span className="sr-only">{item.label}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.footer>
    </motion.div>
  )
}
