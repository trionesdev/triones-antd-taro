/**
 * compact: true
 */
import React from "react";
import * as icons from "../../../../antd-mobile-icons-react"
import {omit,map} from "lodash-es";
import { DemoBlock } from '../../DemoBlock';

export default () => {
  return <DemoBlock title='图标'>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
      {
        map(omit(icons, 'Icon'), (icon, name) => {
          return <div key={name} style={{ width: '40%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 30 }}>
            <div>
              {React.createElement(icon, {
                key: name,
                style: {
                  fontSize: 48
                }
              })}
            </div>
            <div style={{ fontSize: 14, marginTop: 5 }}>{name}</div>
          </div>
        })
      }
    </div>
  </DemoBlock >
}
