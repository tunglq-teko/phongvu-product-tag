import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import ProductTag from 'components/ProductTag';
import { splitArrayToChunks } from 'utils';

function Page({ size, products }) {
  return (
    <div className="d-flex flex-wrap justify-content-center" style={{ pageBreakAfter: 'always', pointerEvents: 'none' }}>
      {products.map(product => (
        <div
          className="m-1 p-0"
          key={product.key}>
          <ProductTag {...{ product, size, rotate: size.rotation }} />
        </div>
      ))}
    </div>
  );
}

class PrintProductTag extends React.Component {
  render() {
    const { products, size } = this.props;
    const itemsPerPage = size ? size.itemsPerPage : null;
    const productChunks = splitArrayToChunks(products, itemsPerPage);
    return (
      <Fragment>
        {productChunks.map((productChunk, index) => (
          <Page key={index} products={productChunk} size={size} />
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  products: state.print.products,
  size: state.print.size
});

export default connect(mapStateToProps)(PrintProductTag);
