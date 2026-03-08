"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { GridBackground } from "@/components/grid-background"
import { Book3D } from "@/components/book-3d"

const themes = [
  {
    title: "Digitální suverenita",
    description: "Jak si udržet kontrolu nad svými daty, rozhodnutími a identitou v době, kdy algoritmy předvídají naše chování dříve, než si ho uvědomíme."
  },
  {
    title: "Architektury pozornosti",
    description: "Pochopení mechanismů, které ovládají naši pozornost, a strategie pro jejich vědomé řízení namísto pasivního podléhání."
  },
  {
    title: "Post-lidská etika",
    description: "Nové etické rámce pro svět, kde hranice mezi člověkem a strojem postupně mizí a tradiční morální systémy přestávají stačit."
  },
  {
    title: "Kognitivní resilience",
    description: "Praktické techniky pro posílení mentální odolnosti a zachování kritického myšlení uprostřed informačního šumu."
  },
  {
    title: "Symbiotická budoucnost",
    description: "Vize konstruktivní koexistence s umělou inteligencí, která posílí lidský potenciál namísto jeho nahrazení."
  }
]

function ThemeCard({ title, description, index }: { title: string; description: string; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="p-6 md:p-8 border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300"
    >
      <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  )
}

export function BookContentSection() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true })

  return (
    <section className="relative bg-black py-24 md:py-32">
      <GridBackground intensity="medium" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
            Uvnitř knihy
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Pět klíčových témat, která vám pomohou navigovat éru umělé inteligence s jasností a sebevědomím.
          </p>
        </motion.div>

        {/* Asymmetric grid layout */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left: Sticky 3D book */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-32">
              <Book3D />
            </div>
          </div>

          {/* Right: Scrollable theme cards */}
          <div className="lg:col-span-3 space-y-6">
            {themes.map((theme, index) => (
              <ThemeCard
                key={theme.title}
                title={theme.title}
                description={theme.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
