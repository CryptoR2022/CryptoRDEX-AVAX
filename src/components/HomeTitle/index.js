import React from "react";
import { useMoralis } from "react-moralis";
import { Col } from 'antd';

// Images
import Image from "../../img/Wallet-pana.svg";

// CSS
import './HomeTitle.styles.css';

export default function HomeTitle() {
  const { isAuthenticated, authenticate } = useMoralis();

  return (
    <>
      <Col span={24} offset={1} md={{span: 12, offset: 0}} justify={"center"}>
        <img src={Image} alt="" />
      </Col>
      <Col className="page-title" span={22} offset={1} md={{span: 12, offset: 0}} justify={"center"}>
        <p className="welcome">Welcome To CryptoR DEX</p>
        <p style={{ fontSize: "1rem", marginTop: "15px", textAlign: "center" }}>
          Manage your wallet with the power of
          <span style={{ fontWeight: "bold" }}> CryptoR DEX</span>
        </p>
        <button
          className="btn"
          type="button"
          style={{ display: isAuthenticated ? "none" : "" }}
          onClick={() =>
            authenticate({ signingMessage: "Please Authenticate!" })
          }
        >
          Authenticate Now
        </button>
      </Col>
    </>
  );
}
