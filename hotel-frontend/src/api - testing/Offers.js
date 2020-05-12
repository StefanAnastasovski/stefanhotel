import React, {Component} from 'react'
import getOffers from "../repository/get/axiosGetOffers";

class Offers extends Component {

    state = {
        offers: [],
        offerName: ''
    };

    componentDidMount() {

        if (this.state.offerName !== '') {

            getOffers.fetchOfferByName(this.state.offerName).then((response) => {
                if (response.length !== 0 && response.data !== null) {

                    this.setState({
                        offers: [response.data]
                    });
                    console.log(this.state.offers);

                } else {
                    let errorMessage = {
                        message: "no data"
                    };
                    this.setState({
                        offers: [errorMessage]
                    });
                    console.log(this.state.offers);
                }
            });
        } else {

            getOffers.fetchOffers().then((response) => {

                if (response.length !== 0 && response.data !== null) {

                    this.setState({
                        offers: response.data
                    });
                    console.log(this.state.offers);

                } else {
                    let errorMessage = {
                        message: "no data"
                    };
                    this.setState({
                        offers: [errorMessage]
                    });
                    console.log(this.state.offers);
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

export default Offers;
