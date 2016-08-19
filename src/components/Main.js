require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import firebase from '../database';
import config from '../config';
import HeaderComponent from './HeaderComponent';
import OrdersComponent from './OrdersComponent';
import ProductsComponent from './ProductsComponent';
import FontAwesome from 'react-fontawesome';

const facebookProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

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
        firebase.auth().getRedirectResult();
    }
    handleLoginFacebook() {
        firebase.auth().signInWithRedirect(facebookProvider);
    }
    handleLoginGoogle() {
        firebase.auth().signInWithRedirect(googleProvider);
    }
    render() {
        document.title = 'config.placeName';
        if (firebase.auth().currentUser) {
            return (
                <div className="index">
                <HeaderComponent/>
                <ProductsComponent />
                </div>
            );
        } else {
            return (
                <div id="app" className="row center">
                    <img src={ config.logo } alt={ config.placeName } class="image-logo" width="200" height="200"/>
                    <div>
                        <button className="waves-effect waves-light btn btn-login-facebook"
                                onClick={ this.handleLoginFacebook.bind(this) }>
                            <FontAwesome name='facebook'/>
                            Facebook
                        </button>
                        <button className="waves-effect waves-light btn btn-login-google"
                                onClick={ this.handleLoginGoogle.bind(this) }>
                            <FontAwesome name='google'/>
                            Google
                        </button>
                    </div>
                </div>
            );
        }
    }
}

AppComponent.defaultProps = {};

export default AppComponent;
