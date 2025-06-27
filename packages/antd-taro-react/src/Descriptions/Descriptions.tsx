import classNames from 'classnames';
import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {
    DescriptionItem,
    DescriptionItemContent,
    DescriptionItemLabel,
} from './DescriptionItem';
import './style.scss';
import {DescriptionItemProps, cls} from './types';

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


    const handleBuildCells=(items: DescriptionItemProps[],itemMode:boolean=false)=>{
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
                elements.push([
                    {
                        span,
                        label: <DescriptionItemLabel label={item.label}/>,
                        children: <DescriptionItemContent>{item.children}</DescriptionItemContent>,
                    },
                ]);
            } else {
                if (countSpan + span > columns) {
                    rowElements[rowElements.length - 1].span = rowElements[rowElements.length - 1].span + (columns - countSpan);
                    elements.push([
                        {
                            span,
                            label: <DescriptionItemLabel label={item.label}/>,
                            children: <DescriptionItemContent>{item.children}</DescriptionItemContent>,
                        },
                    ]);
                } else {
                    rowElements.push({
                        span,
                        label: <DescriptionItemLabel label={item.label}/>,
                        children: <DescriptionItemContent>{item.children}</DescriptionItemContent>,
                    });
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
            const elements: {
                span: number;
                label?: React.ReactElement;
                children: React.ReactElement;
            }[][] = [[]];
            if (bordered) {
                items.forEach((item, index) => {
                    const span = (item.span ?? 1) > columns ? columns : (item.span ?? 1);
                    const rowElements = elements[elements.length - 1];
                    const countSpan = rowElements
                        .map((item) => item.span)
                        .reduce((acc, cur) => acc + cur, 0);
                    if (countSpan === columns) {
                        elements.push([
                            {
                                span,
                                label: <DescriptionItemLabel label={item.label}/>,
                                children: <DescriptionItemContent>{item.children}</DescriptionItemContent>,
                            },
                        ]);
                    } else {
                        if (countSpan + span > columns) {
                            rowElements[rowElements.length - 1].span = rowElements[rowElements.length - 1].span + (columns - countSpan);
                            elements.push([
                                {
                                    span,
                                    label: <DescriptionItemLabel label={item.label}/>,
                                    children: <DescriptionItemContent>{item.children}</DescriptionItemContent>,
                                },
                            ]);
                        } else {
                            rowElements.push({
                                span,
                                label: <DescriptionItemLabel label={item.label}/>,
                                children: <DescriptionItemContent>{item.children}</DescriptionItemContent>,
                            });
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
                return elements.map((rowElements: any) => {
                    return rowElements.map((cellElement: any) => {
                        return [React.cloneElement(cellElement.label, {}), React.cloneElement(cellElement.children, {span: (cellElement.span * 2 - 1)})]
                    })
                });
            } else {
                items.forEach((item, index) => {
                    const span = (item.span ?? 1) > columns ? columns : (item.span ?? 1);
                    const rowElements = elements[elements.length - 1];
                    const countSpan = rowElements
                        .map((item) => item.span)
                        .reduce((acc, cur) => acc + cur, 0);
                    if (countSpan === columns) {
                        elements.push([
                            {
                                span,
                                children: <DescriptionItem label={item.label}>{item.children}</DescriptionItem>,
                            },
                        ]);
                    } else {
                        if (countSpan + span > columns) {
                            rowElements[rowElements.length - 1].span = rowElements[rowElements.length - 1].span + (columns - countSpan);
                            elements.push([
                                {
                                    span,
                                    children: <DescriptionItem label={item.label}>{item.children}</DescriptionItem>,
                                },
                            ]);
                        } else {
                            rowElements.push({
                                span,
                                children: <DescriptionItem label={item.label}>{item.children}</DescriptionItem>,
                            });
                        }
                    }
                    if (index === items.length - 1) {
                        const rowElements = elements[elements.length - 1];
                        const countSpan = rowElements
                            .map((item) => item.span)
                            .reduce((acc, cur) => acc + cur, 0);
                        rowElements[rowElements.length - 1].span = rowElements[rowElements.length - 1].span + (columns - countSpan);
                    }
                    debugger

                });
                return elements.map((rowElements: any) => {
                    return rowElements.map((cellElement: any) => {
                        return React.cloneElement(cellElement.children, {span: (cellElement.span)})
                    })
                });

            }
        } else if (layout === 'vertical') {
            const elements: {
                span: number;
                label: React.ReactElement;
                children: React.ReactElement;
            }[][] = [[]];

            if (bordered) {
            } else {
                items.forEach((item, index) => {
                    const span = (item.span ?? 1) > columns ? columns : (item.span ?? 1);
                    const rowElements = elements[elements.length - 1];
                    const countSpan = rowElements
                        .map((item) => item.span)
                        .reduce((acc, cur) => acc + cur, 0);
                    if (countSpan === columns) {
                        elements.push([
                            {
                                span,
                                label: <DescriptionItemLabel label={item.label}/>,
                                children: <DescriptionItemContent>{item.children}</DescriptionItemContent>,
                            },
                        ]);
                    } else {
                        if (countSpan + span > columns) {
                            rowElements[rowElements.length - 1].span = rowElements[rowElements.length - 1].span + (columns - countSpan);
                            elements.push([
                                {
                                    span,
                                    label: <DescriptionItemLabel label={item.label}/>,
                                    children: <DescriptionItemContent>{item.children}</DescriptionItemContent>,
                                },
                            ]);
                        } else {
                            rowElements.push({
                                span,
                                label: <DescriptionItemLabel label={item.label}/>,
                                children: <DescriptionItemContent>{item.children}</DescriptionItemContent>,
                            });
                        }
                    }
                    if (index === items.length - 1) {
                        const rowElements = elements[elements.length - 1];
                        const countSpan = rowElements
                            .map((item) => item.span)
                            .reduce((acc, cur) => acc + cur, 0);
                        rowElements[rowElements.length - 1].span = rowElements[rowElements.length - 1].span + (columns - countSpan);
                    }
                });
            }
            debugger
            return elements.map((rowElements) => {
                const labels = rowElements.map((item) => {
                    return React.cloneElement(item.label, {span: item.span});
                });
                const contents = rowElements.map((item) => {
                    return React.cloneElement(item.children, {span: item.span});
                });
                return [...labels, ...contents]
            })
        }
        return <></>;
    };

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
