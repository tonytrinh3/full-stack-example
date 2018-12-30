import React, {Component} from 'react';
//need to add helper component
class Header extends Component {
    render() {
        return (
           <nav>
               <div className = "nav-wrapper">
                    <a>
                        Emaily
                    </a>
                    <ul className = "right">
                        <li>
                            <a>Login With Google</a>
                        </li>
                    </ul>

               </div>
           </nav>
        )
    }
}

export default Header;