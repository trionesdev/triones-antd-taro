import classNames from 'classnames';
import React, { FC } from 'react';
import SafeArea from '../SafeArea';
import './style.scss';

export type ScaffoldProps = {
  appBar?: React.ReactNode;
  children?: React.ReactNode;
  bottomNavigationBar?: React.ReactNode;
};

export const Scaffold: FC<ScaffoldProps> = ({
  appBar,
  children,
  bottomNavigationBar,
}) => {
  const scaffoldCls = 'triones-antm-scaffold';
  return (
    <div className={classNames(scaffoldCls)}>
      {appBar && <SafeArea position={'top'}>{appBar}</SafeArea>}
      <div className={classNames(`${scaffoldCls}-body`)}>{children}</div>
      {bottomNavigationBar && (
        <SafeArea position={'bottom'}>{bottomNavigationBar}</SafeArea>
      )}
    </div>
  );
};
