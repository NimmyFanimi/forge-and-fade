const services = [
  {
    name: "Classic Cut",
    description: "Precision haircut with consultation and styling",
    price: "£25",
  },
  {
    name: "Skin Fade",
    description: "Sharp fade with seamless blending",
    price: "£28",
  },
  {
    name: "Beard Trim",
    description: "Shape and define your beard with hot towel finish",
    price: "£15",
  },
  {
    name: "Cut & Beard Combo",
    description: "Full haircut plus beard grooming package",
    price: "£38",
  },
  {
    name: "Hot Towel Shave",
    description: "Traditional straight razor shave with aromatherapy",
    price: "£22",
  },
  {
    name: "The Full Experience",
    description: "Haircut, beard trim, hot towel, and scalp massage",
    price: "£55",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="font-serif text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl">
            Our Services
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.name}
              className="group border-t border-primary/40 pt-4 pb-6"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-semibold uppercase tracking-wide text-foreground">
                    {service.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
                <span className="font-serif text-xl font-bold text-primary">
                  {service.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
