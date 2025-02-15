"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { Parallax } from "react-scroll-parallax"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-3.5rem)] items-center justify-center overflow-hidden py-20">
      {/* Background Parallax Elements */}
      <Parallax className="absolute inset-0 z-0" translateY={[0, 50]} opacity={[1, 0]}>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      </Parallax>

      <div className="container relative z-10 flex flex-col items-center text-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
          <motion.h1
            variants={itemVariants}
            className="animate-fade-up text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Chamidu Rathnayaka
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-4 animate-fade-up text-gray-300 opacity-0 animation-delay-200 sm:text-xl"
          >
            Software Engineer & Full-Stack Developer
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4 justify-center">
            <Button asChild>
              <Link href="mailto:chamidumaduwntha@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://github.com/Chamidu-Maduwantha" target="_blank">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://www.linkedin.com/in/rm-chamidu/" target="_blank">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <div className="h-16 w-8 rounded-full border-2 border-primary p-2">
          <div className="h-3 w-full rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  )
}

