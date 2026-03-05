import { Heart } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="bg-cream px-4 py-12">
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        <div className="mb-4 flex items-center gap-3">
          <span className="block h-px w-8 bg-gold-light" />
          <Heart className="h-4 w-4 text-gold" fill="currentColor" />
          <span className="block h-px w-8 bg-gold-light" />
        </div>

        <p className="font-serif text-xl text-foreground">Gabriela Madrid & Emanuel Santos</p>
        <p className="mt-1 text-xs font-light text-muted-foreground">
          20 de Marzo, 2026
        </p>

        <div className="mt-6 h-px w-24 bg-gold-light" />

        <p className="mt-6 text-xs font-light leading-relaxed text-muted-foreground">
          Nos sentimos honrados de que compartas este dia tan especial con nosotros.
          <br />
          Tu presencia es el mejor regalo.
        </p>

        <p className="mt-8 text-[10px] font-light uppercase tracking-[0.2em] text-muted-foreground/60">
          Con todo nuestro amor
        </p>
      </div>
    </footer>
  )
}
