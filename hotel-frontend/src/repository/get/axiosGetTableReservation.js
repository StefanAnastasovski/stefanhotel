import axios from '../../custom-axios/axios';

const TableReservation = {

    fetchTableReservation: () => {
        return axios.get(`/api/getalltablereservation`)
    }

};

export default TableReservation;
