"use client"

import { motion } from "framer-motion"
import { GridBackground } from "@/components/grid-background"
import { CrystalVisual } from "@/components/crystal-visual"
import { ScrollIndicator } from "@/components/scroll-indicator"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://cdn-cf-east.streamable.com/video/mp4/4seq5s.mp4?Expires=1773252502025&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=JME9Ti0cM1tQ0WPVRVziJNv22vkDm64kJibsQBZGtwKMpDa4MG4ZdEiqc5ugxOEqVc3LTdKiz79w0bpi~pWpWJnT8-9rMO73AUgpzhtw5hR4030FB6LJLZGPdp1uWUu2D1fqo5sR5kaaGQXj0jBVb6atoOn-tzz9PaKH2Xf7zCyeib4phyvUG35Rh48nkDqTb3TBzJ9VODo21G6vwBPtywFcxYAVBcF9C94Tz4EqMM5RaY2c0dxNBY8WtUbioNYWVsgftGuN8PJurbIQaNWeItyoFY2m4TOJj8-mdty3TE1um8viGDapOg8wrWQ3RcMw0vlSCRXh1juJ7bd~fAIS8A__" type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      <div className="relative z-[2]">
        <GridBackground intensity="subtle" />
      </div>

      {/* Purple glow behind crystal */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] z-[2]" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        {/* Authors */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted-foreground text-sm md:text-base tracking-[0.3em] uppercase mb-8"
        >
          Alexander Bruna & Pavel Čejka
        </motion.p>

        {/* Main title with crystal overlay */}
        <div className="relative">
          {/* Crystal positioned behind/overlapping text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
          >
            <CrystalVisual size="large" />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative z-10 font-bold tracking-tighter leading-[0.85]"
          >
            <span className="block text-[4rem] md:text-[8rem] lg:text-[12rem] text-foreground">
              Hyper–
            </span>
            <span className="block text-[4rem] md:text-[8rem] lg:text-[12rem] text-foreground">
              normal
            </span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 md:mt-12 text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl text-balance"
        >
          Jak si zachovat suverenitu v éře umělé inteligence
        </motion.p>
      </div>

      {/* Scroll indicator at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <ScrollIndicator />
      </motion.div>
    </section>
  )
}
