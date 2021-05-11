import React from "react";

// Componens
import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";

// Layouts
import LandingSection from "layouts/Landing/Landing";
import TokenFeaturesSection from "layouts/TokenFeatures/TokenFeatures";
import TokenBenefitsSection from "layouts/TokenBenefits/TokenBenefits";
import FanTokensSection from "layouts/FanTokens/FanTokens";
import TokenDistributionSection from "layouts/TokenDistribution/TokenDistribution";
import RoadMapSection from "layouts/RoadMap/RoadMap";
import "./index.css";

const Index = () => {
  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <LandingSection />

      <div id="about">
        <TokenFeaturesSection />
        <TokenBenefitsSection />
        <TokenDistributionSection />
      </div>

      <FanTokensSection />
      <RoadMapSection />
      <Footer />
    </div>
  );
};

export default Index;
