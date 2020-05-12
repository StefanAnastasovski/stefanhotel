import React, {Component} from "react";

import DatePicker from "react-datepicker";

import './SignUp.css';

import createSignUp from '../../repository/post/axiosSignUp';
import passwordHash from 'password-hash';

class SignUp extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        gender: 'male',
        birthDatePicker: new Date()
    };

    onRadioChange = (event) => {
        this.setState({
            gender: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        let birthday = this.state.birthDatePicker.getDate() + "-" +
            this.state.birthDatePicker.getMonth() + "-" + this.state.birthDatePicker.getFullYear();
        let now = new Date();
        let signUpDate = `${now.getDate()}-${now.getMonth()}-${now.getFullYear()}`;

        const newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            gender: this.state.gender,
            birthday: birthday,
            signUpDate: signUpDate
        };
        createSignUp.addSignup(newUser).then(response => {
            console.log(response);
            console.log(response.data);
        });

    };


    handleChange = event => {
        let nameOfInputField = event.target.name;
        if (nameOfInputField === 'su-firstname') {
            this.setState({
                firstName: event.target.value
            });
        } else if (nameOfInputField === 'su-lastname') {
            this.setState({
                lastName: event.target.value
            });
        } else if (nameOfInputField === 'su-email') {
            this.setState({
                email: event.target.value
            })
        } else if (nameOfInputField === 'su-username') {
            this.setState({
                username: event.target.value
            })
        } else if (nameOfInputField === 'su-password') {
            const hashedPassword = passwordHash.generate(this.state.password);
            this.setState({
                password: hashedPassword
            });
        }
    };

    birthDateHandle = date => {
        this.setState({
            birthDatePicker: date
        });
    };

    render() {

        const styleInputField = {
            borderRadius: '10px',
            padding: '5px 3px',
            border: '1px solid grey',

        };

        const styleButton = {
            backgroundColor: '#0c5460',
            borderRadius: "10px",
            padding: '15px 35px',
            border: 0,
            color: 'white'
        };

        const styleHeader = {
            color: '#0c5460'
        };

        return (

            <div className="signup row">

                <div className="col">

                    <div className="container">

                        <div className="signup-main">

                            <div className="row">

                                <div className="col my-3">
                                    <h1 className="text-center" style={styleHeader}>Create a New Account</h1>
                                </div>

                            </div>

                            <div className="row">

                                <div className="col">

                                    <div className="w-50 m-auto">
                                        {/*--------*/}
                                        <form method="POST" onSubmit={this.handleSubmit}>

                                            <div className="row ">

                                                <div className="col">

                                                    <label className="w-100 pr-1">
                                                        First Name:
                                                        <input type="text" className="new-line w-100 px-2"
                                                               name="su-firstname"
                                                               required style={styleInputField}
                                                               placeholder="John"
                                                               onChange={this.handleChange}
                                                        />
                                                    </label>

                                                </div>

                                                <div className="col">

                                                    <label className="w-100 pr-1">
                                                        Last Name:
                                                        <input type="text" className="new-line w-100 px-2"
                                                               name="su-lastname"
                                                               required style={styleInputField}
                                                               placeholder="Doe"
                                                               onChange={this.handleChange}
                                                        />

                                                    </label>

                                                </div>

                                            </div>

                                            <div className="row">

                                                <div className="col">

                                                    <label className="w-100 pr-1">
                                                        Email:
                                                        <input type="email" className="new-line w-100 px-2"
                                                               name="su-email"
                                                               required style={styleInputField}
                                                               placeholder="name@example.com"
                                                               onChange={this.handleChange}
                                                        />
                                                    </label>

                                                </div>

                                            </div>

                                            <div className="row">

                                                <div className="col">

                                                    <label className="w-100 pr-1">
                                                        Username:
                                                        <input type="username" className="new-line w-100 px-2"
                                                               name="su-username"
                                                               required style={styleInputField} placeholder="Username"
                                                               onChange={this.handleChange}
                                                        />
                                                    </label>

                                                </div>

                                            </div>

                                            <div className="row">

                                                <div className="col">

                                                    <label className="w-100 pr-1">
                                                        Password:
                                                        <input type="password" className="new-line w-100 px-2"
                                                               name="su-password"
                                                               required style={styleInputField} placeholder="Password"
                                                               onChange={this.handleChange}
                                                        />
                                                    </label>

                                                </div>

                                            </div>

                                            <div className="row">

                                                <div className="col">

                                                    <div className="">
                                                        <label>Gender</label>
                                                    </div>

                                                    <div className="d-flex">

                                                        <div className="col">

                                                            <label>
                                                                <input
                                                                    type="radio"
                                                                    value="male"
                                                                    checked={this.state.gender === "male"}
                                                                    onChange={this.onRadioChange}
                                                                />
                                                                Male
                                                            </label>

                                                        </div>

                                                        <div className="col">

                                                            <label>
                                                                <input
                                                                    type="radio"
                                                                    value="female"
                                                                    checked={this.state.gender === "female"}
                                                                    onChange={this.onRadioChange}
                                                                />
                                                                Female
                                                            </label>

                                                        </div>

                                                    </div>

                                                    <div className="row">

                                                        <div className="col">

                                                            <label className="w-100">
                                                                <span className="new-line">Birthday:</span>
                                                                <DatePicker
                                                                    selected={this.state.birthDatePicker}
                                                                    onChange={this.birthDateHandle}
                                                                />
                                                            </label>

                                                        </div>

                                                    </div>

                                                    <button
                                                        type="submit"
                                                        className="my-3"
                                                        name="signup"
                                                        style={styleButton}>
                                                        Sign Up
                                                    </button>

                                                </div>

                                            </div>

                                        </form>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        );

    }

}

export default SignUp;


