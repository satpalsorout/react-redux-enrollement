import React, { Component } from 'react'
import { connect } from 'react-redux';
import EnrollementForm from '../Components/EnrollementForm.jsx';
import EnrollementDashboard from '../Components/EnrollementDashboard.jsx';

class Enrollement extends Component {
    constructor() {
        super();
    }
    render() {
        if (this.props.ActivateEnrollmentForm) {
            return (<EnrollementForm />)
        }
        else {
            return (<EnrollementDashboard />)
        }

    }
}
function mapStateToProps(state) {
    return {
        ActivateEnrollmentForm: state.ActivateEnrollmentForm
    }
}
export default connect(mapStateToProps)(Enrollement)

