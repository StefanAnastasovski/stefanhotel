import axios from '../../custom-axios/axios';

const Payment = {

    fetchPayments: () => {
        return axios.get(`/api/getallpayments`)
    }

};

export default Payment;