import React from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import ProductList from 'views/Product/ProductList';
import { PRODUCTS_FETCHED } from 'actions/types';
import { fetchProductsByChunks } from 'services/product';
import { skus } from 'services/product';
import Preview from 'views/Preview';

const { Header, Content } = Layout;

class DefaultLayout extends React.Component {
  state = {
    skuList: []
  }

  componentDidMount() {
    const params = new URLSearchParams(this.props.location.search);
    const skuQueries = params.get("sku");
    if (skuQueries) {
      this.setState({ skuList: skuQueries.split(',') });
    } else {
      this.setState({ skuList: skus.slice(0, 150) });
    }
  }

  componentDidUpdate() {
    fetchProductsByChunks(this.state.skuList)
      .then(products => {
        this.props.fetchProducts(products);
      });
  }

  render() {
    return (
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <img alt={'phongvu-icon'} src={require('../asset/phongvu-icon.png')} style={{ height: '80%' }} />
          <h3 style={{ display: 'inline', fontSize: '30px', color: 'white' }} className="mx-4 align-middle">
            In tem giá sản phẩm Phong Vũ
          </h3>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64, height: '100vh', backgroundColor: 'white' }}>
          <div className="container-fluid row m-2">
            <div className="mt-5" style={{ width: '30%' }}>
              <ProductList skuList={this.state.skuList} />
            </div>
            <div className="mt-2 ml-4 pb-0" style={{ width: '67%', height: '100vh' }}>
              <Preview />
            </div>
          </div>
        </Content>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchProducts: products => dispatch({ type: PRODUCTS_FETCHED, data: products })
})

export default connect(null, mapDispatchToProps)(DefaultLayout);
