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
      <div className="col s6 product-component">
        <div className="card medium">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator"
              src={ this.props.product.photo }
              alt={ this.props.product.description } />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              { this.props.product.description }
              <i className="material-icons right">more_vert</i>
            </span>
            <p>
              <a href="#">
                { this.props.product.price }
              </a>
            </p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              { this.props.product.description }
              <i className="material-icons right">close</i>
            </span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href="#" onClick={ this.handleOrder.bind(this) }>
              Pedir
            </a>
          </div>
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
