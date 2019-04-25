import React from 'react';
import ProductTag from 'components/ProductTag';

function PrintProductTag({ printData, setPrintData }) {
  if (!printData) return null;
  // setPrintData(null);
  return (
    <div className="d-flex flex-wrap p-1" style={{ width: '210mm' }}>
      {printData.products.map((product, index) => (
        <ProductTag className="my-1" key={index} product={product} size={printData.size} />
      ))}
    </div>
  );
}

export { PrintProductTag };
