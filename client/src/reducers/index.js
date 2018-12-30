//second index.js - convention in react projects
//to allow us import us reducer directory
//by convention, import statements will automatically give us any file inside that directory that is called index.js

import { combineReducers } from 'redux';
import authReducer from './authReducer';

//the object that is passing into the combineReducers, whatever keys we provide to this object are going to represent the keys that exist inside of our state object 
export default combineReducers({
    //auth piece of state is produced by authReducer
    auth: authReducer
});