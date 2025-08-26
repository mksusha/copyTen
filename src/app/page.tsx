import Image from "next/image";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import HowItWorks from "@/components/HowItWorks";
import WhyItWorks from "@/components/WhyItWorks";
import StatsBlock from "@/components/StatsBlock";
import SecurityBlock from "@/components/SecurityBlock";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import BondsSelection from "@/components/BondsSelection";
import RiskMinimization from "@/components/RiskMinimization";
import PricingResult from "@/components/PricingResult";
import SupportBlock from "@/components/SupportBlock";
import CasesSection from "@/components/CasesSection";
import DisclaimerFooter from "@/components/DisclaimerFooter";

export default function Home() {
  return (
      <main >
          <Header></Header>
        <Hero/>
        <HowItWorks></HowItWorks>
          <WhyItWorks></WhyItWorks>
          <StatsBlock></StatsBlock>
          <SecurityBlock></SecurityBlock>
          <BondsSelection></BondsSelection>
<RiskMinimization></RiskMinimization>
          <PricingResult></PricingResult>
          <SupportBlock></SupportBlock>
          <CasesSection></CasesSection>
          <FAQ></FAQ>
          <FinalCTA></FinalCTA>
<DisclaimerFooter></DisclaimerFooter>
      </main>
  );
}
