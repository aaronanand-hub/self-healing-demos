import ProductCard from "./ProductCard";
import product1 from "@/assets/product-1.png";
import product2 from "@/assets/product-2.png";
import product3 from "@/assets/product-3.png";
import product4 from "@/assets/product-4.png";

const products = [
  {
    id: 1,
    name: "Velocity Runner Pro",
    category: "Running",
    price: 159,
    originalPrice: 189,
    image: product1,
    isNew: true,
  },
  {
    id: 2,
    name: "Street Force One",
    category: "Lifestyle",
    price: 129,
    image: product2,
    isNew: false,
  },
  {
    id: 3,
    name: "Court Master Elite",
    category: "Basketball",
    price: 179,
    image: product3,
    isNew: true,
  },
  {
    id: 4,
    name: "Trail Blazer X",
    category: "Trail Running",
    price: 199,
    originalPrice: 249,
    image: product4,
    isNew: false,
  },
];

interface FeaturedProductsProps {
  buttonText?: string;
}

const FeaturedProducts = ({ buttonText }: FeaturedProductsProps) => {
  return (
    <section id="new" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-2">
              Trending Now
            </p>
            <h2 className="font-display text-5xl md:text-6xl">
              FEATURED KICKS
            </h2>
          </div>
          <a
            href="#all"
            className="nav-link text-foreground font-body inline-flex items-center gap-2"
          >
            View All Products
            <span className="text-primary">→</span>
          </a>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <ProductCard {...product} buttonText={buttonText} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
