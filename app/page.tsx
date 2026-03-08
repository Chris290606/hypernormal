"use client"

import { StickyHeader } from "@/components/sticky-header"
import { HeroSection } from "@/components/sections/hero-section"
import { PremiseSection } from "@/components/sections/premise-section"
import { BookContentSection } from "@/components/sections/book-content-section"
import { AuthorsSection } from "@/components/sections/authors-section"
import { PreorderSection } from "@/components/sections/preorder-section"
import { FooterSection } from "@/components/sections/footer-section"

export default function HypernormalLanding() {
  return (
    <main className="bg-black min-h-screen">
      <StickyHeader />
      <HeroSection />
      <PremiseSection />
      <BookContentSection />
      <AuthorsSection />
      <PreorderSection />
      <FooterSection />
    </main>
  )
}
