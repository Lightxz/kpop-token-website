import React from "react";
import "./BannerLinks.css";

// Component
import Container from "components/Container/Container";

// Bootstrap
import { Row, Col } from "react-bootstrap";

// LogoText
import BscScan from "images/bsc-scan.svg";
import DexTools from "images/dextools-logoText.png";
import CoinGecko from "images/coingecko-logo.png";
import CoinMarket from "images/coinmarketcap-logo.png";
import PancakeSwap from "images/pancakeswap-logo.jpeg";
import Coinbase from "images/coinbase-logo.png";

const BannerLinks = () => {
  return (
    <div className="banner-links-container">
      <Container>
        <Row className="banner-links-title-row">
          <Col sm={12} lg={7}>
            <h1 className="banner-links-title">Check Us Out</h1>
          </Col>
        </Row>

        <div className="banner-links">
          <a
            href="https://bscscan.com/address/0x3ba2b1c2c46200e826c56550ff7a2b29bad10f3d"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={BscScan}
              alt="bscan"
              className="banner-link-image image-contain"
            />
          </a>
          <a
            href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x3Ba2b1C2c46200e826C56550ff7a2b29bad10F3d"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={PancakeSwap}
              alt="pancakeswap"
              className="banner-link-image pancake-bg"
            />
          </a>
          <a
            href="https://www.dextools.io/app/pancakeswap/pair-explorer/0x83ca76bdc2e454e362826c25b8f4abd0791bb594"
            rel="noreferrer"
            target="_blank"
          >
            <img src={DexTools} alt="dextool" className="banner-link-image" />
          </a>
          <a
            href="https://coinmarketcap.com/currencies/kpop-fan-token/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={CoinMarket}
              alt="coinMarket"
              className="banner-link-image"
            />
          </a>
          <a
            href="https://www.coingecko.com/en/coins/kpop-fan-token"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={CoinGecko}
              alt="coin gecko"
              className="banner-link-image"
            />
          </a>

          <a
            href="https://www.coinbase.com/price/kpop-fan-token"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={Coinbase}
              alt="coinbase"
              className="banner-link-image object-contain"
            />
          </a>
        </div>
      </Container>
    </div>
  );
};

export default BannerLinks;
