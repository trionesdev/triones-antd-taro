import { DemoBlock } from '../../DemoBlock';
import React, { useState } from 'react';
import Space from "../../Space";
import Button from "../../Button";
import ProgressBar from "../index";


export default () => {
  const [percent, setPercent] = useState<number>(20);

  return (
    <>
      <DemoBlock title="基础用法">
        <Space direction="vertical" block>
          <Space block>
            <Button
              color="primary"
              disabled={percent === 100}
              onClick={() => {
                setPercent((pre) => pre + 10);
              }}
            >
              进度+10
            </Button>
            <Button
              color="primary"
              onClick={() => {
                setPercent(0);
              }}
            >
              重置
            </Button>
          </Space>
          <ProgressBar percent={percent} />
        </Space>
      </DemoBlock>

      <DemoBlock title="显示进度文字">
        <Space direction="vertical" block>
          <ProgressBar percent={50} text />
          <ProgressBar
            percent={50}
            text="已完成 3/6 步"
            style={{
              '--text-width': '80px',
            }}
          />
        </Space>
      </DemoBlock>

      <DemoBlock title="指定线条宽度">
        <Space direction="vertical" block>
          <ProgressBar
            percent={50}
            style={{
              '--track-width': '4px',
            }}
          />
          <ProgressBar
            percent={80}
            style={{
              '--track-width': '12px',
            }}
          />
        </Space>
      </DemoBlock>

      <DemoBlock title="直角的进度条">
        <ProgressBar percent={50} rounded={false} />
      </DemoBlock>

      <DemoBlock title="指定线条颜色">
        <Space direction="vertical" block>
          <ProgressBar
            percent={50}
            style={{
              '--fill-color': '#00b578',
            }}
          />
          <ProgressBar
            percent={60}
            style={{
              '--fill-color': '#ff8f1f',
            }}
          />
          <ProgressBar
            percent={80}
            style={{
              '--fill-color': '#ff3141',
            }}
          />
          <ProgressBar
            percent={80}
            style={{
              '--fill-color': 'linear-gradient(to right, #1677ff, #00b578)',
            }}
          />
        </Space>
      </DemoBlock>

      <DemoBlock title="指定轨道颜色">
        <Space direction="vertical" block>
          <ProgressBar
            percent={50}
            style={{
              '--track-color': '#00b578',
            }}
          />
          <ProgressBar
            percent={60}
            style={{
              '--track-color': '#ff8f1f',
            }}
          />
        </Space>
      </DemoBlock>
    </>
  );
};
