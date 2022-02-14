import Transfer from "./components/Transfer";
import NativeBalance from "../NativeBalance";
import Address from "../Address/Address";
import Blockie from "../Blockie";
import { Row, Col } from "antd";

// CSS
import "./Wallet.styles.css";

// Image
import Image from "../../img/Wallet-amico.svg";

function Wallet() {
  return (
    <div className="container">
      <Row
        className="wallet"
        align={"middle"}
        style={{ flexDirection: "row-reverse" }}
        justify={"center"}
        gutter={[24, 24]}
      >
        <Col
          span={20}
          md={{ span: 12}}
        >
          <img src={Image} alt="" />
        </Col>
        <Col
          span={20}
          md={{ span: 12}}
        >
          <div className="header">
            <Blockie scale={5} avatar currentWallet />
            <Address size="6" copyable />
            <NativeBalance />
          </div>
          <Transfer />
        </Col>
      </Row>
    </div>
  );
}

export default Wallet;
