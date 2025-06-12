
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Users, BookOpen, ArrowRight } from 'lucide-react';
import { AtomicStructure } from './AtomicElements';

const ResourcesSection = () => {
  const resources = [
    {
      type: "Video",
      title: "Content Chemistry 101: The Foundation Formula",
      description: "Learn the core principles behind content that converts and builds authority.",
      duration: "12 min",
      featured: true
    },
    {
      type: "Guide",
      title: "The Personal Brand Blueprint",
      description: "Step-by-step framework for building authority in your industry.",
      downloads: "2.3K",
      featured: false
    },
    {
      type: "Video",
      title: "AI-Powered Content Creation",
      description: "How to leverage AI tools while maintaining authentic brand voice.",
      duration: "18 min",
      featured: false
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-ash"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 opacity-10">
        <AtomicStructure className="w-32 h-32" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - SOS Club */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-cultivate-gradient rounded-full flex items-center justify-center mr-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-gradient">SOS Club</h2>
                  <p className="text-cultivate font-medium">Scale Or Sink Community</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join our exclusive community of ambitious creators and business owners who are 
                serious about scaling their content and building authority. Get direct access 
                to Kent, weekly live sessions, and a network of high-performers.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="atomic-element mr-3 scale-75"></div>
                  <span>Weekly live Q&A sessions with Kent</span>
                </div>
                <div className="flex items-center">
                  <div className="atomic-element mr-3 scale-75"></div>
                  <span>Exclusive content templates & frameworks</span>
                </div>
                <div className="flex items-center">
                  <div className="atomic-element mr-3 scale-75"></div>
                  <span>Peer collaboration & accountability</span>
                </div>
                <div className="flex items-center">
                  <div className="atomic-element mr-3 scale-75"></div>
                  <span>First access to new programs & events</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-8">
                <Badge variant="secondary" className="bg-cultivate text-white">
                  2,847 Members
                </Badge>
                <Badge variant="outline" className="border-cultivate text-cultivate">
                  $97/month
                </Badge>
              </div>
              
              <Button className="bg-cultivate-gradient hover:opacity-90 text-white font-semibold group mb-4">
                Join SOS Club
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <p className="text-sm text-muted-foreground">
                ⚡ Limited spots available • 30-day money-back guarantee
              </p>
            </div>

            {/* Right Side - Resources */}
            <div>
              <h3 className="text-3xl font-bold mb-2 text-gradient">Latest Resources</h3>
              <p className="text-muted-foreground mb-8">
                Free insights, frameworks, and strategies to accelerate your content growth
              </p>
              
              <div className="space-y-6">
                {resources.map((resource, index) => (
                  <Card key={index} className={`group hover:shadow-lg transition-all duration-300 hover-scale ${resource.featured ? 'ring-2 ring-cultivate' : ''}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        {/* Icon */}
                        <div className="w-12 h-12 bg-gradient-to-r from-cultivate to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          {resource.type === 'Video' ? (
                            <Play className="w-6 h-6 text-white" />
                          ) : (
                            <BookOpen className="w-6 h-6 text-white" />
                          )}
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary" className="text-xs">
                              {resource.type}
                            </Badge>
                            {resource.featured && (
                              <Badge className="bg-cultivate text-white text-xs">
                                Featured
                              </Badge>
                            )}
                          </div>
                          
                          <h4 className="font-semibold text-foreground mb-2 group-hover:text-cultivate transition-colors">
                            {resource.title}
                          </h4>
                          
                          <p className="text-sm text-muted-foreground mb-3">
                            {resource.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-slate">
                              {resource.duration && `${resource.duration} watch`}
                              {resource.downloads && `${resource.downloads} downloads`}
                            </span>
                            <Button variant="ghost" size="sm" className="text-cultivate hover:text-cultivate/80 p-0">
                              Access →
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Button variant="outline" className="border-cultivate text-cultivate hover:bg-cultivate hover:text-white">
                  View All Resources
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
