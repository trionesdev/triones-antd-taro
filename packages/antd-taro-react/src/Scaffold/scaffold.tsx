import classNames from 'classnames';
import React, {FC} from 'react';
import SafeArea from '../SafeArea';
import './style.scss';

export type ScaffoldProps = {
  className?: string;
  style?: React.CSSProperties;
  appBar?: React.ReactNode;
  children?: React.ReactNode;
  bottomNavigationBar?: React.ReactNode;
};

export const Scaffold: FC<ScaffoldProps> = ({
                                              className,
                                              style,
                                              appBar,
                                              children,
                                              bottomNavigationBar,
                                            }) => {
  const scaffoldCls = 'triones-antm-scaffold';
  return (
    <div className={classNames(scaffoldCls, className)} style={style}>
      {appBar && <SafeArea position={'top'}>{appBar}</SafeArea>}
      <div className={classNames(`${scaffoldCls}-body`)}>{children}</div>
      <SafeArea position={'bottom'}>{bottomNavigationBar}</SafeArea>
    </div>
  );
};
