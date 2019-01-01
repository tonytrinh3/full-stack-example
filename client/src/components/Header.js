import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

//need to add helper component
class Header extends Component {
    renderContent(){
        switch (this.props.auth){
            case null:
                return;
            case false:
                return <li><a href ="/auth/google">Login With Google</a></li>
            default:
                return <li><a href ="/api/logout">Logout</a></li>
        }
    }
    //One difference is that with a Link tag you can avoid a full page refresh and just render a different component based on your routing configuration. 
    //When you are just navigating to different endpoints within your own application (i.e. '/surveys' or '/surveys/new) you can use a Link tag. However, if you are navigating to some external URL like we are when we go through the auth process, you will want to use an "a" tag. The Link tag is specific to React Router, which is used to provide easy navigation within the app. The "a" tag is more universal, and thus can be used to navigate outside of the application.

    render() {
        console.log(this.props);
        return (
           <nav>
               <div className = "nav-wrapper">
               {/*link is used to change emaily based on what they are signed in or not */}
               {/*if this.props.auth is true (if they logged in), go to surveys, if not, return back to homepage*/}
                    <Link 
                    to={this.props.auth ? '/surveys': '/'}
                    className = "left brand-logo" >
                        Emaily
                    </Link>
                    <ul className = "right">
                        {this.renderContent()}
                    </ul>

               </div>
           </nav>
        )
    }
}

function mapStateToProps(state){
    return { auth: state.auth};
}

export default connect (mapStateToProps) (Header);