import React, {Component} from 'react'
import getBill from "../repository/get/axiosGetBill";

class Bill extends Component {

    state = {
        bills: [],
    };

    componentDidMount() {

        getBill.fetchBills().then((response) => {

            this.setState({
                bills: response.data
            });
            console.log(this.state.bills);

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

export default Bill;
