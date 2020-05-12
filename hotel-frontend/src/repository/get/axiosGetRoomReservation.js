import axios from '../../custom-axios/axios';

const RoomReservation = {

    fetchRoomReservation: () => {
        return axios.get(`/api/getallroomreservations`)
    }

};

export default RoomReservation;