import React, {Component} from 'react'
import getOrder from "../repository/get/axiosGetOrder";

class Order extends Component {

    state = {
        orders: []
    };

    componentDidMount() {

        getOrder.fetchOrders().then((response) => {

            this.setState({
                orders: response.data
            });
            console.log(this.state.orders);

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

export default Order;
