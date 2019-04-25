import React from 'react';
import * as _ from 'lodash';
import { Typography, Button, Card, message } from 'antd';
import ProductTag from 'components/ProductTag';

const { Text } = Typography;

function PreviewTitle({ product, size }) {
  return (
    <div className="d-flex justify-content-between" style={{ width: '100%' }}>
      <div className="py-1">
        <Text strong>Preview</Text>
        <Text className="pl-4">{product ? product.name : null}</Text>
      </div>
      <Button type="primary" style={{ width: 120 }} href="/print"
        onClick={(e) => {
          if (!size) {
            e.preventDefault();
            message.error('Chọn kích thước trước khi in!');
          }
        }}>
        In tem giá
      </Button>
    </div>
  );
}

function PreviewProductTag({ preview, updateProduct }) {
  const { size, product } = preview;
  return (
    <Card
      title={<PreviewTitle product={product} size={size} />}
      type="inner"
      size="small"
      hoverable
      bodyStyle={{ height: 800, overflow: 'scroll' }}>
      {_.isEmpty(product) || _.isEmpty(size) ? null : (
        <ProductTag  {...{ size, product, updateProduct }} />
      )}
    </Card>
  );
}

export default PreviewProductTag;
