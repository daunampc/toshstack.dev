import { BannerSection, HeroSection, HowItWorksSection, ReadersChoiceSection, StatsSection } from "@/widgets/home/ui"
import FeatureSection from "@/widgets/home/ui/feature-section"
import SubscribeSection from "@/widgets/home/ui/subscribe-section"

export const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <HeroSection />
      <div className="max-w-screen-2xl mx-auto">
        <FeatureSection />
      </div>
      <HowItWorksSection />
      <StatsSection />
      <ReadersChoiceSection />
      <BannerSection />
      <SubscribeSection />
    </div>
  )
}
