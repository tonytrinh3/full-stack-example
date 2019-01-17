//for redux side of things 
//webpack assumes you are auto importing from node-modules so that is why you don't have ./ at the beginning 
//can remove "materializeCSS from" bc you don't need to import a variable for css
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';  
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware} from 'redux'; 
import reduxThunk from "redux-thunk"; 

import App from './components/App.js';
import reducers from './reducers';
//lec 136
//this is to test mailer, sendgrab
import axios from 'axios';
window.axios = axios;


//dummy reducer () => []
//{} only for server side rendering
//redux store
const store = createStore( reducers, {}, applyMiddleware(reduxThunk));
//hooked up redux in react via provider tag
//provider tag is a react component that knows how to read changes from the redux store any times the redux store gets some new state produced inside of it 
//the provider will inform all of its children components
//essentially everything that the app renders that some new state is available and provider will update all of those component with the new state
ReactDOM.render(
    <Provider store = {store}><App /></Provider>, 
    document.querySelector('#root'));
//from section 8 lect 93
console.log('STRIPE KEY IS ', process.env.REACT_APP_STRIPE_KEY);
console.log('Environment is ', process.env.NODE_ENV);