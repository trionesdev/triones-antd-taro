import React from "react"
import {DemoBlock} from "../../DemoBlock";
import Descriptions from "../index";

export default () => {
  return <div>
    <DemoBlock title={`基本使用`}>
      <Descriptions columns={1} items={[
        {
          label: '姓名',
          children: '张三'
        },
        {
          label: '年龄',
          children: '18'
        },
        {
          label: '地址',
          span: 1,
          children: '中国 上海 浦东新区 陆家嘴 XXXXXX'
        },
        {
          label: '手机号',
          children: '1234567890'
        },
        {
          label: '邮箱',
          children: '1234567890@qq.com'
        },
        {
          label: '手机号',
          children: '1234567890'
        },
        {
          label: '地址',
          span: 1,
          children: '中国 上海 浦东新区 陆家嘴 XXXXXX'
        },

        {
          label: '邮箱',
          children: '1234567890@qq.com'
        }

      ]}>

      </Descriptions>
    </DemoBlock>
    <DemoBlock title={`基本使用`}>
      <Descriptions labelWidth={80} columns={2} items={[
        {
          label: '姓名',
          children: '张三'
        },
        {
          label: '年龄',
          children: '18'
        },
        {
          label: '地址',
          span: 2,
          children: '中国 上海 浦东新区 陆家嘴 XXXXXX'
        },
        {
          label: '手机号',
          children: '1234567890'
        },
        {
          label: '邮箱',
          children: '1234567890@qq.com'
        },
        {
          label: '手机号',
          children: '1234567890'
        },
        {
          label: '地址',
          span: 2,
          children: '中国 上海 浦东新区 陆家嘴 XXXXXX'
        },

        {
          label: '邮箱',
          children: '1234567890@qq.com'
        }

      ]}>

      </Descriptions>
    </DemoBlock>
    <DemoBlock title={`基本使用`}>
      <Descriptions bordered={ true} labelWidth={80} columns={2} items={[
        {
          label: '姓名',
          children: '张三'
        },
        {
          label: '年龄',
          children: '18'
        },
        {
          label: '地址',
          span: 2,
          children: '中国 上海 浦东新区 陆家嘴 XXXXXX'
        },
        {
          label: '手机号',
          children: '1234567890'
        },
        {
          label: '邮箱',
          children: '1234567890@qq.com'
        },
        {
          label: '手机号',
          children: '1234567890'
        },
        {
          label: '地址',
          span: 2,
          children: '中国 上海 浦东新区 陆家嘴 XXXXXX'
        },

        {
          label: '邮箱',
          children: '1234567890@qq.com'
        }

      ]}>

      </Descriptions>
    </DemoBlock>
  </div>
}
