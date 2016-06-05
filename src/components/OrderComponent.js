'use strict';

import React from 'react';

require('styles//Order.css');

class OrderComponent extends React.Component {
  render() {
    return (
      <a href="#" className="collection-item order-component">
        { this.props.order.description }
        <span className="new badge"> 15s </span>
      </a>
    );
  }
}

OrderComponent.displayName = 'OrderComponent';

// Uncomment properties you need
// OrderComponent.propTypes = {};
// OrderComponent.defaultProps = {};

export default OrderComponent;
