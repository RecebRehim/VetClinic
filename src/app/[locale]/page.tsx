import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LoadingScreen } from "@/components/shared/loading-screen";
import {
  FloatingActions,
  StickyMobileCTA,
} from "@/components/shared/floating-actions";
import { HeroSection } from "@/components/sections/hero";
import { FeatureBar } from "@/components/sections/feature-bar";
import { AboutSection } from "@/components/sections/about";
import { ServicesSection } from "@/components/sections/services";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { DoctorsSection } from "@/components/sections/doctors";
import { GallerySection } from "@/components/sections/gallery";
import { ProcessSection } from "@/components/sections/process";
import { StatsSection } from "@/components/sections/stats";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { PricingSection } from "@/components/sections/pricing";
import { FaqSection } from "@/components/sections/faq";
import { BookingSection } from "@/components/sections/booking";
import { ContactSection } from "@/components/sections/contact";
import { InstagramFeed } from "@/components/sections/instagram-feed";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <LoadingScreen />
      <Header />
      <main id="main" className="pb-20 md:pb-0">
        <HeroSection />
        <FeatureBar />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUs />
        <DoctorsSection />
        <GallerySection />
        <ProcessSection />
        <StatsSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <BookingSection />
        <ContactSection />
        <InstagramFeed />
      </main>
      <Footer />
      <FloatingActions />
      <StickyMobileCTA />
    </>
  );
}
