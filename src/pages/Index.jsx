import React from "react";

// Componens
import Navbar from "components/Navbar/Navbar";
import LandingSection from "layouts/Landing/Landing";
import TokenFeaturesSection from "layouts/TokenFeatures/TokenFeatures";
import TokenBenefitsSection from "layouts/TokenBenefits/TokenBenefits";

const Index = () => {
  return (
    <div>
      <Navbar />
      <LandingSection />
      <TokenFeaturesSection />
      <TokenBenefitsSection />
    </div>
  );
};

export default Index;
