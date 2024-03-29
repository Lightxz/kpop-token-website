import React from "react";

// Componens
import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";

// Layouts
import LandingSection from "layouts/Landing/Landing";
import TokenFeaturesSection from "layouts/TokenFeatures/TokenFeatures";
import TokenBenefitsSection from "layouts/TokenBenefits/TokenBenefits";
import FanTokensSection from "layouts/FanTokens/FanTokens";
import TokenDistributionSection from "layouts/TokenDistribution/TokenDistribution";
import RoadMapSection from "layouts/RoadMap/RoadMap";
import BannerLinks from "layouts/BannerLinks/BannerLinks";
import RoadmapV2 from "layouts/RoadmapV2/RoadmapV2";
import BannerCarousel from "layouts/BannerCarousel/BannerCarousel";
import MobileApp from "layouts/MobileApp/MobileApp";
import "./index.css";

const Index = () => {
  return (
    <div>
      <Navbar />

      <BannerCarousel />
      <LandingSection />

      <div id="about">
        <BannerLinks />
        <TokenFeaturesSection />
        {/* <MobileApp /> */}
        {/* <TokenBenefitsSection /> */}
        <TokenDistributionSection />
      </div>

      <FanTokensSection />
      {/* <RoadMapSection /> */}
      <RoadmapV2 />
      <Footer />
    </div>
  );
};

export default Index;
