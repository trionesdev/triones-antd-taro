import {View} from "@tarojs/components";
import {DemoBlock} from "../../components";
import { Rate } from "@trionesdev/antd-taro-react";

const RateBase = () => {
  return (
    <View>
      <DemoBlock title={`基础用法`}>
        <Rate count={5} />
      </DemoBlock>
    </View>
  )
}
export default RateBase
