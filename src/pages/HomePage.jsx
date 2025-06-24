import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, CheckCircle, Menu, X, Star, Check, TrendingUp, Users, Award, BarChart3, Mic, ChevronDown, ChevronUp, PlayCircle, FileText, Youtube, Instagram, Twitter, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/services', label: 'Services' },
    { href: '#assessment', label: 'Free Assessment' },
    { href: '/about', label: 'About' },
    { href: '/speaking', label: 'Speaking' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-white/70 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-xl sm:text-2xl font-bold text-gray-800 hover:text-orange-600 transition-colors">
              The Content Chemist
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
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
  );
};

// Updated Hero Section with Trust Indicators
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-60 -left-40 w-80 h-80 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-40 right-20 w-60 h-60 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Trust Indicator */}
          <div className="inline-flex items-center gap-2 text-sm text-gray-600 mb-6 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Trusted by 1,247+ coaches and course creators</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Stop Guessing What to Post –{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Get Your Personal Content Formula
              </span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-orange-200 -rotate-1 z-0"></span>
            </span>{' '}
            Instead
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-4">
            The Content Chemistry method reveals your unique storytelling formula that turns your expertise into 
            <span className="font-semibold text-orange-600"> consistent, engaging content</span> (without generic templates or endless content creation)
          </p>

          {/* Supporting Text */}
          <div className="flex items-center justify-center space-x-2 text-orange-600 mb-8">
            <Sparkles className="w-5 h-5" />
            <p className="text-lg font-medium italic">Like a cheat-code for your content</p>
          </div>

          {/* CTA with Urgency */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-orange-500 rounded-full shadow-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-200">
              <span>Get My Content Formula Assessment</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 -z-10 bg-orange-400 rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity"></div>
            </button>
            <p className="text-sm text-gray-600">
              Next cohort starts February 3rd • <span className="font-semibold text-orange-600">4 spots left</span>
            </p>
          </div>

          {/* Mini Social Proof */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span>"90K followers in 6 months" - Sarah M.</span>
            </span>
            <span className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span>"#1 Amazon Bestseller" - Marcus T.</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Brand Logos Section
const BrandLogosSection = () => {
  const brands = ['Nike', 'McDonald\'s', 'Toyota', 'Samsung', 'Disney', 'Apple'];
  
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-gray-600 mb-8">Working with Leading Brands & Delivering Real Results</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {brands.map((brand) => (
            <span key={brand} className="text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors duration-300">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

// Programs Section
const ProgramsSection = () => {
  const [hoveredProgram, setHoveredProgram] = useState(null);

  const programs = [
    {
      id: 'cohort',
      badge: 'Most Popular Choice',
      badgeColor: 'bg-orange-600',
      title: 'Content Chemistry Cohort',
      subtitle: 'Your 90-Day Content Clarity Blueprint',
      benefits: [
        'Discover your unique story angles that connect with your ideal clients',
        'Get your personalized content formula (not generic templates)',
        'Master the psychology behind content that converts browsers into buyers',
        '90-day implementation roadmap with weekly group coaching calls',
        'Small cohort (max 10 people) for individual attention'
      ],
      investment: 'Application required - pricing discussed during consultation',
      ctaText: 'Apply for Cohort →',
      ctaLink: '/cohort',
      icon: <Users className="w-8 h-8 text-orange-600" />,
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      id: 'catalyst',
      badge: 'Comprehensive',
      badgeColor: 'bg-gray-900',
      title: 'The Brand Catalyst',
      subtitle: '1:1 Content Strategy & Personal Brand Overhaul',
      benefits: [
        'Complete personal brand audit and strategy session',
        'Custom content framework designed for your specific industry',
        'Done-with-you content creation and optimization',
        'Direct access for real-time feedback and adjustments',
        '6-month implementation support with unlimited revisions'
      ],
      investment: 'Application required - pricing discussed during consultation',
      ctaText: 'Apply for Brand Catalyst →',
      ctaLink: '/brand-catalyst',
      icon: <TrendingUp className="w-8 h-8 text-gray-300" />,
      gradient: 'from-gray-700 to-gray-900'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Two Ways to Finally Get Clear on What Content Actually Converts
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stop throwing content at the wall. Start with your personal chemistry.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {programs.map((program) => (
            <div
              key={program.id}
              className="relative group"
              onMouseEnter={() => setHoveredProgram(program.id)}
              onMouseLeave={() => setHoveredProgram(null)}
            >
              {/* Card */}
              <div className="relative h-full bg-gray-700/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-600 hover:border-gray-500 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl">
                {/* Badge */}
                <span className={`absolute -top-3 right-6 ${program.badgeColor} text-white px-4 py-1 rounded-full text-sm font-semibold`}>
                  {program.badge}
                </span>

                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-gray-800 rounded-xl">
                  {program.icon}
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                <p className="text-lg text-gray-300 mb-6">{program.subtitle}</p>

                {/* Benefits */}
                <ul className="space-y-4 mb-8">
                  {program.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Investment */}
                <p className="text-sm text-gray-400 mb-6 italic">{program.investment}</p>

                {/* CTA Button */}
                <Link
                  to={program.ctaLink}
                  className={`block w-full text-center py-4 px-6 rounded-xl font-semibold bg-gradient-to-r ${program.gradient} text-white hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200`}
                >
                  {program.ctaText}
                </Link>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${program.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Test Message Component
const TestMessage = () => {
  return (
    <div className="py-8 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-green-600 font-semibold text-lg">
          ✅ Loveable integration working!
        </p>
      </div>
    </div>
  );
};

// Home Page Component
const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <BrandLogosSection />
      <ProgramsSection />
      <TestMessage />
    </div>
  );
};

export default HomePage;
