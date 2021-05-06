import React from "react";
import "./TokenBenefits.css";

// Component
import TokenBenefit from "components/TokenBenefit/TokenBenefit";

const TokenBenefits = () => {
  return (
    <div className="token-benefits-container">
      <h1>Hurry up! Become a token holder and enjoy these amazing benefits!</h1>

      <div className="token-benefits">
        <TokenBenefit
          title="Passive Income"
          message={`There are two ways to maximize your earning opportunities 
 \n\n 1. Grow your $KPOP tokens by just holding them in your wallet. The more you hold, the more you earn! 
 \n\n 2. Stake your $KPOP tokens in our platform and earn additional rewards of (insert percentage) that you can claim on a weekly basis.`}
        />
        <TokenBenefit title="Passive Income" message="" />
        <TokenBenefit
          title="Value Appreciation"
          message="Our vision is to not just enable the fans to purchase products seamlessly. We also aim to add value by allocating a portion of every transaction fee to the liquidity and to the token holders. This feature boosts the token’s economy creating upward price movement."
        />
        <TokenBenefit
          title="Governance"
          message="Are you an ARMY? A BLINK? An iGOT7? We hear you and we will to give you what you want! By owning $KPOP tokens, you will have the rights to vote and the influence on which products you want to be released first. "
        />
        <TokenBenefit
          title="Exclusive Benefits "
          message="As a $KPOP token holder, you will be able to participate in various activities such as giveaways (hottest merchandise, free tokens, concert tickets, trip to Korea), live interaction with your favorite KPOP idol and many more!"
        />
        <TokenBenefit
          title="Global Fandom"
          message="Break the barriers and keep the KPOP fandom alive and strong! Join us and interact with a global community of KPOP stans!"
        />
      </div>
    </div>
  );
};

export default TokenBenefits;
