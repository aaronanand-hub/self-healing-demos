import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Categories from "@/components/Categories";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [variant, setVariant] = useState<1 | 2>(1);
  
  const buttonText = variant === 2 ? "Buy Now" : "Add to Cart";

  return (
    <main className="min-h-screen bg-background">
      <div className="fixed top-20 right-4 z-50 flex items-center gap-2 bg-card border border-border rounded-lg p-2 shadow-lg">
        <span className="text-sm text-muted-foreground px-2">Variant:</span>
        <Button 
          variant={variant === 1 ? "default" : "outline"} 
          size="sm"
          onClick={() => setVariant(1)}
        >
          1
        </Button>
        <Button 
          variant={variant === 2 ? "default" : "outline"} 
          size="sm"
          onClick={() => setVariant(2)}
        >
          2
        </Button>
      </div>
      
      <Navbar />
      <Hero />
      <FeaturedProducts buttonText={buttonText} />
      <Categories />
      <Banner />
      <Footer />
    </main>
  );
};

export default Index;
