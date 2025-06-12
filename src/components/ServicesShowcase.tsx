
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Calendar, Rocket, ArrowRight } from 'lucide-react';
import { AtomicStructure, MolecularBond } from './AtomicElements';

const ServicesShowcase = () => {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-ash"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 opacity-10">
        <AtomicStructure className="w-32 h-32" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10">
        <AtomicStructure className="w-40 h-40" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Transform Your Content</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proven formulas and personalized strategies to accelerate your growth, 
            whether you're building personal authority or scaling business results.
          </p>
        </div>

        {/* Personal Brand Services */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-10">
            <MolecularBond className="mr-4" />
            <h3 className="text-3xl font-bold text-gradient">Personal Brand Services</h3>
            <MolecularBond className="ml-4" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* 1-on-1 Coaching */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-mist hover:shadow-xl transition-all duration-500 hover-scale">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-cultivate-gradient rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-2xl font-bold mb-4 text-gradient">1-on-1 Strategy Calls</h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Personalized content strategy sessions to accelerate your personal brand growth 
                  and position you as an authority in your field.
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm">
                    <div className="atomic-element mr-2 scale-50"></div>
                    <span>Content audit & strategy</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="atomic-element mr-2 scale-50"></div>
                    <span>Authority positioning</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="atomic-element mr-2 scale-50"></div>
                    <span>Growth acceleration plan</span>
                  </div>
                </div>
                
                <Button className="w-full bg-cultivate-gradient hover:opacity-90 text-white">
                  Book Call
                </Button>
              </CardContent>
            </Card>

            {/* Cohort Program */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-mist hover:shadow-xl transition-all duration-500 hover-scale">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-cultivate-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <Badge variant="secondary" className="ml-auto bg-cultivate text-white">Coming Soon</Badge>
                </div>
                
                <h4 className="text-2xl font-bold mb-4 text-gradient">Personal Brand Cohort</h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Join a select group of ambitious creators in an intensive program designed 
                  to build authority and scale influence.
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm">
                    <div className="atomic-element mr-2 scale-50"></div>
                    <span>12-week intensive program</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="atomic-element mr-2 scale-50"></div>
                    <span>Peer collaboration & accountability</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="atomic-element mr-2 scale-50"></div>
                    <span>Direct access to Kent</span>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full border-cultivate text-cultivate hover:bg-cultivate hover:text-white">
                  Join Waitlist
                </Button>
              </CardContent>
            </Card>

            {/* Comprehensive Coaching */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-white to-mist hover:shadow-xl transition-all duration-500 hover-scale">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-cultivate-gradient rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-2xl font-bold mb-4 text-gradient">Comprehensive Coaching</h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Complete transformation program for serious creators ready to build 
                  million-dollar personal brands.
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm">
                    <div className="atomic-element mr-2 scale-50"></div>
                    <span>Complete brand transformation</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="atomic-element mr-2 scale-50"></div>
                    <span>Done-with-you implementation</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="atomic-element mr-2 scale-50"></div>
                    <span>Ongoing support & optimization</span>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full border-cultivate text-cultivate hover:bg-cultivate hover:text-white">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Business Services */}
        <div>
          <div className="flex items-center justify-center mb-10">
            <MolecularBond className="mr-4 bg-gradient-to-r from-graphite to-obsidian" />
            <h3 className="text-3xl font-bold text-graphite">Business Growth Services</h3>
            <MolecularBond className="ml-4 bg-gradient-to-r from-graphite to-obsidian" />
          </div>
          
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-graphite to-obsidian text-white hover-scale">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cultivate to-orange-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <AtomicStructure className="w-12 h-12" />
              </div>
              
              <h4 className="text-3xl font-bold mb-6">Element The Agency</h4>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                Full-service content marketing and growth acceleration for ambitious businesses. 
                From strategy to execution, we scale brands through data-driven content and performance creative.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="atomic-element mx-auto mb-2 bg-cultivate"></div>
                  <p className="font-medium">Content Marketing</p>
                </div>
                <div className="text-center">
                  <div className="atomic-element mx-auto mb-2 bg-cultivate"></div>
                  <p className="font-medium">Paid Advertising</p>
                </div>
                <div className="text-center">
                  <div className="atomic-element mx-auto mb-2 bg-cultivate"></div>
                  <p className="font-medium">Creative Strategy</p>
                </div>
              </div>
              
              <Button size="lg" className="bg-cultivate-gradient hover:opacity-90 text-white font-semibold group">
                Explore Agency Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
