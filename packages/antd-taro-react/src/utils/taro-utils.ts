import Taro from '@tarojs/taro'

export const checkTaroEnv = () => {
  const env = Taro.getEnv()
  return env && "Unknown" != env?.toString()
}
