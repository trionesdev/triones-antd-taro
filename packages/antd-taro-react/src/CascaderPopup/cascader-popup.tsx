import classNames from 'classnames';
import {isEqual} from 'lodash-es';
import React, {FC, useEffect, useRef} from 'react';
import CascaderView from '../CascaderView';
import ConfigProvider from '../ConfigProvider';
import Popup from '../Popup';
import './style.scss';

const cascaderPopupCls = 'triones-antm-cascader-popup';

export type CascaderPopupProps = {
  className?: string;
  style?: React.CSSProperties;
  open?: boolean;
  afterOpenChange?: (open: boolean) => void;
  title?: React.ReactNode;
  options?: any[];
  /**
   * @description 是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 string 变为 { value: string, label: ReactNode } 的格式
   * @default false
   */
  labelInValue?: boolean;
  fieldNames?: {
    value?: string;
    label?: string;
    children?: string;
  };
  columnsCount?: number;
  value?: any[];
  onOk?: (value?: any[]) => void;
  onCancel?: () => void;
  onClose?: () => void;
  asyncRequest?: (parentValue?: any) => Promise<any>;
};

export const CascaderPopup: FC<CascaderPopupProps> = React.memo(
  ({
     className,
     style,
     open = false,
     afterOpenChange,
     title,
     options,
     labelInValue = false,
     fieldNames,
     columnsCount,
     value,
     onOk,
     onCancel,
     onClose,
     asyncRequest,
   }) => {
    const {locale} = ConfigProvider.useConfig();

    const internalValueRf = useRef(value);

    const handleClose = () => {
      onClose?.();
    };
    const handleOk = () => {
      onOk?.(internalValueRf.current);
    };

    const handelCancel = () => {
      onCancel?.();
      handleClose();
    };


    useEffect(() => {
      if (value === undefined) {
        return;
      }
      if (isEqual(value, internalValueRf.current)) {
        return;
      }
      internalValueRf.current = value;
    }, [value]);

    return (
      <Popup
        open={open}
        onClose={handleClose}
        overlayClosable={true}
        styles={{
          body: {
            borderTopLeftRadius: 6,
            borderTopRightRadius: 6,
          },
        }}
      >
        <div className={classNames(cascaderPopupCls, className)} style={style}>
          <div className={classNames(`${cascaderPopupCls}-header`)}>
            <a
              className={classNames(`${cascaderPopupCls}-header-button`, `${cascaderPopupCls}-header-button-cancel`,)}
              onClick={handelCancel}
            >
              {locale.common.cancel}
            </a>
            {title && (
              <div className={classNames(`${cascaderPopupCls}-header-title`)}>
                {title}
              </div>
            )}
            <a
              className={classNames(
                `${cascaderPopupCls}-header-button`,
                `${cascaderPopupCls}-header-button-ok`,
              )}
              onClick={handleOk}
            >
              {locale.common.confirm}
            </a>
          </div>
          <div className={classNames(`${cascaderPopupCls}-body`)}>
            <CascaderView
              // open={ open}
              fieldNames={fieldNames}
              options={options}
              labelInValue={labelInValue}
              columnsCount={columnsCount}
              value={value}
              onChange={(newVal) => {
                internalValueRf.current = newVal;
              }}
              asyncRequest={asyncRequest}
              style={{height: '100%'}}
            />
          </div>
        </div>
      </Popup>
    );
  },
);
