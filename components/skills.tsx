"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { AnimatedSection } from "./animated-section"

const SKILLS = {
  Programming: ["Kotlin", "Java", "JavaScript", "C#", "PHP"],
  Frontend: ["React","NextJS", "Angular", "HTML", "CSS"],
  Backend: ["Node.js", "Java Web Applications","NestJS"],
  Databases: ["MongoDB", "Firebase Realtime Database"],
  "Tools & Platforms": ["Git", "AWS", "Arduino"],
  "Soft Skills": ["Analytical Thinking", "Problem-Solving", "Collaboration", "Creativity"],
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container">
        <AnimatedSection>
          <h2 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills</h2>
        </AnimatedSection>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(SKILLS).map(([category, skills], index) => (
            <motion.div
              key={category}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full transition-transform hover:scale-105">
                <CardHeader>
                  <CardTitle>{category}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: skillIndex * 0.1 }}
                    >
                      <Badge variant="secondary">{skill}</Badge>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

