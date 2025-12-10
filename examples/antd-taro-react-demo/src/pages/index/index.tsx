import {Text, View} from "@tarojs/components";
import {inject, observer} from "mobx-react";
import {Component, PropsWithChildren} from "react";
import {Button, SafeArea} from "@trionesdev/antd-taro-react";

import Taro from "@tarojs/taro";
import "./index.scss";

type PageStateProps = {
  store: {
    counterStore: {
      counter: number;
      increment: Function;
      decrement: Function;
      incrementAsync: Function;
    };
  };
};

interface Index {
  props: PageStateProps;
}

@inject("store")
@observer
class Index extends Component<PropsWithChildren> {
  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  increment = () => {
    const {counterStore} = this.props.store;
    counterStore.increment();
  };

  decrement = () => {
    const {counterStore} = this.props.store;
    counterStore.decrement();
  };

  incrementAsync = () => {
    const {counterStore} = this.props.store;
    counterStore.incrementAsync();
  };

  render() {
    const {
      counterStore: {counter},
    } = this.props.store;
    return (

      <View className="index">
        <View style={{display: 'none'}}>
          <Button onClick={this.increment}>+</Button>
          <Button onClick={this.decrement}>-</Button>
          <Button onClick={this.incrementAsync}>Add Async</Button>
          <Text>{counter}</Text>
        </View>
        <View style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column', gap: 10, padding: '10px'}}>
          <Button
            block={true}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/alert/index",
              });
            }}
          >
            Alert 告警提示
          </Button>
          <Button
            block={true}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/avatar/index",
              });
            }}
          >
            Avatar 头像
          </Button>
          <Button
            block={true}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/button/index",
              });
            }}
          >
            Button 按钮
          </Button>
          <Button
            block={true}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/calendar/index",
              });
            }}
          >
            Calendar 日历
          </Button>
          <Button
            block={true}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/calendar-datetime-picker/index",
              });
            }}
          >
            CalendarDatetimePicker 日历时间选择器
          </Button>
          <Button
            block={true}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/calendar-picker/index",
              });
            }}
          >
            Calendar 日历选择器
          </Button>
          <Button
            block={true}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/input/index",
              });
            }}
          >
            Input
          </Button>
          <Button
            block={true}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/tab-bar/index",
              });
            }}
          >
            TabBar
          </Button>
          <Button
            block={true}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/checkbox/index",
              });
            }}
          >
            Checkbox
          </Button>
          <Button
            block={true}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/divider/index",
              });
            }}
          >
            Divider
          </Button>

          <Button
            block={true}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/grid/index",
              });
            }}
          >
            Grid
          </Button>
          <Button
            block={true}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/images-wall/index",
              });
            }}
          >
            ImagesWall 图片墙
          </Button>
          <Button
            block={true}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/badge/index",
              });
            }}
          >
            Badge
          </Button>
          <Button
            block={true}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/empty/index",
              });
            }}
          >
            Empty
          </Button>
          <Button
            block={true}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/error-block/index",
              });
            }}
          >
            ErrorBlock
          </Button>
          <Button
            block={true}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/footer/index",
              });
            }}
          >
            Footer
          </Button>

          <Button
            block={true}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/card/index",
              });
            }}
          >
            Card
          </Button>
          <Button
            block={true}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/progress-bar/index",
              });
            }}
          >
            ProgressBar
          </Button>

          <Button
            block={true}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/form/index",
              });
            }}
          >
            Form
          </Button>

          <Button
            block={true}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/cascader-picker/index",
              });
            }}
          >
            CascaderPicker
          </Button>
          <Button
            block={true}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/cascader-view/index",
              });
            }}
          >
            CascaderView
          </Button>
          <Button
            block={true}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/input/index",
              });
            }}
          >
            Input 输入框
          </Button>
          <Button
            block={true}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/nav-bar/index",
              });
            }}
          >
            NavBar 导航栏
          </Button>
          <Button
            block={true}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/notice-bar/index",
              });
            }}
          >
            NoticeBar 通告栏
          </Button>
          <Button
            block={true}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/picker/index",
              });
            }}
          >
            Picker 选择器
          </Button>
          <Button
            block={true}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/popup/index",
              });
            }}
          >
            Popup 弹出层
          </Button>
          <Button
            block={true}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/progress/index",
              });
            }}
          >
            Progress 进度条
          </Button>
          <Button
            block={true}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/radio/index",
              });
            }}
          >
            Radio 单选框
          </Button>
          <Button
            block={true}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/rate/index",
              });
            }}
          >
            Rate 评分
          </Button>
          <Button
            block={true}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/side-bar/index",
              });
            }}
          >
            SideBar
          </Button>
          <Button
            block={true}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/space/index",
              });
            }}
          >
            Space 间距
          </Button>
          <Button
            block={true}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/spin-loading/index",
              });
            }}
          >
            SpinLoading 加载中
          </Button>
          <Button
            block={true}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/swiper/index",
              });
            }}
          >
            Swiper 轮播
          </Button>
          <Button
            block={true}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/switch/index",
              });
            }}
          >
            Switch 开关
          </Button>
          <Button
            block={true}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/tabs/index",
              });
            }}
          >
            Tabs 标签页
          </Button>
          <Button
            block={true}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/tag/index",
              });
            }}
          >
            Tag 标签
          </Button>
          <Button
            block={true}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/toast/index",
              });
            }}
          >
            Toast 轻提示
          </Button>
        </View>
      </View>

    );
  }
}

export default Index;
