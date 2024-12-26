import { Component, PropsWithChildren } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'

import './index.scss'
import Taro from "@tarojs/taro";

type PageStateProps = {
  store: {
    counterStore: {
      counter: number,
      increment: Function,
      decrement: Function,
      incrementAsync: Function
    }
  }
}

interface Index {
  props: PageStateProps;
}

@inject('store')
@observer
class Index extends Component<PropsWithChildren> {
  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  increment = () => {
    const { counterStore } = this.props.store
    counterStore.increment()
  }

  decrement = () => {
    const { counterStore } = this.props.store
    counterStore.decrement()
  }

  incrementAsync = () => {
    const { counterStore } = this.props.store
    counterStore.incrementAsync()
  }

  render() {
    const { counterStore: { counter } } = this.props.store
    return (
      <View className='index'>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{counter}</Text>
        <Button onClick={() => {
          Taro.navigateTo({
            url: '/pages/button/index',
          })
        }}>Button</Button>
        <Button onClick={() => {
          Taro.navigateTo({
            url: '/pages/tab-bar/index',
          })
        }}>TabBar</Button>
        <Button onClick={() => {
          Taro.navigateTo({
            url: '/pages/divider/index',
          })
        }}>Divider</Button>
        <Button onClick={() => {
          Taro.navigateTo({
            url: '/pages/checkbox/index',
          })
        }}>Checkbox</Button>
        <Button onClick={() => {
          Taro.navigateTo({
            url: '/pages/empty/index',
          })
        }}>Empty</Button>
      </View>
    )
  }
}

export default Index
