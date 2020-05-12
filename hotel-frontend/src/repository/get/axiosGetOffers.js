import axios from '../../custom-axios/axios';

const Offers = {

    fetchOffers: () => {
        return axios.get(`/api/getalloffers`)
    },
    fetchOfferByName: (offerName) => {
        return axios.get(`/api/getofferbyname/${offerName}`)
    }

};

export default Offers;