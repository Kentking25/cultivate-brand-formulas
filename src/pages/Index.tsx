
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import SegmentationSection from '../components/SegmentationSection';
import AboutPreview from '../components/AboutPreview';
import ServicesShowcase from '../components/ServicesShowcase';
import SocialProof from '../components/SocialProof';
import MethodologySection from '../components/MethodologySection';
import ResourcesSection from '../components/ResourcesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SegmentationSection />
      <AboutPreview />
      <ServicesShowcase />
      <SocialProof />
      <MethodologySection />
      <ResourcesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
