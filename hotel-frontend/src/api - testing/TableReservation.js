import React, {Component} from 'react'
import getTableReservation from "../repository/get/axiosGetTableReservation";

class TableReservation extends Component {

    state = {
        tableReservation: [],
    };

    componentDidMount() {

        getTableReservation.fetchTableReservation().then((response) => {

            this.setState({
                tableReservation: response.data
            });
            console.log(this.state.tableReservation);

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

export default TableReservation;
