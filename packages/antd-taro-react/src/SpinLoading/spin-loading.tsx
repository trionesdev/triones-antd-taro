import React, {FC, useEffect} from "react";
import classNames from "classnames";
import "./spin-loading.scss"
import * as url from "node:url";

const spinLoadingCls = 'triones-antm-spin-loading';
export type SpinLoadingProps = {
  size?: 'small' | 'middle' | 'large' | number
  color?: 'default' | 'primary' | 'white' | string
}
export const SpinLoading: FC<SpinLoadingProps> = ({
                                                    size = 'middle',
                                                    color = 'default'
                                                  }) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)

  const computedSize = React.useMemo(() => {
    let resSize = null
    if (size === 'small') {
      resSize = '24Px'
    } else if (size === 'middle') {
      resSize = '32Px'
    } else if (size === 'large') {
      resSize = '48Px'
    } else {
      resSize = size
    }
    if (typeof resSize === 'number') {
      return `${resSize}Px`
    } else {
      return resSize
    }
  }, [size])

  const computedColor = React.useMemo(() => {
    if (color === 'default') {
      return '#9D9D9D'
    } else if (color === 'primary') {
      return '#1677ff'
    } else if (color === 'white') {
      return '#ffffff'
    } else {
      return color
    }
  }, [color])

  const completedStyle: any = React.useMemo(() => {
    const svg = `<svg className={classNames(\`${spinLoadingCls}-svg\`)} viewBox='0 0 32 32'>
      <circle className={classNames(\`${spinLoadingCls}-circle\`)}
        r="15"
        cx="16"
        cy="16"
        strokeWidth="2"
        fill='transparent'
        strokeLinecap='round'
        strokeDasharray={15 * 3.14159265358979 * 2}
        strokeDashoffset={15 * 3.14159265358979 * 0.5}
        style={{
          animation: 'adm-spin-loading-rotate 1s linear infinite',
          transformOrigin: '50% 50%',
        }}/>
    </svg>`
    return {
      '--size': computedSize,
      '--color': computedColor,
    }
  }, [computedSize, computedColor])

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvasRef.current!.getContext('2d')!;

    let angle = 0;

    function draw() {
      // 清除画布
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 设置半圆属性
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, canvas.height / 2, Math.PI, 0, true); // 绘制一个逆时针的半圆
      ctx.lineWidth = 10;
      ctx.strokeStyle = 'blue';
      ctx.stroke();

      // 旋转画布
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(angle);

      // 重新绘制半圆以显示旋转效果
      ctx.beginPath();
      ctx.arc(0, 0, canvas.height / 2, Math.PI, 0, true);
      ctx.lineWidth = 10;
      ctx.strokeStyle = 'red';
      ctx.stroke();

      ctx.restore();

      // 更新角度
      angle += 0.02;

      // 定义圆环的属性
      // const centerX = canvas.width / 2;
      // const centerY = canvas.height / 2;
      // const outerRadius = 100;
      // const innerRadius = 80;
      //
      // // 绘制圆环
      // ctx.beginPath();
      // ctx.arc(centerX, centerY, outerRadius, 0, 2 * Math.PI); // 外圆
      // ctx.arc(centerX, centerY, innerRadius, 0, 2 * Math.PI, true); // 内圆，逆时针
      // ctx.fillStyle = "red"; // 填充颜色（可选，如果不需要填充则省略此行）
      // ctx.fill(); // 填充（如果需要）
      // ctx.lineWidth = 10; // 线条宽度
      // ctx.strokeStyle = "blue"; // 线条颜色
      // ctx.stroke(); // 绘制边框
      // 请求下一帧
      requestAnimationFrame(draw);
    }

    // 开始动画
    draw();

  }, [])

  return <div className={classNames(spinLoadingCls)} style={completedStyle}>
    <canvas ref={canvasRef} width={32} height={32}  />
  </div>
}
