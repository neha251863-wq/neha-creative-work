import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2, Home, User, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/', icon: Home, enhanced: true },
    { name: 'About', path: '/about', icon: User, enhanced: true },
    { name: 'Contact', path: '/contact', icon: Mail, enhanced: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-card border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
            <div className="p-2 rounded-xl gradient-primary">
              <Code2 className="h-5 w-5 text-white" />
            </div>
            Neha
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-foreground/70'
                } ${item.enhanced ? 'font-semibold' : ''}`}
              >
                {item.enhanced && item.icon && (
                  <item.icon className="h-4 w-4" />
                )}
                {item.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button variant="default" size="sm" className="gradient-primary text-white border-0 hover:opacity-90">
                Get In Touch
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-in">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-accent ${
                  location.pathname === item.path
                    ? 'text-primary bg-accent'
                    : 'text-foreground/70'
                } ${item.enhanced ? 'font-semibold' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {item.enhanced && item.icon && (
                  <item.icon className="h-4 w-4" />
                )}
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button variant="default" size="sm" className="w-full gradient-primary text-white border-0">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;