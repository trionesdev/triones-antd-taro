export type SizeType = 'small' | 'middle' | 'large' | undefined;

export type BoundingClientRectType = {
  top: number;
  left: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
}

export type Col={
  flex?: number | string;
  span?: number;
}
