import axios from '../../custom-axios/axios';

const Table = {

    fetchTables: () => {
        return axios.get(`/api/getalltables`)
    },
    fetchTableByTableNumber: (tableNumber) => {
        return axios.get(`/api/gettablebytablenumber/${tableNumber}`)
    }

};

export default Table;