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
  onOk?: (value: any[]) => void;
  onCancel?: () => void;
  onClose?: () => void;
};

export const Picker: FC<PickerProps> = React.memo(
  ({
     open,
     afterOpenChange,
     title,
     columns,
     labelInValue = false,
     value,
     onOk,
     onCancel,
     onClose,
   }) => {
    const {locale} = ConfigProvider.useConfig();
    const [internalValue, setInternalValue] = useState<any[]>([]);

    const handleClose = () => {

      onClose?.();
    };
    const handleOk = () => {
      onOk?.(internalValue);
      handleClose();
    };

    const handelCancel = () => {
      onCancel?.();
      handleClose();
    };


    return (
      <Popup
        open={open}
        onClose={() => {
          afterOpenChange?.(false);
        }}
        styles={{
          body: {
            borderTopLeftRadius: 6,
            borderTopRightRadius: 6,
          },
        }}
      >
        <div className={classNames(pickerCls)}>
          <div className={classNames(`${pickerCls}-header`)}>
            <a
              className={classNames(`${pickerCls}-header-button`)}
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
