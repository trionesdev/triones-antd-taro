import React, { ReactNode } from 'react';

export interface IndexedStackProps {
  children: ReactNode[];
  activeIndex: number;
  className?: string;
  style?: React.CSSProperties;
}

const IndexedStack: React.FC<IndexedStackProps> = ({
  children,
  activeIndex = 0,
  className,
  style
}) => {
  // 确保 activeIndex 在有效范围内
  const validActiveIndex = Math.max(0, Math.min(activeIndex, children.length - 1));

  return (
    <div className={className} style={style}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) {
          return null;
        }

        return (
          <div
            key={index}
            style={{
              display: index === validActiveIndex ? 'block' : 'none',
              width: '100%',
              height: '100%'
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};

export { IndexedStack };
