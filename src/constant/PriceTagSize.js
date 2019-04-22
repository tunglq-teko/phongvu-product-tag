export function PriceTagSize(height, width) {
  return {
    height: height,
    width: width,
    toString: () => `${height/10}cm x ${width/10}cm`
  };
}

export const PriceTagSizes = [
  PriceTagSize(70, 100),
  PriceTagSize(100, 120),
  PriceTagSize(90, 100),
  PriceTagSize(68, 237)
];
