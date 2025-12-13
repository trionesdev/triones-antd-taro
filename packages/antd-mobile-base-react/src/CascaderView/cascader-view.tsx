import classNames from 'classnames';
import {find, isArray, isEmpty, isEqual} from 'lodash-es';
import React, { CSSProperties, FC, memo, useEffect, useState } from 'react';
import Tabs from '../Tabs';
import { CascaderColumn } from './cascader-column';
import './style.scss';
import { Column, ColumnOption } from './types';

const cascaderViewCls = 'triones-antm-cascader-view';

export type CascaderViewProps = {
  className?: string;
  style?: CSSProperties;
  // open?: boolean;
  options?: any[];
  labelInValue?: boolean;
  fieldNames?: {
    value?: string;
    label?: string;
    children?: string;
  };
  columnsCount?: number;
  value?: any;
  onChange?: (value: any) => void;
  asyncRequest?: (parentValue?: any) => Promise<any>;
};

export const CascaderView: FC<CascaderViewProps> = memo(
  ({
    className,
    style,
    // open,
    options,
    fieldNames,
    labelInValue,
    columnsCount,
    value,
    onChange,
    asyncRequest,
  }) => {
    const internalFieldNames = Object.assign(
      {
        value: 'value',
        label: 'label',
        children: 'children',
      },
      fieldNames,
    );
    const [activeKey, setActiveKey] = useState<any>();
    const [columns, setColumns] = useState<Column[]>([]);
    const [internalValue, setInternalValue] = useState<any>(value || []);

    const handleComputeValue = (columns: Column[]) => {
      return columns
        .filter((column) => {
          return column.value;
        })
        .map((column) => {
          if (labelInValue) {
            return column.value;
          } else {
            return column.value?.value;
          }
        });
    };

    const handleConvertOptions = (options: any[]): ColumnOption[] => {
      return options.map((option) => {
        return {
          value: option[internalFieldNames.value],
          label: option[internalFieldNames.label],
          children:
            option[internalFieldNames.children] &&
            handleConvertOptions(option[internalFieldNames.children]),
        };
      });
    };

    const handleGenerateColumnsByValues = async (
      value: any,
    ): Promise<Column[]> => {
      if (!isEmpty(value) && isArray(value)) {
        let newColumns: Column[] = [
          { options: handleConvertOptions(options || []) },
        ];
        for (let i = 0; i < value.length; i++) {
          let column = newColumns[i];
          let option = find(column?.options, (option: ColumnOption) => {
            if (labelInValue) {
              return option.value === value[i].value;
            } else {
              return option.value === value[i];
            }
          });
          if (option) {
            newColumns[i].value = option;
            if (!columnsCount || newColumns.length < columnsCount) {
              if (option.children) {
                newColumns.push({
                  options: handleConvertOptions(option.children),
                });
              } else {
                await asyncRequest?.(option.value).then((options) => {
                  newColumns.push({ options: handleConvertOptions(options) });
                });
              }
            }
          }
        }
        return newColumns;
      }
      return [{ options: handleConvertOptions(options || []) }];
    };

    const handleSelectOption = async (option: any, columnIndex: number) => {
      let newColumns: Column[] = [];
      let activeIndex = `${columnIndex}`;
      for (let i = 0; i < columnIndex; i++) {
        newColumns.push(columns[i]);
      }
      newColumns.push({ value: option, options: columns[columnIndex].options });
      if (!columnsCount || newColumns.length < columnsCount) {
        if (!isEmpty(option.children)) {
          newColumns.push({ options: option.children });
          activeIndex = `${columnIndex + 1}`;
        } else {
          await asyncRequest?.(option.value).then((options) => {
            newColumns.push({ options: handleConvertOptions(options) });
            activeIndex = `${columnIndex + 1}`;
          });
        }
      }
      setColumns(newColumns);
      setActiveKey(activeIndex);
      const newValue = handleComputeValue(newColumns);
      onChange?.(newValue);
    };

    useEffect(() => {
      if (!isEmpty(options)){
        handleGenerateColumnsByValues(internalValue).then((_columns) => {
          setColumns(_columns);
          setActiveKey(`${_columns.length - 1}`);
        });
      }
    }, [options]);

    useEffect(() => {
      if (value === undefined) {
        return;
      }
      if (isEqual(internalValue, value)) {
        return;
      }
      setInternalValue(value);
    }, [value]);

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
          style={{ height: '100%' }}
        />
      </div>
    );
  },
);
