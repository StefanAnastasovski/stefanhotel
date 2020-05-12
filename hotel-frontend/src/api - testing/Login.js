import React, {Component} from 'react'
import getLogin from "../repository/get/axiosGetLogin";

class Login extends Component {

    state = {
        loginList: [],
        username: ''
    };

    componentDidMount() {
        if (this.state.username !== '') {

            getLogin.fetchLoginByUsername(this.state.username).then((response) => {

                this.setState({
                    loginList: [response.data]
                });
                console.log(this.state.loginList);

            });

        } else {
            getLogin.fetchLogin().then((response) => {

                this.setState({
                    loginList: response.data
                });
                console.log(this.state.loginList);

            });

        }

    };

    render() {

        return (
            <div>
                <h1>Data:</h1>
            </div>
        )

    }

}

export default Login;
