import {ConfigProvider} from "antd";
import zhCN from 'antd/locale/zh_CN';
import {AppRouter} from "./routes";

const DocLayout = () => {
  return <ConfigProvider locale={zhCN}>
    <AppRouter/>
  </ConfigProvider>
}
export default DocLayout
