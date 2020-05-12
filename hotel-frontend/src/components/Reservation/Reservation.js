import React, {Component} from "react";

import Aux from "../../hoc/Auxilliary";

import Button from '@material-ui/core/Button';


import './Reservation.css'

import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';

import "react-datepicker/dist/react-datepicker.css";

import createRoomReservation from '../../repository/post/axiosRoomReservation'
import createTableReservation from '../../repository/post/axiosTableReservation';

import reservationTableImage from '../../images/res-1.jpg'
import reservationRoomImage from '../../images/res-room-1.jpg'

class Reservation extends Component {
//new Date(year, month, date, hours, minutes, seconds, ms)
    state = {
        startDate: new Date(),
        endDate: new Date(),
        time: '10:00',
        showResRoom: false,
        showResTable: false,
        firstName: null,
        lastName: null,
        phone: null,
        email: null,
        numberOfRooms: null,
        numberOfGuests: 1,
        additionalRequest: null,
        promoCode: null
    };

    startDateHandle = date => {
        this.setState({
            startDate: date
        });
    };

    endDateHandle = date => {
        this.setState({
            endDate: date
        });
    };

    onTimeChange = time => {
        this.setState(
            {time}
        )
    };

    showResRoom = () => {
        this.setState({
            showResRoom: true
        });
    };

    showResTable = () => {
        this.setState({
            showResTable: true
        });
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
        } else if (nameOfInputField === 'phone') {
            this.setState({
                phone: event.target.value
            })
        } else if (nameOfInputField === 'email') {
            this.setState({
                email: event.target.value
            })
        } else if (nameOfInputField === 'number_of_rooms') {
            this.setState({
                numberOfRooms: event.target.value
            })
        } else if (nameOfInputField === 'number_of_guests') {
            this.setState({
                numberOfGuests: event.target.value
            })
        } else if (nameOfInputField === 'additional_request') {
            this.setState({
                additionalRequest: event.target.value
            })
        } else if (nameOfInputField === 'promocode') {
            this.setState({
                promoCode: event.target.value
            })
        }
    };

    handleSubmit = (event) => {
        event.preventDefault();

        let startDate = this.state.startDate;
        startDate = startDate.getDay() + "-" + startDate.getMonth() + "-" + startDate.getFullYear();
        let endDate = this.state.endDate;
        endDate = endDate.getDay() + "-" + endDate.getMonth() + "-" + endDate.getFullYear();

        const commonReservation = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phone: this.state.phone,
            email: this.state.email,
            additionalRequest: this.state.additionalRequest,
            promoCode: this.state.promoCode,
            startDate: startDate,
            numberOfGuests: this.state.numberOfGuests,
        };

        const newRoomReservation = {
            ...commonReservation,
            numberOfRooms: this.state.numberOfRooms,
            numberOfGuests: this.state.numberOfGuests,
            endDate: endDate
        };

        const newTableReservation = {
            ...commonReservation,
            time: this.state.time
        };

        console.log(newTableReservation);

        if (newRoomReservation.firstName !== null && newRoomReservation.lastName &&
            newRoomReservation.phone !== null && newRoomReservation.email !== null &&
            newRoomReservation.numberOfGuests !== null && newRoomReservation.numberOfRooms !== null) {
            createRoomReservation.addRoomReservation(newRoomReservation).then(response => {
                console.log(response);
                console.log(response.data);
            });
        }
        else if(newRoomReservation.firstName !== null && newRoomReservation.lastName &&
            newRoomReservation.phone !== null && newRoomReservation.email !== null &&
            newRoomReservation.numberOfGuests !== null
            && newRoomReservation.time ){
             createTableReservation.addTableReservation(newTableReservation).then(response => {
                console.log(response);
                console.log(response.data);
            });
        }


    };


    render() {

        const styleBorderRadius = {
            borderRadius: '20px ',
        };

        const styleInputField = {
            borderRadius: '10px',
            padding: '5px 3px',
            border: '1px solid grey',

        };

        let showReservationInfo;
        let showReservationDate;
        let reservationTitle;
        let showReservationImage;
        let showReservationPage;

        if (this.state.showResRoom) {

            showReservationImage = (

                <Aux>

                    <div className="reservation-image">

                        <img
                            className="res-img"
                            src={reservationRoomImage}
                            alt="reservation room"
                            width="100%"
                            height="100%"
                        />

                    </div>

                </Aux>


            );

            reservationTitle = 'Room';

            showReservationInfo = (

                <Aux>

                    <div className="col pr-1">

                        <select name="number_of_rooms" className="w-100 select-reservation"
                                onChange={this.handleChange}>

                            <option value="1">1 Room</option>
                            <option value="2">2 Room</option>
                            <option value="3">3 Room</option>
                            <option value="apartment">Apartment</option>

                        </select>

                    </div>

                    <div className="col pl-1">

                        <select name="number_of_guests" className="w-100 select-reservation"
                                onChange={this.handleChange}>

                            <option value="1">1 Guest</option>
                            <option value="2">2 Guests</option>
                            <option value="3">3 Guests</option>
                            <option value="4">4 Guests</option>
                            <option value="5">5 Guests</option>
                            <option value="6">6 Guests</option>

                        </select>

                    </div>

                </Aux>
            );

            showReservationDate = (

                <Aux>

                    <div className="col py-2 mr-1">

                        <label className="w-100">
                            <span className="new-line">Start Date:</span>
                            <DatePicker
                                name="start_date"
                                selected={this.state.startDate}
                                onChange={this.startDateHandle}
                            />
                        </label>

                    </div>

                    <div className="col py-2 ml-1">

                        <label className="w-100">
                            <span className="new-line">End Date:</span>
                            <DatePicker
                                name="end_date"
                                className="w-100"
                                selected={this.state.endDate}
                                onChange={this.endDateHandle}
                            />
                        </label>

                    </div>

                </Aux>
            );

        } else if (this.state.showResTable) {

            showReservationImage = (

                <Aux>

                    <div className="reservation-image">

                        <img
                            className="res-img"
                            src={reservationTableImage}
                            alt="reservation table"
                            width="100%"
                            height="100%"
                        />

                    </div>

                </Aux>


            );

            reservationTitle = 'Table';

            showReservationInfo = (

                <Aux>

                    <div className="col pr-1">

                        <select name="number_of_guests" className="w-100 select-reservation" aria-label="party size"
                                onChange={this.handleChange}
                        >

                            <option value="1">1 person</option>
                            <option value="2">2 people</option>
                            <option value="3">3 people</option>
                            <option value="4">4 people</option>
                            <option value="5">5 people</option>
                            <option value="6">6 people</option>
                            <option value="7">7 people</option>
                            <option value="8">8 people</option>
                            <option value="9">9 people</option>
                            <option value="10">10 people</option>
                            <option value="11">11 people</option>
                            <option value="12">12 people</option>
                            <option value="13">13 people</option>
                            <option value="14">14 people</option>
                            <option value="15">15 people</option>
                            <option value="16">16 people</option>
                            <option value="17">17 people</option>
                            <option value="18">18 people</option>
                            <option value="19">19 people</option>
                            <option value="20">20 people</option>
                            <option value="21">Larger party</option>

                        </select>

                    </div>

                </Aux>
            );

            showReservationDate = (

                <Aux>

                    <div className="col mr-1">

                        <label className="w-100">
                            <span className="new-line">Date:</span>
                            <DatePicker
                                selected={this.state.startDate}
                                onChange={this.startDateHandle}
                            />
                        </label>

                    </div>

                    <div className="col w-100 ml-1">
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

                </Aux>
            );

        } else {

            showReservationPage = (

                <div className="reservation-main">

                    <div className="text-reservation text-center">

                        <h1 className="text-color-title">
                            Make Reservation
                        </h1>

                        <p className="text-center">
                            If you want to reserve a room or table,
                            please click on the appropriate button.
                            <span className="new-line font-weight-bold">
                                        Thank you!
                                    </span>
                        </p>

                    </div>

                    <div className="d-flex justify-content-between">

                        <div className="col text-center">

                            <div className="reservation-button col">

                                <div className="reservation-table-gallery">

                                    <img className="res-room-img"
                                         src={reservationRoomImage}
                                         alt="room"
                                         width="100%"
                                         height="100%"
                                    />

                                    <div className="col text-center">


                                        <Button onClick={this.showResRoom}
                                                variant="outlined" color="primary"
                                                className="bg-white-20 font-weight-bold text-20px res-btn">
                                            Room
                                        </Button>

                                    </div>

                                </div>


                            </div>


                        </div>

                        <div className="reservation-button col">


                            <div className="col text-center">


                                <Button onClick={this.showResTable}
                                        variant="outlined" color="primary"
                                        className="bg-white-20 font-weight-bold text-20px res-btn">
                                    Table
                                </Button>

                            </div>

                            <div className="reservation-table-gallery">

                                <img className="res-table-img"
                                     src={reservationTableImage}
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
        if (this.state.showResRoom || this.state.showResTable) {
            showReservationPage = (
                <div className="room container">

                    <div className="row">

                        <div className="col my-3">

                            <h1 className="text-color-title text-center">
                                Make {reservationTitle} Reservation
                            </h1>

                            <div className="col d-flex">

                                <div className="col">
                                    {showReservationImage}
                                </div>

                                <div className="col p-3 border border-info room-res-form" style={styleBorderRadius}>

                                    <form method="POST" action="/profile">

                                        <div className="row">

                                            <div className="col">

                                                <label className="w-100 pr-1">
                                                    First Name:
                                                    <input type="text" className="new-line w-100" name="firstname"
                                                           required style={styleInputField}
                                                           onChange={this.handleChange}
                                                    />
                                                </label>

                                            </div>

                                            <div className="col">

                                                <label className="w-100 pl-1">
                                                    Last Name:
                                                    <input type="text" className="new-line w-100" name="lastname"
                                                           required style={styleInputField}
                                                           onChange={this.handleChange}
                                                    />
                                                </label>

                                            </div>

                                        </div>

                                        <div className="row">

                                            <div className="col">

                                                <label className="w-100 pr-1">
                                                    Phone:
                                                    <input type="text" className="new-line w-100" name="phone"
                                                           required
                                                           style={styleInputField}
                                                           placeholder="07x-xxx-xxx"
                                                           onChange={this.handleChange}
                                                    />
                                                </label>

                                            </div>

                                            <div className="col">

                                                <label className="w-100 pl-1">
                                                    Email:
                                                    <input type="email" className="new-line w-100" name="email"
                                                           style={styleInputField}
                                                           required
                                                           placeholder="name@example.com"
                                                           onChange={this.handleChange}
                                                    />
                                                </label>

                                            </div>

                                        </div>

                                        <div className="row py-2">
                                            {showReservationInfo}
                                        </div>

                                        <div className="col d-flex">

                                            {showReservationDate}

                                        </div>

                                        <div className="row">

                                            <div className="col w-100">

                                            <textarea placeholder="Additional Requests" rows="5"
                                                      className="w-100"
                                                      style={styleInputField}
                                                      name="additional_request"
                                                      onChange={this.handleChange}
                                            >
                                            </textarea>

                                            </div>

                                        </div>

                                        <div className="row">

                                            <div className="col">

                                                <label className="w-100">
                                                    Promo Code:
                                                    <input type="text" className="new-line w-100" name="promocode"
                                                           style={styleInputField}
                                                           placeholder="Optional"
                                                           onChange={this.handleChange}
                                                    />
                                                </label>

                                            </div>

                                        </div>

                                        <div className="row">

                                            <div className="col text-center w-100">

                                                <input type="submit" className="w-100 reserve-btn font-weight-bold"
                                                       style={styleInputField}
                                                       value="Reserve"
                                                       onClick={this.handleSubmit}
                                                />

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

                                {showReservationPage}

                            </div>

                        </div>


                    </div>

                </div>

            </div>

        )

    }


};

export default Reservation;