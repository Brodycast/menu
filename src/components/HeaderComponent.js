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

        <ul id="nav-mobile" className="left">
            <li>
                <img src={ config.logo } width="60px" height="60px"/>
            </li>
            <li>
                { config.placeName }
            </li>

        </ul>
        <ul id="nav-mobile" className="right">
          <li><span class="hide-on-med-and-down">Bem vindo(a) {firebase.auth().currentUser.displayName}</span></li>
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
