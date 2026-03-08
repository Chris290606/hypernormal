"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function ScrollIndicator() {
  return (
    <motion.div
      className="flex flex-col items-center gap-2 text-muted-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
    >
      <span className="text-xs uppercase tracking-[0.2em]">Scroll to discover</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </motion.div>
  )
}
