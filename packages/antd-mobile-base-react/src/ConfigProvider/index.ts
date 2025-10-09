import {
  ConfigProvider as InternalConfigProvider,
  useConfig,
  setDefaultConfig,
  getDefaultConfig,
} from './config-provider'

export type {ConfigProviderProps} from './config-provider'

type CompoundedComponent = typeof InternalConfigProvider & {
  useConfig: typeof useConfig
  setDefaultConfig: typeof setDefaultConfig
  getDefaultConfig: typeof getDefaultConfig
}

const ConfigProvider = InternalConfigProvider as CompoundedComponent
ConfigProvider.useConfig = useConfig
ConfigProvider.setDefaultConfig = setDefaultConfig
ConfigProvider.getDefaultConfig = getDefaultConfig

export default ConfigProvider
