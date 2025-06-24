
import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Users, Award, BarChart3, Mic, PlayCircle, Film, Star, Camera, BookOpen, MessageCircle, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMetric, setActiveMetric] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { href: '/services', label: 'Services' },
    { href: '/assessment', label: 'Free Assessment' },
    { href: '/about', label: 'About', isActive: true },
    { href: '/speaking', label: 'Speaking' },
  ];

  const metrics = [
    { icon: <Users className="w-6 h-6" />, number: '1,247+', label: 'Entrepreneurs Coached' },
    { icon: <BarChart3 className="w-6 h-6" />, number: '312%', label: 'Avg. Engagement Increase' },
    { icon: <Mic className="w-6 h-6" />, number: '50+', label: 'Speaking Events' }
  ];

  const entertainmentCredits = [
    { title: 'Losing Isaiah (1995)', description: 'Feature film with Halle Berry', icon: <Film className="w-5 h-5" /> },
    { title: 'Reebok Commercial', description: 'National television campaign', icon: <Camera className="w-5 h-5" /> },
    { title: 'Sprite Commercial with Nas', description: 'Hip-hop culture collaboration', icon: <Star className="w-5 h-5" /> },
    { title: 'Scholastic & Hasbro', description: 'Educational and toy brand campaigns', icon: <BookOpen className="w-5 h-5" /> }
  ];

  const speakingTopics = [
    {
      title: 'Content Chemistry 101',
      description: 'Learn the fundamental formulas behind high-converting content across platforms',
      duration: '45-60 min'
    },
    {
      title: 'AI-Powered Storytelling',
      description: 'Leverage AI tools to amplify your brand narrative without losing authenticity',
      duration: '60-90 min'
    },
    {
      title: 'Scaling Brand Authority Fast',
      description: 'Strategic systems to accelerate personal brand growth and business impact',
      duration: '45 min'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-gray-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-white/70 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-xl sm:text-2xl font-bold text-gray-800 hover:text-orange-600 transition-colors">
                The Content Chemist
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-medium transition-colors relative group ${
                    link.isActive ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-orange-600 transition-all duration-300 ${
                    link.isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-white border-t border-gray-100 px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block py-2 px-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  From Hollywood to{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                    High-Converting Content
                  </span>
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed">
                  I'm Kent, and I've spent 25+ years mastering the art of storytelling—first in entertainment, 
                  and now helping entrepreneurs transform their expertise into content that actually converts.
                </p>
              </div>

              {/* Animated Metrics */}
              <div className="grid grid-cols-3 gap-6">
                {metrics.map((metric, index) => (
                  <div
                    key={index}
                    className={`text-center p-4 rounded-xl transition-all duration-500 ${
                      activeMetric === index 
                        ? 'bg-orange-100 border-2 border-orange-300 transform scale-105' 
                        : 'bg-white border border-gray-200'
                    }`}
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-3 ${
                      activeMetric === index ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {metric.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{metric.number}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-orange-500 rounded-full shadow-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-200">
                  <span>Get Your Content Assessment</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="inline-flex items-center px-8 py-4 text-lg font-semibold text-orange-600 bg-white border-2 border-orange-200 rounded-full hover:bg-orange-50 transition-all duration-200">
                  <PlayCircle className="mr-2 w-5 h-5" />
                  <span>Watch My Story</span>
                </button>
              </div>
            </div>

            {/* Right Content - Placeholder for image */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-orange-200 to-orange-300 rounded-2xl flex items-center justify-center">
                <div className="text-center text-orange-700">
                  <Camera className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Kent's Photo</p>
                  <p className="text-sm">Professional headshot</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Entertainment Background */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Entertainment Industry Background
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Before coaching entrepreneurs, I created content for major brands and Hollywood productions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {entertainmentCredits.map((credit, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-4 text-orange-600">
                  {credit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{credit.title}</h3>
                <p className="text-gray-600">{credit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Speaking & Workshop Topics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm available for conferences, corporate events, and workshops.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {speakingTopics.map((topic, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <Mic className="w-8 h-8 text-orange-600" />
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {topic.duration}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{topic.title}</h3>
                <p className="text-gray-600 mb-6">{topic.description}</p>
                <button className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                  Learn More →
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-orange-500 rounded-full shadow-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-200">
              <MessageCircle className="mr-2 w-5 h-5" />
              <span>Book a Speaking Engagement</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
