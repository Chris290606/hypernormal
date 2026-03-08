"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export function StickyHeader() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight
      setIsVisible(window.scrollY > heroHeight * 0.8)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-border/50"
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <span className="text-lg font-bold tracking-tight text-foreground">
              Hypernormal
            </span>
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
              onClick={() => {
                document.getElementById("preorder")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Předobjednat
            </Button>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  )
}
