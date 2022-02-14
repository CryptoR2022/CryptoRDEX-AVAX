import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import Account from "components/Account";
import Chains from "components/Chains";
import TokenPrice from "components/TokenPrice";
import ERC20Balance from "components/ERC20Balance";
import ERC20Transfers from "components/ERC20Transfers";
import InchDex from "components/InchDex";
import NFTBalance from "components/NFTBalance";
import Wallet from "components/Wallet";
import { Menu, Layout, Tabs, Row, Typography } from "antd";
import "antd/dist/antd.css";
import NativeBalance from "components/NativeBalance";
import "./style.css";
import Home from "components/Home";
import Text from "antd/lib/typography/Text";
import Ramper from "components/Ramper";
// Image
import Heart from './img/heart.svg';
import Github from './img/github.svg';

const { Header, Footer } = Layout;
const { Title } = Typography;


const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#041836",
    marginTop: "130px",
    padding: "10px",
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "#fefefe",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
  },
};
const App = ({ isServerInfo }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <Layout style={{ height: "100vh", overflow: "auto" }}>
      <Router>
        <Header style={styles.header}>
          <Logo />
          <Menu
            theme="light"
            mode="horizontal"
            style={{
              display: "flex",
              fontSize: "17px",
              fontWeight: "500",
              width: "100%",
              justifyContent: "center",
            }}
            defaultSelectedKeys={["home"]}
          >
            <Menu.Item key="home">
              <NavLink to="/home">Home</NavLink>
            </Menu.Item>
            <Menu.Item key="wallet">
              <NavLink to="/wallet">Transfer</NavLink>
            </Menu.Item>
            <Menu.Item key="onramp">
              <NavLink to="/onramp">Fiat</NavLink>
            </Menu.Item>
            <Menu.Item key="dex">
              <NavLink to="/1inch">Dex</NavLink>
            </Menu.Item>
            <Menu.Item key="balances">
              <NavLink to="/erc20balance">Balances</NavLink>
            </Menu.Item>
            <Menu.Item key="transfers">
              <NavLink to="/erc20transfers">Transfers</NavLink>
            </Menu.Item>
            <Menu.Item key="nft">
              <NavLink to="/nftBalance">NFTs</NavLink>
            </Menu.Item>
          </Menu>
          <div style={styles.headerRight}>
            <Chains />
            <TokenPrice
              address="0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"
              chain="eth"
              image="https://cloudflare-ipfs.com/ipfs/QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg/"
              size="40px"
            />
            <NativeBalance />
            <Account />
          </div>
        </Header>
        <div style={styles.content}>
          <Switch>
            <Route exact path="/home">
              <Home isServerInfo={isServerInfo} />
            </Route>
            <Route path="/wallet">
              <Wallet />
            </Route>
            <Route path="/1inch">
              <div className="container">
                <Row className="dex">
                  <Tabs
                    defaultActiveKey="1"
                    style={{ alignItems: "center", width: "100%" }}
                  >
                    <Tabs.TabPane
                      tab={<span>Ethereum</span>}
                      key="1"
                      style={{ width: "100%" }}
                    >
                      <InchDex chain="eth" />
                    </Tabs.TabPane>
                    <Tabs.TabPane
                      tab={<span>Binance Smart Chain</span>}
                      key="2"
                      style={{ width: "100%" }}
                    >
                      <InchDex chain="bsc" />
                    </Tabs.TabPane>
                    <Tabs.TabPane
                      tab={<span>Polygon</span>}
                      key="3"
                      style={{ width: "100%" }}
                    >
                      <InchDex chain="polygon" />
                    </Tabs.TabPane>
                  </Tabs>
                </Row>
              </div>
            </Route>
            <Route path="/erc20balance">
              <ERC20Balance />
            </Route>
            <Route path="/onramp">
              <Ramper />
            </Route>
            <Route path="/erc20transfers">
              <ERC20Transfers />
            </Route>
            <Route path="/nftBalance">
              <NFTBalance />
            </Route>
            <Route path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/nonauthenticated">
              <>Please login using the "Authenticate" button</>
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer>
        <span className="title">Made with <img src={Heart} width="16" height="16" alt="Heart" /> by <a href="#"> CryptoR DEX</a></span>
        <div className="socials">
          <div className="social">
            <a href="https://github.com/ethereum-boilerplate"><img src={Github} alt="Github" /></a>
          </div>
          <div className="social">

          </div>
          <div className="social">

          </div>
        </div>
      </Footer>
    </Layout>
  );
};

export const Logo = () => (
  <div>

  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="100.000000pt" height="60.000000pt" viewBox="25 -40 250.000000 250.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(20.000000,256.000000) scale(0.100000,-0.100000)"
fill="#FA393E" stroke="none">
<path d="M1135 2065 c-306 -58 -548 -282 -632 -585 -24 -90 -25 -309 0 -400
106 -391 466 -641 864 -600 327 34 601 273 690 600 25 91 24 310 -1 400 -114
409 -512 662 -921 585z m276 -253 c67 -33 126 -87 159 -146 17 -28 30 -54 30
-58 0 -5 -36 -8 -81 -8 -76 0 -83 2 -102 26 -39 50 -88 64 -232 64 -103 0
-137 4 -165 18 -40 20 -80 74 -80 109 l0 24 213 -3 c198 -3 215 -5 258 -26z
m24 -265 c4 -13 5 -46 3 -73 l-3 -49 -229 0 -229 0 -20 27 c-23 30 -18 67 13
98 19 19 34 20 240 20 l220 0 5 -23z m180 -52 l0 -70 -78 -3 -77 -3 6 39 c3
21 1 55 -4 76 l-11 37 82 -3 82 -3 0 -70z m-20 -142 c-35 -85 -95 -147 -181
-191 -40 -20 -54 -38 -54 -67 0 -8 59 -92 130 -188 72 -96 130 -178 130 -182
0 -15 -99 4 -149 29 -73 38 -113 77 -212 207 -102 135 -134 156 -248 166 -79
7 -81 10 -42 77 35 62 59 70 214 76 159 6 213 24 245 81 17 28 19 29 100 29
l82 0 -15 -37z"/>
</g>
</svg>
 </div>
);

export default App;
