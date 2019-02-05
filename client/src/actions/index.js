//we use axios to make ajax request

import axios from "axios";
import { FETCH_USER, FETCH_SURVEYS } from './types';

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
        dispatch({ type: FETCH_USER, payload: res.data});
    };
};
//lec 97 sec 8
//handle token from stripe and send to backend server 
export const handleToken = (token) => async dispatch => {
    //post request to send some information, route handler, token from stripe
    //line of code - successful make a post request to our server and get a response
    const res = await axios.post('/api/stripe',token);
    //get same user model as above, dispatch same action type to update the user model inside our auth reducer
    dispatch({ type: FETCH_USER, payload: res.data});
} 

//lec 165, 168
export const submitSurvey = (values, history) => async dispatch => {
    const res = await axios.post('/api/surveys',values);
    //lec 169
    history.push('/surveys');

    dispatch ({type: FETCH_USER, payload: res.data});

}

export const fetchSurveys = () => async dispatch => {
    const res = await axios.get('/api/surveys');
    //res.data is array of surveys we got back from res
    dispatch ({ type: FETCH_SURVEYS, payload:res.data})
};