//to house all the different reducers - reason why we created the folder
//lower case file name because export function rather than component class

export default function (state = {}, action){
    console.log(action);
    switch (action.type){
        default: 
            return state;
    }
}