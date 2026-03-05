"use client"

import { Heart } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-cover bg-center px-4 py-20 text-center" style={{ backgroundImage: "url('../img/foto-4.jpeg')" }}>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Decorative top ornament */}
        <div className="mb-6 flex items-center gap-3">
          <span className="block h-px w-16 bg-white" />
          <Heart className="h-5 w-5 text-gold" fill="currentColor" />
          <span className="block h-px w-16 bg-white" />
        </div>

        <p className="mb-4 text-sm font-light uppercase tracking-[0.3em] text-white">
          Tenemos el honor de invitarte a nuestra Celebracion de Amor
        </p>

        <h1 className="mb-2 font-serif text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
          Gabriela Madrid
        </h1>

        <div className="my-3 flex items-center gap-4">
          <span className="block h-px w-12 bg-white" />
          <span className="font-serif text-3xl italic text-white md:text-4xl">&amp;</span>
          <span className="block h-px w-12 bg-white" />
        </div>

        <h1 className="mb-8 font-serif text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
          Emanuel Santos
        </h1>

        <div className="mb-8 flex flex-col items-center gap-1">
          <p className="font-serif text-xl text-white md:text-2xl">
            Viernes, 20 de Marzo 2026
          </p>
          <p className="text-sm font-light text-white">
            6:00 PM
          </p>
        </div>

        <a
          href="#rsvp"
          className="rounded-none border border-gold bg-gold px-10 py-3 text-sm font-light uppercase tracking-[0.2em] text-primary-foreground transition-all hover:bg-transparent hover:text-gold"
        >
          Confirmar Asistencia
        </a>

        {/* Decorative bottom ornament */}
        <div className="mt-12 flex items-center gap-3">
          <span className="block h-px w-20 bg-gold-light" />
          <svg
            className="h-6 w-6 text-gold-light"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9z" />
            <path d="M12 7v5l3 3" />
          </svg>
          <span className="block h-px w-20 bg-gold-light" />
        </div>
      </div>
    </section>
  )
}
