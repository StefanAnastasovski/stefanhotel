import axios from '../../custom-axios/axios';

const Order = {

    addOrder: (newOrder) => {
        return axios.post(`/api/createorder`, newOrder,{
               headers: {
                'Content-Type': 'application/json'
            }
        });
    }

};

export default Order;