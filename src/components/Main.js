require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import firebase from '../database';
import HeaderComponent from './HeaderComponent';
import OrdersComponent from './OrdersComponent';
import ProductsComponent from './ProductsComponent';

const provider = new firebase.auth.FacebookAuthProvider();

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user: user
        });
      } else {
        this.setState({
          user: undefined
        });
      }
    });
    firebase.auth().getRedirectResult().then((result) => {
      if (result.credential) {
        this.setState({
          user: result.user
        });
      }
    });
  }
  handleLogin() {
    firebase.auth().signInWithRedirect(provider);
  }
  render() {
    if (this.state.user) {
      return (
        <div className="index">
          <HeaderComponent user={ this.state.user }/>
          <OrdersComponent user={ this.state.user }/>
          <ProductsComponent />
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={ this.handleLogin.bind(this) }>Login com FB</button>
        </div>
      );
    }
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
