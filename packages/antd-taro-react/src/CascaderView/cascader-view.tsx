import React, {CSSProperties, FC, useEffect, useState} from "react"
import classNames from "classnames";
import Tabs from "../Tabs";
import {CascaderColumn} from "./cascader-column";
import "./style.scss"
import _ from "lodash";
import {Column} from "./types";

const cascaderViewCls = 'triones-antm-cascader-view'

export type CascaderViewProps = {
  className?: string,
  style?: CSSProperties,
  options?: any[]
  labelInValue?: boolean
  value?: any
  onChange?: (value: any) => void;
  asyncRequest?: (parentValue?: any) => Promise<any>;
}
export const CascaderView: FC<CascaderViewProps> = ({
                                                      className,
                                                      style,
                                                      options,
                                                      labelInValue = false,
                                                      value,
                                                      onChange,
                                                      asyncRequest,
                                                    }) => {
  const [activeKey, setActiveKey] = useState<any>();
  const [columns, setColumns] = useState<Column[]>([])
  const [tabItems, setTabItems] = useState<any>([])
  const [internalValue, setInternalValue] = useState<any>(value || [])

  const handleComputeValue = (columns: Column[]) => {
    return columns.map(column => {
      if (labelInValue) {
        return column.value
      } else {
        return column.value?.value
      }
    })
  }

  const handleSelect = (option: any, index: number) => {
    if (_.isEqual(option?.value, columns[index]?.value?.value)) {
      return
    }
    const newColumns: any[] = []
    Array.from({length: index + 1}, (_, i) => i).forEach((i) => {
      if (i == index) {
        newColumns.push({value: option, options: columns[i].options})
      } else {
        newColumns.push(columns[i])
      }
    })
    if (!_.isEmpty(option.children)) {
      newColumns.push({options: option.children})
      setActiveKey(`${index + 1}`)
    } else {
      asyncRequest?.().then((data: any) => {
        if (_.isArray(data) && !_.isEmpty(data)) {
          _.set(option, ['children'], data)
          newColumns.push({options: option.children})
          setActiveKey(`${index + 1}`)
        }
      })
    }
    setColumns(newColumns)
    const columnsValues = handleComputeValue(newColumns)
    setInternalValue(columnsValues)
    onChange?.(columnsValues)
  }

  useEffect(() => {
    if (options && !_.isEmpty(options)) {
      const column = {
        value: null,
        options
      }
      setColumns([column])
    } else {
      asyncRequest?.().then((data: any) => {
        if (_.isArray(data) && !_.isEmpty(data)) {
          const column: Column = {
            value: null,
            options: data
          }
          setColumns([column])
        }
      })
    }
  }, [options]);

  const handleNewColumnsByValue = async () => {
    const newColumns: any[] = [...columns]
    _.forEach(internalValue, async (item, index: number) => {

      if (index <= _.size(newColumns) - 1) {
        const columnValue = labelInValue ? item : _.find(newColumns[index].options, (option) => {
          return option.value === item;
        })
        newColumns[index].value = columnValue
        let option = _.find(newColumns[index].options, (option) => {
          return option.value === columnValue?.value;
        })
        if (option) {
          if (!_.isEmpty(option?.children)) {
            _.set(newColumns, [index + 1, 'options'], option?.children)
          } else {
            await asyncRequest?.(option).then((data: any) => {
              if (_.isArray(data) && !_.isEmpty(data)) {
                _.set(option!, ['children'], data)
                _.set(newColumns, [index + 1, 'options'], option?.children)
              }
            })
          }
        }
      }
    })
    return newColumns
  }

  useEffect(() => {
    if (internalValue == undefined) {
      return
    }
    if (_.isEmpty(columns)) {
      return;
    }
    const currentValue = handleComputeValue(columns)

    if (_.isEqual(currentValue, internalValue)) {
      return;
    }
    if (_.isEmpty(columns)) {
      return;
    }
    handleNewColumnsByValue().then((newColumns) => {
      if (!_.isEqual(handleComputeValue(newColumns), handleComputeValue(columns))) {
        setColumns([...newColumns])
      }
      setActiveKey(`${_.size(newColumns) - 1}`)
    })
  }, [internalValue, columns]);

  useEffect(() => {
    if (value == undefined) {
      return
    }
    if (_.isEqual(value,internalValue)){
      return;
    }
    setInternalValue(value)
  }, [value])

  useEffect(() => {
    if (!_.isEmpty(columns)) {
      const items = columns.map((column, index: number) => {
        return {
          key: `${index}`,
          label: column.value?.label || '请选择',
          children: <CascaderColumn index={index} labelInValue={labelInValue}
                                    options={column.options}
                                    value={column.value}
                                    onSelect={handleSelect}/>
        }
      })
      setTabItems(items)
    }
  }, [columns]);

  return <div className={classNames(cascaderViewCls, className)} style={style}>
    <Tabs activeKey={activeKey} onChange={setActiveKey} items={tabItems} stretch={false} style={{height: '100%'}}/>
  </div>
}
