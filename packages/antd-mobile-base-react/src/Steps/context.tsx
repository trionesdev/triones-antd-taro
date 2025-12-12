import {createContext} from "react";

type StepsContextType = {
  current: number
  iconSize?: number
  stretch?: boolean
}

export const StepsContext = createContext<StepsContextType>({
  current: 0,
  stretch: true
})
