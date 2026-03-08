"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface Book3DProps {
    className?: string
}

export function Book3D({ className = "" }: Book3DProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`flex items-center justify-center ${className}`}
            style={{ perspective: "1200px" }}
        >
            <motion.div
                whileHover={{ rotateY: -8, scale: 1.03 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative"
                style={{
                    transformStyle: "preserve-3d",
                    transform: "rotateY(-18deg) rotateX(3deg)",
                }}
            >
                {/* Front cover */}
                <div
                    className="relative w-[260px] h-[406px] md:w-[300px] md:h-[468px] rounded-r-sm overflow-hidden"
                    style={{
                        transformStyle: "preserve-3d",
                        boxShadow:
                            "8px 8px 40px rgba(0, 0, 0, 0.7), -2px 0 15px rgba(0,0,0,0.3), 0 0 80px rgba(139, 92, 246, 0.12)",
                    }}
                >
                    <Image
                        src="/book-front.png"
                        alt="Hypernormal - Book Cover"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Glossy reflection */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background:
                                "linear-gradient(120deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 35%, rgba(255,255,255,0) 65%, rgba(255,255,255,0.03) 100%)",
                        }}
                    />
                </div>

                {/* Spine — using the cropped spine image */}
                <div
                    className="absolute top-0 left-0 w-[35px] md:w-[40px] h-full overflow-hidden rounded-l-sm"
                    style={{
                        transformOrigin: "left center",
                        transform: "rotateY(-90deg)",
                    }}
                >
                    <Image
                        src="/book-spine.png"
                        alt="Book spine"
                        fill
                        className="object-cover"
                    />
                    {/* Darken spine for 3D depth */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: "linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,0.25))",
                        }}
                    />
                </div>

                {/* Book pages (right edge) */}
                <div
                    className="absolute top-[1px] right-0 w-[30px] md:w-[35px] rounded-r-[2px]"
                    style={{
                        height: "calc(100% - 2px)",
                        transformOrigin: "right center",
                        transform: "rotateY(90deg)",
                        background:
                            "repeating-linear-gradient(to bottom, #f5f0e8 0px, #f5f0e8 1px, #ebe5d8 1px, #ebe5d8 3px)",
                        boxShadow: "inset -3px 0 8px rgba(0,0,0,0.3), inset 0 0 4px rgba(0,0,0,0.1)",
                    }}
                />

                {/* Bottom shadow / glow */}
                <div
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-[30px] rounded-full"
                    style={{
                        background:
                            "radial-gradient(ellipse, rgba(139, 92, 246, 0.2) 0%, transparent 70%)",
                        filter: "blur(10px)",
                    }}
                />
            </motion.div>
        </motion.div>
    )
}
