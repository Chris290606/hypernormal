"use client"

export function FooterSection() {
  return (
    <footer className="relative bg-black border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-lg font-bold tracking-tight text-foreground">Hypernormal</span>
            <p className="text-sm text-muted-foreground mt-1">
              © 2026 Alexander Bruna & Pavel Čejka
            </p>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Kontakt</a>
            <a href="#" className="hover:text-foreground transition-colors">Obchodní podmínky</a>
            <a href="#" className="hover:text-foreground transition-colors">Ochrana soukromí</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
