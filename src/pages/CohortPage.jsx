import React from 'react';
import { ArrowRight, Users, CheckCircle, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const CohortPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
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
          <div className="inline-flex items-center gap-2 text-sm text-orange-600 mb-6 px-4 py-2 bg-orange-100 rounded-full">
            <Users className="w-4 h-4" />
            <span>Content Chemistry Cohort</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Your 90-Day{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              Content Clarity Blueprint
            </span>
          </h1>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Join a small group of entrepreneurs (max 10 people) to discover your unique content formula 
            and build a sustainable content strategy that actually converts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-orange-500 rounded-full shadow-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-200">
              <span>Apply for Next Cohort</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-sm text-gray-600">
              Next cohort starts February 3rd • <span className="font-semibold text-orange-600">4 spots left</span>
            </p>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What You'll Get</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Your Personal Content Formula</h3>
                  <p className="text-gray-600">Discover the unique storytelling approach that works for your personality and business.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Weekly Group Coaching</h3>
                  <p className="text-gray-600">7 weeks of intensive group sessions with personalized feedback and support.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">90-Day Implementation Plan</h3>
                  <p className="text-gray-600">Step-by-step roadmap to implement your content strategy consistently.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Content Psychology Mastery</h3>
                  <p className="text-gray-600">Learn what makes content convert browsers into buyers.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Small Group Community</h3>
                  <p className="text-gray-600">Connect with like-minded entrepreneurs in an intimate setting.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Lifetime Access</h3>
                  <p className="text-gray-600">Keep all materials and recordings for future reference.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Program Details */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Program Details</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Calendar className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Duration</h4>
                <p className="text-gray-600">7 weeks intensive program</p>
              </div>
              <div>
                <Users className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Group Size</h4>
                <p className="text-gray-600">Maximum 10 participants</p>
              </div>
              <div>
                <Clock className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Time Commitment</h4>
                <p className="text-gray-600">2 hours per week + homework</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-orange-500 rounded-full shadow-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-200">
              <span>Apply Now - Limited Spots</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-sm text-gray-600 mt-4">
              Application required - pricing discussed during consultation
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CohortPage;

