import classNames from 'classnames';
import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import {
  DescriptionItem,
  DescriptionItemContent,
  DescriptionItemLabel,
} from './DescriptionItem';
import './style.scss';
import { DescriptionItemProps, cls } from './types';

type DescriptionsProps = {
  colon?: boolean;
  columns?: number;
  layout?: 'horizontal' | 'vertical';
  labelAlign?: 'left' | 'right';
  size?: 'small' | 'middle' | 'large';
  bordered?: boolean;
  labelWidth?: number;
  items: DescriptionItemProps[];
};

export const Descriptions: FC<PropsWithChildren<DescriptionsProps>> = ({
  children,
  colon = true,
  columns = 1,
  layout = 'horizontal',
  labelWidth,
  bordered = false,
  items = [],
}) => {
  const [gridTemplateColumns, setGridTemplateColumns] = useState<string>();

  useEffect(() => {
    if (layout === 'horizontal') {
      const templateColumns = [];
      if (bordered) {
        for (let i = 0; i < columns; i++) {
          templateColumns.push(
            `${labelWidth ? labelWidth + 'px' : 'minmax(0, 1fr)'} minmax(0, 1fr)`,
          );
        }
      } else {
        for (let i = 0; i < columns; i++) {
          templateColumns.push(`minmax(0, 1fr)`);
        }
      }
      setGridTemplateColumns(`${templateColumns.join(' ')}`);
    }
  }, [layout, labelWidth, columns]);

  const handleItemsRender = () => {
    if (children && Array.isArray(children)) {
    }

    if (layout === 'horizontal') {
      const elements: { span: number; element: React.ReactElement }[] = [];
      if (bordered) {
        items.forEach((item, index) => {
          const span =
            (item.span ?? 1) > columns * 2 - 1
              ? columns * 2 - 1
              : (item.span ?? 1);
          //region 当下一个字段的span 大于1的时候，需要考虑剩余的空间是否足够，如果不够，则当前行填充，另起一行
          if (span) {
            const countSpan = elements
              .map((item) => item.span)
              .reduce((acc, cur) => acc + cur, 0);
            const remainder = countSpan % (columns * 2);
            if (remainder !== 0 && remainder < span) {
              elements.push({
                span: columns * 2 - remainder,
                element: (
                  <div
                    style={{
                      gridColumnEnd: `span ${columns * 2 - remainder}`,
                      backgroundColor: 'white',
                    }}
                  />
                ),
              });
            }
          }
          //endregion
          elements.push({
            span: 1,
            element: <DescriptionItemLabel label={item.label} />,
          });
          elements.push({
            span: span,
            element: (
              <DescriptionItemContent span={span}>
                {item.children}
              </DescriptionItemContent>
            ),
          });
        });
      } else {
        items.forEach((item, index) => {
          const span = (item.span ?? 1) > columns ? columns : (item.span ?? 1);
          //region 当下一个字段的span 大于1的时候，需要考虑剩余的空间是否足够，如果不够，则当前行填充，另起一行
          if (span > 1) {
            const countSpan = elements
              .map((item) => item.span)
              .reduce((acc, cur) => acc + cur, 0);
            const remainder = countSpan % columns;
            if (remainder !== 0 && remainder < span) {
              elements.push({
                span: columns - remainder,
                element: (
                  <div
                    style={{
                      gridColumnEnd: `span ${columns - remainder}`,
                      backgroundColor: 'white',
                    }}
                  />
                ),
              });
            }
          }
          //endregion

          elements.push({
            span: span,
            element: (
              <DescriptionItem label={item.label} span={span}>
                {item.children}
              </DescriptionItem>
            ),
          });
        });
      }
      return elements.map((item: any) => item.element);
    } else if (layout === 'vertical') {
      const elements: {
        span: number;
        label: React.ReactElement;
        children: React.ReactElement;
      }[][] = [];

      if (bordered) {
      } else {
        items.forEach((item, index) => {
          const span = (item.span ?? 1) > columns ? columns : (item.span ?? 1);
          if (elements.length<1){
            elements.push([]);
          }
          const rowElements = elements[elements.length - 1];
          const countSpan = rowElements
            .map((item) => item.span)
            .reduce((acc, cur) => acc + cur, 0);
          if (countSpan + span > columns) {
            elements[elements.length - 1].push({
              span: columns - countSpan,
              label: <DescriptionItemLabel span={columns - countSpan} />,
              children: <DescriptionItemContent span={columns - countSpan} />,
            });
            elements.push([
              {
                span,
                label: <DescriptionItemLabel span={span} label={item.label} />,
                children: <DescriptionItemContent span={span} >{item.children}</DescriptionItemContent>,
              },
            ]);
          }else {
            elements[elements.length - 1].push({
              span,
              label: <DescriptionItemLabel span={span} label={item.label}  />,
              children: <DescriptionItemContent span={span}>{item.children}</DescriptionItemContent>,
            });
          }
        });
      }
      debugger
      return elements.map((rowElements)=>{
        const labels = rowElements.map((item)=>{
          return item.label;
        });
        const contents = rowElements.map((item)=>{
          return item.children;
        });
        return [...labels,...contents]
      })
    }
    return <></>;
  };

  return (
    <div className={classNames(cls, { [`${cls}-bordered`]: bordered })}>
      <div
        className={classNames(`${cls}-view`)}
        style={{ gridTemplateColumns: gridTemplateColumns }}
      >
        {handleItemsRender()}
      </div>
    </div>
  );
};
