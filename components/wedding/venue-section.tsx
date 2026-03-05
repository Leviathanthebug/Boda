import { MapPin, Clock, Car } from "lucide-react"

export function VenueSection() {
  return (
    <section id="lugar" className="bg-background px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Lugar de la Celebracion
          </h2>
          <p className="text-sm font-light text-muted-foreground">
            Donde sellamos nuestro amor rodeados de las personas que mas queremos.
          </p>
        </div>

        <div className="flex flex-col gap-8 md:flex-row">
          {/* Map embed */}
          <div className="flex-1 overflow-hidden rounded-lg border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.0024798391477!2d-99.16869!3d19.42702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sPalacio%20de%20Bellas%20Artes!5e0!3m2!1ses!2smx!4v1234567890"
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
                Jardin Los Arcos
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
                href="https://maps.google.com/?q=Jardin+Los+Arcos+CDMX"
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
