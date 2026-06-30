import classNames from 'classnames';
import {size} from 'lodash-es';
import React, {FC, useEffect, useState} from 'react';
import ConfigProvider from '../ConfigProvider';
import PickerView, {PickerColumnOption} from '../PickerView';
import Popup from '../Popup';
import './style.scss';

const pickerCls = 'triones-antm-picker';

export type PickerProps = {
  open?: boolean;
  afterOpenChange?: (open: boolean) => void;
  title?: React.ReactNode;
  columns?: PickerColumnOption[][];
  /**
   * @description 是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 string 变为 { value: string, label: ReactNode } 的格式
   * @default false
   */
  labelInValue?: boolean;
  value?: any[];
  round?: boolean;
  onOk?: (value: any[]) => void;
  onCancel?: () => void;
  afterClose?: () => void;
  styles?: {
    overlay?: React.CSSProperties;
    container?: React.CSSProperties;
    header?: React.CSSProperties;
    title?: React.CSSProperties;
    body?: React.CSSProperties;
  };
};

export const Picker: FC<PickerProps> = React.memo(
  ({
     open,
     afterOpenChange,
     title,
     columns = [],
     labelInValue = false,
     value,
     round = true,
     onOk,
     onCancel,
     afterClose,
     styles
   }) => {
    const {locale} = ConfigProvider.useConfig();
    const [internalValue, setInternalValue] = useState<any[]>(value || []);

    const handleAfterClose = () => {
      afterClose?.();
    };
    const handleOk = () => {
      onOk?.(internalValue);
      handleAfterClose();
    };

    const handelCancel = () => {
      onCancel?.();
      handleAfterClose();
    };

    useEffect(() => {
      if (!value || size(value) === 0 || size(value) !== size(columns)) {
        if (labelInValue) {
          setInternalValue(columns.map((column, index) => {
            if (index < size(value)) {
              return column.find((option) => {
                return option.value === value![index].value;
              });
            }
            return column[0];
          }));
        } else {
          setInternalValue(columns.map((column, index) => {
            if (index < size(value)) {
              return column.find((option) => {
                return option.value === value![index];
              })?.value;
            }
            return column[0].value;
          }));
        }
      }
    }, [columns]);

    return (
      <Popup
        open={open}
        onClose={() => {
          handleAfterClose();
          afterOpenChange?.(false);
        }}
        round={round}
        styles={styles}
      >
        <div className={classNames(pickerCls)}>
          <div className={classNames(`${pickerCls}-header`)}>
            <a
              className={classNames(`${pickerCls}-header-button`, `${pickerCls}-header-button-cancel`,)}
              onClick={handelCancel}
            >
              {locale.common.cancel}
            </a>
            {title && (
              <div className={classNames(`${pickerCls}-header-title`)}>
                {title}
              </div>
            )}
            <a
              className={classNames(
                `${pickerCls}-header-button`,
                `${pickerCls}-header-button-ok`,
              )}
              onClick={handleOk}
            >
              {locale.common.confirm}
            </a>
          </div>
          <div className={classNames(`${pickerCls}-body`)}>
            <PickerView
              columns={columns}
              labelInValue={labelInValue}
              value={value}
              onChange={(v) => {
                setInternalValue(v);
              }}
            />
          </div>
        </div>
      </Popup>
    );
  },
);
