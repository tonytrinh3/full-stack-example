//will export an component so capital case file name
//lower case letter file name means will not export component or function


import React from 'react';
//import statement bc on front end we are using webpack and babel which get us easy access to es2015 modules
//node js - only good support for common js modules which uses require for import npm

//browserrouter is the brains of react router - tells react router how to behave 
//something that looks at the current url and changes the set of components that are visble on the screen at any given time
//route component that is used to set up a rule between a certain route that the user might visit inside an application and a set of components that will be actually visible on screen
import {BrowserRouter,Route} from 'react-router-dom';

//dummy components working with react router
import Header from './Header';
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;



//where we put all of our routing logic 
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div className = "container">
                    {/*header appears at all time */}
                    <Header />
                    {/* "/" is the route portion of the url. when user goes to our root route, show the landing component*/}
                    <Route exact = {true} path ="/" component = {Landing} />
                    <Route exact path ="/surveys" component = {Dashboard} />
                    <Route path ="/surveys/new" component = {SurveyNew} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;

