# 基于Taro的Antd组件库

***
开发中，待完善。。。。

本项目主要是因为没有合适的Antd风格的组件库，并且antd-mobile也不对Taro进行支持，所以我们做了一个基于Taro的Antd组件库。
> 为了避免组件库工程与文档工程的冲突，并且让各个工程之间的依赖更加清晰，所以我们采用了monorepo方式来管理，分别创建组件工程和文档工程。
> 主要Api 参考了antd,组件效果参考ant-mini.

由于Taro中，有些组件必须依赖Taro提供的基础组件。所以，我们先创建一个基础的Mobile组件库.
创建一个H5的组件库，用于对H5的组件进行适配。 然后，创建一个Taro的Antd组件库， 用于对必须依赖Taro的组件进行适配。

## 模块说明
- [Antd 图标组件库 react版本](packages/antd-mobile-icons-react)
- [Antd 基础组件库 react版本](packages/antd-mobile-base-react)
- [Antd 移动组件库(H5) react版本](packages/antd-mobile-react) 如果开发H5，引入此依赖
- [Antd 移动组件库(Taro) react版本](packages/antd-taro-react) 开发Taro项目，引入此依赖

## 组件列表
- 通用
  - [x] Button 按钮
- 布局
  - [x] Divider 分割线
  - [x] Grid 网格
  - [x] SafeArea 安全区
  - [x] Scaffold 脚手架
  - [x] SideBar 侧边导航栏
  - [x] Space 间距
- 导航
  - [x] NavBar 导航栏
  - [x] TabBar 底部导航栏
  - [x] Tabs 标签页
  - [x] Steps 步骤
- 信息展示
  - [x] Alert 告警提示
  - [x] Avatar 头像
  - [x] Card 卡片
  - [x] Descriptions 描述
  - [x] Ellipsis 文本省略
  - [x] ErrorBlock 异常
  - [x] Footer 底部
  - [x] Image 图片
  - [x] ImagesPreview 图片预览
  - [x] SpinLoading 加载中
  - [x] WaterMark 水印
- 数据录入
  - [x] Calendar 日历
  - [x] CalendarDatetimePicker 日期时间选择器
  - [x] CalendarPicker 日历选择器
  - [x] CascaderView 级联
  - [x] CascaderPicker 级联选择器
  - [x] Cell 单元格
  - [x] Checkbox 复选框
  - [x] Form 表单
  - [x] ImagesWall 图片墙
  - [x] Input 输入框
  - [x] InputNumber 数字输入框
  - [x] Picker 选择器
  - [x] Radio 单选框
  - [x] Rate 评分
  - [x] Switch 开关
  - [x] ValidationCodeInput 验证码输入框
- 反馈
  - [x] ActionSheet 操作面板
  - [x] Badge 徽标
  - [x] Empty 空组件
  - [x] NoticeBar 通告栏
  - [x] Popup 弹出层
  - [x] Result 结果
  - [x] Swiper 轮播
  - [x] Progress 进度条
  - [x] Toast 轻提示
- 其他
  - [x] PageIndicator 分页符

















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

### 感谢贡献者

<a href="https://github.com/trionesdev/triones-antd-taro/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=trionesdev/triones-antd-taro" />
</a>

***

## 关注我们，一起交流

> 留言回复不及时，可以通过关注公众号联系我们
<div style="width: 100%;text-align: center;">
<img src="images/shuque_wx.jpg" width="200px" alt="">
</div>
