import React, {Component} from 'react'
import AccountCalls from "../repository/get/axiosGetAccount";

class Account extends Component {

    state = {
        accounts: []
    };

    componentDidMount() {

        AccountCalls.fetchAccounts().then((response) => {

            this.setState({
                accounts: response.data
            });
            console.log(this.state.accounts);

        });

        AccountCalls.fetchAccountByUsername("stefan123").then((response) => {

            this.setState({
                accounts: response.data
            });
            console.log(this.state.accounts);

        });

    };

    render() {

        return (
            <div>
                <h1>Data:</h1>
            </div>
        )

    }

}

export default Account;
