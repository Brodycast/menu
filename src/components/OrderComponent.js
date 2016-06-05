'use strict';

import React from 'react';

require('styles//Order.css');

class OrderComponent extends React.Component {
  render() {
    return (
      <a href="#" className="collection-item order-component text-red">
        { this.props.order.description }
      </a>
    );
  }
}

OrderComponent.displayName = 'OrderComponent';

// Uncomment properties you need
// OrderComponent.propTypes = {};
// OrderComponent.defaultProps = {};

export default OrderComponent;
