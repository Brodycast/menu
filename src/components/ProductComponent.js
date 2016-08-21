'use strict';

import React from 'react';
import firebase from '../database';

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
      <div className="col s12 m12 product-component">
        <div className="card medium z-depth-1">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator"
              src={ this.props.product.photo }
              alt={ this.props.product.description } />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              { this.props.product.description }
            </span>
            <p className="card-price">
              <a href="#">
                R$ { this.props.product.price.toFixed(2) }
              </a>
            </p>
          </div>
          <a href="#" className="waves-effect btn-sobre waves-light btn z-depth-0" onClick={ this.handleOrder.bind(this) }>
            Sobre
          </a>
        </div>
      </div>
    );
  }
}

ProductComponent.displayName = 'ProductComponent';

// Uncomment properties you need
// ProductComponent.propTypes = {};
// ProductComponent.defaultProps = {};

export default ProductComponent;
