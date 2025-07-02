import classNames from 'classnames';
import _ from 'lodash';
import React, {CSSProperties, FC, useEffect, useState} from 'react';
import Tabs from '../Tabs';
import {CascaderColumn} from './cascader-column';
import './style.scss';
import {Column, ColumnOption} from './types';

const cascaderViewCls = 'triones-antm-cascader-view';

export type CascaderViewProps = {
  className?: string;
  style?: CSSProperties;
  options?: any[];
  labelInValue?: boolean;
  fieldNames?: {
    value?: string;
    label?: string;
    children?: string;
  };
  value?: any;
  onChange?: (value: any) => void;
  asyncRequest?: (parentValue?: any) => Promise<any>;
};

export const CascaderView: FC<CascaderViewProps> = ({
                                                      className,
                                                      style,
                                                      options,
                                                      fieldNames,
                                                      labelInValue,
                                                      value,
                                                      onChange,
                                                      asyncRequest,
                                                    }) => {
  const internalFieldNames = Object.assign({}, {
    value: 'value',
    label: 'label',
    children: 'children'
  }, fieldNames)
  const [activeKey, setActiveKey] = useState<any>();
  const [columns, setColumns] = useState<Column[]>([]);
  const [internalValue, setInternalValue] = useState<any>(value || []);

  const handleComputeValue = (columns: Column[]) => {
    return columns
      .filter((column) => {
        return column.value;
      })
      .map((column) => {
        return column.value?.value;
      });
  };

  const handleConvertOptions = (options: any[]): ColumnOption[] => {
    return options.map((option) => {
      return {
        value: option[internalFieldNames.value],
        label: option[internalFieldNames.label],
        children: option[internalFieldNames.children] && handleConvertOptions(option[internalFieldNames.children]),
      };
    });
  }

  const handleGenerateColumnsByValues = (value: any): Column[] => {
    if (!_.isEmpty(value) && _.isArray(value)) {
      let newColumns: Column[] = [{options: handleConvertOptions(options || [])}];
      debugger
      for (let i = 0; i < value.length; i++) {
        let column = newColumns[i];
        let option = _.find(column.options, (option: ColumnOption) => {
          return option.value === value[i];
        });
        if (option) {
          newColumns[i].value = option;
          if (option.children) {
            newColumns.push({options: option.children});
          }
        }
      }
      return newColumns;
    }
    return [{options: handleConvertOptions(options || [])}];
  };

  const handleSelectOption = async (option: any, columnIndex: number) => {
    let newColumns:Column[] = [];
    let activeIndex = `${columnIndex}`;
    for (let i = 0; i < columnIndex; i++) {
      newColumns.push(columns[i]);
    }
    newColumns.push({value: option, options: columns[columnIndex].options});
    if (!_.isEmpty(option.children)) {
      newColumns.push({options: option.children});
      activeIndex = `${columnIndex + 1}`;
    } else {
      await asyncRequest?.(option.value).then((options) => {
        newColumns.push({options: handleConvertOptions(options)});
        activeIndex = `${columnIndex + 1}`;
      })
    }
    setColumns(newColumns);
    setActiveKey(activeIndex);
    const newValue = handleComputeValue(newColumns);
    console.log('newValue', newValue);
    onChange?.(newValue);
  };

  useEffect(() => {
    const _columns = handleGenerateColumnsByValues(internalValue);
    console.log('_columns', _columns);
    setColumns(_columns);
    setActiveKey(`${_columns.length - 1}`);
  }, [options]);

  return (
    <div className={classNames(cascaderViewCls, className)} style={style}>
      <Tabs
        activeKey={activeKey}
        onChange={setActiveKey}
        items={columns.map((column, index) => {
          return {
            key: `${index}`,
            label: column.value?.label || '请选择',
            children: (
              <CascaderColumn
                index={index}
                options={column.options}
                value={column.value}
                onSelect={handleSelectOption}
              />
            ),
          };
        })}
        stretch={false}
        style={{height: '100%'}}
      />
    </div>
  );
};
