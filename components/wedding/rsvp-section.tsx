"use client"

import { useState, useRef, type FormEvent } from "react"
import { Heart, Send, CheckCircle2 } from "lucide-react"
import emailjs from '@emailjs/browser';

export function RsvpSection() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const form = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '',
        form.current as HTMLFormElement,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ''  
      )
      setSubmitted(true)
    } catch (error) {
      console.error('Error sending email:', error)
      // You can add user-facing error handling here if needed
    } finally {
      setIsSubmitting(false)
    }
  }
    return (
      <section id="rsvp" className="bg-foreground px-4 py-20">
        <div className="mx-auto flex max-w-md flex-col items-center text-center">
          <CheckCircle2 className="mb-4 h-16 w-16 text-gold" />
          <h2 className="mb-2 font-serif text-3xl font-bold text-primary-foreground">
            Gracias por confirmar
          </h2>
          <p className="text-sm font-light text-gold-light">
            Hemos recibido tu confirmacion. Estamos emocionados de compartir este dia tan
            especial contigo.
          </p>
        </div>
      </section>
    )

  return (
    <section id="rsvp" className="bg-foreground px-4 py-20">
      <div className="mx-auto max-w-lg">
        <div className="mb-10 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="block h-px w-12 bg-gold/40" />
            <Heart className="h-4 w-4 text-gold" fill="currentColor" />
            <span className="block h-px w-12 bg-gold/40" />
          </div>
          <h2 className="mb-2 font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
            Confirma tu Asistencia
          </h2>
          <p className="text-sm font-light text-gold-light">
            Por favor confirma antes del 15 de marzo, 2026
          </p>
        </div>

        {/*
          Netlify Forms: el atributo data-netlify="true" y el hidden input
          con name="form-name" permiten que Netlify capture los envios.
          Configura las notificaciones por email en Netlify > Site Settings > Forms.
        */}
        <form
          name="rsvp"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          ref={form}
          className="flex flex-col gap-5"
        >
          <input type="hidden" name="form-name" value="rsvp" />

          {/* Nombre */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="nombre"
              className="text-xs font-light uppercase tracking-[0.15em] text-gold-light"
            >
              Nombre completo
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              placeholder="Tu nombre completo"
              className="rounded-none border border-gold/30 bg-transparent px-4 py-3 text-sm text-primary-foreground placeholder:text-gold/30 focus:border-gold focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="text-xs font-light uppercase tracking-[0.15em] text-gold-light"
            >
              Correo electronico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="tu@email.com"
              className="rounded-none border border-gold/30 bg-transparent px-4 py-3 text-sm text-primary-foreground placeholder:text-gold/30 focus:border-gold focus:outline-none"
            />
          </div>

          {/* Asistencia */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="asistencia"
              className="text-xs font-light uppercase tracking-[0.15em] text-gold-light"
            >
              Asistencia
            </label>
            <select
              id="asistencia"
              name="asistencia"
              required
              className="rounded-none border border-gold/30 bg-transparent px-4 py-3 text-sm text-primary-foreground focus:border-gold focus:outline-none"
            >
              <option value="" className="bg-foreground">Selecciona una opcion</option>
              <option value="confirmo" className="bg-foreground">Confirmo mi asistencia</option>
              <option value="no-asistire" className="bg-foreground">No podre asistir</option>
            </select>
          </div>

          {/* Numero de acompanantes */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="acompanantes"
              className="text-xs font-light uppercase tracking-[0.15em] text-gold-light"
            >
              Numero de acompanantes
            </label>
            <select
              id="acompanantes"
              name="acompanantes"
              className="rounded-none border border-gold/30 bg-transparent px-4 py-3 text-sm text-primary-foreground focus:border-gold focus:outline-none"
            >
              <option value="0" className="bg-foreground">Solo yo</option>
              <option value="1" className="bg-foreground">1 acompanante</option>
              <option value="2" className="bg-foreground">2 acompanantes</option>
              <option value="3" className="bg-foreground">3 acompanantes</option>
            </select>
          </div>

          {/* Mensaje */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="mensaje"
              className="text-xs font-light uppercase tracking-[0.15em] text-gold-light"
            >
              Mensaje para los novios (opcional)
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={3}
              placeholder="Escribe un mensaje..."
              className="resize-none rounded-none border border-gold/30 bg-transparent px-4 py-3 text-sm text-primary-foreground placeholder:text-gold/30 focus:border-gold focus:outline-none"
            />
          </div>

          {/* Restricciones alimenticias */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="restricciones"
              className="text-xs font-light uppercase tracking-[0.15em] text-gold-light"
            >
              Restricciones alimenticias (opcional)
            </label>
            <input
              type="text"
              id="restricciones"
              name="restricciones"
              placeholder="Vegetariano, alergias, etc."
              className="rounded-none border border-gold/30 bg-transparent px-4 py-3 text-sm text-primary-foreground placeholder:text-gold/30 focus:border-gold focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 flex items-center justify-center gap-2 rounded-none border border-gold bg-gold px-8 py-3 text-sm font-light uppercase tracking-[0.2em] text-primary-foreground transition-all hover:bg-transparent hover:text-gold disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
            {isSubmitting ? "Enviando..." : "Confirmar Asistencia"}
          </button>
        </form>
      </div>
    </section>
  )
}
