import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Users, TrendingUp, Clock, Calendar, Sparkles, BookOpen, Zap, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
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
    { href: '/services', label: 'Services', isActive: true },
    { href: '/assessment', label: 'Free Assessment' },
    { href: '/about', label: 'About' },
    { href: '/speaking', label: 'Speaking' },
  ];

  const services = [
    {
      id: 'cohort',
      title: 'Content Chemistry Cohort',
      subtitle: 'Your 90-Day Content Clarity Blueprint',
      description: 'Small group coaching program (max 10 people) designed to help you discover your unique content formula.',
      features: [
        'Discover your unique story angles that connect with your ideal clients',
        'Get your personalized content formula (not generic templates)',
        'Master the psychology behind content that converts browsers into buyers',
        '90-day implementation roadmap with weekly group coaching calls',
        'Small cohort for individual attention'
      ],
      duration: '7 weeks intensive',
      investment: 'Application required',
      ctaText: 'Apply for Cohort',
      ctaLink: '/cohort',
      icon: <Users className="w-12 h-12 text-orange-600" />,
      badge: 'Most Popular',
      badgeColor: 'bg-orange-600'
    },
    {
      id: 'catalyst',
      title: 'The Brand Catalyst',
      subtitle: '1:1 Content Strategy & Personal Brand Overhaul',
      description: 'Comprehensive one-on-one program for established businesses ready to scale their content strategy.',
      features: [
        'Complete personal brand audit and strategy session',
        'Custom content framework designed for your specific industry',
        'Done-with-you content creation and optimization',
        'Direct access for real-time feedback and adjustments',
        '6-month implementation support with unlimited revisions'
      ],
      duration: '90 days + 6 months support',
      investment: 'Application required',
      ctaText: 'Apply for Brand Catalyst',
      ctaLink: '/brand-catalyst',
      icon: <TrendingUp className="w-12 h-12 text-gray-600" />,
      badge: 'Comprehensive',
      badgeColor: 'bg-gray-900'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
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
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Two Ways to Finally Get Clear on{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              What Content Actually Converts
            </span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Stop throwing content at the wall. Start with your personal chemistry.
          </p>
          <div className="flex items-center justify-center space-x-2 text-orange-600 mb-8">
            <Sparkles className="w-5 h-5" />
            <p className="text-lg font-medium italic">Choose the path that fits your business stage</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service) => (
              <div key={service.id} className="relative group">
                <div className="relative h-full bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-orange-300 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl">
                  {/* Badge */}
                  <span className={`absolute -top-3 right-6 ${service.badgeColor} text-white px-4 py-1 rounded-full text-sm font-semibold`}>
                    {service.badge}
                  </span>

                  {/* Icon */}
                  <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-gray-50 rounded-xl">
                    {service.icon}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-lg text-orange-600 font-semibold mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Details */}
                  <div className="space-y-2 mb-6 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>Duration: {service.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Investment: {service.investment}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={service.ctaLink}
                    className="block w-full text-center py-4 px-6 rounded-xl font-semibold bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200"
                  >
                    {service.ctaText} →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Section */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Quick Comparison</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <h4 className="font-semibold text-orange-600">Format</h4>
                <div className="space-y-3">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Cohort:</span> Small group (max 10)
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Catalyst:</span> 1:1 personalized
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-orange-600">Duration</h4>
                <div className="space-y-3">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Cohort:</span> 7 weeks intensive
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Catalyst:</span> 90 days + 6 months
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-orange-600">Best For</h4>
                <div className="space-y-3">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Cohort:</span> Starting coaches
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Catalyst:</span> Established businesses
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">Not sure which program is right for you?</p>
              <button className="text-orange-600 hover:text-orange-700 font-semibold underline underline-offset-4 transition-colors">
                Take our 30-second recommendation quiz →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

