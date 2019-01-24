//SurveyFormReview shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';


//onCancel is prop that is being passed through SurveyNew
const SurveyFormReview = ({ onCancel, formValues }) => {
    //lec 164
    const reviewFields = _.map(formFields, field => {
        return (
            <div key = {field.name}>
                <label>{field.label}</label>
                <div>
                    {formValues[field.name]}
                </div>
            </div>

        );
    });
    
    
    return (
        <div>
            <h5>Please confirm your entries</h5>
            {reviewFields}
            <button className = "yellow darken-3 btn-flat" onClick = {onCancel}>
             Back
            </button>
        </div>


    );
};


//lec 162
function mapStateToProps(state){
    
    return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps)(SurveyFormReview);