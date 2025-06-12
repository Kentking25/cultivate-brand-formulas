
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { User, Building2, ArrowRight } from 'lucide-react';
import { MolecularBond } from './AtomicElements';

const SegmentationSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-mist"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Choose Your Path</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're building personal authority or scaling business growth, 
            we have the proven formulas to accelerate your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Personal Brand Path */}
          <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-mist border-2 border-transparent hover:border-cultivate transition-all duration-500 hover-scale">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-cultivate-gradient rounded-full flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gradient">Personal Brands</h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Transform from creator to authority. Build your personal brand with proven content strategies 
                that position you as the go-to expert in your field.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="atomic-element mr-3 scale-75"></div>
                  <span>1-on-1 Content Strategy Calls</span>
                </div>
                <div className="flex items-center">
                  <div className="atomic-element mr-3 scale-75"></div>
                  <span>Personal Brand Cohort (Coming Soon)</span>
                </div>
                <div className="flex items-center">
                  <div className="atomic-element mr-3 scale-75"></div>
                  <span>Comprehensive Coaching Program</span>
                </div>
              </div>
              
              <Button className="w-full bg-cultivate-gradient hover:opacity-90 text-white font-semibold group">
                Build Your Authority
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 opacity-20">
                <MolecularBond className="rotate-45" />
              </div>
            </CardContent>
          </Card>

          {/* Business Brand Path */}
          <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-ash border-2 border-transparent hover:border-graphite transition-all duration-500 hover-scale">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-graphite to-obsidian rounded-full flex items-center justify-center mr-4">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-graphite">Business Brands</h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Scale your business with content that converts. From DTC brands to enterprise companies, 
                accelerate growth with data-driven content strategies.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="atomic-element mr-3 scale-75 bg-graphite"></div>
                  <span>Element The Agency Services</span>
                </div>
                <div className="flex items-center">
                  <div className="atomic-element mr-3 scale-75 bg-graphite"></div>
                  <span>Full-Service Content Marketing</span>
                </div>
                <div className="flex items-center">
                  <div className="atomic-element mr-3 scale-75 bg-graphite"></div>
                  <span>Performance Creative & Paid Ads</span>
                </div>
              </div>
              
              <Button variant="outline" className="w-full border-2 border-graphite text-graphite hover:bg-graphite hover:text-white font-semibold group">
                Scale Your Business
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 opacity-20">
                <MolecularBond className="rotate-[-45deg] bg-gradient-to-r from-graphite to-obsidian" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate mb-4">Not sure which path is right for you?</p>
          <Button variant="ghost" className="text-cultivate hover:text-cultivate/80 font-medium">
            Book a Strategy Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SegmentationSection;
