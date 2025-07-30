import { Button } from "@/components/ui/button";
import { Twitter, MessageCircle, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      href: "#",
      hoverColor: "hover:text-blue-400"
    },
    {
      name: "Discord",
      icon: <MessageCircle className="w-5 h-5" />,
      href: "#",
      hoverColor: "hover:text-indigo-400"
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      href: "#",
      hoverColor: "hover:text-pink-400"
    }
  ];

  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Dubai Hosting", href: "#" },
        { name: "India Hosting", href: "#" },
        { name: "Custom Solutions", href: "#" },
        { name: "Enterprise", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Documentation", href: "#" },
        { name: "Help Center", href: "#" },
        { name: "Server Status", href: "#" },
        { name: "Contact Support", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Press Kit", href: "#" }
      ]
    }
  ];

  return (
    <footer id="contact" className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                RoyalNode
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                Empowering your hosting dreams with high-performance infrastructure and exceptional support across the globe.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>support@royalnode.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="icon"
                  className={`rounded-full border-2 border-border hover:border-primary transition-all duration-300 ${social.hoverColor} hover:scale-110 hover:shadow-lg`}
                  asChild
                >
                  <a href={social.href} aria-label={social.name}>
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-secondary/50 to-muted/50 rounded-xl p-8 mb-12 border border-border">
          <div className="text-center">
            <h4 className="text-2xl font-bold text-foreground mb-2">
              Stay Updated
            </h4>
            <p className="text-muted-foreground mb-6">
              Get the latest news, updates, and exclusive offers delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors duration-300"
              />
              <Button 
                className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground px-6 transition-all duration-300 hover:scale-105"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © {currentYear} RoyalNode. All rights reserved.
            </div>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;