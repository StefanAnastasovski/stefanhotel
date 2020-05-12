import React, {Component} from 'react'
import getRoomReservation from "../repository/get/axiosGetRoomReservation";

class RoomReservation extends Component {

    state = {
        roomReservation: []
    };

    componentDidMount() {

        getRoomReservation.fetchRoomReservation().then((response) => {

            this.setState({
                roomReservation: response.data
            });
            console.log(this.state.roomReservation);

        });

    };

    render() {

        return (
            <div>
                <h1>Data:</h1>
            </div>
        )

    }

}

export default RoomReservation;
