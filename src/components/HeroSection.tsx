
import { Button } from '@/components/ui/button';
import { AtomicStructure, FloatingElements } from './AtomicElements';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-mist via-background to-ash"></div>
      
      {/* Floating Elements */}
      <FloatingElements />
      
      {/* Large Atomic Structure - Background */}
      <div className="absolute top-1/4 right-1/4 opacity-10">
        <AtomicStructure className="w-64 h-64" />
      </div>
      
      <div className="absolute bottom-1/4 left-1/4 opacity-10">
        <AtomicStructure className="w-48 h-48" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Content That Converts,</span>
            <br />
            <span className="text-foreground">Brands That Scale</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            Transforming creators into authorities and businesses into industry leaders 
            through proven content formulas
          </p>

          {/* Segmentation Question */}
          <div className="mb-8">
            <p className="text-lg text-slate mb-6">What describes you best?</p>
          </div>

          {/* Dual CTAs */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
            <Button 
              size="lg" 
              className="w-full md:w-auto bg-gradient-to-r from-obsidian to-graphite hover:from-graphite hover:to-obsidian text-white font-semibold px-8 py-4 text-lg hover-scale"
            >
              Build Personal Brand
              <div className="ml-2 atomic-element scale-75"></div>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="w-full md:w-auto border-2 border-graphite text-graphite hover:bg-gradient-to-r hover:from-graphite hover:to-obsidian hover:text-white font-semibold px-8 py-4 text-lg hover-scale"
            >
              Scale Business
              <div className="ml-2 atomic-element scale-75"></div>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16">
            <p className="text-slate text-sm mb-4">Trusted by brands like:</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <span className="text-graphite font-medium">Windows</span>
              <span className="text-graphite font-medium">Printify</span>
              <span className="text-graphite font-medium">Sprite</span>
              <span className="text-graphite font-medium">Reebok</span>
              <span className="text-graphite font-medium">MAGFAST</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-obsidian rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-obsidian to-graphite rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
