'use strict';

import React from 'react';
import firebase from '../database';
import config from '../config';

require('styles/Header.css');

class HeaderComponent extends React.Component {
  handleLogout() {
    firebase.auth().signOut();
  }
  render() {
    return (
      <nav>
      <div className="header nav-wrapper">
        <a href="#" className="brand-logo center">{ config.placeName }</a>
        <ul id="nav-mobile" className="right">
          <li className="hide-on-med-and-down"><span>Bem vindo(a) {firebase.auth().currentUser.displayName}</span></li>
          <li><a onClick={ () => { this.handleLogout() } } ref="#">Sair</a></li>
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
