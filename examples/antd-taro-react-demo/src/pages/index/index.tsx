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
  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

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
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{counter}</Text>
        <Button
          onClick={() => {
            Taro.navigateTo({
              url: "/pages/button/index",
            });
          }}
        >
          Button
        </Button>
        <Button
          onClick={() => {
            Taro.navigateTo({
              url: "/pages/tab-bar/index",
            });
          }}
        >
          TabBar
        </Button>
        <Button
          onClick={() => {
            Taro.navigateTo({
              url: "/pages/checkbox/index",
            });
          }}
        >
          Checkbox
        </Button>
        <Button
          onClick={() => {
            Taro.navigateTo({
              url: "/pages/empty/index",
            });
          }}
        >
          Empty
        </Button>
        <Button
          onClick={() => {
            Taro.navigateTo({
              url: "/pages/card/index",
            });
          }}
        >
          card
        </Button>
      </View>
    );
  }
}

export default Index;
