import React, {Component} from 'react'
import getTable from "../repository/get/axiosGetTable";

class Table extends Component {

    state = {
        tables: [],
        tableNumber: '32'
    };

    componentDidMount() {

        if (this.state.tableNumber !== '') {

            getTable.fetchTableByTableNumber(this.state.tableNumber).then((response) => {

                this.setState({
                    tables: [response.data]
                });
                console.log(this.state.tables);
            });

        } else {

            getTable.fetchTables().then((response) => {

                this.setState({
                    tables: response.data
                });
                console.log(this.state.tables);

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

export default Table;
