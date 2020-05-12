import React, {Component} from 'react'
import signUp from "../repository/get/axiosGetSignUp";

class SignUp extends Component {

    state = {
        signupList: [],
        username: ''
    };

    componentDidMount() {

        if (this.state.username !== '') {

            signUp.fetchSignUpByUserName(this.state.username).then((response) => {

                this.setState({
                    signupList: [response.data]
                });
                console.log(this.state.signupList);
            });

        } else {

            signUp.fetchSignUp().then((response) => {

                this.setState({
                    signupList: response.data
                });
                console.log(this.state.signupList);

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

export default SignUp;
