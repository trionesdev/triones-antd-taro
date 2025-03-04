import classNames from 'classnames';
import _ from 'lodash';
import React, { CSSProperties, FC, useEffect, useState } from 'react';
import Tabs from '../Tabs';
import { CascaderColumn } from './cascader-column';
import './style.scss';
import { Column, ColumnOption } from './types';

const cascaderViewCls = 'triones-antm-cascader-view';

export type CascaderViewProps = {
  className?: string;
  style?: CSSProperties;
  options?: any[];
  labelInValue?: boolean;
  value?: any;
  onChange?: (value: any) => void;
  asyncRequest?: (parentValue?: any) => Promise<any>;
};

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
  const [internalOptions, setInternalOptions] = useState<any>(options || []);
  const [columns, setColumns] = useState<Column[]>([]);
  const [tabItems, setTabItems] = useState<any>([]);
  const [internalValue, setInternalValue] = useState<any>(value || []);

  const handleComputeValue = (columns?: Column[]) => {
    const result: any = [];
    columns?.forEach((column: any) => {
      if (column.value) {
        if (labelInValue) {
          result.push({
            value: column.value?.value,
            label: column.value?.label,
          });
        } else {
          result.push(column.value);
        }
      }
    });
    return result;
    // setInternalValue(newValue || [])
    // onChange?.(newValue || [])
  };

  const handleSelect = (option: any, columnIndex: number) => {
    if (_.isEqual(option?.value, columns[columnIndex]?.value?.value)) {
      return;
    }

    const newColumns: any[] = [];
    Array.from({ length: columnIndex + 1 }, (_, i) => i).forEach((i) => {
      if (i === columnIndex) {
        newColumns.push({ value: option, options: columns[i].options });
      } else {
        newColumns.push(columns[i]);
      }
    });
    if (!_.isEmpty(option.children)) {
      newColumns.push({ options: option.children });
      setColumns(newColumns);
    } else {
      if (asyncRequest) {
        asyncRequest?.().then((data: any) => {
          if (_.isArray(data) && !_.isEmpty(data)) {
            _.set(option, ['children'], data);
            newColumns.push({ options: option.children });
            setColumns(newColumns);
          } else {
            setColumns(newColumns);
          }
        });
      } else {
        setColumns(newColumns);
      }
    }
  };

  const handleFindOptionByValue = (options: ColumnOption[], value: any) => {
    if (_.isEmpty(value)) {
      return null;
    }
    return _.find(options, (option: ColumnOption) => {
      if (labelInValue) {
        return option.value === value.value;
      } else {
        return option.value === value;
      }
    });
  };

  const handleGenerateColumnsByValues = (
    options: any,
    value: any,
  ): Column[] => {
    if (!value || _.isEmpty(value)) {
      return [
        {
          options: options,
        },
      ];
    }
    const newColumns: Column[] = [];
    let currentOptions = options;
    for (let i = 0; i < value.length; i++) {
      if (_.isEmpty(currentOptions)) {
        return newColumns;
      }
      const option = handleFindOptionByValue(currentOptions, value[i]);
      newColumns.push({
        options: currentOptions,
        value: option,
      });
      currentOptions = option?.children;
    }
    if (!_.isEmpty(currentOptions)) {
      newColumns.push({
        options: currentOptions,
      });
    }
    return newColumns;
  };

  useEffect(() => {
    if (internalValue === null || _.isEmpty(internalValue)) {
      setColumns([
        {
          options: internalOptions,
        },
      ]);
    } else {
      const newColumns = handleGenerateColumnsByValues(
        internalOptions,
        internalValue,
      );
      setColumns([...newColumns]);
    }
  }, [internalOptions]);

  useEffect(() => {
    // if (_.isEqual(options, internalOptions)) {
    //   return;
    // }
    if (!_.isEmpty(options)) {
      setInternalOptions(options || []);
    } else {
      if (asyncRequest) {
        asyncRequest?.().then((data: any) => {
          if (_.isArray(data) && !_.isEmpty(data)) {
            setInternalOptions(data || []);
          }
        });
      } else {
        setInternalOptions([]);
      }
    }
  }, [options]);

  useEffect(() => {
    if (value === undefined) {
      return;
    }
    if (_.isEqual(value, internalValue)) {
      return;
    }
    setInternalValue(value);
  }, [value]);

  useEffect(() => {
    console.log('newColumns', columns);
    if (!_.isEmpty(columns)) {
      const items = columns.map((column, index: number) => {
        return {
          key: `${index}`,
          label: column.value?.label || '请选择',
          children: (
            <CascaderColumn
              index={index}
              options={column.options}
              value={column.value}
              onSelect={handleSelect}
            />
          ),
        };
      });
      setTabItems(items);
      setActiveKey(`${_.size(columns) - 1}`);
    }
    const newValue = handleComputeValue(columns);
    if (!_.isEqual(newValue || [], internalValue || [])) {
      console.log('newValue', newValue, internalValue);
      setInternalValue(newValue || []);
      onChange?.(newValue || []);
    }
  }, [columns]);

  return (
    <div className={classNames(cascaderViewCls, className)} style={style}>
      <Tabs
        activeKey={activeKey}
        onChange={setActiveKey}
        items={tabItems}
        stretch={false}
        style={{ height: '100%' }}
      />
    </div>
  );
};
