import React, { useState } from 'react';
import { Dropdown, Menu, Icon } from 'antd';

function PriceTagTab(props) {
  const { selectedProducts } = props;
  const [selectedProduct, setSelectedProduct] = useState('Chọn sản phẩm để xem preview');
  const menu = (
    <Menu>
      {selectedProducts.map(product => {
        return <Menu.Item onClick={() => setSelectedProduct(product.name)}>{product.name}</Menu.Item>;
      })}
    </Menu>
  );

  return (
    <div>
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" href="#">
          {selectedProduct} <Icon type="down" />
        </a>
      </Dropdown>
      <div className='bg-info' style={{height: 800, width: '100%'}}></div>
    </div>

  );
}

export default PriceTagTab;
