//will export an component so capital case file name
//lower case letter file name means will not export component or function


import React, {Component} from 'react';
//import statement bc on front end we are using webpack and babel which get us easy access to es2015 modules
//node js - only good support for common js modules which uses require for import npm

//browserrouter is the brains of react router - tells react router how to behave 
//something that looks at the current url and changes the set of components that are visble on the screen at any given time
//route component that is used to set up a rule between a certain route that the user might visit inside an application and a set of components that will be actually visible on screen
//react router is used for different navigation in page
import {BrowserRouter,Route, withRouter} from 'react-router-dom';

//redux is not meant to work with react so connect it together via react-redux
//use connect function to give certain components the ability to call action creators 
import {connect} from 'react-redux';
import * as actions from '../actions';

//dummy components working with react router
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';




//where we put all of our routing logic 
//when to use class based component or function
class App extends Component {
    //problem area between backend and frontend 
    componentDidMount() {
        this.props.fetchUser();
    }
    render (){
        return (
            <div>
                <BrowserRouter>
                    <div className = "container">
                        {/*header appears at all time */}
                        <Header />
                        {/* "/" is the route portion of the url. when user goes to our root route, show the landing component*/}
                        <Route exact = {true} path ="/" component = {Landing} />
                        <Route exact path ="/surveys" component = {Dashboard} />
                         {/*added withRouter to fix an error. apparently this is a problem This issue is solved in beta versions of 'react-router' / 'react-router-dom'. I personally installed 4.4.0-beta.6 and it's ok. 
                        lec 166 questions
                        From some search result seems it is having something to do with latest react lib after they enable something called forward feature and they mentioned currently beta version fix it so for now I would stick with this :)
                        */}
                        <Route path ="/surveys/new" component = {withRouter(SurveyNew)} />
                    </div>
                </BrowserRouter>
            </div>
        );
    };
};

//first argument is maps state to props argument or map state to proper function
export default connect(null,actions)(App);

