import React, {Component} from 'react'
import getServices from "../repository/get/axiosGetServices";

class Services extends Component {

    state = {
        serviceList: [],
        serviceName: ''
    };

    componentDidMount() {

        if (this.state.serviceName !== '') {

            getServices.fetchServicesByServicesName(this.state.serviceName).then((response) => {

                if (response.length !== 0 && response.data !== null) {

                    this.setState({
                        serviceList: [response.data]
                    });
                    console.log(this.state.serviceList);

                } else {
                    let errorMessage = {
                        message: "no data"
                    };
                    this.setState({
                        menu: [errorMessage]
                    });
                    console.log(this.state.menu);
                }
            });

        } else {

            getServices.fetchServices().then((response) => {

                if (response.length !== 0 && response.data !== null) {

                    this.setState({
                        serviceList: response.data
                    });
                    console.log(this.state.serviceList);

                } else {
                    let errorMessage = {
                        message: "no data"
                    };
                    this.setState({
                        menu: [errorMessage]
                    });
                    console.log(this.state.menu);
                }
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

export default Services;
