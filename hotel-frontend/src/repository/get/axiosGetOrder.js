import axios from '../../custom-axios/axios';

const Order = {

    fetchOrders: () => {
        return axios.get(`/api/getallorders`)
    }

};

export default Order;