import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import ProductTag from 'components/ProductTag';
import { splitArrayToChunks } from 'utils';

function Page({ size, products }) {
  return (
    <div className="page-to-print d-flex flex-wrap">
      {products.map(product => (
        <div key={product.key} style={{ padding: 0, margin: '0.5mm' }}>
          <ProductTag {...{ product, size, rotate: size.rotation }} />
        </div>
      ))}
    </div>
  );
}

class PrintProductTag extends React.Component {
  render() {
    const { products, size, history } = this.props;
    if (products.length === 0) history.push('/');
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
