"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { MapPin, Phone, Clock } from "lucide-react"

const services = [
  "Classic Cut",
  "Skin Fade",
  "Beard Trim",
  "Cut & Beard Combo",
  "Hot Towel Shave",
  "The Full Experience",
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm font-medium uppercase tracking-widest text-primary">
              Get In Touch
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="font-serif text-4xl font-bold uppercase tracking-tight text-card-foreground sm:text-5xl">
            Book Your Visit
          </h2>
          <p className="mt-4 text-muted-foreground">
            Ready for a fresh look? Book your appointment today.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl font-bold text-card-foreground mb-6">
                  Visit Our Shop
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-card-foreground">Address</div>
                      <div className="mt-1 text-muted-foreground">
                        123 High Street<br />
                        Hitchin, Hertfordshire<br />
                        SG5 1AB
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-card-foreground">Phone</div>
                      <div className="mt-1 text-muted-foreground">
                        01462 123 456
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-card-foreground">Opening Hours</div>
                      <div className="mt-1 text-muted-foreground">
                        Mon - Fri: 9:00 AM - 7:00 PM<br />
                        Saturday: 9:00 AM - 5:00 PM<br />
                        Sunday: Closed
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-background p-8 border border-border">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                Enquiry Form
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Smith"
                    className="bg-muted border-border text-foreground placeholder:text-muted-foreground rounded-sm"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="07123 456 789"
                    className="bg-muted border-border text-foreground placeholder:text-muted-foreground rounded-sm"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-foreground">
                    Service
                  </Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) =>
                      setFormData({ ...formData, service: value })
                    }
                  >
                    <SelectTrigger className="bg-muted border-border text-foreground rounded-sm">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-border">
                      {services.map((service) => (
                        <SelectItem
                          key={service}
                          value={service}
                          className="text-popover-foreground"
                        >
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date" className="text-foreground">
                    Preferred Date
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    className="bg-muted border-border text-foreground rounded-sm"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm py-6 font-semibold"
                >
                  Submit Enquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
