import { useMoralis } from "react-moralis";
import { useERC20Balance } from "../hooks/useERC20Balance";
import { Skeleton, Table, Row, Col } from "antd";
import { getEllipsisTxt } from "../helpers/formatters";
const styles = {
  title: {
    fontSize: "30px",
    fontWeight: "700",
    textAlign: "center",
    color: "#666",
    marginBottom: "30px",
  },
};
function ERC20Balance(props) {
  const { assets } = useERC20Balance(props);
  const { Moralis } = useMoralis();

  const columns = [
    {
      title: "",
      dataIndex: "logo",
      key: "logo",
      render: (logo) => (
        <img
          src={logo || "https://etherscan.io/images/main/empty-token.png"}
          alt="nologo"
          width="28px"
          height="28px"
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name) => name,
    },
    {
      title: "Symbol",
      dataIndex: "symbol",
      key: "symbol",
      render: (symbol) => symbol,
    },
    {
      title: "Balance",
      dataIndex: "balance",
      key: "balance",
      render: (value, item) =>
        parseFloat(Moralis.Units.FromWei(value, item.decimals).toFixed(6)),
    },
    {
      title: "Address",
      dataIndex: "token_address",
      key: "token_address",
      render: (address) => getEllipsisTxt(address, 5),
    },
  ];

  return (
    <div className="container">
      <Row className="balance" gutter={[16, 16]}>
        <Col span={24}>
          <h1 style={styles.title}>Token Balances</h1>
          <Skeleton loading={!assets}>
            <Table
              dataSource={assets}
              columns={columns}
              rowKey={(record) => {
                return record.token_address;
              }}
            />
          </Skeleton>
        </Col>
      </Row>
    </div>
  );
}
export default ERC20Balance;
