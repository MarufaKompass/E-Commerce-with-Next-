import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight, Instagram } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 pt-20 text-center overflow-hidden">
        <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-5xl md:text-8xl font-serif leading-[1.1] mb-8 text-balance">
            Optimal organization meets exquisite design
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-pretty font-light">
            Transform your living spaces into functional works of art with our curated collection of artisanal
            furnishings.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto px-12 py-8 text-base uppercase tracking-widest">
              Explore Collection
            </Button>
          </div>
        </div>

        {/* Decorative Image/Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Scroll to reveal</span>
          <div className="w-[1px] h-12 bg-border animate-bounce" />
        </div>
      </section>

      {/* Collections Section */}
      <section className="px-6 py-24 md:py-32 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">The Collections</h2>
            <p className="text-3xl md:text-5xl font-serif max-w-2xl mx-auto leading-tight">
              Curated essentials for a refined home
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Artisanal Vases", count: "12 Items", image: "/luxury-ceramic-vase.jpg" },
              { title: "Modern Seating", count: "8 Items", image: "/minimalist-velvet-sofa.jpg" },
              { title: "Sculptural Lighting", count: "15 Items", image: "/sculptural-pendant-light.jpg" },
            ].map((collection, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-6">
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{collection.count}</p>
                <h3 className="text-2xl font-serif group-hover:underline underline-offset-4 decoration-1">
                  {collection.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / Recognition */}
      <section className="px-6 py-32 border-y border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-12">Recognition</p>
          <div className="relative">
            <blockquote className="text-3xl md:text-5xl font-serif italic leading-snug mb-12 text-balance">
              "A masterclass in minimalist luxury. Every piece tells a story of intentionality and craftsmanship."
            </blockquote>
            <div className="flex items-center justify-center gap-8">
              <ChevronLeft className="w-6 h-6 text-muted-foreground cursor-pointer hover:text-primary transition-colors" />
              <span className="text-xl font-bold tracking-tighter">ARCHITECTURAL DIGEST</span>
              <ChevronRight className="w-6 h-6 text-muted-foreground cursor-pointer hover:text-primary transition-colors" />
            </div>
          </div>
        </div>
      </section>

      {/* Immersive Banner */}
      <section className="relative h-[80vh] flex items-center justify-start overflow-hidden group">
        <Image
          src="/luxury-home-decor.jpg"
          alt="Interior Design"
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 px-6 md:px-24 max-w-3xl text-white">
          <h2 className="text-4xl md:text-7xl font-serif mb-8 leading-tight">
            Escape reality without leaving your sanctuary
          </h2>
          <Button
            variant="outline"
            className="bg-white/10 backdrop-blur-md border-white text-white hover:bg-white hover:text-black uppercase tracking-widest px-10 py-6"
          >
            Explore Journal
          </Button>
        </div>
      </section>

      {/* Instagram Feed / Social */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div>
              <h2 className="text-3xl font-serif mb-4">Seeing is believing</h2>
              <p className="text-muted-foreground font-light">Follow us for daily inspiration and early access.</p>
            </div>
            <Link
              href="#"
              className="flex items-center gap-2 text-xs uppercase tracking-widest border-b border-primary pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-all"
            >
              <Instagram className="w-4 h-4" />
              @luxe_creations
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative aspect-square overflow-hidden bg-muted group cursor-pointer">
                <Image
                  src={`/luxury-interior-detail-.jpg?key=7gw8g&height=600&width=600&query=luxury-interior-detail-${i}`}
                  alt="Social feed"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity w-8 h-8" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Grid */}
      <section className="px-6 py-24 md:py-32 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Item 1 */}
          <div className="flex flex-col gap-6 group cursor-pointer">
            <div className="relative aspect-[4/5] overflow-hidden bg-muted">
              <Image
                src="/minimalist-furniture-dark-wood.jpg"
                alt="Product"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Legacy Series</p>
                <h3 className="text-2xl font-serif">The Untold Story</h3>
              </div>
              <Button variant="outline" size="icon" className="rounded-full w-12 h-12 bg-transparent">
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Item 2 - Larger center piece */}
          <div className="flex flex-col gap-6 group cursor-pointer lg:mt-12">
            <div className="relative aspect-[4/5] overflow-hidden bg-muted">
              <Image
                src="/modern-closet-design.jpg"
                alt="Product"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Custom Solutions</p>
                <h3 className="text-2xl font-serif">Optimal Framework</h3>
              </div>
              <Button variant="outline" size="icon" className="rounded-full w-12 h-12 bg-transparent">
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col gap-6 group cursor-pointer lg:mt-24">
            <div className="relative aspect-[4/5] overflow-hidden bg-muted">
              <Image
                src="/luxury-home-decor.jpg"
                alt="Product"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">New Arrivals</p>
                <h3 className="text-2xl font-serif">Stellar Products</h3>
              </div>
              <Button variant="outline" size="icon" className="rounded-full w-12 h-12 bg-transparent">
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Newsletter */}
      <footer className="border-t border-border mt-24 px-6 py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-serif mb-6">Stay Inspired</h2>
            <p className="text-muted-foreground mb-8 font-light">
              Join our inner circle for exclusive access to new collections and interior design insights.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="flex-1 bg-transparent border-b border-border py-2 text-xs uppercase tracking-widest outline-none focus:border-primary transition-colors"
              />
              <Button variant="link" className="uppercase tracking-widest text-xs h-auto p-0 underline-offset-8">
                Submit
              </Button>
            </form>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4 text-[11px] uppercase tracking-widest">
              <span className="text-muted-foreground">Explore</span>
              <Link href="#" className="hover:underline underline-offset-4">
                Collections
              </Link>
              <Link href="#" className="hover:underline underline-offset-4">
                Artisans
              </Link>
              <Link href="#" className="hover:underline underline-offset-4">
                Sustainability
              </Link>
            </div>
            <div className="flex flex-col gap-4 text-[11px] uppercase tracking-widest">
              <span className="text-muted-foreground">Support</span>
              <Link href="#" className="hover:underline underline-offset-4">
                Shipping
              </Link>
              <Link href="#" className="hover:underline underline-offset-4">
                Returns
              </Link>
              <Link href="#" className="hover:underline underline-offset-4">
                Contact
              </Link>
            </div>
            <div className="flex flex-col gap-4 text-[11px] uppercase tracking-widest">
              <span className="text-muted-foreground">Legal</span>
              <Link href="#" className="hover:underline underline-offset-4">
                Privacy
              </Link>
              <Link href="#" className="hover:underline underline-offset-4">
                Terms
              </Link>
              <Link href="#" className="hover:underline underline-offset-4">
                Accessibility
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-8xl md:text-[12rem] font-serif leading-none tracking-tighter opacity-10 select-none">
            LUXE
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            &copy; 2025 LUXE CREATIONS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </main>
  )
}
