import React, {FC, PropsWithChildren} from "react"
import "/style.scss"
import classNames from "classnames";


type DescriptionsProps={
  columns?:number
  layout?:'horizontal' | 'vertical'
}



export const Descriptions:FC<PropsWithChildren<DescriptionsProps>> = ({children,columns=1}) => {

  const handleItemsRender=()=>{
    return <></>
  }

  return <div className={classNames(cls)}>
    {handleItemsRender()}
  </div>
}
