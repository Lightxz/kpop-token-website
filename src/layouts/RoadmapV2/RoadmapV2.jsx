import React from "react";
import "./RoadmapV2.css";
import { MegaphoneFill } from "react-bootstrap-icons";

const RoadMapV2 = () => {
  return (
    <div id="roadmap" className="roadmap-container">
      <h1 className="roadmap-title">2021 Roadmap</h1>

      <div className="timelineContainer desktopView">
        <div className="quarterContainer">
          <span className="dottedLineUp"></span>
          <span className="lineEdgeUp" />

          <div className="quarterEvents">
            <p>EXCLUSIVE PROMOTIONS</p>
            <p>LOCKED STAKING</p>
            <p>KPOP TOKEN INCUBATOR</p>
          </div>
          <div className="boxContainer" />
          <div className="quarterTitle boxContainer">Q2</div>
          <div className="boxContainer" />
          <div className="announcementWrapper">
            <div className="announcementContainer">
              <MegaphoneFill className="announcementIcon" />
            </div>
          </div>
        </div>
        <div className="quarterContainer">
          <span className="dottedLineDown"></span>
          <span className="lineEdgeDown" />
          <div className="announcementWrapper">
            <div className="announcementContainer">
              <MegaphoneFill className="announcementIcon" />
            </div>
          </div>
          <div className="quarterTitle boxContainer">Q3</div>
          <div className="boxContainer" />
          <div className="boxContainer" />
          <div className="quarterEvents">
            <p>LIQUIDITY MINING</p>
            <p>STRATEGIC PARTNERSHIP</p>
            <p>EXCHANGE LISTINGS</p>
            <p>NFTS/DIGITAL PRODUCTS</p>
            <p>NFT MARKETPLACE</p>
          </div>
        </div>
        <div className="quarterContainer">
          <span className="dottedLineUp"></span>
          <span className="lineEdgeUp" />
          <div className="quarterEvents">
            <p>KPOP MOBILE APP</p>
            <p>KPOP WEB GAME</p>
            <p>AGENCY LICENSES</p>
            <p>EXCHANGE LISTINGS</p>
            <p>WHITEPAPER V2</p>
            <p>AMAS</p>
            <p>BIG SURPRISE</p>
          </div>
          <div className="boxContainer" />
          <div className="quarterTitle boxContainer">Q4</div>
          <div className="boxContainer" />
          <div className="announcementWrapper">
            <div className="announcementContainer">
              <MegaphoneFill className="announcementIcon" />
            </div>
          </div>
        </div>
      </div>

      <div className="timelineContainer mobileView">
        <div className="quarterContainer">
          <span className="lineEdgeUp" />

          <div className="boxContainer" />
          <div className="quarterTitle boxContainer">Q2</div>
          <div className="boxContainer" />
          <div className="quarterEvents">
            <p>EXCLUSIVE PROMOTIONS</p>
            <p>LOCKED STAKING</p>
            <p>KPOP TOKEN INCUBATOR</p>
          </div>
        </div>
        <div className="quarterContainer">
          <span className="lineEdgeDown" />

          <div className="boxContainer" />
          <div className="quarterTitle boxContainer">Q3</div>
          <div className="boxContainer" />
          <div className="quarterEvents">
            <p>LIQUIDITY MINING</p>
            <p>STRATEGIC PARTNERSHIP</p>
            <p>EXCHANGE LISTINGS</p>
            <p>NFTS/DIGITAL PRODUCTS</p>
            <p>NFT MARKETPLACE</p>
          </div>
        </div>
        <div className="quarterContainer">
          <span className="lineEdgeUp" />
          <div className="boxContainer" />
          <div className="quarterTitle boxContainer">Q4</div>
          <div className="boxContainer" />
          <div className="quarterEvents">
            <p>KPOP MOBILE APP</p>
            <p>KPOP WEB GAME</p>
            <p>AGENCY LICENSES</p>
            <p>EXCHANGE LISTINGS</p>
            <p>WHITEPAPER V2</p>
            <p>AMAS</p>
            <p>BIG SURPRISE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMapV2;
