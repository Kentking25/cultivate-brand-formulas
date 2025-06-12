
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { AtomicStructure } from './AtomicElements';

const SocialProof = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Personal Brand Strategist",
      content: "Kent's content formulas transformed my LinkedIn presence. From 2K to 50K followers in 8 months!",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "E-commerce Founder",
      content: "The ROI on our content marketing doubled after implementing Kent's strategies. Game-changing results.",
      rating: 5
    },
    {
      name: "Jessica Park",
      role: "Coach & Speaker",
      content: "Kent helped me position myself as a thought leader. My speaking engagements increased 300%.",
      rating: 5
    }
  ];

  const brands = [
    "Windows", "Printify", "CRWN Magazine", "Sprite", "Reebok", 
    "MAGFAST", "Paramount Pictures", "SOS Club"
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-ash to-mist"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 right-20 opacity-10">
        <AtomicStructure className="w-24 h-24" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Brand Logos */}
        <div className="text-center mb-16">
          <p className="text-slate text-lg mb-8">Trusted by industry leaders and growing brands</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {brands.map((brand, index) => (
              <div key={index} className="text-graphite font-semibold text-lg hover:text-cultivate transition-colors">
                {brand}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">What Our Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Real results from real people who transformed their content strategy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group relative overflow-hidden bg-white hover:shadow-xl transition-all duration-500 hover-scale">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <div className="w-12 h-12 bg-cultivate-gradient rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-cultivate text-cultivate" />
                    ))}
                  </div>
                  
                  {/* Content */}
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Author */}
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-cultivate">{testimonial.role}</p>
                  </div>
                  
                  {/* Decorative Element */}
                  <div className="absolute bottom-4 right-4 opacity-10">
                    <div className="atomic-element scale-75"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
          <div className="group">
            <div className="text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">500+</div>
            <p className="text-muted-foreground">Creators Coached</p>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">50M+</div>
            <p className="text-muted-foreground">Content Views Generated</p>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">95%</div>
            <p className="text-muted-foreground">Client Success Rate</p>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">3x</div>
            <p className="text-muted-foreground">Average Growth Increase</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
