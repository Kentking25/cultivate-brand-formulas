
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="atomic-element"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="atomic-element scale-50 animate-orbit"></div>
              </div>
            </div>
            <span className="text-xl font-bold text-gradient">Kent Cultivate</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-vibrant transition-colors">Home</a>
            <a href="#about" className="text-foreground hover:text-vibrant transition-colors">About</a>
            <a href="#services" className="text-foreground hover:text-vibrant transition-colors">Services</a>
            <Button className="bg-cultivate-gradient hover:opacity-90 text-white font-medium">
              Let's Work
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#home" className="text-foreground hover:text-vibrant transition-colors">Home</a>
              <a href="#about" className="text-foreground hover:text-vibrant transition-colors">About</a>
              <a href="#services" className="text-foreground hover:text-vibrant transition-colors">Services</a>
              <Button className="bg-cultivate-gradient hover:opacity-90 text-white font-medium w-full">
                Let's Work
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
