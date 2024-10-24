import {Col, Menu, Row} from "antd";
import styles from "./layout.module.scss"

export const GuideLayout = () => {
  return <Row className={styles.guideLayout}>
    <Col className={styles.guideLayoutSider} md={4} lg={4} xl={4} xxl={4}>
      <Menu items={[{label: '介绍', key: 'introduction'}]}/>
    </Col>
  </Row>
}
