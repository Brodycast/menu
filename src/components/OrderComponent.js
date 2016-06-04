'use strict';

import React from 'react';

require('styles//Order.css');

class OrderComponent extends React.Component {
  render() {
    return (
      <div className="order-component">
        { this.props.order.description }
      </div>
    );
  }
}

OrderComponent.displayName = 'OrderComponent';

// Uncomment properties you need
// OrderComponent.propTypes = {};
// OrderComponent.defaultProps = {};

export default OrderComponent;
