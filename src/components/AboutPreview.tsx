
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Mic, BookOpen, Award } from 'lucide-react';
import { AtomicStructure } from './AtomicElements';

const AboutPreview = () => {
  return (
    <section className="py-20 relative">
      {/* Background - Pure white to gray gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side - Content */}
          <div>
            <div className="flex items-center mb-6">
              <AtomicStructure className="w-16 h-16 mr-4" />
              <div>
                <h2 className="text-4xl md:text-5xl font-bold">
                  Meet <span className="text-gradient">Kent King</span>
                </h2>
                <p className="text-xl text-cultivate font-medium">"The Content Chemist"</p>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Personal brand strategist and content acceleration expert who has helped creators 
              build million-dollar authorities and businesses scale through proven content formulas. 
              From working with global brands like Windows and Sprite to coaching individual entrepreneurs, 
              Kent transforms content strategies into conversion machines.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-cultivate-gradient rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-medium">Brand Strategist</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-cultivate-gradient rounded-full flex items-center justify-center mx-auto mb-2">
                  <Mic className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-medium">Speaker</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-cultivate-gradient rounded-full flex items-center justify-center mx-auto mb-2">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-medium">Coach</p>
              </div>
            </div>
            
            <Button className="bg-cultivate-gradient hover:opacity-90 text-white font-semibold group">
              Learn More About Kent
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Side - Featured Content */}
          <div className="space-y-6">
            <Card className="bg-white hover:shadow-lg transition-all duration-300 hover-scale">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gradient">Speaking Topics</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Content Chemistry 101</li>
                  <li>• AI-Powered Storytelling</li>
                  <li>• Scaling Brand Authority Fast</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-lg transition-all duration-300 hover-scale">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gradient">Recent Success</h3>
                <p className="text-muted-foreground">
                  "Helped a solopreneur scale from 0 to 100K followers in 6 months 
                  using strategic content formulas and authority positioning."
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-lg transition-all duration-300 hover-scale">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gradient">SOS Club Community</h3>
                <p className="text-muted-foreground mb-3">
                  Join thousands of creators and entrepreneurs in our exclusive community.
                </p>
                <Button variant="outline" size="sm" className="border-cultivate text-cultivate hover:bg-cultivate hover:text-white">
                  Join Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
