import React from 'react';
import * as _ from 'lodash';
import { Typography, Button, Card } from 'antd';
import ProductTag from 'components/ProductTag';

const { Text } = Typography;

function PreviewTitle({ product, saveToPrint }) {
  return (
    <div className="d-flex justify-content-between" style={{ width: '100%' }}>
      <div className="py-1">
        <Text strong>Preview</Text>
        <Text className="pl-4">{product.name}</Text>
      </div>
      <Button type="primary" style={{ width: 120 }} onClick={saveToPrint}>
        In tem giá
      </Button>
    </div>
  );
}

function PreviewProductTag({ preview, updateProduct, saveToPrint }) {
  return (
    <Card
      title={<PreviewTitle product={preview.product} saveToPrint={saveToPrint} />}
      type="inner"
      size="small"
      hoverable
      bodyStyle={{ height: 800, overflow: 'scroll' }}>
      {_.isEmpty(preview.product) || _.isEmpty(preview.size) ? null : (
        <ProductTag size={preview.size} product={preview.product} updateProduct={updateProduct} />
      )}
    </Card>
  );
}

export default PreviewProductTag;
