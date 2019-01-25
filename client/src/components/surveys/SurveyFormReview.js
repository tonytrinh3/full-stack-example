//SurveyFormReview shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import formFields from './formFields';
import * as actions from '../../actions';


//onCancel is prop that is being passed through SurveyNew
//lec 166
//information from surveyform persist is because they are being passed from surveyform via formValues which is taken from SurveyFormReview
//surveyForm has reduxform destroyOnUnMount to be false which allows information to be persisted
//maybe formValues is in the redux store from surveyForm
const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
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
            {/*//submitSurvey from action creator in actions folder
            //make submitSurvey into an arrow function that waits until onClick is executed for the function to run
            //if you don't pass it through the arrow function then the function automatically runs when the button is rendered(?)
            */}
            <button 
            onClick = {() => submitSurvey(formValues, history)}
            className = "green btn-flat right"
            >
                Send Survey
                <i className = "material-icons right">email</i>
            </button>
        </div>


    );
};


//lec 162
function mapStateToProps(state){
    
    return { formValues: state.form.surveyForm.values };
}
//lec 169 withRouter and history
export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));