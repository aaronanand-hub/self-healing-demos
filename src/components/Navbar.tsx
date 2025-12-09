import { useState } from "react";
import { Menu, X, ShoppingBag, Search, User } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "New Releases", href: "#new" },
    { name: "Men", href: "#men" },
    { name: "Women", href: "#women" },
    { name: "Kids", href: "#kids" },
    { name: "Sale", href: "#sale" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="font-display text-3xl tracking-wider text-foreground">
            VELOCITY
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link font-body">
                {link.name}
              </a>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:text-primary transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:text-primary transition-colors" aria-label="Account">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 hover:text-primary transition-colors relative" aria-label="Cart">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 text-lg font-display tracking-wider hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
