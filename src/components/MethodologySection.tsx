
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Beaker, Target, Rocket, BarChart } from 'lucide-react';
import { AtomicStructure, MolecularBond } from './AtomicElements';

const MethodologySection = () => {
  const steps = [
    {
      icon: Beaker,
      title: "Analyze",
      subtitle: "Content Audit",
      description: "We break down your current content performance and identify molecular-level opportunities for optimization.",
      gradient: "from-cultivate to-orange-600"
    },
    {
      icon: Target,
      title: "Formulate",
      subtitle: "Strategy Design",
      description: "Using proven content chemistry, we create a customized formula that aligns with your unique brand DNA.",
      gradient: "from-orange-600 to-red-500"
    },
    {
      icon: Rocket,
      title: "Activate",
      subtitle: "Implementation",
      description: "We catalyze your content transformation with systematic execution and continuous refinement.",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: BarChart,
      title: "Accelerate",
      subtitle: "Scale & Optimize",
      description: "Through data-driven analysis, we amplify what works and compound your content's exponential growth.",
      gradient: "from-pink-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-mist to-background"></div>
      
      {/* Large Decorative Elements */}
      <div className="absolute top-20 left-1/4 opacity-5">
        <AtomicStructure className="w-96 h-96" />
      </div>
      <div className="absolute bottom-20 right-1/4 opacity-5">
        <AtomicStructure className="w-80 h-80" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-cultivate text-white px-4 py-2">
            The Content Chemistry Method™
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Our Proven Formula</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Just like chemistry, great content follows precise formulas. Our 4-step methodology 
            transforms your content into a powerful catalyst for growth.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="group h-full bg-white hover:shadow-xl transition-all duration-500 hover-scale relative overflow-hidden">
                  <CardContent className="p-8 text-center">
                    {/* Step Number */}
                    <div className="absolute top-4 right-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-ash to-slate text-white text-sm font-bold flex items-center justify-center">
                        {index + 1}
                      </div>
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-2 text-gradient">{step.title}</h3>
                    <p className="text-cultivate font-medium mb-4">{step.subtitle}</p>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    
                    {/* Decorative Atoms */}
                    <div className="absolute bottom-4 left-4 opacity-20">
                      <div className="atomic-element scale-50"></div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Connecting Lines */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <MolecularBond className="w-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <Card className="max-w-3xl mx-auto bg-gradient-to-r from-cultivate to-orange-600 text-white">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Content?</h3>
              <p className="text-xl mb-8 opacity-90">
                Join hundreds of creators and businesses who've accelerated their growth 
                using our proven Content Chemistry Method™.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cultivate font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors">
                  Start Your Transformation
                </button>
                <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-cultivate transition-colors">
                  See Case Studies
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
