import { Button, Text, View } from "@tarojs/components";
import { inject, observer } from "mobx-react";
import { Component, PropsWithChildren } from "react";

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
    const { counterStore } = this.props.store;
    counterStore.increment();
  };

  decrement = () => {
    const { counterStore } = this.props.store;
    counterStore.decrement();
  };

  incrementAsync = () => {
    const { counterStore } = this.props.store;
    counterStore.incrementAsync();
  };

  render() {
    const {
      counterStore: { counter },
    } = this.props.store;
    return (
      <View className="index">
        <View style={{ display: 'none' }}>
          <Button onClick={this.increment}>+</Button>
          <Button onClick={this.decrement}>-</Button>
          <Button onClick={this.incrementAsync}>Add Async</Button>
          <Text>{counter}</Text>
        </View>
        <View style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <Button size={`mini`}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/avatar/index",
              });
            }}
          >
            Avatar
          </Button>
          <Button size={`mini`}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/button/index",
              });
            }}
          >
            Button
          </Button>
          <Button size={`mini`}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/tab-bar/index",
              });
            }}
          >
            TabBar
          </Button>
          <Button size={`mini`}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/checkbox/index",
              });
            }}
          >
            Checkbox
          </Button>
          <Button size={`mini`}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/divider/index",
              });
            }}
          >
            Divider
          </Button>
          <Button size={`mini`}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/grid/index",
              });
            }}
          >
            Grid
          </Button>
          <Button size={`mini`}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/empty/index",
              });
            }}
          >
            Empty
          </Button>
          <Button size={`mini`}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/card/index",
              });
            }}
          >
            card
          </Button>
          <Button size={`mini`}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/tag/index",
              });
            }}
          >
            Tag
          </Button>
          <Button size={`mini`}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/rate/index",
              });
            }}
          >
            Rate
          </Button>
          <Button size={`mini`}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/progress-bar/index",
              });
            }}
          >
            ProgressBar
          </Button>
          <Button size={`mini`}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/input/index",
              });
            }}
          >
            Input
          </Button>
          <Button size={`mini`}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/form/index",
              });
            }}
          >
            Form
          </Button>
          <Button size={`mini`}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/popup/index",
              });
            }}
          >
            Popup
          </Button>
          <Button size={`mini`}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/picker/index",
              });
            }}
          >
            Picker
          </Button>
          <Button size={`mini`}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/tabs/index",
              });
            }}
          >
            Tabs
          </Button>
          <Button size={`mini`}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/cascader-picker/index",
              });
            }}
          >
            CascaderPicker
          </Button>
          <Button size={`mini`}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/cascader-view/index",
              });
            }}
          >
            CascaderView
          </Button>
          <Button size={`mini`}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/toast/index",
              });
            }}
          >
            Toast
          </Button>
          <Button size={`mini`}
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/spin-loading/index",
              });
            }}
          >
            SpinLoading
          </Button>
        </View>
      </View>
    );
  }
}

export default Index;
