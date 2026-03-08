"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { GridBackground } from "@/components/grid-background"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const benefits = [
  "Limitovaná první edice s podpisem autorů",
  "Exkluzivní přístup k online Q&A s autory",
  "Bonus: Digitální workbook pro praktickou aplikaci",
  "Doručení ihned po vydání"
]

export function PreorderSection() {
  const headerRef = useRef(null)
  const cardRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-10%" })
  const isCardInView = useInView(cardRef, { once: true, margin: "-10%" })

  return (
    <section id="preorder" className="relative bg-black py-24 md:py-32 overflow-hidden">
      <GridBackground intensity="strong" />

      {/* Large purple glow in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-foreground mb-6 text-balance">
            Budoucnost je už tady.
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground text-balance">
            Zajistěte si svůj výtisk před vydáním.
          </p>
        </motion.div>

        {/* Preorder card */}
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={isCardInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Card glow effect */}
          <div className="absolute -inset-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent rounded-lg blur-sm" />

          <div className="relative bg-card border border-border rounded-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              {/* Left: Price and CTA */}
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Předobjednávka</p>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Hypernormal</h3>
                <p className="text-muted-foreground mb-8">Vázaná kniha • 320 stran • První edice</p>

                <div className="flex items-baseline gap-3 mb-8">
                  <span className="text-5xl md:text-6xl font-bold text-foreground">599 Kč</span>
                  <span className="text-muted-foreground line-through">749 Kč</span>
                </div>

                <Button
                  size="lg"
                  className="w-full md:w-auto text-lg px-12 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
                >
                  Předobjednat knihu
                </Button>

                <p className="text-xs text-muted-foreground mt-4">
                  Očekávané dodání: Q2 2026
                </p>
              </div>

              {/* Right: Benefits */}
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isCardInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isCardInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Bezpečná platba • 14denní záruka vrácení peněz • Osobní podpora
          </p>
        </motion.div>
      </div>
    </section>
  )
}
