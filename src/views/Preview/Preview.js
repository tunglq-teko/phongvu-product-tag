import React, { useState, Fragment, useEffect } from 'react';
import { Col, Row, Typography } from 'antd';
import { connect } from 'react-redux';
import { PreviewProductSelector, PreviewSizeSelector } from './Selectors';
import PreviewProductTag from './PreviewProductTag';
import { PriceTagSizes } from 'constant/PriceTagSize';
import { PRINT_SIZE_UPDATE, PRINT_PRODUCTS_UPDATE } from 'actions/types';

const { Text } = Typography;

function Preview({ size, updateSize, products, updateProducts }) {
  const [previewProduct, setPreviewProduct] = useState();
  const [reset, forceReset] = useState(1);
  useEffect(() => {
    if (previewProduct && products.findIndex(e => e.sku === previewProduct.sku) === -1) {
      setPreviewProduct(null);
      forceReset(-reset);
    }
  }, [products]);

  const updatePreviewProduct = product => {
    let index = products.findIndex(element => element.name === product.name);
    let updated = products.slice();
    updated[index] = product;
    setPreviewProduct(product);
    updateProducts(updated);
  };

  return (
    <Fragment>
      <Col className="row justify-content-between">
        <Col className="row ml-1">
          <Text strong className="pt-1 pr-2">
            Sản phẩm
          </Text>
          <PreviewProductSelector
            key={reset}
            selectedProducts={products}
            previewProduct={previewProduct}
            updatePreviewProduct={setPreviewProduct}
          />
        </Col>
        <Col>
          <Text strong className="pt-1 pr-2">
            Kích thước
          </Text>
          <PreviewSizeSelector sizes={PriceTagSizes} updatePreviewSize={updateSize} selectedSize={size}/>
        </Col>

        <Row className="mt-2" style={{ width: '105%' }}>
          <PreviewProductTag preview={{ size: size, product: previewProduct }} updateProduct={updatePreviewProduct} />
        </Row>
      </Col>
    </Fragment>
  );
}

const mapStateToProps = state => ({
  size: state.print.size,
  products: state.print.products
});

const mapDispatchToProps = dispatch => ({
  updateSize: size => dispatch({ type: PRINT_SIZE_UPDATE, data: size }),
  updateProducts: products => dispatch({ type: PRINT_PRODUCTS_UPDATE, data: products })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Preview);
