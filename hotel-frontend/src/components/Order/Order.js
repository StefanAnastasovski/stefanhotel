import React, {Component} from "react";

import Aux from "../../hoc/Auxilliary";

import Button from '@material-ui/core/Button';


import './Order.css'

import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';

import "react-datepicker/dist/react-datepicker.css";

import createOrder from '../../repository/post/axiosOrder';
import getServices from '../../repository/get/axiosGetServices';
import getMenu from '../../repository/get/axiosGetMenu';

import reservationMenuImage from '../../images/roomservice-menu.jpg'
import reservationServicesImage from '../../images/services.jpg'

class Order extends Component {
//new Date(year, month, date, hours, minutes, seconds, ms)
    state = {
        orderDate: new Date(),
        time: '10:00',
        showResServices: false,
        showResMenu: false,
        totalPrice: '0 $',
        selectedOption: 'breakfast',
        firstName: null,
        lastName: null,
        roomNumber: null,
        billNumber: null,
        additionalRequest: null,
        services: [],
        selectedService: null,
        quantity: 1,
        menu: []
    };

    componentDidMount() {
        getServices.fetchServices().then(response => {
            console.log(response.data);
            this.setState({
                services: response.data
            });
        });
        getMenu.fetchMenuByTypeOfMeal(this.state.selectedOption).then(response => {
            console.log(response);
            console.log(response.data);
        });
    }

    orderDateHandle = date => {
        this.setState({
            orderDate: date
        });
    };

    showResServices = () => {
        this.setState({
            showResServices: true
        });
    };

    showResMenu = () => {
        this.setState({
            showResMenu: true
        });
    };

    handleOptionChange = (changeEvent) => {
        this.setState({
            selectedOption: changeEvent.target.name
        });
        let menu = getMenu.fetchMenuByTypeOfMeal(this.state.selectedOption).then(response => {
            console.log(response);
            console.log(response.data);
        });
        this.setState({
            menu: menu
        })
    };

    calculateServicesTotalPrice = (price, quantity) => {
        console.log(price);
        this.setState({
            totalPrice: 0
        });
        let totalPrice = parseInt(price) * parseInt(quantity);
        let serviceList = [];
        // console.log(targetPrice);

        if (totalPrice) {
            // serviceList.push(price.target.name)
            this.setState(prevState => ({
                totalPrice: totalPrice + '$'
            }));
        } else {
            this.setState(prevState => ({
                totalPrice: (parseInt(prevState.totalPrice) - parseInt(totalPrice.value)).toString() + ' $'
            }));
        }
        console.log(this.state.totalPrice)
    };

    handleClickChange = event => {
        let nameOfInputField = event.target;
        //////////////////////////////////////////////////////////////////
        //////NOT yet
        if (nameOfInputField === 'service') {
            this.setState({
                selectedService: event.target.value
            });
        }
        // console.log(this.state.selectedService);

    };

    handleChange = event => {
        let nameOfInputField = event.target.name;
        if (nameOfInputField === 'firstname') {
            this.setState({
                firstName: event.target.value
            });
        } else if (nameOfInputField === 'lastname') {
            this.setState({
                lastName: event.target.value
            });
        } else if (nameOfInputField === 'room-number') {
            this.setState({
                roomNumber: event.target.value
            })
        } else if (nameOfInputField === 'bill-number') {
            this.setState({
                billNumber: event.target.value
            })
        } else if (nameOfInputField === 'additional-request') {
            this.setState({
                additionalRequest: event.target.value
            })
        } else if (nameOfInputField === 'quantity') {

            //not good, find better solution
            if (this.state.selectedService === null) {
                // console.log(this.state.selectedService)
                this.setState({
                    selectedService: this.state.services[0].serviceName
                });
            } else {
                console.log(23424242)
            }
            console.log(this.state.selectedService)
            this.state.services.filter(item => {

                // console.log(this.state.selectedService);

                if (item.serviceName === this.state.selectedService) {
                    getServices.fetchServicesByServicesName(item.serviceName).then(response => {
                        console.log('2323');
                        console.log(response.data.price);
                        this.calculateServicesTotalPrice(response.data.price, this.state.quantity);
                        console.log(this.state.selectedService)

                    })
                }

            });

            this.setState({
                quantity: event.currentTarget.value
            });
            // this.setState(prevState => ({
            //           totalPrice: (parseInt(prevState.totalPrice) + parseInt(targetPrice.value)).toString() + ' $'
            //       }));
        }

    };
    handleInput = event => {
        this.setState({
            quantity: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        let now = this.state.orderDate;
        let orderDate = `${now.getDate()}-${now.getMonth()}-${now.getFullYear()}`;
        let additionalRequest = this.state.additionalRequest;

        //validator
        if (additionalRequest === '') {
            additionalRequest = null;
        }

        const newOrder = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            roomNumber: this.state.roomNumber,
            billNumber: this.state.billNumber,
            orderDate: orderDate,
            time: this.state.time,
            additionalRequest: additionalRequest
        };
        if (newOrder.firstName !== null && newOrder.lastName &&
            newOrder.roomNumber !== null && newOrder.billNumber !== null &&
            newOrder.orderDate !== null && newOrder.orderTime !== null &&
            newOrder.selectedService !== null) {
            console.log(newOrder);
            createOrder.addOrder(newOrder).then(response => {
                console.log(response);
                console.log(response.data);
            });
        }

    };


    render() {

        let services = this.state.services;
        let serviceList = services.map(item => {
            return <option key={item.id} value={item.serviceName}>{item.serviceName}</option>

        });
        let dropdownServices = (
            <Aux>
                <div>

                    <select id="services" name="service" className="form-control"
                            onClick={this.handleClickChange}
                    >
                        {serviceList}
                    </select>
                </div>
            </Aux>
        );
        const styleBorderRadius = {
            borderRadius: '20px ',
        };

        const styleInputField = {
            borderRadius: '10px',
            padding: '5px 3px',
            border: '1px solid grey',
        };

        // let showOrderInfo;
        // let showOrderDate;
        let reservationTitle = 'Place an Order';
        let showOrderPage;
        let showOrder;
        let additionalRequestText;
        let totalPriceField;
        totalPriceField = (

            <div className="col total-price-services text-center mb-2">

                <label htmlFor="totalpriceservices" className='pr-2'>Total Price:</label>
                <input type="text" disabled name="totalprice"
                       id="totalpriceservices" value={this.state.totalPrice}
                       className="total-price-services-field pl-1 text-center"
                />

            </div>
        );

        additionalRequestText = (
            <p className="text-additional-request-size">
                * You will be charged only for those
                additional requests that we offer.
            </p>
        );

        if (this.state.showResServices) {

            reservationTitle = 'Choose Additional Services';
            showOrder = (
                <Aux>

                    <div className="row justify-content-between px-5 py-3">

                        <div>

                            {dropdownServices}

                        </div>
                        <div>
                            <label htmlFor="quantity">Quantity:</label>
                            <input type="number" name="quantity" className="quantity"
                                   required
                                   onChange={this.handleChange.bind(this)}
                                   onInput={this.handleInput.bind(this)}
                            />
                        </div>

                    </div>

                    <div className="row">

                        <div className="col text-center mb-3">

                            <textarea placeholder="Additional Requests" rows="5"
                                      className="w-75 m-auto"
                                      name="additional-request"
                                      style={styleInputField}
                                      onChange={this.handleChange}
                            >
                            </textarea>

                            {additionalRequestText}

                        </div>

                    </div>

                    {totalPriceField}

                </Aux>
            );

        } else if (this.state.showResMenu) {

            reservationTitle = 'Order Food & Drinks';
            showOrder = (
                <Aux>

                    <div className="row justify-content-between flex-column px-5 py-3">


                        <div className="row justify-content-between flex-row text-center">

                            <div className="radio">
                                <label>
                                    <input type="radio" value="breakfast-menu"
                                           name="breakfast"
                                           checked={this.state.selectedOption === 'breakfast'}
                                           onChange={this.handleOptionChange}/>
                                    Breakfast
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="lunch-menu"
                                           name="lunch"
                                           checked={this.state.selectedOption === 'lunch'}
                                           onChange={this.handleOptionChange}/>
                                    Lunch
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="dinner-menu"
                                           name="dinner"
                                           checked={this.state.selectedOption === 'dinner'}
                                           onChange={this.handleOptionChange}/>
                                    Dinner
                                </label>
                            </div>

                        </div>


                        <div className="col pl-1">

                            <select name="meal-order" className="w-100 meal-order"
                                    onClick={this.menuCheckboxHandler}>

                                <option value="meal1">Meal 1</option>
                                <option value="meal2">Meal 2</option>
                                <option value="meal3">Meal 3</option>
                                <option value="meal4">Meal 4</option>
                                <option value="meal5">Meal 5</option>
                                <option value="meal6">Meal 6</option>

                            </select>

                        </div>

                        <div className="col meal-ingredients mt-3">

                            <div className="meal-ingredients-text">

                                <h5 className="text-color-title font-weight-bold">Ingredients:</h5>

                                <p>
                                    Ingredient 1
                                    ingredient 2
                                    ingredient 3
                                </p>

                            </div>

                        </div>


                    </div>

                    <div className="row">

                        <div className="col text-center mb-3">

            <textarea placeholder="Additional Requests" rows="5"
                      className="w-75 m-auto"
                      style={styleInputField}>
            </textarea>

                            {additionalRequestText}

                        </div>

                    </div>

                    {totalPriceField}

                </Aux>
            );

        } else {

            showOrderPage = (

                <div className="order-main">

                    <div className="text-reservation text-center">

                        <h1 className="text-color-title">
                            Place an Order
                        </h1>

                        <p className="text-center">
                            If you want to order food or drinks from our menu,
                            or you want to order room service,
                            please click on the appropriate button.
                            <span className="new-line font-weight-bold">
                                Thank you!
                            </span>
                        </p>

                    </div>

                    <div className="d-flex justify-content-between">

                        <div className="col text-center">

                            <div className="reservation-services-gallery ">

                                <img className="res-room-img"
                                     src={reservationServicesImage}
                                     alt="room"
                                     width="100%"
                                     height="100%"
                                />

                            </div>

                            <div className="reservation-button col ">

                                <div className="col text-center">

                                    <Button onClick={this.showResServices}
                                            variant="outlined" color="primary"
                                            className="bg-white-20 font-weight-bold text-20px res-btn">
                                        Services
                                    </Button>

                                </div>

                            </div>

                        </div>

                        <div className="col text-center">

                            <div className="col reservation-button">

                                <Button onClick={this.showResMenu}
                                        variant="outlined" color="primary"
                                        className="bg-white-20 font-weight-bold text-20px res-btn">
                                    Menu
                                </Button>

                            </div>

                            <div className="reservation-menu-gallery">

                                <img className="res-table-img"
                                     src={reservationMenuImage}
                                     alt="table"
                                     width="100%"
                                     height="100%"
                                />

                            </div>

                        </div>

                    </div>


                </div>

            );
        }
        if (this.state.showResServices || this.state.showResMenu) {

            showOrderPage = (

                <div className="room container">

                    <div className="row">

                        <div className="col my-3">

                            <h1 className="text-color-title text-center">

                                {reservationTitle}

                            </h1>

                            <div className="col d-flex">

                                <div className="col p-3 border border-info room-res-form" style={styleBorderRadius}>

                                    <form method="POST" action="/profile">

                                        <div className="row">

                                            <div className="col d-flex flex-column">

                                                <div className="col d-flex flex-row">

                                                    <div className="col">

                                                        <h4 className='text-center'>What Do You Want To Order?</h4>
                                                        {showOrder}

                                                    </div>

                                                    <div className="col d-flex align-items-center">

                                                        <div className='col'>
                                                            <div className="row">

                                                                <div className="col">

                                                                    <label className="w-100 pr-1">
                                                                        First Name:
                                                                        <input type="text" className="new-line w-100"
                                                                               name="firstname"
                                                                               required style={styleInputField}
                                                                               onChange={this.handleChange}
                                                                        />
                                                                    </label>

                                                                </div>

                                                                <div className="col">

                                                                    <label className="w-100 pl-1">
                                                                        Last Name:
                                                                        <input type="text" className="new-line w-100"
                                                                               name="lastname"
                                                                               required style={styleInputField}
                                                                               onChange={this.handleChange}
                                                                        />
                                                                    </label>

                                                                </div>

                                                            </div>

                                                            <div className="row">

                                                                <div className="col-4 p-0">

                                                                    <label className="w-100 pr-1">
                                                                        Room Number:
                                                                        <input type="text" className="new-line w-100"
                                                                               name="room-number"
                                                                               required
                                                                               style={styleInputField}
                                                                               onChange={this.handleChange}
                                                                        />
                                                                    </label>

                                                                </div>

                                                                <div className="col-8 p-0">

                                                                    <label className="w-100 pl-1">
                                                                        Bill Number:
                                                                        <input type="text" className="new-line w-100"
                                                                               name="bill-number"
                                                                               style={styleInputField}
                                                                               required
                                                                               onChange={this.handleChange}
                                                                        />
                                                                    </label>

                                                                </div>

                                                            </div>

                                                            <div className="row">

                                                                <div className="col mr-1">

                                                                    <label className="w-100">
                                                                        <span className="new-line">Date:</span>
                                                                        <DatePicker
                                                                            name="start-date"
                                                                            selected={this.state.orderDate}
                                                                            onChange={this.orderDateHandle}
                                                                        />
                                                                    </label>

                                                                </div>

                                                                <div className="col ml-1">

                                                                    <label className="w-100">
                                                                        <span className="new-line">Time:</span>
                                                                        <TimePicker
                                                                            name="time"
                                                                            className="bg-white"
                                                                            onChange={this.onTimeChange}
                                                                            value={this.state.time}
                                                                        />
                                                                    </label>

                                                                </div>

                                                            </div>

                                                            {/*<div className="row py-2">*/}

                                                            {/*    {showOrderInfo}*/}

                                                            {/*</div>*/}

                                                            {/*<div className="col d-flex">*/}

                                                            {/*    {showOrderDate}*/}

                                                            {/*</div>*/}

                                                        </div>

                                                    </div>

                                                </div>

                                                <div className="col text-center w-50 m-auto">

                                                    <input type="submit"
                                                           className="w-100 reserve-btn font-weight-bold"
                                                           style={styleInputField}
                                                           value="Order"
                                                           onClick={this.handleSubmit}
                                                    />

                                                </div>

                                            </div>

                                        </div>

                                    </form>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            );
        }


        // }

        return (

            <div className="reservation row ">

                <div className="col">

                    <div className="container">

                        <div className="row">

                            <div className="col">

                                {showOrderPage}

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        )

    }

}

export default Order;