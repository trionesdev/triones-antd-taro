import classNames from 'classnames';
import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {
  DescriptionItem,
  DescriptionItemContent,
  DescriptionItemLabel,
} from './DescriptionItem';
import './style.scss';
import {DescriptionItemProps, cls, DescriptionsProps} from './types';


export const Descriptions: FC<PropsWithChildren<DescriptionsProps>> = ({
                                                                         children,
                                                                         styles,
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


  const handleBuildCells = (items: DescriptionItemProps[], itemMode: boolean = false) => {
    const elements: {
      span: number;
      label?: React.ReactElement;
      children: React.ReactElement;
    }[][] = [[]];
    items.forEach((item, index) => {
      const span = (item.span ?? 1) > columns ? columns : (item.span ?? 1);
      const rowElements = elements[elements.length - 1];
      const countSpan = rowElements
        .map((item) => item.span)
        .reduce((acc, cur) => acc + cur, 0);
      if (countSpan === columns) {
        if (itemMode) {
          elements.push([
            {
              span,
              children: <DescriptionItem style={styles?.item}
                                         styles={{label: styles?.label, content: styles?.content}}
                                         labelWidth={labelWidth}
                                         label={item.label} colon={colon}>{item.children}</DescriptionItem>,
            },
          ]);
        } else {
          elements.push([
            {
              span,
              label: <DescriptionItemLabel style={styles?.label} labelWidth={labelWidth} label={item.label}
                                           colon={colon}/>,
              children: <DescriptionItemContent style={styles?.content}>{item.children}</DescriptionItemContent>,
            },
          ]);
        }
      } else {
        if (countSpan + span > columns) {
          rowElements[rowElements.length - 1].span = rowElements[rowElements.length - 1].span + (columns - countSpan);
          if (itemMode) {
            elements.push([
              {
                span,
                children: <DescriptionItem style={styles?.item}
                                           styles={{label: styles?.label, content: styles?.content}}
                                           labelWidth={labelWidth}
                                           label={item.label} colon={colon}>{item.children}</DescriptionItem>,
              },
            ]);
          } else {
            elements.push([
              {
                span,
                label: <DescriptionItemLabel style={styles?.label} labelWidth={labelWidth} label={item.label}
                                             colon={colon}/>,
                children: <DescriptionItemContent style={styles?.content}>{item.children}</DescriptionItemContent>,
              },
            ]);
          }
        } else {
          if (itemMode) {
            elements.push([
              {
                span,
                children: <DescriptionItem style={styles?.item}
                                           styles={{label: styles?.label, content: styles?.content}}
                                           labelWidth={labelWidth}
                                           label={item.label} colon={colon}>{item.children}</DescriptionItem>,
              },
            ]);
          } else {
            rowElements.push({
              span,
              label: <DescriptionItemLabel style={styles?.label} labelWidth={labelWidth} label={item.label}
                                           colon={colon}/>,
              children: <DescriptionItemContent style={styles?.content}>{item.children}</DescriptionItemContent>,
            });
          }
        }
      }
      if (index === items.length - 1) {
        const rowElements = elements[elements.length - 1];
        const countSpan = rowElements
          .map((item) => item.span)
          .reduce((acc, cur) => acc + cur, 0);
        rowElements[rowElements.length - 1].span = rowElements[rowElements.length - 1].span + (columns - countSpan);
      }
    })
    return elements;
  }

  const handleItemsRender = () => {
    if (children && Array.isArray(children)) {
    }
    if (layout === 'horizontal') {
      let elements: {
        span: number;
        label?: React.ReactElement;
        children: React.ReactElement;
      }[][] = [[]];
      if (bordered) {
        elements = handleBuildCells(items, false);
        return elements.map((rowElements: any) => {
          return rowElements.map((cellElement: any) => {
            return [React.cloneElement(cellElement.label, {key: cellElement.label.key}), React.cloneElement(cellElement.children, {
              key: cellElement.children.key,
              span: (cellElement.span * 2 - 1)
            })]
          })
        });
      } else {
        elements = handleBuildCells(items, true);
        return elements.map((rowElements: any) => {
          return rowElements.map((cellElement: any) => {
            return React.cloneElement(cellElement.children, {key: cellElement.children.key, span: (cellElement.span)})
          })
        });

      }
    } else if (layout === 'vertical') {
      let elements: {
        span: number;
        label?: React.ReactElement;
        children: React.ReactElement;
      }[][] = [[]];

      if (bordered) {
      } else {
        elements = handleBuildCells(items, false);
        return elements.map((rowElements) => {
          const labels = rowElements.map((item) => {
            return React.cloneElement(item.label!, {key: item.children.key, span: item.span});
          });
          const contents = rowElements.map((item) => {
            return React.cloneElement(item.children, {key: item.children.key, span: item.span});
          });
          return [...labels, ...contents]
        })
      }
      return <></>;
    }
  }

  return (
    <div className={classNames(cls, {[`${cls}-bordered`]: bordered})}>
      <div
        className={classNames(`${cls}-view`)}
        style={{gridTemplateColumns: gridTemplateColumns}}
      >
        {handleItemsRender()}
      </div>
    </div>
  );
};
