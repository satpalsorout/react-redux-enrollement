import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {enableEnrollementForm} from '../Actions/index';
import EnrollementTable from '../Components/EnrollementTable.jsx';
import style from '../CSS/Enrollement.css'
class EnrollementDashboard extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div class="container">
                <div class="table-wrapper">
                    <div class="table-title">
                        <div class="row">
                            <div class="col-sm-6">
                                <h2>Manage <b>Enrollements</b></h2>
                            </div>

                            <div class="col-sm-6">
                                <a class="btn btn-success" data-toggle="modal" onClick={()=>this.props.enableEnrollementForm(true)}><i class="material-icons" >&#xE147;</i> <span >Add New Enrollement</span></a>
                            </div>
                        </div>
                    </div>
                    <EnrollementTable />
                </div>
            </div>
        )
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({enableEnrollementForm:enableEnrollementForm}, dispatch);
}
export default   connect(matchDispatchToProps)(EnrollementDashboard) 
