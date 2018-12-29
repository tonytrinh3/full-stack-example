//for redux side of things 
import React from 'react';  
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware} from 'redux';  

import App from './components/App.js';
//dummy reducer () => []
//{} only for server side rendering
//redux store
const store = createStore( () => [], {}, applyMiddleware());
//hooked up redux in react via provider tag
//provider tag is a react component that knows how to read changes from the redux store any times the redux store gets some new state produced inside of it 
//the provider will inform all of its children components
//essentially everything that the app renders that some new state is available and provider will update all of those component with the new state
ReactDOM.render(
    <Provider store = {store}><App /></Provider>, 
    document.querySelector('#root'));