import {DemoBlock} from "../../components";
import {Progress} from "@trionesdev/antd-taro-react";

const BaseProgress = () => {
  return (
    <>
      <DemoBlock title={`基础使用`}>
        <Progress percent={30} type={`circle`}/>
      </DemoBlock>
    </>
  );
}
export default BaseProgress;
