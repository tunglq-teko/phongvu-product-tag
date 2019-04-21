import React, { useState } from 'react';
import ProductList from 'views/Product/ProductList';
import PriceTagTab from 'views/PriceTag/PriceTagTab';

function DefaultLayout() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  return (
    <div className='container-fluid row m-2'>
      <div className='p-4' style={{ width: '30%' }}>
        <ProductList setSelectedProducts={setSelectedProducts}/>
      </div>
      <div className="ml-4" style={{ width: '67%', height: '100vh' }}>
        <PriceTagTab selectedProducts={selectedProducts}/>
      </div>
    </div>
  );
}

export default DefaultLayout;
