import { MapPin, Clock, Car, CalendarDays } from "lucide-react"

export function VenueSection() {
  return (
    <section id="lugar" className="bg-background px-4 py-20">
      <div className="mx-auto max-w-4xl">
        {/* Section heading */}
        <div className="mb-12 grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center rounded-xl bg-card p-8 shadow-sm">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cream">
              <CalendarDays className="h-6 w-6 text-gold" />
            </div>
            <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">
              Fecha
            </h3>
            <p className="mt-2 text-muted-foreground">
              Viernes, 20 de Marzo de 2026
            </p>
          </div>

          <div className="flex flex-col items-center rounded-xl bg-card p-8 shadow-sm">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cream">
              <Clock className="h-6 w-6 text-gold" />
            </div>
            <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">
              Hora
            </h3>
            <p className="mt-2 text-muted-foreground">
              Cena: 6:00 PM
            </p>
          </div>

          <div className="flex flex-col items-center rounded-xl bg-card p-8 shadow-sm">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cream">
              <MapPin className="h-6 w-6 text-gold" />
            </div>
            <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">
              Lugar
            </h3>
            <p className="mt-2 text-muted-foreground">
              Salón de Eventos TM
            </p>
            <p className="text-muted-foreground">
              Tocoa, Colón
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex-1 overflow-hidden rounded-lg border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.0024798391477!2d-86.0063316!3d15.6485047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6bc976234ed2c5%3A0xcf4a2add9330d0be!2sSal%C3%B3n%20de%20Eventos%20TM!5e0!3m2!1ses!2shn!4v1234567890"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicacion del evento"
            />
          </div>

          {/* Venue details */}
          <div className="flex flex-1 flex-col justify-center gap-6">
            <div>
              <h3 className="mb-3 font-serif text-2xl text-foreground">
                Salón de Eventos TM
              </h3>
              <p className="text-sm font-light leading-relaxed text-muted-foreground">
                Un hermoso jardin rodeado de naturaleza, el lugar perfecto para celebrar
                nuestro amor rodeados de las personas que mas queremos.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="text-sm font-medium text-foreground">Direccion</p>
                  <p className="text-sm font-light text-muted-foreground">
                   Inversiones Torres
                   Bo. El Tamarindo, atrás de la Escuela Privada Renacimiento.
                    <br />
                    Tocoa Colon
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="text-sm font-medium text-foreground">Fecha y Hora</p>
                  <p className="text-sm font-light text-muted-foreground">
                     Viernes 20 de Marzo, 2026
                    <br />
                    A las 6:00 PM
                  </p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/place/Sal%C3%B3n+de+Eventos+TM/@15.6485047,-86.0063316,19z/data=!4m22!1m15!4m14!1m6!1m2!1s0x8f6bc976234ed2c5:0xcf4a2add9330d0be!2sSal%C3%B3n+de+Eventos+TM,+32101+Tocoa,+Col%C3%B3n!2m2!1d-86.0056235!2d15.6485045!1m6!1m2!1s0x8f6bc976234ed2c5:0xcf4a2add9330d0be!2sSal%C3%B3n+de+Eventos+TM,+32101+Tocoa,+Col%C3%B3n!2m2!1d-86.0056235!2d15.6485045!3m5!1s0x8f6bc976234ed2c5:0xcf4a2add9330d0be!8m2!3d15.6485391!4d-86.0056233!16s%2Fg%2F11l2y5g63q?entry=ttu&g_ep=EgoyMDI2MDMwMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex w-fit items-center gap-2 rounded-none border border-gold px-6 py-2.5 text-xs font-light uppercase tracking-[0.2em] text-gold transition-all hover:bg-gold hover:text-primary-foreground"
              >
                <MapPin className="h-4 w-4" />
                Ver en Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
