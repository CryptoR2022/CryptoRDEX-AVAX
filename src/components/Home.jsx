import React, { useMemo } from "react";
import { useMoralis } from "react-moralis";
import { Row } from 'antd';

// Components
import HomeTitle from "./HomeTitle";
import Services from "./HomeService";

export default function Home() {
  const { Moralis } = useMoralis();

  const isInchDex = useMemo(
    () => (Moralis.Plugins?.oneInch ? true : false),
    [Moralis.Plugins?.oneInch]
  );

  return (
    <div className="container">
      <Row className="home">
        <HomeTitle />
        <Services />
      </Row>
    </div>
  );
}
