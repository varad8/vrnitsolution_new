import ContactCp from "./contactcp";
import FeatureSection from "./featuresection";
import Footer from "./footer";
import FourStepProcess from "./fourstepprocess";
import Hbanner from "./hbanner";
import HeroSection from "./herosection";
import Navbar from "./navbar";
import Partner from "./partner";
import ReviewsSection from "./reviewsection";
import ServicesSection from "./servicessection";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Partner />
      <FeatureSection />
      <Hbanner />
      <ServicesSection />
      <FourStepProcess />
      <ReviewsSection />
      <ContactCp />
      <Footer />
    </div>
  );
}
