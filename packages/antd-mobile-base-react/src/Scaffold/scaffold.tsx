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
  bottomSafeArea?: boolean;
};

export const Scaffold: FC<ScaffoldProps> = ({
                                              className,
                                              style,
                                              appBar,
                                              children,
                                              bottomNavigationBar,
                                              bottomSafeArea = true,
                                            }) => {
  const scaffoldCls = 'triones-antm-scaffold';
  return (
    <div className={classNames(scaffoldCls, className)} style={style}>
      {appBar}
      <div className={classNames(`${scaffoldCls}-body`)}>{children}</div>
      {bottomNavigationBar}
    </div>
  );
};
