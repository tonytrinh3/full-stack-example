import React, {Component} from 'react';
import {connect} from 'react-redux';

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

    render() {
        console.log(this.props);
        return (
           <nav>
               <div className = "nav-wrapper">
                    <a>
                        Emaily
                    </a>
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