import React, { useState, Fragment } from 'react';
import { Col, Row, Typography } from 'antd';
import { PreviewProduct, PreviewSize } from './PreviewSelector';
import PreviewProductTag from './PreviewProductTag';
import {  PriceTagSizes } from 'constant/PriceTagSize';

const { Text } = Typography;

function Preview(props) {
  const { selectedProducts, setPriceTagsToPrint } = props;
  const [preview, setPreview] = useState({
    product: {},
    size: {}
  });

  const updatePreviewProduct = product => {
    setPreview({ ...preview, product });
  };

  const updatePreviewSize = size => {
    setPreview({ ...preview, size });
  };

  return (
    <Fragment>
      <Col className="row justify-content-between">
        <Col className="row ml-1">
          <Text strong className="pt-1 pr-2">
            Sản phẩm
          </Text>
          <PreviewProduct selectedProducts={selectedProducts} updatePreviewProduct={updatePreviewProduct} />
        </Col>
        <Col>
          <Text strong className="pt-1 pr-2">
            Kích thước
          </Text>
          <PreviewSize sizes={PriceTagSizes} updatePreviewSize={updatePreviewSize} />
        </Col>

        <Row className="mt-2" style={{ width: '105%' }}>
          <PreviewProductTag preview={preview} setPriceTagsToPrint={setPriceTagsToPrint} />
        </Row>
      </Col>
    </Fragment>
  );
}

export default Preview;
