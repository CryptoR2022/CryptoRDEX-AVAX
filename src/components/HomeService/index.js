import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";

// CSS
import "./HomeService.styles.css";

// Services
import { services } from "./services";

export default function Services() {
  return (
    <div className="services">
      <p className="title">Services</p>

      <Row gutter={[24, 24]}>
        {services.map((el) => (
          <Col span={20} offset={2} md={{ span: 12, offset: 0 }} lg={{ span: 8 }} key={el.id}>
            <Link to={el.url}>
              <div className="service">
                <img src="" alt="" />
                <p className="service-title">{el.name}</p>
                <p className="service-description">
                  Manage it by the easiest way.
                </p>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}
