"use client"

import { motion } from "framer-motion"

export function CrystalVisual({ size = "large" }: { size?: "small" | "medium" | "large" }) {
  const sizeClasses = {
    small: "w-32 h-32 md:w-48 md:h-48",
    medium: "w-48 h-48 md:w-72 md:h-72",
    large: "w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]"
  }

  return (
    <div className={`relative ${sizeClasses[size]}`}>
      {/* Outer glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-violet-500/40 to-purple-600/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Inner glow */}
      <motion.div
        className="absolute inset-4 bg-gradient-to-br from-purple-500/50 via-violet-400/60 to-fuchsia-500/50 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />

      {/* Crystal shape - Diamond/Octahedron representation */}
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full"
        animate={{
          rotateY: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <defs>
          <linearGradient id="crystalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9B5DE5" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#A855F7" stopOpacity="1" />
            <stop offset="100%" stopColor="#C084FC" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="crystalGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#9B5DE5" stopOpacity="0.9" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Upper pyramid */}
        <polygon 
          points="100,20 40,100 100,100" 
          fill="url(#crystalGradient)" 
          opacity="0.9"
          filter="url(#glow)"
        />
        <polygon 
          points="100,20 160,100 100,100" 
          fill="url(#crystalGradient2)" 
          opacity="0.85"
          filter="url(#glow)"
        />
        
        {/* Lower pyramid */}
        <polygon 
          points="100,180 40,100 100,100" 
          fill="url(#crystalGradient2)" 
          opacity="0.85"
          filter="url(#glow)"
        />
        <polygon 
          points="100,180 160,100 100,100" 
          fill="url(#crystalGradient)" 
          opacity="0.9"
          filter="url(#glow)"
        />

        {/* Edges highlight */}
        <line x1="100" y1="20" x2="40" y2="100" stroke="#C084FC" strokeWidth="0.5" opacity="0.6" />
        <line x1="100" y1="20" x2="160" y2="100" stroke="#C084FC" strokeWidth="0.5" opacity="0.6" />
        <line x1="100" y1="180" x2="40" y2="100" stroke="#C084FC" strokeWidth="0.5" opacity="0.6" />
        <line x1="100" y1="180" x2="160" y2="100" stroke="#C084FC" strokeWidth="0.5" opacity="0.6" />
        <line x1="40" y1="100" x2="160" y2="100" stroke="#C084FC" strokeWidth="0.5" opacity="0.6" />
      </motion.svg>

      {/* Center bright spot */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full blur-sm"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}
