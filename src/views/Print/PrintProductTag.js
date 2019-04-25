import React, { Fragment } from 'react';
import ProductTag from 'components/ProductTag';

function PrintProductTag({ printData, setPrintData }) {
  if (!printData) return null;
  // setPrintData(null);
  return (
    <Fragment>
      {printData.products.map((product, index) => (
        <ProductTag key={index} product={product} size={printData.size} />
      ))}
    </Fragment>
  );
}

export { PrintProductTag };
