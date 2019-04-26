import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

function PreviewProduct({ selectedProducts, previewProduct, updatePreviewProduct }) {
  const handleChange = key => {
    const index = selectedProducts.findIndex(e => e.key === key);
    updatePreviewProduct(selectedProducts[index]);
  };

  if (selectedProducts.length && !previewProduct) {
    const {key, name} = selectedProducts[0];
    handleChange(key);
    return (
      <Select value={name} style={{ width: 300 }}>
      </Select>
    );
  }

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
