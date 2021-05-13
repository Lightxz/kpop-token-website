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
          />
          <img
            src={TokenTable}
            alt="Token distribution Table"
            className="token-table"
          />
          <div className="token-chart-legends-container">
            <div className="token-chart-legend">
              <div
                className="token-chart-legend-color"
                style={{ backgroundColor: "blue" }}
              />
              <div className="token-chart-legend-text">Treasury fund</div>
            </div>
            <div className="token-chart-legend">
              <div
                className="token-chart-legend-color"
                style={{ backgroundColor: "red" }}
              />
              <div className="token-chart-legend-text">Tokens</div>
            </div>
            <div className="token-chart-legend">
              <div
                className="token-chart-legend-color"
                style={{ backgroundColor: "yellow" }}
              />
              <div className="token-chart-legend-text">
                Pancakeswap Liquidity
              </div>
            </div>
            <div className="token-chart-legend">
              <div
                className="token-chart-legend-color"
                style={{ backgroundColor: "pink" }}
              />
              <div className="token-chart-legend-text">Reservers</div>
            </div>
            <div className="token-chart-legend">
              <div
                className="token-chart-legend-color"
                style={{ backgroundColor: "orange" }}
              />
              <div className="token-chart-legend-text">Miners Incentives</div>
            </div>
            <div className="token-chart-legend">
              <div
                className="token-chart-legend-color"
                style={{ backgroundColor: "green" }}
              />
              <div className="token-chart-legend-text">Yield Farming</div>
            </div>
            <div className="token-chart-legend">
              <div
                className="token-chart-legend-color"
                style={{ backgroundColor: "violet" }}
              />
              <div className="token-chart-legend-text">Team</div>
            </div>
            <div className="token-chart-legend">
              <div
                className="token-chart-legend-color"
                style={{ backgroundColor: "teal" }}
              />
              <div className="token-chart-legend-text">Grants and Rewards</div>
            </div>
            <div className="token-chart-legend">
              <div
                className="token-chart-legend-color"
                style={{ backgroundColor: "#B337F3" }}
              />
              <div className="token-chart-legend-text">Private Sale</div>
            </div>
            <div className="token-chart-legend">
              <div
                className="token-chart-legend-color"
                style={{ backgroundColor: "#7614AF" }}
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
