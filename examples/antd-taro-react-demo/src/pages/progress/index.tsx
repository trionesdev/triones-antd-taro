import {DemoBlock} from "../../components";
import {Progress} from "@trionesdev/antd-taro-react";

const BaseProgress = () => {
  return (
    <>
      <DemoBlock title={`进度条`}>
        <Progress percent={75}/>
        <Progress percent={75} status={`exception`}/>
        <Progress percent={100}/>
      </DemoBlock>
      <DemoBlock title={`进度圈`}>
        <Progress percent={75} type={`circle`}/>
        <Progress percent={75} type={`circle`} status={`exception`}/>
        <Progress percent={100} type={`circle`}/>
      </DemoBlock>
    </>
  );
}
export default BaseProgress;
