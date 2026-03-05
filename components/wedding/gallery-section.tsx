import { Heart } from "lucide-react"

const photos = [
  { id: 1, label: "Foto 1", src: "/img/foto-1.jpeg" },
  { id: 2, label: "Foto 2", src: "/img/foto-2.jpeg" },
  { id: 3, label: "Foto 3", src: "/img/foto-3.jpeg" },
  { id: 4, label: "Foto 4", src: "/img/foto-4.jpeg" },
  { id: 5, label: "Foto 5", src: "/img/foto-5.jpeg" },
  { id: 6, label: "Foto 6", src: "/img/foto-6.jpeg" },
]

export function GallerySection() {
  return (
    <section id="galeria" className="bg-cream px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="block h-px w-12 bg-gold-light" />
            <Heart className="h-4 w-4 text-gold" fill="currentColor" />
            <span className="block h-px w-12 bg-gold-light" />
          </div>
          <h2 className="mb-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Nuestra Historia
          </h2>
          <p className="text-sm font-light text-muted-foreground">
            Momentos que atesoramos juntos
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative aspect-square overflow-hidden rounded-lg border border-border bg-cream-dark transition-shadow hover:shadow-lg"
            >
              <img
                src={photo.src}
                alt={photo.label}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/10" />
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}