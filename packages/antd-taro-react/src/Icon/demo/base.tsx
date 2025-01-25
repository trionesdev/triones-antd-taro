/**
 * compact: true
 */
import React from "react";
import * as icons from "@trionesdev/antd-taro-icons-react"
import _ from "lodash";
import { DemoBlock } from '../../DemoBlock';

export default () => {
  return <DemoBlock title='图标'>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
      {
        _.map(_.omit(icons, 'Icon'), (icon, name) => {
          return <div key={name} style={{ width: '40%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 30 }}>
            <div>{React.createElement(icon, { key: name })}</div>
            <div style={{ fontSize: 12 }}>{name}</div>
          </div>
        })
      }
    </div>
  </DemoBlock >
}
