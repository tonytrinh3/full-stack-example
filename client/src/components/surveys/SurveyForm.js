//SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
//Field component that we can use to show any type of different input or any type of different HTML element that will somehow collect input from our user
//thought like a swiss army knife, lect 148
import { reduxForm, Field } from 'redux-form';
import {Link} from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

//lec 152
//const FIELDS = [
//    {label: "Survey Title", name: "title" },
//    {label: "Survey Line", name: "subject"},
//    {label: "Email Body", name: "body" },
//    {label: "Recipient List", name: "emails" }
//];



//lec 147
class SurveyForm extends Component{
    
    //lect 149
    renderFields(){
        //map function from lodash
        return _.map(formFields, field =>{
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
                ***handleSubmit is provided by reduxForm
                our arrow function will be called automatically whenever a user submit a form

                values => console.log(values)

                () => this.props.onSurveySubmit()
                this is an arrow function calling a function
                you can also think that you are passing the () onward to this.props.onSurveySubmit in order to work

                this.props.handleSubmit(() => )
                we are passing an arrow function to handleSubmit

                this.props.onSurveySubmit()  --> this.props.onSurveySubmit
                removed the () at the end so we aren't calling this.props.onSurveySubmit as a function anymore, we are not invoking onSurveySubmit
                    
                if we put the set of paratheses at the end of onSurveySubmit, that callback function (onSurveySubmit) will be called the instant that our javascript interpreter evaluate the line of code:
                <form onSubmit = {this.props.handleSubmit( () => this.props.onSurveySubmit )}>

                and we don't want that to happen. 
                we want to only call this.props.onSurveySubmit function after the user has submitted or attempt to submit the form
                and so that is why we are not placing the parathesesat the very end of onSurveySubmit because we don't want to call the function instantly the second onSurveySubmit is rendered

                we want to wait to call on onSurveySubmit until whenever the user actually attempts to submit the form

                */}
                <form 
                onSubmit = {this.props.handleSubmit( () => this.props.onSurveySubmit() )}>
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
}

//lec 154
function validate(values) {
    //define errors
    const errors = {};

    //errors only care about properties that have a value assigned to it
    //need empty string to go through split
    errors.emails = validateEmails (values.emails || '');

    //if values that you pass, if that title doesnt exist, then error's title state that quote
    //redux form automatically matches up the errors you are passing here with the Fields you are passing in <Fields />
    //if (!values.title) {
    //    errors.title = 'You must provide a title';
    //}
    //can also use forEach()
    //or {name} is es6
    _.each(formFields, (field) =>{
        //values[name] is to reference a property on an object on the fly or figure out property name at runtime
        if (!values[field.name]){
            errors[field.name]= 'You must provide a value';
        }
    });

    return errors;
}



//allow SurveyForm to communicate with redux store
//used to validate email
//or es6 validate,
//lec 162 - destroyOnUnmount - unload all data from previous screen when you unrender the screen and render a new screen. 
//makes sense when you are making forms and you want to go back to clean form
//but you want to preserve the information, you tell redux to not destroyOnUnmount
export default reduxForm({
    validate:validate,
    form: 'surveyForm',
    destroyOnUnmount: false
}) (SurveyForm);