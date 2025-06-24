import React from 'react';
import { ArrowRight, TrendingUp, CheckCircle, Calendar, Clock, Phone, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const BrandCatalystPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-xl sm:text-2xl font-bold text-gray-800 hover:text-orange-600 transition-colors">
              The Content Chemist
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/services" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Services</Link>
              <Link to="/about" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">About</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-sm text-gray-600 mb-6 px-4 py-2 bg-gray-100 rounded-full">
            <TrendingUp className="w-4 h-4" />
            <span>The Brand Catalyst</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            1:1 Content Strategy &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900">
              Personal Brand Overhaul
            </span>
          </h1>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Comprehensive one-on-one program for established businesses ready to scale their content strategy 
            and transform their personal brand into a conversion machine.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gray-800 rounded-full shadow-lg hover:bg-gray-900 transform hover:scale-105 transition-all duration-200">
              <span>Apply for Brand Catalyst</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-sm text-gray-600">
              Limited to 3 clients per quarter • <span className="font-semibold text-gray-800">1 spot available</span>
            </p>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Complete Brand Transformation</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Complete Personal Brand Audit</h3>
                  <p className="text-gray-600">Deep dive analysis of your current brand positioning, content performance, and market opportunities.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Content Framework</h3>
                  <p className="text-gray-600">Tailored content strategy designed specifically for your industry, audience, and business goals.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Done-With-You Implementation</h3>
                  <p className="text-gray-600">We create and optimize content together, ensuring you learn the process while getting results.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Direct Access & Support</h3>
                  <p className="text-gray-600">Real-time feedback, adjustments, and strategic guidance throughout the entire program.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-gray-600 mr-3" />
                  <span className="text-gray-700">12 Strategy Sessions (90-min + 30-min check-ins)</span>
                </li>
                <li className="flex items-center">
                  <MessageSquare className="w-5 h-5 text-gray-600 mr-3" />
                  <span className="text-gray-700">Unlimited messaging support</span>
                </li>
                <li className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-gray-600 mr-3" />
                  <span className="text-gray-700">Content performance optimization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-gray-600 mr-3" />
                  <span className="text-gray-700">6-month implementation support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">The Transformation Process</h2>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center font-bold mr-6">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery & Audit (Week 1-2)</h3>
                <p className="text-gray-600">Comprehensive analysis of your current brand, content, and market position. We identify gaps and opportunities.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center font-bold mr-6">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategy Development (Week 3-4)</h3>
                <p className="text-gray-600">Create your custom content framework, messaging strategy, and implementation roadmap.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center font-bold mr-6">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementation & Optimization (Week 5-12)</h3>
                <p className="text-gray-600">Execute the strategy together, create high-converting content, and optimize based on performance data.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center font-bold mr-6">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Scale & Support (Month 4-9)</h3>
                <p className="text-gray-600">Scale successful content, refine strategies, and maintain momentum with ongoing support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment & Application */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Ready to Transform Your Brand?</h2>
          
          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <Calendar className="w-8 h-8 text-gray-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Duration</h4>
                <p className="text-gray-600">90 days intensive + 6 months support</p>
              </div>
              <div>
                <Phone className="w-8 h-8 text-gray-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Format</h4>
                <p className="text-gray-600">1:1 personalized coaching</p>
              </div>
              <div>
                <TrendingUp className="w-8 h-8 text-gray-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Best For</h4>
                <p className="text-gray-600">Established businesses ready to scale</p>
              </div>
            </div>
          </div>

          <button className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gray-800 rounded-full shadow-lg hover:bg-gray-900 transform hover:scale-105 transition-all duration-200 mb-4">
            <span>Apply for Brand Catalyst Program</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <p className="text-sm text-gray-600">
            Application required - investment and timeline discussed during consultation
          </p>
        </div>
      </section>
    </div>
  );
};

export default BrandCatalystPage;

