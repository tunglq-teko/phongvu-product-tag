import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

function PreviewProductSelector({ selectedProducts, previewProduct, updatePreviewProduct }) {
  const handleChange = key => {
    const index = selectedProducts.findIndex(e => e.key === key);
    updatePreviewProduct(selectedProducts[index]);
  };

  if (selectedProducts.length && !previewProduct) {
    const { key, name } = selectedProducts[0];
    handleChange(key);
    return <Select value={name} style={{ width: 500 }} />;
  }

  return (
    <Select defaultValue="Chọn sản phẩm" style={{ width: 500 }} onChange={handleChange}>
      {selectedProducts.map(product => (
        <Option key={product.key} value={product.key}>
          {product.name}
        </Option>
      ))}
    </Select>
  );
}

function PreviewSizeSelector({ updatePreviewSize, sizes, selectedSize }) {
  const handleChange = index => {
    updatePreviewSize(sizes[index]);
  };
  return (
    <Select
      defaultValue={(selectedSize ? selectedSize.toString() : null) || 'Chọn kích thước'}
      style={{ width: 300 }}
      onChange={handleChange}>
      {sizes.map((size, index) => (
        <Option key={index} value={index}>
          {size.toString()}
        </Option>
      ))}
    </Select>
  );
}

export { PreviewSizeSelector, PreviewProductSelector };
