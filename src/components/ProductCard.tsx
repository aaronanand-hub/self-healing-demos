import { ShoppingBag, Heart } from "lucide-react";

interface ProductCardProps {
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  isNew?: boolean;
  buttonText?: string;
}

const ProductCard = ({
  name,
  category,
  price,
  originalPrice,
  image,
  isNew,
  buttonText = "Quick Add",
}: ProductCardProps) => {
  return (
    <div className="card-product group">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Badges */}
        {isNew && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 text-xs font-body uppercase tracking-wider">
            New
          </span>
        )}
        {originalPrice && (
          <span className="absolute top-3 right-3 bg-destructive text-destructive-foreground px-3 py-1 text-xs font-body uppercase tracking-wider">
            Sale
          </span>
        )}

        {/* Quick Actions */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex gap-2">
            <button className="flex-1 bg-foreground text-background py-3 font-body text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              {buttonText}
            </button>
            <button className="p-3 bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-colors">
              <Heart className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 space-y-2">
        <p className="text-muted-foreground text-xs uppercase tracking-wider font-body">
          {category}
        </p>
        <h3 className="font-display text-xl group-hover:text-primary transition-colors">
          {name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="font-display text-2xl">${price}</span>
          {originalPrice && (
            <span className="text-muted-foreground line-through text-sm">
              ${originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
