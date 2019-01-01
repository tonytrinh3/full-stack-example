import {FETCH_USER } from '../actions/types';

//to house all the different reducers - reason why we created the folder
//lower case file name because export function rather than component class
//the only reason we care about fetch_user is to get data from backend to front end
export default function (state = null, action){
    //console.log(action);
    switch (action.type){
        case FETCH_USER:
        //maybe it is like return something. if not return something (empty string), then switch over to false because there is nothing in the first value
            return action.payload || false;//the user model. either an object or an empty string. we want empty string as false. so if we get empty string or false, we will get false
        default: 
            return state;
    }
}