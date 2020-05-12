import React, {Component} from 'react'
import getPayment from "../repository/get/axiosGetPayment";

class Payment extends Component {

    state = {
        payments: [],
    };

    componentDidMount() {

        getPayment.fetchPayments().then((response) => {

            if (response.length !== 0 && response.data !== null) {

                this.setState({
                    payments: response.data
                });
                console.log(this.state.payments);

            } else {
                let errorMessage = {
                    message: "no data"
                };
                this.setState({
                    payments: [errorMessage]
                });
                console.log(this.state.payments);
            }

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

export default Payment;
