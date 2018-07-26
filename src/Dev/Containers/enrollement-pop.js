import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'office-ui-fabric-react/lib/Modal';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { updatedEnrollement } from '../Actions/index';
import { bindActionCreators } from 'redux';
import style from '../CSS/Enrollement.css';
class enrollementPop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: () => { if (this.props.enrollement) { return true } else { return false } },
            data: this.props.enrollement
        }
    }
    _closeModal() {
        this.setState({ showModal: false })
    }
    OnChange(e) {
        const {
            name, value
        } = e.target;
        this.setState({
            data: {
                name: value
            }
        })
    }
    render() {
        return (<Modal
            isOpen={() => { if (this.props.enrollement) { return true } else { return false } }}
            onDismiss={this._closeModal.bind(this)}
            isBlocking={false}
            containerClassName="ms-modalExample-container"
        >

            <div className="ms-modalExample-body" style={{ width: 600 }} >
                <div className="docs-TextFieldExample" style={{ width: 590 }}>
                    <TextField name="name" label="Name" OnChange={this.OnChange.bind(this)} value={this.state.data.name} required={true} />
                    <TextField name="email" label="Email" OnChange={this.OnChange.bind(this)} value={this.state.data.email} required={true} />
                    <TextField name="phone" label="Phone" OnChange={this.OnChange.bind(this)} value={this.state.data.phone} required={true} />
                    <PrimaryButton type="submit" onClick={() => this.props.updatedEnrollement(this.state.data)}>Save</PrimaryButton>
                </div>
            </div>
        </Modal>);
    }
}
function mapStateToProps(state) {
    return {
        enrollement: state.activeEnrollement
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}
export default connect(mapStateToProps)(enrollementPop);