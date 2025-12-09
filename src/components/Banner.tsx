const Banner = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{ background: "var(--gradient-accent)" }}
      />
      
      {/* Pattern overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            hsl(0 0% 0% / 0.1) 10px,
            hsl(0 0% 0% / 0.1) 20px
          )`
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <p className="text-primary-foreground/80 text-sm uppercase tracking-[0.3em]">
            Limited Time Offer
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-primary-foreground leading-tight">
            GET 20% OFF<br />YOUR FIRST ORDER
          </h2>
          <p className="text-primary-foreground/90 text-lg font-body max-w-lg mx-auto">
            Join the Velocity family and unlock exclusive deals, early access to new releases, and member-only content.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 bg-background/10 border border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground font-body w-full sm:w-80"
            />
            <button className="bg-background text-foreground px-8 py-4 font-body uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors">
              Subscribe
            </button>
          </div>
          
          <p className="text-primary-foreground/60 text-sm font-body">
            By subscribing, you agree to our Privacy Policy and Terms of Service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
