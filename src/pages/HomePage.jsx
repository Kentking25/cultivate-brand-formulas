import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, CheckCircle, Menu, X, Star, Check, TrendingUp, Users, Award, BarChart3, Mic, ChevronDown, ChevronUp, PlayCircle, FileText, Youtube, Instagram, Twitter, Linkedin, Mail, Target, Users2, Zap, DollarSign, Megaphone, Lock } from 'lucide-react';
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

// Updated Hero Section to match reference image
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-60 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-40 right-20 w-60 h-60 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Main Value Proposition */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Column - Main Content */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-gray-900">Turn Your Expertise Into </span>
                <span className="text-blue-600">Income-Replacing Content</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Get the exact step-by-step system that helped entrepreneurs grow to 90K followers and hit #1 on Amazon. Finally know exactly what to post with a proven game plan.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-xl shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200">
                  <span>Get Your Content Game Plan</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="inline-flex items-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-xl hover:border-gray-400 transition-all duration-200">
                  Book Free Assessment
                </button>
              </div>

              {/* Results Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">90K+</div>
                  <div className="text-sm text-gray-600">Followers Gained</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">#1</div>
                  <div className="text-sm text-gray-600">Amazon Bestseller</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">10x</div>
                  <div className="text-sm text-gray-600">Engagement Boost</div>
                </div>
              </div>
            </div>

            {/* Right Column - Method Box */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6">The Content Chemistry Method</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-200" />
                  <span className="text-lg">Industry-specific formulas</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-200" />
                  <span className="text-lg">Personal story integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-200" />
                  <span className="text-lg">Step-by-step game plan</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-200" />
                  <span className="text-lg">Proven results system</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Problem Identification Section with exact copy from reference
const ProblemsSection = () => {
  const problems = [
    {
      icon: <div className="text-4xl">😤</div>,
      title: "Posting Without Strategy",
      description: "You're creating content but have no idea if it will actually work or connect with your audience."
    },
    {
      icon: <div className="text-4xl">📢</div>,
      title: "Shouting Into the Void",
      description: "Your posts get minimal engagement while you watch others in your industry succeed."
    },
    {
      icon: <div className="text-4xl">💸</div>,
      title: "No Clear ROI",
      description: "You're spending time on content but can't see how it translates to actual income."
    },
    {
      icon: <div className="text-4xl">🔒</div>,
      title: "Trapped in Your Current Income",
      description: "You want the freedom that comes with content-driven income but don't know how to get there."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            You Know You Have Valuable Expertise, But...
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{problem.title}</h3>
                <p className="text-gray-600 leading-relaxed">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Method Explanation Section with updated design matching reference
const ContentChemistryMethodSection = () => {
  const methods = [
    {
      icon: <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
        <Target className="w-8 h-8 text-blue-600" />
      </div>,
      title: "Industry-Specific Formulas",
      description: "We don't use one-size-fits-all templates. Every formula is customized to your specific industry and audience while following universal principles that work."
    },
    {
      icon: <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
        <Users2 className="w-8 h-8 text-purple-600" />
      </div>,
      title: "Personal Story Integration",
      description: "We help you discover and contextualize your unique story to your desired results. Your experiences become your competitive advantage."
    },
    {
      icon: <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
        <Zap className="w-8 h-8 text-green-600" />
      </div>,
      title: "Step-by-Step Execution",
      description: "No more guessing. You'll know exactly what to post, when to post it, and how to measure success. It's like having a GPS for your content strategy."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The Content Chemistry Method
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Unlike generic content advice, our system is built around your specific industry and personal story. Here's how we transform your expertise into income-replacing content.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {methods.map((method, index) => (
            <div key={index} className="group relative">
              <div className="bg-gray-50 rounded-2xl p-8 h-full border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:transform hover:-translate-y-1">
                {/* Icon */}
                <div className="mb-6">
                  {method.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{method.title}</h3>
                <p className="text-gray-600 leading-relaxed">{method.description}</p>
              </div>
            </div>
          ))}
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
          ✅ Integration test successful!
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
      <ProblemsSection />
      <ContentChemistryMethodSection />
      <BrandLogosSection />
      <ProgramsSection />
      <TestMessage />
    </div>
  );
};

export default HomePage;
