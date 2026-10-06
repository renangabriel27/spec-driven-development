import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { SocialProofSection } from '@/components/sections/SocialProofSection'
import { SolutionsSection } from '@/components/sections/SolutionsSection'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { WhyFretadaoSection } from '@/components/sections/WhyFretadaoSection'
import { ManifestoSection } from '@/components/sections/ManifestoSection'
import { CtaSection } from '@/components/sections/CtaSection'

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SocialProofSection />
        <SolutionsSection />
        <HowItWorksSection />
        <WhyFretadaoSection />
        <ManifestoSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}

export default App
