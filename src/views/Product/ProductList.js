import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { fetchProducts, skus } from 'services/product';

const splitArrayToChunks = (arr, chunkSize) => {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    res.push(arr.slice(i, i + chunkSize));
  }
  return res;
};

const columns = [
  {
    title: 'sku',
    dataIndex: 'sku',
    width: '100px'
  },
  {
    title: 'Product name',
    dataIndex: 'name'
  }
];

function ProductList({ skuList, setSelectedProducts }) {
  const [products, setProducts] = useState([]);
  skuList = skus.slice(0, 100);

  useEffect(() => {
    const skuChunks = splitArrayToChunks(skuList, 10);

    const fetch = async () => {
      let fetching = [];
      for (const skuChunk of skuChunks) {
        fetching.push(fetchProducts(skuChunk))
      }
      let fetchedData = await Promise.all(fetching);
      let products = [].concat(...fetchedData);
      setProducts(products)
    };
    fetch();
  }, []);

  return (
    <Table
      rowSelection={{
        onChange: (selectedRowKeys, selectedRows) => {
          setSelectedProducts(selectedRows);
        }
      }}
      columns={columns}
      dataSource={products}
      bordered={true}
      scroll={{ x: false, y: 795 }}
      loading={products.length === 0 && skuList.length > 0}
      pagination={false}
      onRow={(record, rowIndex) => {
        return {
          onDoubleClick: event => {
            console.log(`Click on row ${rowIndex}`);
          }
        };
      }}
    />
  );
}

export default ProductList;
