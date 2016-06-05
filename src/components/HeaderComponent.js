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
      <nav>
      <div className="header nav-wrapper">
        <a href="#" className="brand-logo">{ this.props.user.displayName }</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a onClick={ this.handleLogout.bind(this) }ref="#">Sair</a></li>
        </ul>
      </div>
    </nav>
    );
  }
}

HeaderComponent.displayName = 'HeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
