import axios from '../../custom-axios/axios';

const getRooms = {

    fetchRooms: () => {
        return axios.get(`/api/getallrooms`)
    },
    fetchRoomByRoomNumber: (roomNumber) => {
        return axios.get(`/api/getroombyroomnumber/${roomNumber}`)
    }

};

export default getRooms;