//SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
//Field component that we can use to show any type of different input or any type of different HTML element that will somehow collect input from our user
//thought like a swiss army knife, lect 148
import { reduxForm, Field } from 'redux-form';
import {Link} from 'react-router-dom';
import SurveyField from './SurveyField';

//lec 152
const FIELDS = [
    {label: "Survey Title",name: "title" },
    {label: "Survey Line", name: "subject"},
    {label: "Email Body", name: "body" },
    {label: "Recipient List", name: "emails" }
];



//lec 147
class SurveyForm extends Component{
    
    //lect 149
    renderFields(){
        //map function from lodash
        return _.map(FIELDS, field =>{
            //key property needs to be unique 
            return <Field key = {field.name} component = {SurveyField} type = "text" label = {field.label} name = {field.name} />
        });

        //return ( 
            //<div>
                /* Field strength is wiring up all the different event handlers for watching changes to input
                <Field label = "Survey Title" type = 'text' name = "title" component = {SurveyField} />
                <Field label = "Survey Line" type = 'text' name = "subject" component = {SurveyField} />
                <Field label = "Email Body" type = 'text' name = "body" component = {SurveyField} />
                <Field label = "Recipient List" type = 'text' name = "emails" component = {SurveyField} />
                */
            //</div>
        //);
    }
    
    
    render(){
        return(
            <div>
                {/* Field is going to take the value out of that input like that value we are typing in and it is going to automatially store it inside of our redux store under a key of "surveyTitle" and we'll see that in practice 
                component input tells the field i want this to appear as an HTML input tag like just a normal input tag like that
                <Field type = 'text' name = "title" component = "input"/>
                handleSubmit is provided by reduxForm
                our arrow function will be called automatically whenever a user submit a form
                */}
                <form 
                onSubmit = {this.props.handleSubmit(values => console.log(values))}>
                    {this.renderFields()}
                    <Link to="/surveys" className= "red btn-flat white-text">
                        Cancel
                    </Link>
                    <button type ="submit" className = "teal btn-flat right white-text">
                        Next
                        <i className = 'material-icons right'>done</i>
                    </button>
                </form>
            </div>

        );
    }
};

//allow SurveyForm to communicate with redux store
export default reduxForm({
    form: 'surveyForm'
}) (SurveyForm);