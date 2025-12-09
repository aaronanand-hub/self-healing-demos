import categoryRunning from "@/assets/category-running.png";
import categoryLifestyle from "@/assets/category-lifestyle.png";
import categoryBasketball from "@/assets/category-basketball.png";

const categories = [
  {
    name: "Running",
    description: "Built for speed",
    image: categoryRunning,
    count: 48,
  },
  {
    name: "Lifestyle",
    description: "Street ready",
    image: categoryLifestyle,
    count: 72,
  },
  {
    name: "Basketball",
    description: "Court domination",
    image: categoryBasketball,
    count: 36,
  },
];

const Categories = () => {
  return (
    <section id="men" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-2">
            Shop By Sport
          </p>
          <h2 className="font-display text-5xl md:text-6xl">CATEGORIES</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <a
              key={category.name}
              href={`#${category.name.toLowerCase()}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
            >
              {/* Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                <p className="text-muted-foreground text-sm uppercase tracking-wider">
                  {category.count} Products
                </p>
                <h3 className="font-display text-4xl group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-foreground/80">{category.description}</p>

                <div className="pt-4 flex items-center gap-2 text-primary opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span className="font-body text-sm uppercase tracking-wider">
                    Shop Now
                  </span>
                  <span>→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
