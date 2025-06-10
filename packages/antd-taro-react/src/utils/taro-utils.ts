import Taro from '@tarojs/taro';

export const checkTaroEnv = () => {
  const env = Taro.getEnv();
  console.log('env', env);
  console.log('env', Taro.getCurrentInstance());
  console.log('env');
  return (
    env && 'Unknown' !== env?.toString() && Taro?.getCurrentInstance()?.app
  );
};

export const isTaroWeApp = () => {
  return Taro.getEnv() === Taro.ENV_TYPE.WEAPP;
};

export const useTaro = () => {
  return { isTaro: checkTaroEnv(), isTaroWeApp: isTaroWeApp() };
};
