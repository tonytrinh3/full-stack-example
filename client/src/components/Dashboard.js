import React from 'react';
//router dom bc we are working inside the browser
import {Link} from 'react-router-dom';
//lec 195
import SurveyList from './surveys/SurveyList';
const Dashboard = () =>{
    return(
        <div>
            <SurveyList />
            <div className ="fixed-action-btn">
            {/* lec 143 link back to app.js, route component*/}
                <Link to= "/surveys/new" className = "btn-floating btn-large red">
                    <i className = "material-icons">add</i>
                </Link>

            </div>
        </div>
    );

};

export default Dashboard;