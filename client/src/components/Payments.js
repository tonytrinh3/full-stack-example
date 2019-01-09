import React, { Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as actions from '../actions';

//under ammount, 500 is500 cents or 5 dollar. default is usd
 //token is call back function of token we received from stripe
 //debugger;
class Payments extends Component{
    render(){
        
        return (
            <StripeCheckout
                name = "Emaily"
                description ="$5 for 5 email credits"
                amount ={500}
                token = {token => this.props.handleToken(token)}
                stripeKey = {process.env.REACT_APP_STRIPE_KEY}
            >
                <button className = "btn">
                    Add Credits
                </button>
            </StripeCheckout>
        );
        
    }

}

export default connect(null,actions) (Payments);