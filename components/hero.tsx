import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Forge & Fade barbershop interior"
        fill
        className="object-cover"
        priority
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-background/70" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        {/* Gold accent line */}
        <div className="mx-auto mb-8 h-px w-24 bg-primary" />
        
        <h1 className="font-serif text-5xl font-bold uppercase tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl text-balance">
          Sharp Cuts.
          <br />
          <span className="text-primary">No Compromises.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Premium grooming for the modern gentleman. Where traditional craftsmanship meets contemporary style in the heart of Hitchin.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90 rounded-sm"
          >
            Book Your Appointment
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center justify-center border border-border px-8 py-4 text-base font-medium text-foreground transition-colors hover:bg-muted rounded-sm"
          >
            View Services
          </Link>
        </div>

        {/* Gold accent line */}
        <div className="mx-auto mt-16 h-px w-24 bg-primary" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
          <div className="h-12 w-px bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  )
}
