import React, {Component} from 'react'
import getRooms from "../repository/get/axiosGetRooms";

class Rooms extends Component {

    state = {
        rooms: [],
        roomNumber: ''
    };

    componentDidMount() {

        if (this.state.roomNumber !== '') {

            getRooms.fetchRoomByRoomNumber(this.state.roomNumber).then((response) => {

                this.setState({
                    rooms: [response.data]
                });
                console.log(this.state.rooms);
            });

        } else {

            getRooms.fetchRooms().then((response) => {

                this.setState({
                    rooms: response.data
                });

            });
        }

    };

    render() {

        return (
            <div>
                <h1>Data:</h1>
            </div>
        )

    }

}

export default Rooms;
