import React from 'react';
import * as _ from 'lodash';
import { Typography, Button, Card } from 'antd';
import ProductTag from 'components/ProductTag';
const { Text } = Typography;

function PreviewTitle(props) {
  const { product } = props;
  return (
    <div className="d-flex justify-content-between" style={{ width: '100%' }}>
      <div className="py-1">
        <Text strong>Preview</Text>
        <Text className="pl-4">{product.name}</Text>
      </div>
      <Button
        href="/print"
        target="_blank"
        type="primary"
        style={{ width: 120 }}
        onClick={() => {
          localStorage.setItem('priceTagsToPrint', JSON.stringify(product));
        }}>
        In tem giá
      </Button>
    </div>
  );
}

function PreviewProductTag(props) {
  const { preview } = props;

  return (
    <Card
      title={<PreviewTitle product={preview.product} />}
      type="inner" size="small" hoverable
      bodyStyle={{ height: 800, overflow: 'scroll' }}>
      {_.isEmpty(preview.product) || _.isEmpty(preview.size) ? null : (
        <ProductTag size={preview.size} product={preview.product} />
      )}
    </Card>
  );
}

export default PreviewProductTag;
