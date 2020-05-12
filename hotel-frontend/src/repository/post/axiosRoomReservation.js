import axios from '../../custom-axios/axios';

const RoomReservation = {

    addRoomReservation: (roomReservation) => {
        return axios.post(`/api/createroomreservation`, roomReservation,{
               headers: {
                'Content-Type': 'application/json'
            }
        });
    }

};

export default RoomReservation;