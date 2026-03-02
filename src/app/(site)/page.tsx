import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '@/keystatic.config';
import HeroSection from "@/components/hero-section";
import Testimonials from "@/components/testimonials";
import OperationalBlueprint from "@/components/operational-blueprint";
import PortfolioSection from "@/components/portfolio-section";
import AboutSnippet from "@/components/about-snippet";
import CTASection from "@/components/cta-section";
import FeaturesSection from "@/components/features-section";

const reader = createReader(process.cwd(), keystaticConfig);

export default async function Home() {
  const homepageFiles = await reader.singletons.homepage.read();

  // Default values if CMS content is missing
  const hero = homepageFiles?.hero || {
    badge: "🚀 Launching Ideas into Orbit",
    title: "Software Solutions used to build the Future",
    highlightWord: "Future",
    subtitle: "Bug Bits transforms complex problems into elegant software. We build scalable, high-performance applications for the modern web.",
    primaryButtonText: "Get Started",
    secondaryButtonText: "View Services"
  };

  const features = (homepageFiles?.features || { title: "Our Core Expertise", subtitle: "We leverage the latest technologies to build robust, scalable, and high-performance digital solutions.", items: [] }) as any;
  const whyChooseUs = (homepageFiles?.whyChooseUs || { title: "Why Choose Us", description: "We deliver more than just code.", items: [] }) as any;
  const process = (homepageFiles?.process || { title: "Our Process", description: "Methodology for success.", items: [] }) as any;
  const portfolio = (homepageFiles?.portfolio || { title: "Our Work", description: "Impactful solutions.", items: [] }) as any;
  const testimonials = await reader.collections.testimonials.all();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection heroData={hero} />

        {/* Features Preview */}
        <FeaturesSection data={features} />

        {/* Testimonials Section */}
        <Testimonials data={testimonials} sectionData={homepageFiles?.testimonialsSection} />

        {/* Operational Blueprint (Merged Why & How) */}
        <OperationalBlueprint whyData={whyChooseUs} processData={process} />

        <CTASection data={homepageFiles?.ctaSecondary} />
        <PortfolioSection data={portfolio} />
        <AboutSnippet data={homepageFiles?.aboutSection} />
        <CTASection data={homepageFiles?.cta} />
      </main>
    </div>
  );
}
