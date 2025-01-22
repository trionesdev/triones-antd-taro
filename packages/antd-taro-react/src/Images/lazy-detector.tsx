import { useInViewport } from 'ahooks';
import type { FC } from 'react';
import React, { useEffect, useRef } from 'react';

type Props = {
  onActive: () => void;
};

export const LazyDetector: FC<Props> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inViewport] = useInViewport(ref);

  useEffect(() => {
    if (inViewport) {
      props.onActive();
    }
  }, [inViewport]);

  return <div ref={ref} />;
};
