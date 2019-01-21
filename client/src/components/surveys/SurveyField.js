// SurveyField contains logic to render a single label and text input
//lec 149
import React from 'react';
//or export default ({ input, label }) for taking only the input object of props
export default (props) => {
    
    //console.log(props.input); this shows every single change that happens through Fields
    return(
        <div>
            <label>{props.label}</label>
            <input {...props.input}/>
        </div>
    );

};