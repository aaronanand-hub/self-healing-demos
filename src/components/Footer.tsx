import { Instagram, Twitter, Youtube, Facebook } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Shop: ["New Releases", "Men", "Women", "Kids", "Sale", "Gift Cards"],
    Help: ["Order Status", "Shipping", "Returns", "Payment Options", "Contact Us"],
    About: ["Our Story", "Careers", "Sustainability", "News", "Investors"],
    Legal: ["Terms of Use", "Privacy Policy", "Cookie Policy"],
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "Youtube" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="font-display text-4xl tracking-wider text-foreground">
              VELOCITY
            </a>
            <p className="text-muted-foreground text-sm mt-4 font-body">
              Push beyond limits. Embrace velocity.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors rounded-sm"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display text-xl mb-4">{title.toUpperCase()}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm font-body"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm font-body">
            © 2024 Velocity. All rights reserved. This is a fictional brand.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-muted-foreground text-sm font-body">
              🇺🇸 United States
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
