import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';

var div = document.createElement("div");
ReactDOM.render(<App />, div);
var container = document.body;
container.replaceChild(div.querySelector("#app"), document.getElementById("app"));
