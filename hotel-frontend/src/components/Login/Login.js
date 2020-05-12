import React, {Component} from "react";

import {Redirect} from "react-router-dom";

import './Login.css';

import getAccounts from "../../repository/get/axiosGetAccount";
import loginCalls from "../../repository/post/axiosLogin";

class Login extends Component {

    state = {
        redirect: false,
        username: "",
        password: "",
        isLoginSuccess: false,
        currentDate: new Date()
    };

    setRedirectHandler = () => {
        this.setState({
            redirect: true
        })
    };

    renderRedirectHandler = () => {
        if (this.state.isLoginSuccess) {
            return <Redirect to='Profile'/>
        } else if (this.state.redirect) {
            return <Redirect to='/Sign Up'/>
        }
    };

    onSubmit = (event) => {
        event.preventDefault();
        getAccounts.fetchAccountByUsername(this.state.username).then(response => {
            if (response.data !== null &&
                response.data.signUp.password === this.state.password) {
                let obj = {
                    firstName: response.data.signUp.firstName,
                    lastName: response.data.signUp.lastName,
                    email: response.data.signUp.email,
                    gender: response.data.signUp.gender,
                    birthday: response.data.signUp.birthday,
                    username: response.data.signUp.username
                };

                localStorage.setItem('user', JSON.stringify(obj));
                localStorage.setItem('username', response.data.username);

                const newLogin = {
                    username: obj.username,
                    loginDate: this.state.currentDate
                };

                loginCalls.addLogin(newLogin).then(response => {
                    console.log(response);
                    console.log(response.data);
                });

                this.setState(prevState => ({
                    isLoginSuccess: !prevState.isLoginSuccess
                }));

            } else {
                let errorMsg = [{
                    message: "wrong password"
                }];
                errorMsg = JSON.stringify(errorMsg);
                console.log(errorMsg)
            }
        });

    };

    handleChange = event => {
        let nameOfInputField = event.target.name;
        if (nameOfInputField === 'login-username') {
            this.setState({
                username: event.target.value
            });
        } else if (nameOfInputField === 'login-password') {
            this.setState({
                password: event.target.value
            });
        }
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

            <div className="login row">

                <div className="col">

                    <div className="container">

                        <div className="login-main">

                            <div className="row">

                                <div className="col my-3">
                                    <h1 className="text-center" style={styleHeader}>Log In</h1>
                                </div>

                            </div>

                            <div className="row">

                                <div className="col">

                                    <div className="w-50 m-auto">
                                        <h3>{this.props.dataLogin}</h3>

                                        <form method="POST" onSubmit={this.onSubmit}>

                                            <div className="row ">

                                                <div className="col">

                                                    <label className="w-100 pr-1">
                                                        Username:
                                                        <input type="text" className="new-line w-100 px-2"
                                                               name="login-username"
                                                               required style={styleInputField}
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
                                                               name="login-password"
                                                               required style={styleInputField} placeholder="password"
                                                               onChange={this.handleChange}
                                                        />
                                                    </label>

                                                </div>

                                            </div>
                                            <button type="submit"
                                                    className="my-3"
                                                    style={styleButton}
                                                    name="login">
                                                Login
                                            </button>

                                        </form>
                                    </div>

                                </div>

                            </div>

                            <div className="row">

                                <div className="col my-3 text-center">

                                    <h3 style={styleHeader}>
                                        If you do not have an account,
                                        <span className="new-line">
                                        please click on the button to create one:
                                    </span>
                                    </h3>

                                    {this.renderRedirectHandler()}

                                    <input
                                        className="w-50 m-auto"
                                        type="button"
                                        value="Sign Up"
                                        onClick={this.setRedirectHandler}
                                        style={styleButton}
                                    />

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        )
    }
}

export default Login;