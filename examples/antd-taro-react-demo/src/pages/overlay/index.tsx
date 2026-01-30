import { Button, View } from "@tarojs/components";
import { Overlay } from "@trionesdev/antd-taro-react";
import { useState } from "react";
import { DemoBlock } from "src/components";

const OverlayPage = () => {
    const [open, setOpen] = useState(false);
    return (
        <View>
            <DemoBlock title={`基本使用`}>
                <Button onClick={() => setOpen(true)}>点击按钮显示遮罩层</Button>
                <Overlay open={open} onClick={() => setOpen(false)} />
            </DemoBlock>
        </View>
    );
};
export default OverlayPage;
