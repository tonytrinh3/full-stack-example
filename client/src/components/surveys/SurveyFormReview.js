//SurveyFormReview shows users their form inputs for review
import React from 'react';

//onCancel is prop that is being passed through SurveyNew
const SurveyFormReview = ({ onCancel}) => {
    return (
        <div>
            <h5>Please confirm your entries</h5>
            <button className = "yellow darken-3 btn-flat" onClick = {onCancel}>
             Back
            </button>
        </div>


    );
};

export default SurveyFormReview;