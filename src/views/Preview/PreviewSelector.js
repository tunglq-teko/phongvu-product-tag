import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

function PreviewProduct(props) {
  const { selectedProducts, updatePreviewProduct } = props;
  const handleChange = key => {
    const index = selectedProducts.findIndex(e => e.key === key);
    updatePreviewProduct(selectedProducts[index]);
  };

  return (
    <Select defaultValue="Chọn sản phẩm" style={{ width: 300 }} onChange={handleChange}>
      {selectedProducts.map(product => (
        <Option key={product.key} value={product.key}>
          {product.name}
        </Option>
      ))}
    </Select>
  );
}

function PreviewSize(props) {
  const { updatePreviewSize, sizes } = props;
  const handleChange = index => {
    updatePreviewSize(sizes[index]);
  };

  return (
    <Select defaultValue="Chọn kích thước" style={{ width: 300 }} onChange={handleChange}>
      {sizes.map((size, index) => (
        <Option key={index} value={index}>
          {size.toString()}
        </Option>
      ))}
    </Select>
  );
}

export { PreviewProduct, PreviewSize };
