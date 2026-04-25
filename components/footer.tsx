import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
]

const socialLinks = [
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Twitter, label: "Twitter" },
]

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Logo and tagline */}
          <div>
            <Link href="#home" className="inline-block">
              <span className="font-serif text-2xl font-bold tracking-tight text-foreground">
                FORGE<span className="text-primary">&</span>FADE
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Sharp cuts, no compromises. Premium grooming for the modern gentleman in Hitchin, Hertfordshire.
            </p>
            {/* Social links */}
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-widest text-foreground">
              Quick Links
            </h4>
            <nav className="mt-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Opening hours */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-widest text-foreground">
              Opening Hours
            </h4>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Forge & Fade. All rights reserved.
            </p>
            <div className="flex items-center gap-1">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                Hitchin
              </span>
              <div className="h-px w-8 bg-primary" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
