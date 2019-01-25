//SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from 'react';
import {reduxForm} from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';


//lec 146
class SurveyNew extends Component{
    
    //constructor(props){
    //    super(props);
    //    this.state = {new: true};
    //}
    //this line here is the same as the above with the constructor 
    //i don't want to show the showfrom review by default. i want to show surveyfor by default
    //information from surveyform persist is because they are being passed from surveyform via 
    state = {showFormReview: false};

    renderContent(){
        //onCancel is a prop that is being passed through to SurveyFormReview
        if (this.state.showFormReview === true){
            return <SurveyFormReview 
                onCancel = {() => this.setState({ showFormReview: false })}
            />;
        }

        //else
        return <SurveyForm 
            onSurveySubmit={() => this.setState({ showFormReview: true })}
        />;
    }


    render(){
        return(
            <div>
                {this.renderContent()}
            </div>

        );
    }
};

//lec 166
//this is in order for you to press cancel in the survey form, which goes back to the dashboard
//going back to the dashboard, means that the survey dumps all the information, which is what it is supposed to do in the first place
//what you are doing here is telling surveyNew that it is ok to dump information
//you have to hook up reduxForm to surveynew first to hook up this component to be part of the redux store in order for this component to dump the information
export default reduxForm({
    form: 'surveyForm'
}) (SurveyNew);