"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { GridBackground } from "@/components/grid-background"

interface PremiseBlockProps {
  text: string
  highlight?: string
  index: number
}

function PremiseBlock({ text, highlight, index }: PremiseBlockProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-20%" })

  const parts = highlight ? text.split(highlight) : [text]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="min-h-[60vh] flex items-center justify-center px-6"
    >
      <p className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-center max-w-5xl leading-tight text-balance">
        {highlight ? (
          <>
            {parts[0]}
            <span className="text-primary">{highlight}</span>
            {parts[1]}
          </>
        ) : (
          text
        )}
      </p>
    </motion.div>
  )
}

export function PremiseSection() {
  const premises = [
    {
      text: "Algoritmy už dávno převzaly kontrolu.",
      highlight: "kontrolu"
    },
    {
      text: "Otázka nezní, jak to zastavit.",
      highlight: "zastavit"
    },
    {
      text: "Otázka zní, jak v tomto novém normálu neztratit sami sebe.",
      highlight: "neztratit sami sebe"
    }
  ]

  return (
    <section className="relative bg-black py-24">
      <GridBackground intensity="subtle" />
      
      <div className="relative z-10">
        {premises.map((premise, index) => (
          <PremiseBlock
            key={index}
            text={premise.text}
            highlight={premise.highlight}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
