import styles from "./layout.module.scss"
import {Col, Menu, Row} from "antd";
import {Outlet} from "react-router-dom";

export const DocLayout = () => {
  return <div className={styles.layout}>
    <header className={styles.layoutHeader}>
      <Row style={{height: 64, width: '100%'}}>
        <Col xs={24} sm={24} md={6} lg={6} xl={5} xxl={4}>
          TrionesDev Taro React
        </Col>
        <Col className={styles.layoutHeaderRight} xs={24} sm={24} md={18} lg={18} xl={19} xxl={20}>
          <div className={styles.layoutHeaderRightSearch}/>
          <Menu style={{height: '100%'}} mode="horizontal"
                items={[{label: "指南", key: "guid"}, {label: "组件", key: "components"}]}/>
        </Col>
      </Row>
    </header>
    <div className={styles.layoutMain}>
      <Outlet/>
    </div>
  </div>
}
