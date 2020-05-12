import React, {Component} from 'react'
import getMenu from "../repository/get/axiosGetMenu";

class Menu extends Component {

    state = {
        menu: [],
        mealName: '',
        typeOfMeal: ''
    };

    componentDidMount() {

        if (this.state.mealName !== '') {

            getMenu.fetchMenuByMealName(this.state.mealName).then((response) => {

                if (response.length !== 0 && response.data !== null) {

                    this.setState({
                        menu: [response.data]
                    });
                    console.log(this.state.menu);

                } else {
                    let errorMessage = {
                        message: "no data"
                    };
                    this.setState({
                        menu: [errorMessage]
                    });
                    console.log(this.state.menu);
                }

            });
        } else if (this.state.typeOfMeal !== '') {

            getMenu.fetchMenuByTypeOfMeal(this.state.typeOfMeal).then((response) => {

                if (response.length !== 0 && response.data !== null) {

                    this.setState({
                        menu: response.data
                    });
                    console.log(this.state.menu);

                } else {
                    let errorMessage = {
                        message: "no data"
                    };
                    this.setState({
                        menu: [errorMessage]
                    });
                    console.log(this.state.menu);
                }
            });
        } else {
            getMenu.fetchMenu().then((response) => {

                if (response.length !== 0 && response.data !== null) {

                    this.setState({
                        menu: response.data
                    });
                    console.log(this.state.menu);

                } else {
                    let errorMessage = {
                        message: "no data"
                    };
                    this.setState({
                        menu: [errorMessage]
                    });
                    console.log(this.state.menu);
                }
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


export default Menu;
