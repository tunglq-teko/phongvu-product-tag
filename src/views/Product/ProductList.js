import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
import { PRINT_PRODUCTS_UPDATE } from 'actions/types';

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

class ProductList extends React.Component {
  render() {
    const { products, skuList, printProducts } = this.props;
    return (
      <Table
        rowSelection={{
          selectedRowKeys: printProducts.map(product => product.sku),
          onChange: (selectedRowKeys, selectedRows) => {
            const updatedPrintProducts = selectedRows.map(product => {
              const index = printProducts.findIndex(e => e.key === product.key);
              return isNaN(index) ? printProducts[index] : product;
            });
            this.props.updatePrintProducts(updatedPrintProducts);
          },
          fixed: true,
          hideDefaultSelections: true
        }}
        columns={columns}
        dataSource={products}
        bordered={true}
        scroll={{ x: false, y: 795 }}
        loading={products.length === 0 && skuList.length > 0}
        pagination={false}
      />
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  printProducts: state.print.products
});

const mapDispatchToProps = dispatch => ({
  updatePrintProducts: products => dispatch({ type: PRINT_PRODUCTS_UPDATE, data: products })
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
