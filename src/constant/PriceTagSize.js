export function PriceTagSize(height, width, itemsPerPage = 1, rotation = false) {
  return {
    height: height,
    width: width,
    itemsPerPage: itemsPerPage,
    rotation: rotation,
    toString: () => `${height/10}cm x ${width/10}cm`
  };
}

export const PriceTagSizes = [
  PriceTagSize(70, 100, 8),
  PriceTagSize(100, 120, 6),
  PriceTagSize(90, 100, 8),
  PriceTagSize(68, 237, 3, true)
];
