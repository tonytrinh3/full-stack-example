//we use axios to make ajax request

import axios from "axios";
import { FETCH_USER } from './types';

//use axios bc we want a get request to our backend
//dispatch is a function
//any action we throw into dispatch, those actions will get funnedled to the other reducers
export const fetchUser = () => {
//export const fetchUser = () => async dispatch => {
    return async function (dispatch) {
    //we use relative path - we can use proxy in dev mode
       const res = await axios.get('/api/current_user');
            //if "res" is true then. "res =>" is a function 
            //   .then(res => dispatch({ type: FETCH_USER, payload: res}));
        dispatch({ type: FETCH_USER, payload: res});
    };
};