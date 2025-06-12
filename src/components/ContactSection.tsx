
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, MessageSquare, ArrowRight } from 'lucide-react';
import { AtomicStructure, FloatingElements } from './AtomicElements';

const ContactSection = () => {
  const [selectedPath, setSelectedPath] = useState('');

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-brand-gradient"></div>
      
      {/* Floating Elements */}
      <FloatingElements />
      
      {/* Large Decorative Structure */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
        <AtomicStructure className="w-96 h-96" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to <span className="text-cultivate">Transform</span> Your Content?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Whether you're building personal authority or scaling business growth, 
            let's create a customized strategy that accelerates your success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MessageSquare className="w-6 h-6 mr-2 text-cultivate" />
                Get Started Today
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="First Name" 
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                  />
                  <Input 
                    placeholder="Last Name" 
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                  />
                </div>
                
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                />
                
                <Select onValueChange={setSelectedPath}>
                  <SelectTrigger className="bg-white/10 border-white/30 text-white">
                    <SelectValue placeholder="I'm interested in..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="personal">Personal Brand Coaching</SelectItem>
                    <SelectItem value="business">Business Growth Services</SelectItem>
                    <SelectItem value="speaking">Speaking Engagement</SelectItem>
                    <SelectItem value="sos">SOS Club Membership</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                
                <Textarea 
                  placeholder="Tell us about your goals and current challenges..."
                  rows={4}
                  className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                />
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-cultivate-gradient hover:opacity-90 text-white font-semibold group"
                >
                  Send Message
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover-scale">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-cultivate-gradient rounded-full flex items-center justify-center mr-4">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Book Strategy Call</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Schedule a complimentary 30-minute strategy session to discuss your goals 
                  and see if we're a good fit to work together.
                </p>
                <Button className="bg-white text-cultivate hover:bg-gray-100 font-semibold">
                  Schedule Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover-scale">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Speaking Inquiries</h3>
                <p className="text-gray-300 mb-4">
                  Book Kent for your next event, podcast, or corporate training:
                </p>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>• Content Chemistry 101</li>
                  <li>• AI-Powered Storytelling</li>
                  <li>• Scaling Brand Authority Fast</li>
                </ul>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-cultivate">
                  Speaker Info
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-cultivate-gradient hover-scale">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Join Our Community</h3>
                <p className="text-white/90 mb-6">
                  Get exclusive content, frameworks, and connect with other ambitious creators in the SOS Club.
                </p>
                <Button className="bg-white text-cultivate hover:bg-gray-100 font-semibold">
                  Join SOS Club
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Contact Info */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-4">
            Questions? Email us at <a href="mailto:kent@kentcultivate.com" className="text-cultivate hover:underline">kent@kentcultivate.com</a>
          </p>
          <p className="text-gray-400 text-sm">
            Typical response time: 24 hours or less
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
