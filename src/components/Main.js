require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import firebase from '../database';
import HeaderComponent from './HeaderComponent';
import OrdersComponent from './OrdersComponent';
import ProductsComponent from './ProductsComponent';

const facebookProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

var logo = require('../images/logo.png')

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
    handleLoginFacebook() {
        firebase.auth().signInWithRedirect(facebookProvider);
    }
    handleLoginGoogle() {
        firebase.auth().signInWithRedirect(googleProvider);
    }
    render() {
        if (this.state.user) {
            return (
                <div className="index">
                <HeaderComponent user={ this.state.user }/>
                <ProductsComponent />
                </div>
            );
        } else {
            return (
                <div className="row center">
                <img src={ logo }/>
                <div>
                <button className="waves-effect waves-light btn-large btn blue darken-4" onClick={ this.handleLoginFacebook.bind(this) }><i className="large material-icons">perm_identity</i> Entre com o Facebook</button>
                <button className="waves-effect waves-light btn-large btn red" onClick={ this.handleLoginGoogle.bind(this) }><i className="large material-icons">perm_identity</i> Entre com o Google</button>
                </div>
                </div>
            );
        }
    }
}

AppComponent.defaultProps = {
};

export default AppComponent;
