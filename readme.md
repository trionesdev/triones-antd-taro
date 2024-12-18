# 基于Taro的Antd组件库
***
开发中，待完善。。。。 

本项目主要是因为没有合适的Antd风格的组件库，并且antd-mobile也不对Taro进行支持，所以我们做了一个基于Taro的Antd组件库。
> 为了避免组件库工程与文档工程的冲突，并且让各个工程之间的依赖更加清晰，所以我们采用了monorepo方式来管理，分别创建组件工程和文档工程。
> 主要Api 参考了antd,组件效果参考ant-mini.
## 本地运行
1. 安装依赖包
```
pnpm install 
```
2. 构建工程
> 首先要对所有的依赖工程进行构建，如果不需要实时构建，可以先执行一次构建，之后再对需要实时构建的包执行dev命令
```shell
pnpm run build
```
3. 构建 @trionesdev/antd-taro-react 并保持开发模式持续更新
```shell
pnpm --dir packages/antd-taro-react run dev
```
4. 启动demo工程
```shell
pnpm --dir examples/antd-taro-react-demo run dev:h5
```

***
## 互相吹捧，共同进步

<div style="width: 100%;text-align: center;">
<img src="images/shuque_wx.jpg" width="200px" alt="">
</div>
