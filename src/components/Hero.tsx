import heroShoe from "@/assets/hero-shoe.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Orange glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-body text-sm uppercase tracking-[0.3em] animate-fade-up opacity-0">
                New Release 2024
              </p>
              <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-none animate-fade-up opacity-0 delay-100">
                AIR<br />
                <span className="text-gradient">VELOCITY</span><br />
                MAX
              </h1>
              <p className="text-muted-foreground text-lg max-w-md font-body animate-fade-up opacity-0 delay-200">
                Experience unmatched speed and comfort. Engineered for those who refuse to slow down.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-up opacity-0 delay-300">
              <button className="btn-hero">
                Shop Now
              </button>
              <button className="btn-outline-hero">
                Learn More
              </button>
            </div>

            <div className="flex items-center gap-8 pt-4 animate-fade-up opacity-0 delay-400">
              <div>
                <p className="font-display text-4xl text-foreground">$189</p>
                <p className="text-muted-foreground text-sm">Starting Price</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="font-display text-4xl text-foreground">4.9</p>
                <p className="text-muted-foreground text-sm">★★★★★ Rating</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <img
                src={heroShoe}
                alt="Velocity Air Max Sneaker"
                className="w-full max-w-lg drop-shadow-2xl animate-scale-in opacity-0 delay-200"
                style={{ filter: "drop-shadow(0 20px 50px hsl(24 100% 50% / 0.3))" }}
              />
            </div>
            
            {/* Floating badges */}
            <div className="absolute top-10 right-10 bg-card/80 backdrop-blur-sm border border-border px-4 py-2 rounded-sm animate-fade-up opacity-0 delay-400">
              <p className="font-display text-2xl">LIGHTWEIGHT</p>
              <p className="text-muted-foreground text-xs">Only 280g</p>
            </div>
            
            <div className="absolute bottom-20 left-0 bg-primary text-primary-foreground px-4 py-2 rounded-sm animate-fade-up opacity-0 delay-500">
              <p className="font-display text-xl">FREE SHIPPING</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
