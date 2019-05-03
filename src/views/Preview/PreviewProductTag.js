import React from 'react';
import * as _ from 'lodash';
import { Typography, Button, Card, message } from 'antd';
import { withRouter } from 'react-router-dom';
import ProductTag from 'components/ProductTag';

const { Text } = Typography;

function PreviewTitleNoRouter({ product, size, history }) {
  return (
    <div className="d-flex justify-content-between" style={{ width: '100%' }}>
      <div className="py-1">
        <Text strong>Preview</Text>
        <Text className="pl-4">{product ? product.name : null}</Text>
      </div>
      <Button
        type="primary"
        style={{ width: 120 }}
        onClick={() => {
          if (!size) {
            message.error('Chọn kích thước trước khi in!');
          } else {
            history.push('/print');
          }
        }}>
        In tem giá
      </Button>
    </div>
  );
}

const PreviewTitle = withRouter(PreviewTitleNoRouter);

function PreviewProductTag({ preview, updateProduct }) {
  const { size, product } = preview;
  return (
    <Card
      title={<PreviewTitle product={product} size={size} />}
      type="inner"
      size="small"
      hoverable
      bodyStyle={{ height: 800, overflow: 'scroll' }}>
      {_.isEmpty(product) || _.isEmpty(size) ? null : <ProductTag {...{ size, product, updateProduct }} />}
    </Card>
  );
}

export default PreviewProductTag;
