import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import ProductList from 'views/Product/ProductList';
import Preview from 'views/Preview';

const { Header, Content } = Layout;

function DefaultLayout({location, history, printData, setPrintData}) {
  const params = new URLSearchParams(location.search);
  const skuQueries = params.get("sku");
  const skuList = skuQueries ? skuQueries.split(',') : [];

  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    if (printData) {
      history.push("/print");
      // return () => {
      //   setPrintData(null);
      // }
    }
  }, [printData]);

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
          <div className="mt-5" style={{ width: '30%' }}>
            <ProductList {...{skuList, setSelectedProducts}} />
          </div>
          <div className="mt-2 ml-4 pb-0" style={{ width: '67%', height: '100vh' }}>
            <Preview {...{selectedProducts, setSelectedProducts, setPrintData}} />
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default DefaultLayout;
