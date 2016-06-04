'use strict';

import React from 'react';
import firebase from '../database';

require('styles//Header.css');

class HeaderComponent extends React.Component {
  handleLogout() {
    firebase.auth().signOut();
  }
  render() {
    return (
      <header class="header">
        <h1 class="header__title">{ this.props.user.displayName }</h1>
          <button onClick={ this.handleLogout.bind(this) }>Logout</button>
      </header>
    );
  }
}

HeaderComponent.displayName = 'HeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
