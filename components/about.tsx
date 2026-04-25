import Image from "next/image"
import { Button } from "@/components/ui/button"

export function About() {
  return (
    <section id="about" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm font-medium uppercase tracking-widest text-primary">
                About Us
              </span>
            </div>
            
            <h2 className="font-serif text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl">
              Craftsmanship
              <br />
              <span className="text-primary">Meets Style</span>
            </h2>
            
            <div className="mt-8 space-y-6 text-muted-foreground">
              <p>
                Founded in the heart of Hitchin, Forge & Fade represents a new standard in men&apos;s grooming. We believe that a great haircut is more than just a service — it&apos;s an experience.
              </p>
              <p>
                Our team of skilled barbers combines traditional techniques with contemporary styles, ensuring every client leaves looking and feeling their absolute best.
              </p>
              <p>
                Step into our shop and experience the difference that attention to detail makes. From the moment you walk in, you&apos;ll know you&apos;re in expert hands.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-sm font-semibold uppercase tracking-widest"
              >
                <a href="#contact">Book Now</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-border pt-8">
              <div>
                <div className="font-serif text-3xl font-bold text-primary">10+</div>
                <div className="mt-1 text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="font-serif text-3xl font-bold text-primary">5k+</div>
                <div className="mt-1 text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="font-serif text-3xl font-bold text-primary">4.9</div>
                <div className="mt-1 text-sm text-muted-foreground">Star Rating</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/5] overflow-hidden bg-muted">
              <Image
                src="/images/barber-shop.jpg"
                alt="Inside Forge & Fade barbershop"
                fill
                className="object-cover"
              />
              {/* Decorative border */}
              <div className="absolute inset-4 border border-primary/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
