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
  PriceTagSize(70, 100, 6),
  PriceTagSize(100, 120, 4, true),
  PriceTagSize(90, 100, 6),
  PriceTagSize(68, 237, 3, true)
];
