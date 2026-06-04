import { View } from "@tarojs/components";
import { DemoBlock } from "../../components";
import { Stepper } from "@trionesdev/antd-taro-react";

const StepperBase = () => {
  return (
    <View>
      <DemoBlock title="基本使用">
        <Stepper />
      </DemoBlock>
      <DemoBlock title="最大值最小值">
        <Stepper min={0} max={10} />
      </DemoBlock>
      <DemoBlock title="仅最大值">
        <Stepper max={10} />
      </DemoBlock>
      <DemoBlock title="占满宽度">
        <Stepper block={true} min={0} max={10} />
      </DemoBlock>
    </View>
  );
};

export default StepperBase;
