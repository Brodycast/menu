'use strict';

import React from 'react';
import firebase from '../database';

require('styles//Product.css');

class ProductComponent extends React.Component {

  componentWillMount() {
    this.orderRef = firebase.database().ref('order');
  }

  componentWillUnmout() {
    this.orderRef.off();
  }

  handleOrder() {
    let currentUser = firebase.auth().currentUser;
    console.log(currentUser);
    let order = this.props.product;
    order.datetime = new Date().getTime();
    order.user = currentUser.email;
    order.username = currentUser.displayName;
    order.userphoto = currentUser.photoURL;
    order.status = 'ordered';
    this.orderRef.push(this.props.product);
  }

  render() {
    return (
      <div className="product-component">
        <span> { this.props.product.description } </span>
        <button onClick={ this.handleOrder.bind(this) }> Order </button>
      </div>
    );
  }
}

ProductComponent.displayName = 'ProductComponent';

// Uncomment properties you need
// ProductComponent.propTypes = {};
// ProductComponent.defaultProps = {};

export default ProductComponent;
