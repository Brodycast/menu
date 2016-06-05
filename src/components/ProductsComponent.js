'use strict';

import React from 'react';
import ProductComponent from './ProductComponent';
import firebase from '../database';

class ProductsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentWillMount() {
    this.menuRef = firebase.database().ref('menu');
    this.listenForProducts();
  }

  componentWillUmount() {
    this.menuRef.off();
  }

  listenForProducts() {
    this.menuRef.on('value', (snap) => {
      let _products = [];
      snap.forEach((_product) => {
        let project = _product.val();
        project.key = _product.key;
        _products.push(project);
      })
      this.setState({
        products: _products
      });
    });
  }

  render() {
    return (
      <div className="row products-component">
        { this.state.products.map((product) => {
          return (
            <ProductComponent key={ product.key } product={ product } />
          );
        }) }
      </div>
    );
  }
}

ProductsComponent.displayName = 'ProductsComponent';

// Uncomment properties you need
// ProductsComponent.propTypes = {};
// ProductsComponent.defaultProps = {};

export default ProductsComponent;
