import { Heart } from "lucide-react"

export function CoupleSection() {
  return (
    <section id="pareja" className="bg-background px-4 py-20">
      <div className="mx-auto max-w-4xl text-center">
        {/* Section heading */}
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="block h-px w-12 bg-gold-light" />
          <Heart className="h-4 w-4 text-gold" fill="currentColor" />
          <span className="block h-px w-12 bg-gold-light" />
        </div>
        <h2 className="mb-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
          Los Novios
        </h2>
        <p className="mb-12 text-sm font-light text-muted-foreground">
          Dos almas que se encontraron para caminar juntas
        </p>

        <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16">
          {/* Novia */}
           <div className="flex flex-1 flex-col items-center">
            <div className="mb-6 h-56 w-56 overflow-hidden rounded-full border-2 border-gold-light bg-cream-dark">
              <img src="/img/foto-cara.jpeg" alt="Foto de Gabriela" className="h-full w-full object-cover" />
            </div>
            <h3 className="mb-1 font-serif text-2xl text-foreground">Gabriela Madrid</h3>
            <p className="max-w-xs text-sm font-light leading-relaxed text-muted-foreground">
            </p>
          </div>

          {/* Divider */}
          <div className="hidden flex-col items-center gap-2 md:flex">
            <span className="block h-16 w-px bg-gold-light" />
            <Heart className="h-5 w-5 text-gold" fill="currentColor" />
            <span className="block h-16 w-px bg-gold-light" />
          </div>

          {/* Novio */}
           <div className="flex flex-1 flex-col items-center">
            <div className="mb-6 h-56 w-56 overflow-hidden rounded-full border-2 border-gold-light bg-cream-dark">
              <img src="/img/foto-cara-ema.jpeg" alt="Foto de Emanuel" className="h-full w-full object-cover" />
            </div>
            <h3 className="mb-1 font-serif text-2xl text-foreground">Emanuel Santos</h3>
            <p className="max-w-xs text-sm font-light leading-relaxed text-muted-foreground">
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
