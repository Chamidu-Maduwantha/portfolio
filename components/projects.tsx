"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedSection } from "./animated-section"
import { Parallax } from "react-scroll-parallax"

const PROJECTS = [
    {
        title: "TravelNGo",
        description: "Android app for digitalizing season ticket passes using QR codes for buses and trains.",
        technologies: ["Kotlin", "Firebase"],
        achievements: [
          "Implemented QR code generation and scanning",
          "Integrated Firebase for real-time data synchronization",
        ],
      },
      {
        title: "SelIX - E-Commerce Platform",
        description: "Online shop for selling electric items with a built-in support chat system.",
        technologies: ["Angular", "MongoDB", "Node.js"],
        achievements: ["Developed a responsive UI", "Integrated a real-time chat feature", "Managed database operations"],
      },

      {
        title: "Discord Bot - CMusics™",
        description: "A verified music bot used in 72+ servers, created using Node.js.",
        technologies: ["Node.js"],
        achievements: ["Implemented various music commands", "Integrated with Discord API"],
        link: "https://discord.com/application-directory/993613471470063746",
      },

      {
        title: "Hotel Website",
        description: "A website with hotel room reservation.",
        technologies: ["Java"],
        achievements: ["Developed room reservation system", "Integrated payment gateway"],
      },
      {
        title: "Android Chat Application",
        description: "Chatting android application.",
        technologies: ["Kotlin", "Firebase"],
        achievements: ["Implemented real-time messaging", "Integrated Firebase for data storage"],
      },
      {
        title: "Book Author Website",
        description: "Website for a book writer.",
        technologies: ["HTML", "React", "NodeJS"],
        achievements: ["Developed author profile page", "Integrated blog feature"],
      },
      {
        title: "Flappy Bird Game",
        description: "Simple game made with Windows Form.",
        technologies: ["C#"],
        achievements: ["Developed game mechanics", "Implemented scoring system"],
      },
      {
        title: "Supermarket Billing System",
        description: "Billing system for a supermarket.",
        technologies: ["C#"],
        achievements: ["Developed billing interface", "Integrated inventory management"],
      },
      {
        title: "Police Activity Management",
        description: "Management system for police activities.",
        technologies: ["ASP.NET", "C#"],
        achievements: ["Developed activity tracking", "Integrated reporting feature"],
      },
      {
        title: "Bus Tracking System",
        description: "Bus tracking system with an Android application.",
        technologies: ["Java", "Firebase"],
        achievements: ["Implemented real-time bus tracking", "Integrated Firebase for data storage"],
      },
      {
        title: "Smart Plant Management",
        description: "Smart plant management with Arduino and mobile application.",
        technologies: ["Arduino", "Kotlin", "Firebase"],
        achievements: ["Developed plant monitoring system", "Integrated mobile app for remote control"],
      },
      
    ]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function Projects() {
  const [filter, setFilter] = React.useState("all")

  const technologies = Array.from(new Set(PROJECTS.flatMap((project) => project.technologies)))

  const filteredProjects =
    filter === "all" ? PROJECTS : PROJECTS.filter((project) => project.technologies.includes(filter))

  return (
    <section id="projects" className="py-20">
      <Parallax className="container" speed={-5}>
        <AnimatedSection>
          <h2 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
        </AnimatedSection>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-wrap gap-2"
        >
          <Button variant={filter === "all" ? "default" : "outline"} onClick={() => setFilter("all")}>
            All
          </Button>
          {technologies.map((tech) => (
            <Button key={tech} variant={filter === tech ? "default" : "outline"} onClick={() => setFilter(tech)}>
              {tech}
            </Button>
          ))}
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full transition-all hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <Button variant="ghost" size="icon" asChild>
                      <a href="https://github.com/Chamidu-Maduwantha" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardTitle>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">{project.description}</p>
                  <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                    {project.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                  {project.link && (
                    <div className="mt-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 mt-2 text-white bg-blue-1 rounded hover:bg-blue-600"
                      >
                        Try the bot
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Parallax>
    </section>
  )
}

