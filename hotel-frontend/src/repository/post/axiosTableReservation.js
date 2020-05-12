import axios from '../../custom-axios/axios';

const TableReservation = {

    addTableReservation: (tableReservation) => {
        return axios.post(`/api/createtablereservation`, tableReservation,{
               headers: {
                'Content-Type': 'application/json'
            }
        });
    }

};

export default TableReservation;