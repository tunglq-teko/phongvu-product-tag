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
    title: 'Name',
    dataIndex: 'name'
  }
];

function ProductList({ skuList, setSelectedProducts }) {
  const [products, setProducts] = useState([]);
  skuList = skus.slice(0, 100);

  useEffect(() => {
    const skuChunks = splitArrayToChunks(skuList, 10);
    console.log(skuChunks);
    const fetch = async () => {
      let res = [];
      for (const skuChunk of skuChunks) {
        // eslint-disable-next-line no-loop-func
        fetchProducts(skuChunk).then(data => {
          res = res.concat(data);
          setProducts(res);
        });
      }
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
      scroll={{ x: false, y: 800 }}
      loading={products.length === 0 && skuList.length > 0}
      pagination={{
        position: 'top'
      }}
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
