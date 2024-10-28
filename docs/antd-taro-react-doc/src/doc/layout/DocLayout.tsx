import { Col, Layout, Menu, Row } from "antd";
import { Outlet } from "react-router-dom";

import styles from "./layout.module.scss";

const { Header } = Layout;

export const DocLayout = () => {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.layoutHeader}>
        <Row style={{ height: 64, width: "100%" }}>
          <Col xs={24} sm={24} md={6} lg={6} xl={5} xxl={4}>
            TrionesDev Taro React
          </Col>
          <Col xs={0} sm={0} md={18} lg={18} xl={19} xxl={20}>
            <div className={styles.layoutHeaderRightWrapper}>
              <div className={styles.layoutHeaderRightSearch}>搜索</div>
              <Menu
                className={styles.layoutHeaderRightMenu}
                mode="horizontal"
                items={[
                  { label: "指南", key: "guid" },
                  { label: "组件", key: "components" },
                ]}
              />
            </div>
          </Col>
        </Row>
      </Header>
      <div className={styles.layoutMain}>
        <Outlet />
      </div>
    </Layout>
  );
};
