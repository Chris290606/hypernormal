"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { GridBackground } from "@/components/grid-background"

const authors = [
  {
    name: "Alexander Bruna",
    role: "Technologický filosof & Spisovatel",
    bio: "Přední český myslitel zabývající se dopadem technologií na lidskou společnost. Jeho práce spojuje filozofii, kognitivní vědu a futurologii v unikátní perspektivu na budoucnost lidstva.",
    image: null
  },
  {
    name: "Pavel Čejka",
    role: "AI Stratég & Podnikatel",
    bio: "Uznávaný expert v oblasti umělé inteligence s více než dvacetiletou praxí. Pomáhá organizacím navigovat digitální transformaci s důrazem na lidský faktor a etické principy.",
    image: null
  }
]

function AuthorCard({ author, index }: { author: typeof authors[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className="group"
    >
      {/* Author image placeholder */}
      <div className="relative aspect-square mb-6 bg-gradient-to-br from-secondary to-card border border-border overflow-hidden">
        {/* Placeholder content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
            <span className="text-3xl font-bold text-muted-foreground">
              {author.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        </div>
        
        {/* Purple glow on hover */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
        </div>
      </div>

      {/* Author info */}
      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{author.name}</h3>
      <p className="text-primary text-sm uppercase tracking-[0.15em] mb-4">{author.role}</p>
      <p className="text-muted-foreground leading-relaxed">{author.bio}</p>
    </motion.div>
  )
}

export function AuthorsSection() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true })

  return (
    <section className="relative bg-black py-24 md:py-32">
      <GridBackground intensity="subtle" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
            Autoři
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Dva vizionáři, kteří spojili své síly, aby vám pomohli připravit se na budoucnost.
          </p>
        </motion.div>

        {/* Authors grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {authors.map((author, index) => (
            <AuthorCard key={author.name} author={author} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
