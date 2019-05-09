import React from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import { Typography, Button, Card, message, Tooltip } from 'antd';
import { withRouter } from 'react-router-dom';
import ProductTag from 'components/ProductTag';

const { Text } = Typography;

const MouseOverWrapper = ({ product, reloadDescriptions, children }) => {
  if (!product) return children;
  return (
    <Tooltip placement="right" title="Tải lại thông tin cho sản phẩm này" onClick={reloadDescriptions}>
      {children}
    </Tooltip>
  );
};

function PreviewTitleNoRouter({ product, size, updateProduct, history, fetchedProducts }) {
  const reloadDescriptions = () => {
    const rawProduct = fetchedProducts.find(e => e.sku === product.sku);
    updateProduct(rawProduct);
  };

  return (
    <div className="d-flex justify-content-between" style={{ width: '100%' }}>
      <div className="py-1">
        <MouseOverWrapper {...{ product, reloadDescriptions }}>
          <Text strong>Preview</Text>
          <Text className="pl-4 custom-hover-blue custom-hover-strong">{product ? product.name : null}</Text>
        </MouseOverWrapper>
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

const mapStateToProps = state => ({
  fetchedProducts: state.products
});

const PreviewTitle = connect(mapStateToProps)(withRouter(PreviewTitleNoRouter));

function PreviewProductTag({ preview, updateProduct }) {
  const { size, product } = preview;
  return (
    <Card
      title={<PreviewTitle {...{ product, updateProduct, size }} />}
      type="inner"
      size="small"
      hoverable
      bodyStyle={{ height: 800, overflow: 'scroll' }}>
      {_.isEmpty(product) || _.isEmpty(size) ? null : <ProductTag {...{ size, product, updateProduct }} />}
    </Card>
  );
}

export default PreviewProductTag;
