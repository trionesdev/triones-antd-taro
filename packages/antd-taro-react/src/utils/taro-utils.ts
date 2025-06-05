import Taro from '@tarojs/taro'

export const checkTaroEnv = () => {
  const env = Taro.getEnv()
  console.log("env", env)
  return env && "Unknown" !== env?.toString()
}
