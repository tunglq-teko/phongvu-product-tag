import React, { Fragment, useState } from 'react';
import { Typography, Col, Row } from 'antd';
import { PriceTagSizes } from 'constant/PriceTagSize';
import { PreviewProduct, PreviewSize } from './PreviewSelector';
import PreviewPriceTag from './PreviewPriceTag';
import {PriceTagSize} from 'constant/PriceTagSize';

const { Text } = Typography;

function PriceTagTab(props) {
  const { selectedProducts, setPriceTagsToPrint } = props;
  const [preview, setPreview] = useState({
    product: {
      key: 1, sku: '123213', name: 'lót chuột'
    },
    size: PriceTagSize(70, 100)
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
          <PreviewPriceTag preview={preview} setPriceTagsToPrint={setPriceTagsToPrint} />
        </Row>
      </Col>
    </Fragment>
  );
}

export default PriceTagTab;
