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
                <img src={ logo } width="350" height="300"/>
                <div>
                <button className="btn blue" onClick={ this.handleLoginFacebook.bind(this) }>Entre com o Facebook</button>
                </div>
                <div>
                <button className="btn blue" onClick={ this.handleLoginGoogle.bind(this) }>Entre com o Google</button>
                </div>
                </div>
            );
        }
    }
}

AppComponent.defaultProps = {
};

export default AppComponent;
