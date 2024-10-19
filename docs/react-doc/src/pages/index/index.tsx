import {Component, PropsWithChildren} from 'react'
import {View, Text} from '@tarojs/components'
import {observer, inject} from 'mobx-react'


import './index.less'
// import {Button} from "@components";
import {Button} from "@trionesdev/antd-taro-react";

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
  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  increment = () => {
    const {counterStore} = this.props.store
    counterStore.increment()
  }

  decrement = () => {
    const {counterStore} = this.props.store
    counterStore.decrement()
  }

  incrementAsync = () => {
    const {counterStore} = this.props.store
    counterStore.incrementAsync()
  }

  render() {
    const {counterStore: {counter}} = this.props.store
    return (
      <View className='index'>
        {/*<Button block={true} color={`primary`} size={`mini`} onClick={this.increment}>+</Button>*/}
        {/*<Button block={true} size={`small`} onClick={this.decrement}>-</Button>*/}
        {/*<Button block={true} size={`middle`} onClick={this.incrementAsync}>Add Async</Button>*/}
        {/*<Button block={true} size={`large`} onClick={this.incrementAsync}>Add Async</Button>*/}
        {/*<Button block={true} onClick={this.incrementAsync}>Add Async</Button>*/}
        <Text>{counter}</Text>
        <Button>测试</Button>
      </View>
    )
  }
}

export default Index
