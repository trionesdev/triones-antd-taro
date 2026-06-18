import {useState} from "react";
import {View} from "@tarojs/components";
import {Button, FetchPicker} from "@trionesdev/antd-taro-react";
import {DemoBlock} from "../../components";

const FetchPickerBase = () => {
  const [open, setOpen] = useState(false);
  const [fullScreenOpen, setFullScreenOpen] = useState(false);
  const [fullScreenOpen1, setFullScreenOpen1] = useState(false);
  const [fullScreenOpen2, setFullScreenOpen2] = useState(false);
  return (
    <View>
      <DemoBlock title={`基本使用`}>
        <FetchPicker
          open={open}
          title={"远程选择"}
          onCancel={() => setOpen(false)}
          onOk={(value) => {
            setOpen(false)
          }}
        />
        <Button block={true} onClick={() => setOpen(true)}>FetchPicker 目前为静态演示</Button>
      </DemoBlock>
      <DemoBlock title={`全屏选择`}>
        <FetchPicker
          open={fullScreenOpen}
          fullScreen={true}
          title={"全屏"}
          onCancel={() => setFullScreenOpen(false)}
          fetch={(params) => {
            if (params.page! > 5) {
              return Promise.resolve([])
            }
            const options = Array.from({length: 20}).map((_, index) => ({
              label: `选项${params.page}-${index}`,
              value: index
            }))
            return Promise.resolve(options)
          }}
        />
        <Button block={true} onClick={() => setFullScreenOpen(true)}>FetchPicker Full Screen</Button>
      </DemoBlock>
      <DemoBlock title={`全屏选择-无选项`}>
        <FetchPicker
          open={fullScreenOpen1}
          fullScreen={true}
          onCancel={() => setFullScreenOpen1(false)}
        />
        <Button block={true} onClick={() => setFullScreenOpen1(true)}>FetchPicker Full Screen</Button>
      </DemoBlock>
      <DemoBlock title={`全屏选择-多选`}>
        <FetchPicker
          open={fullScreenOpen2}
          fullScreen={true}
          multiple={true}
          title={"全屏-多选"}
          onCancel={() => setFullScreenOpen2(false)}
          fetch={(params) => {
            if (params.page! > 5) {
              return Promise.resolve([])
            }
            const options = Array.from({length: 20}).map((_, index) => ({
              label: `选项${params.page}-${index}`,
              value: index
            }))
            return Promise.resolve(options)
          }}
        />
        <Button block={true} onClick={() => setFullScreenOpen2(true)}>FetchPicker Full Screen</Button>
      </DemoBlock>
    </View>
  );
};

export default FetchPickerBase;
