import React, {Component} from 'react'
import getContactUs from "../repository/get/axiosGetContactUs";

class ContactUs extends Component {

    state = {
        contactUsList: [],
    };

    componentDidMount() {

        getContactUs.fetchContactUs().then((response) => {

            if (response.length !== 0 && response.data !== null) {
                this.setState({
                    contactUsList: response.data
                });
                console.log(this.state.contactUsList);
            } else {

                let errorMessage = {
                    message: "no data"
                };
                this.setState({
                    contactUsList: [errorMessage]
                });
                console.log(this.state.contactUsList);

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

export default ContactUs;
