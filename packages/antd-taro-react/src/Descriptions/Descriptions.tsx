import React, {FC, PropsWithChildren} from "react"

type DescriptionsProps={
  column?:number
  layout?:'horizontal' | 'vertical'
}

export const Descriptions:FC<PropsWithChildren<DescriptionsProps>> = ({}) => {
  return <div></div>
}
