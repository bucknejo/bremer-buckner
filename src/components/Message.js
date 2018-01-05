import React, {Component} from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

class Message extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            group: {
                touched: false
            },
            firstName: {
                value: '',
                touched: false
            },
            lastName: {
                value: '',
                touched: false
            },
            email: {
                value: '',
                touched: false
            },
            phone: {
                value: '',
                touched: false
            },
            practiceArea: {
                value: '',
                touched: false
            },
            note: {
                value: '',
                touched: false
            },
            sent: false,
            something: "something"
        };
    }

    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    getValidationState(prop) {

        if (!this.state.group.touched) return null;

        switch (prop) {
            case 'firstName':
                if (!this.state.firstName.touched || this.state.firstName.value.length !== 0) return 'success'; else return 'error';
            case 'lastName':
                if (!this.state.lastName.touched || this.state.lastName.value.length !== 0) return 'success'; else return 'error';
            case 'email':
                if (!this.state.email.touched || this.validateEmail(this.state.email.value)) return 'success'; else return 'error';
            case 'phone':
                const matched = this.state.phone.value.match(/\d/g);
                if (!this.state.phone.touched || (matched && matched.length===10)) return 'success'; else return 'error';
            case 'practiceArea':
                if (!this.state.practiceArea.touched || this.state.practiceArea.value.length !== 0) return 'success'; else return 'error';
            case 'note':
                if (!this.state.note.touched || this.state.note.value.length !== 0) return 'success'; else return 'error';

            default:
                return null;

        }
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        const control = {
            value: value,
            touched: true
        };

        const group = {
            touched: true
        };

        this.setState({[name]: control, group: group});
    }

    sendMessage(e) {
        console.log(e);

        const subject = "message test";

        const message = {
            firstName: this.state.firstName.value,
            lastName: this.state.lastName.value,
            email: this.state.email.value,
            subject: subject,
            note: this.state.note.value,
            practice: this.state.practiceArea.value,
            phone: this.state.phone.value
        };

        fetch('http://localhost:8095/bremer-buckner/service/message/send', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message)
        })
            .then(result => result.json())
            .then(data => {
                console.log("This is the data" + data);
                this.setState({sent: data});
            }
        );

    }

    resetMessage(e) {
        console.log(e);
    }

    render() {
        return(

            <div>

                <div className="row">
                    <div className="col-md-12">
                        <h3>Message</h3>
                        <form name="sendMessage">
                            <FormGroup validationState={this.getValidationState('firstName')}>

                                <ControlLabel>First Name:</ControlLabel>
                                <FormControl
                                    controlId="firstName"
                                    name="firstName"
                                    type="text"
                                    value={this.state.firstName.value}
                                    placeholder="First Name"
                                    onChange={(e) => this.handleChange(e)}
                                    vali
                                />
                                <FormControl.Feedback />
                                <HelpBlock>First name cannot be blank</HelpBlock>

                            </FormGroup>

                            <FormGroup validationState={this.getValidationState('lastName')}>

                                <ControlLabel>Last Name:</ControlLabel>
                                <FormControl
                                    name="lastName"
                                    type="text"
                                    value={this.state.lastName.value}
                                    placeholder="Last Name"
                                    onChange={(e) => this.handleChange(e)}
                                />
                                <FormControl.Feedback />
                                <HelpBlock>Last name cannot be blank</HelpBlock>

                            </FormGroup>

                            <FormGroup validationState={this.getValidationState('email')}>

                                <ControlLabel>Email:</ControlLabel>
                                <FormControl
                                    name="email"
                                    type="email"
                                    value={this.state.email.value}
                                    placeholder="Email"
                                    onChange={(e) => this.handleChange(e)}
                                />
                                <FormControl.Feedback />
                                <HelpBlock>Please enter a valid email address</HelpBlock>

                            </FormGroup>

                            <FormGroup validationState={this.getValidationState('phone')}>

                                <ControlLabel>Phone:</ControlLabel>
                                <FormControl
                                    name="phone"
                                    type="phone"
                                    value={this.state.phone.value}
                                    placeholder="(999) 999-9999"
                                    onChange={(e) => this.handleChange(e)}
                                />
                                <FormControl.Feedback />
                                <HelpBlock>Please enter a valid phone number</HelpBlock>

                            </FormGroup>

                            <FormGroup validationState={this.getValidationState('practiceArea')}>
                                <ControlLabel>Practice Area</ControlLabel>
                                <FormControl
                                    componentClass="select"
                                    name="practiceArea"
                                    value={this.state.practiceArea.value}
                                    placeholder="[Please Choose]"
                                    onChange={(e) => this.handleChange(e)}
                                >
                                    <option value="">[Please Select]</option>
                                    <option value="Criminal Practice">Criminal Practice</option>
                                    <option value="Family Law/Divorce">Family Law/Divorce</option>
                                    <option value="Juvenile Practice">Juvenile Practice</option>
                                    <option value="Municipal Court">Municipal Court</option>
                                    <option value="Real Estate">Real Estate</option>
                                    <option value="Wills/Trusts">Wills/Trusts</option>
                                </FormControl>
                            </FormGroup>

                            <FormGroup validationState={this.getValidationState('note')}>
                                <ControlLabel>Message</ControlLabel>
                                <FormControl
                                    componentClass="textarea"
                                    rows="10"
                                    name="note"
                                    value={this.state.note.value}
                                    onChange={(e) => this.handleChange(e)}
                                />
                            </FormGroup>

                        </form>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="center-block">
                            <button type="button" className="btn btn-primary button-spacing" onClick={(e) => this.sendMessage(e)}>Send</button>
                            <button type="button" className="btn btn-primary button-spacing" onClick={(e) => this.resetMessage(e)}>Reset</button>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="center-block">
                            Message Sent: {this.state.sent + ""}
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default Message