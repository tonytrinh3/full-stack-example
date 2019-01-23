//SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from 'react';
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


export default SurveyNew;