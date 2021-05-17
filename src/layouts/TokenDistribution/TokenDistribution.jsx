import React from "react";
import "./TokenDistribution.css";
// Component
import Container from "components/Container/Container";

// Images
import TokenChart from "images/token-distribution-chart.svg";
import TokenTable from "images/token-distribution-table.svg";

const TokenDistribution = () => {
  return (
    <div className="token-distribution-container">
      <Container>
        <h1 className="token-distribution-title">Token Distribution</h1>
        <div className="token-distribution-body">
          <img
            src={TokenChart}
            alt="Token distribution Chart"
            className="token-chart"
            placeholder="KPOP Fan token chart"
          />
          <img
            src={TokenTable}
            alt="Token distribution Table"
            className="token-table"
            placeholder="KPOP Fan token table"
          />
          <div className="token-chart-legends-container">
            <div className="token-chart-legend">
              <div
                className="token-chart-legend-color"
                style={{ backgroundColor: "#235FC9" }}
              />
              <div className="token-chart-legend-text">Treasury fund</div>
            </div>
            <div className="token-chart-legend">
              <div
                className="token-chart-legend-color"
                style={{ backgroundColor: "#ED7D31" }}
              />
              <div className="token-chart-legend-text">Scheduled Burn</div>
            </div>
            <div className="token-chart-legend">
              <div
                className="token-chart-legend-color"
                style={{ backgroundColor: "#70AD47" }}
              />
              <div className="token-chart-legend-text">
                Pancakeswap Liquidity
              </div>
            </div>
            <div className="token-chart-legend">
              <div
                className="token-chart-legend-color"
                style={{ backgroundColor: "#3BE0ED" }}
              />
              <div className="token-chart-legend-text">Reserve</div>
            </div>
            <div className="token-chart-legend">
              <div
                className="token-chart-legend-color"
                style={{ backgroundColor: "#FFC000" }}
              />
              <div className="token-chart-legend-text">Miners Incentives</div>
            </div>
            <div className="token-chart-legend">
              <div
                className="token-chart-legend-color"
                style={{ backgroundColor: "#EE32BC" }}
              />
              <div className="token-chart-legend-text">Yield Farming</div>
            </div>
            <div className="token-chart-legend">
              <div
                className="token-chart-legend-color"
                style={{ backgroundColor: "#B337F3" }}
              />
              <div className="token-chart-legend-text">Team</div>
            </div>
            <div className="token-chart-legend">
              <div
                className="token-chart-legend-color"
                style={{ backgroundColor: "#7614AF" }}
              />
              <div className="token-chart-legend-text">Grants and Rewards</div>
            </div>
            <div className="token-chart-legend">
              <div
                className="token-chart-legend-color"
                style={{ backgroundColor: "#CE7BFF" }}
              />
              <div className="token-chart-legend-text">Private Sale</div>
            </div>
            <div className="token-chart-legend">
              <div
                className="token-chart-legend-color"
                style={{ backgroundColor: "#0045A8" }}
              />
              <div className="token-chart-legend-text">Public Sale</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TokenDistribution;
