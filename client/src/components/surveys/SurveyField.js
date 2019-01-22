// SurveyField contains logic to render a single label and text input
//lec 149
import React from 'react';
//or export default ({ input, label, meta: {error, touched} }) for taking only the input object of props
//meta: {error, touched} is es6 destructoring 
export default (props) => {
    //console.log(props.meta);
    //console.log(props.input); this shows every single change that happens through Fields
    //{props.meta.touched && props.meta.error } if true
    //you have to click in and click out to trigger the error
    return(
        <div>
            <label>{props.label}</label>
            <input {...props.input} style = {{marginBottom: '5px'}}/>
            <div className = 'red-text' style ={{ marginBottom: '20px'}}>
            {props.meta.touched && props.meta.error }
            </div>
        </div>
    );

};