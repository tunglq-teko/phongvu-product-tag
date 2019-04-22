import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import ProductList from 'views/Product/ProductList';
import PriceTagTab from 'views/PriceTag/PriceTagTab';
import { fetchProducts } from 'service/product';
const { Header, Content } = Layout;

function DefaultLayout(props) {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const fetchedProducts = await fetchProducts();
      return fetchedProducts;
    };
    fetch().then(fetchedProducts => {
      setProducts(fetchedProducts);
    });
  }, []);
  console.log('DEBUG', products)
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <img alt={'phongvu-icon'} src={require('../asset/phongvu-icon.png')} style={{ height: '80%' }} />
        <h3 style={{ display: 'inline', fontSize: '30px', color: 'white' }} className="mx-4 align-middle">
          In tem giá sản phẩm Phong Vũ
        </h3>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 64, height: '100vh', backgroundColor: 'white' }}>
        <div className="container-fluid row m-2">
          <div className="p-4" style={{ width: '30%' }}>
            <ProductList data={products} setSelectedProducts={setSelectedProducts} />
          </div>
          <div className="ml-4" style={{ width: '67%', height: '100vh' }}>
            <PriceTagTab selectedProducts={selectedProducts} />
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default DefaultLayout;
