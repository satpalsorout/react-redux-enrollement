import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { getAllEnrollement, selectedEnrollement, deleteEnrollement } from '../Actions/index'
import { enrollementPop } from '../Containers/enrollement-pop.js'
import style from '../CSS/Enrollement.css';
class EnrollementTable extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        () => this.props.selectedEnrollement()
    }
    toCamelCase(str) {
        return str.split(' ').map(function (word, index) {
            // If it is the first word make sure to lowercase all the chars.
            if (index == 0) {
                return word.toLowerCase();
            }
            // If it is not the first word only upper case the first char and lowercase the rest.
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join('');
    }
    createColumns() {
        var tempEnrollement = this.props.EnrollementList[0];
        var columns = Object.keys(tempEnrollement)
        return (

            <tr>
                <th>
                    <span class="custom-checkbox">
                        <input type="checkbox" id="selectAll" />
                        <label for="selectAll"></label>
                    </span>
                </th>
                {columns.map((key, index) => {
                    if (key != 'id') {
                        return (<th key={index} > {this.toCamelCase(key)} </th>)
                    }
                })
                }
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        );
    }
    createRows() {
        return this.props.EnrollementList((enrollement, index) => {
            return (
                <tr>
                    {
                        <td>
                            <span class="custom-checkbox">
                                <input type="checkbox" id={"checkbox" + enrollement.id} name="options[]" value={enrollement.id} />
                                <label for={"checkbox" + enrollement.id}></label>
                            </span>
                        </td>
                    }
                    {Object.keys(enrollement).map((key, index) => {
                        if (key != 'id') {
                            return (<td key={index + '_' + enrollement.id} > {enrollement[key]} </td>)
                        }
                    })
                    }
                    {
                        <td>
                            <a class="edit" key={"Edit_" + enrollement.id} onClick={() => this.props.selectedEnrollement(enrollement)} data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                        </td>
                    }
                    {
                        <td>
                            <a Key={"Delete_" + enrollement.id} class="delete" onClick={() => this.props.deleteEnrollement(enrollement)} data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                        </td>
                    }
                </tr>
            );
        });
    }
    render() {
        return (
            <div>
                <table class="table table-striped table-hover" >
                    <thead>
                        {this.createRows()}
                    </thead>
                    <tbody>
                        {this.createRows()}
                    </tbody>

                </table>
                <div>
                    <enrollementPop />
                </div>
            </div>
        );
    }

}
function mapStateToProps(state) {
    return {
        EnrollementList: state.EnrollementList
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ EnrollementList: getAllEnrollement, selectedEnrollement: selectedEnrollement, deleteEnrollement: deleteEnrollement }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(EnrollementTable)
