import Image from "next/image"

export function Gallery() {
  const galleryItems = [
    { title: "Classic Fade", aspect: "aspect-square", image: "/images/classic-fade.jpg" },
    { title: "Beard Styling", aspect: "aspect-[4/5]", image: "/images/beard-styling.jpg" },
    { title: "Precision Cut", aspect: "aspect-square", image: "/images/precision-cut.jpg" },
    { title: "Modern Style", aspect: "aspect-[4/5]", image: "/images/modern-style.jpg" },
    { title: "Sharp Lines", aspect: "aspect-square", image: "/images/sharp-lines.jpg" },
    { title: "Clean Finish", aspect: "aspect-square", image: "/images/clean-finish.jpg" },
  ]

  return (
    <section id="gallery" className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm font-medium uppercase tracking-widest text-primary">
              Our Work
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="font-serif text-4xl font-bold uppercase tracking-tight text-card-foreground sm:text-5xl">
            Gallery
          </h2>
          <p className="mt-4 text-muted-foreground">
            A showcase of our finest work
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden bg-muted ${item.aspect}`}
            >
              {/* Image or placeholder content */}
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-serif text-2xl font-bold text-primary/30">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                      {item.title}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/0 transition-colors group-hover:bg-primary/10" />
              
              {/* Border on hover */}
              <div className="absolute inset-2 border border-transparent transition-colors group-hover:border-primary/50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
