"use client"

export function GridBackground({ intensity = "subtle" }: { intensity?: "subtle" | "medium" | "strong" }) {
  const opacityMap = {
    subtle: "opacity-[0.03]",
    medium: "opacity-[0.06]",
    strong: "opacity-[0.1]"
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main grid pattern */}
      <div 
        className={`absolute inset-0 ${opacityMap[intensity]}`}
        style={{
          backgroundImage: `
            linear-gradient(to right, #27272A 1px, transparent 1px),
            linear-gradient(to bottom, #27272A 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Larger grid overlay */}
      <div 
        className={`absolute inset-0 ${opacityMap[intensity]}`}
        style={{
          backgroundImage: `
            linear-gradient(to right, #3f3f46 1px, transparent 1px),
            linear-gradient(to bottom, #3f3f46 1px, transparent 1px)
          `,
          backgroundSize: '180px 180px'
        }}
      />

      {/* Crosshairs */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
        <defs>
          <pattern id="crosshairs" x="0" y="0" width="360" height="360" patternUnits="userSpaceOnUse">
            <line x1="175" y1="180" x2="185" y2="180" stroke="#A855F7" strokeWidth="0.5" />
            <line x1="180" y1="175" x2="180" y2="185" stroke="#A855F7" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#crosshairs)" />
      </svg>
    </div>
  )
}
