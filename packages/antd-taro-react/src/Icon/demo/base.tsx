import React from "react";
import * as icons from "@trionesdev/antd-taro-icons-react"
import _ from "lodash";

export default () => {
  console.log(icons)
  return <div style={{display: 'flex', alignItems: 'center', gap: 8,flexWrap: 'wrap'}}>{

    _.map(_.omit(icons, 'Icon') , (icon, name)=>{
      return <div key={name} style={{display: 'inline-flex',flexDirection: 'column', alignItems: 'center', gap: 8}}>
        <div>{React.createElement(icon, {key: name})}</div>
        <div style={{fontSize: 12}}>{name}</div>
      </div>
    })
  }</div>
}
