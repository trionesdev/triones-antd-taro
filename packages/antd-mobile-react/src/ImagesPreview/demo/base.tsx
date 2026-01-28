import React from "react";
import {DemoBlock} from "../../DemoBlock";
import Button from "../../Button";
import ImagePreview from "../index";

export default () => {
  const [open, setOpen] = React.useState(false);
  return <>
    <DemoBlock title={'基本使用'}>
      <ImagePreview open={open} afterOpenChange={(value) => {
        setOpen(value);
      }}
                    items={[
                      'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png',
                      'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg',
                      'https://fastly.jsdelivr.net/npm/@vant/assets/apple-4.jpeg',
                      'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg'
                    ]}/>
      <Button block={true} onClick={() => {
        setOpen(true);
      }}>预览</Button>
    </DemoBlock>
  </>
}
