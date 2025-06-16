import Taro from '@tarojs/taro';
import { useMemo } from 'react';

export const useTaro = () => {
  const env = Taro.getEnv();
  const isTaroEnv = useMemo(() => {
    return (
      env && 'Unknown' !== env?.toString() && Taro?.getCurrentInstance()?.app
    );
  }, []);

  const isTaroWeApp = useMemo(() => {
    return isTaroEnv && env === Taro.ENV_TYPE.WEAPP;
  }, []);

  return {
    env,
    isTaroEnv,
    isTaroWeApp,
  };
};
