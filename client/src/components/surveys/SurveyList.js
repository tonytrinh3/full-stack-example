//lec 195
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
    //lifecycle
    componentDidMount(){
        this.props.fetchSurveys();
    }

    render () {
        return (
            <div>
                {this.renderSurveys()}
            </div>
        );
    }
}

//mapstatetoprops to pull in a list of surveys

function mapStateToProps (state){
    return { surveys: state.surveys };

}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);