import axios from '../../custom-axios/axios';

const Bill = {

    fetchBills: () => {
        return axios.get(`/api/getallbills`)
    }

};

export default Bill;