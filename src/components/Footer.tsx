
import { AtomicStructure, MolecularBond } from './AtomicElements';

const Footer = () => {
  return (
    <footer className="bg-obsidian text-white py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 opacity-10">
        <AtomicStructure className="w-24 h-24" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10">
        <AtomicStructure className="w-32 h-32" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <div className="atomic-element bg-cultivate"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="atomic-element scale-50 bg-white animate-orbit"></div>
                </div>
              </div>
              <span className="text-2xl font-bold text-gradient">Kent Cultivate</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Transforming creators into authorities and businesses into industry leaders 
              through proven content formulas. Join thousands who've accelerated their growth.
            </p>
            <div className="flex space-x-4">
              <MolecularBond className="bg-cultivate" />
              <MolecularBond className="bg-white" />
              <MolecularBond className="bg-cultivate" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cultivate">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">1-on-1 Coaching</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Personal Brand Cohort</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Business Growth</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Element The Agency</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Speaking</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cultivate">Community</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">SOS Club</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Kent Cultivate. All rights reserved. 
              <span className="ml-2 text-cultivate">The Content Chemist™</span>
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
