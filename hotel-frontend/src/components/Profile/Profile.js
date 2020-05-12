import React, {PureComponent} from "react";

import Aux from "../../hoc/Auxilliary";

import './Profile.css';

import getTableReservation from '../../repository/get/axiosGetTableReservation'
import getRoomReservation from '../../repository/get/axiosGetRoomReservation'
import getOrderServices from '../../repository/get/axiosGetOrder';

class Profile extends PureComponent {

    state = {
        showEditEmailField: false,
        showEditBtn: true,
        showSuccess: false,
        emailValue: this.props.obj.email,
        showProfilePage: true,
        showBill: false,
        cardFullName: null,
        showPayment: false,
        user: {
            firstName: null,
            lastName: null,
            birthday: null,
            gender: null,
            username: null,
            email: null
        },
        tableReservationList: [],
        roomReservationList: [],
        orderServicesList: []
    };

    getInitialState(user) {
        return user.firstName + " " + user.lastName;
    }

    componentDidMount() {
        let user = JSON.parse(localStorage.getItem('user'));
        this.setState({
            firstName: user.firstName,
            lastName: user.lastName,
            birthday: user.birthday,
            gender: user.gender,
            username: user.username,
            email: user.email,
            cardFullName: this.getInitialState(user)
        });

        getTableReservation.fetchTableReservation().then(response => {
            console.log(response.data);
            this.setState({
                tableReservationList: response.data
            });
        });
        getRoomReservation.fetchRoomReservation().then(response => {
            console.log(response.data);
            this.setState({
                roomReservationList: response.data
            });
        });
        getOrderServices.fetchOrders().then(response => {
            console.log(response.data);
            this.setState({
                orderServicesList: response.data
            });
        });

    }



    editBtnHandler = () => {
        console.log('editBtn');
        if (this.state.showSuccess) {
            this.setState(prevState => ({
                showSuccess: !prevState.showSuccess,
            }));
        }
        this.setState(prevState => ({
            showEditEmailField: !prevState.showEditEmailField,
            showEditBtn: !prevState.showEditBtn
        }));
    };

    showSuccessfullyChangedHandler = (event) => {
        if (this.props.obj.email !== this.state.emailValue) {
            this.setState(prevState => ({
                showSuccess: !prevState.showSuccess,
                showEditEmailField: !prevState.showEditEmailField,
                showEditBtn: !prevState.showEditBtn,
                emailValue: event.target.value
            }));
        } else {
            alert("Wrong! Please Enter New Email!")
        }
    };

    newEmailHandler = (event) => {

        this.setState({
            emailValue: event.target.value
        });

    };

    handleSubmit = (event) => {
        console.log(event.target);
        event.preventDefault();
    };

    showBillHandler = (event) => {
        this.setState(prevState => ({
            showBill: !prevState.showBill,
            showProfilePage: false,
        }));
    };

    showPaymentHandler = (event) => {
        this.setState(prevState => ({
            showPayment: !prevState.showPayment,
            showProfilePage: false,

        }));
    };


    btnBackHandler = (event) => {
        console.log(event.target);
        if (this.state.showBill) {
            this.setState(prevState => ({
                showBill: !prevState.showBill,
                showProfilePage: !prevState.showProfilePage
            }));
        } else if (this.state.showPayment) {
            this.setState(prevState => ({
                showPayment: !prevState.showPayment,
                showProfilePage: !prevState.showProfilePage
            }));
        }

    };

    handleChange = event => {
        let nameOfInputField = event.target.name;
        if (nameOfInputField === 'cardfullname') {
            this.setState({
                cardFullName: event.target.value
            });
        } else if (nameOfInputField === 'su-lastname') {
            this.setState({
                lastName: event.target.value
            });
        }
    };

    render() {

        let newEmail = this.state.emailValue;
        let btnBack = (
            <div>
                <button onClick={this.btnBackHandler}
                        className="btn-bill-payment-info"
                >

                    Back to Profile
                </button>
            </div>

        );

        let showProfilePage = (

            <div className="profile-main">

                <div className="d-flex py-3">

                    <div className="col">

                        <h3 className="text-color-title text-center">Personal Information</h3>

                        <div className="personal-information ">

                            <p className="font-weight-bold">First Name:
                                <span className="new-line font-weight-normal">
                                            {this.state.firstName}
                                        </span>
                            </p>

                            <p className="font-weight-bold">Last Name:
                                <span className="new-line font-weight-normal">
                                            {this.state.lastName}
                                        </span>
                            </p>

                            <p className="font-weight-bold">Birthday:
                                <span className="new-line font-weight-normal">
                                            {this.state.birthday}
                                        </span>
                            </p>

                            <p className="font-weight-bold">Gender:
                                <span className="new-line font-weight-normal">
                                            {this.state.gender}
                                        </span>
                            </p>

                            <p className="font-weight-bold">Username:
                                <span className="new-line font-weight-normal">
                                            {this.state.username}
                                        </span>
                            </p>

                            <p className="font-weight-bold">Email:</p>

                            <form method="POST" onSubmit={this.handleSubmit}>
                                {!this.state.showEditEmailField ?
                                    <Aux clas>
                                        <p className="font-weight-normal d-inline">
                                            {newEmail}
                                        </p>
                                        {
                                            this.state.showEditBtn &&
                                            <input type="submit" value="Edit Email"
                                                   className="btn-submit-new-email py-0"
                                                   onClick={this.editBtnHandler}/>
                                        }
                                        {this.state.showSuccess && <p className="bg-success">
                                            email successfully changed!
                                        </p>}
                                    </Aux>

                                    :
                                    <Aux>
                                        <input type="email" name="new-email"
                                               className="new-email-field"
                                               defaultValue={newEmail}
                                               onChange={this.newEmailHandler}
                                        />

                                        <input type="submit" value="Submit" className="btn-submit-new-email"
                                               onClick={this.showSuccessfullyChangedHandler}
                                        />
                                    </Aux>}
                            </form>

                        </div>

                    </div>

                    <div className="col">

                        <h3 className="text-color-title text-center">Bill Information & Payment</h3>

                        <div className="bill-info-payment text-center">

                            <div className="mt-5 w-100">
                                <button onClick={this.showBillHandler}
                                        className="btn-bill-payment-info w-75"
                                >
                                    Check Bill
                                </button>

                            </div>

                            <div className="mt-5">
                                <button onClick={this.showPaymentHandler}
                                        className="btn-bill-payment-info w-75"
                                >
                                    Pay Your Bill
                                </button>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        );

        let showBill = (
            <div className="bill-information-main">

                <div className="bill-information">

                    <h1 className="text-color-title text-center p-3">Bill Information</h1>

                    <div className="row d-flex">

                        <div className="col">

                            <h4 className="text-center">Reservation</h4>

                            <div className="d-flex justify-content-between mx-5 bill-card-border">

                                <div className="room-reserved">

                                    {/*which Room is reserved*/}
                                    <p className="font-weight-bold">
                                        Reserved Rooms:
                                    </p>

                                    <p>
                                        Room 1
                                    </p>

                                </div>

                                <div className="table-reserved">

                                    {/*which Table is reserved*/}
                                    <p className="font-weight-bold">
                                        Reserved Tables:
                                    </p>

                                    <p>
                                        Table 1
                                    </p>

                                </div>

                            </div>

                        </div>

                        <div className="col">

                            <h4 className="text-center">Order</h4>

                            <div className="d-flex justify-content-between mx-5 bill-card-border">

                                <div className="services-ordered">

                                    {/*which Services are ordered*/}
                                    <p className="font-weight-bold">
                                        Ordered Services:
                                    </p>

                                    <p>
                                        Service 1
                                    </p>

                                </div>

                                <div className="fooddrinks-ordered">

                                    {/*which Food&Drinks are ordered*/}
                                    <p className="font-weight-bold">
                                        Ordered Food & Drinks:
                                    </p>

                                    <p>
                                        Food & Drinks 1
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    {btnBack}

                </div>


            </div>

        );

        let showPayBill = (

            <div className="payment-information-main">

                <div className="payment-information">

                    <h1 className="text-color-title text-center p-3">Payment Information</h1>

                    <div className="row d-flex my-3">

                        <div className="col mr-1">

                            <div className="client-information bill-card-border p-3">

                                <p className="font-weight-bold">
                                    Username:
                                    <span className="font-weight-normal pl-3">
                                    {this.state.username}
                                </span>
                                </p>

                                <p className="font-weight-bold">
                                    Full Name:
                                    <span className="font-weight-normal pl-3">
                                    {this.state.firstName + " " + this.state.lastName}
                                </span>
                                </p>

                                <p className="font-weight-bold">
                                    Room Number:
                                    <span className="font-weight-normal pl-3">
                                {/*{this.state.roomNumber}*/}
                                        #34
                                </span>
                                </p>

                                <p className="font-weight-bold">
                                    Total Bill Amount:
                                    <span className="font-weight-normal pl-3">
                                {/*{personalInfo.roomNumber}*/}
                                        43434 $
                                </span>
                                </p>
                            </div>

                        </div>

                        <div className="col ml-1">

                            <div className="payment-information bill-card-border p-3">

                                <form method="POST" onSubmit={this.handleSubmit}>

                                    <div className="row">

                                        <div className="col mr-1">
                                            <label htmlFor="cardfullname" className='font-weight-bold pr-2'>Full
                                                Name:</label>
                                            <input type="text" name="cardfullname"
                                                   className="new-line card-information w-100 pl-2" required
                                                   placeholder="John Doe"
                                                   id="cardfullname"
                                                   value={this.state.cardFullName}
                                                   onChange={this.handleChange}
                                            />
                                        </div>

                                        <div className="col ml-1">
                                            <label htmlFor="cardinformation" className='font-weight-bold pr-2'>Card
                                                Number:</label>
                                            <input type="text" name="cardinformation"
                                                   className="new-line card-information w-100 pl-2" required
                                                   placeholder="xxxx-xxxx-xxxx-xxxx"
                                                   id="cardinformation"
                                            />
                                        </div>

                                    </div>

                                    <div className="row">

                                        <div className="col">

                                            <label htmlFor="cardccv" className='font-weight-bold pr-2 pt-2'>Security
                                                Code(CCV):</label>
                                            <input type="text" name="cardccv"
                                                   className="new-line card-information w-25 pl-2" required
                                                   placeholder="xxx"
                                                   id="cardccv"
                                            />

                                        </div>


                                        <div className="col">

                                            <label htmlFor="cardccv" className='font-weight-bold pr-2 pt-2'>Expiration
                                                date:</label>
                                            <div className="d-flex">

                                                <input type="text" name="cardexdate-mm"
                                                       className="new-line card-information w-25 pl-2" required
                                                       placeholder="MM"
                                                />
                                                <label className="mx-3 font"> / </label>
                                                <input type="text" name="cardexdate-yy"
                                                       className="new-line card-information w-25 pl-2" required
                                                       placeholder="YY"
                                                />

                                            </div>

                                        </div>


                                    </div>

                                    <div className="text-center mt-3">
                                        {/*onClick={this.handleSubmit}*/}
                                        <input type="submit"
                                               className="btn-bill-payment-info w-75"
                                               value="Submit" name="paybill"/>
                                    </div>

                                </form>


                            </div>

                        </div>

                    </div>

                    {btnBack}

                </div>


            </div>

        );

        return (

            <div className="profile row ">

                <div className="col">

                    <div className="container">

                        {
                            this.state.showProfilePage && showProfilePage
                        }

                        {
                            this.state.showBill && showBill
                        }

                        {
                            this.state.showPayment && showPayBill
                        }

                    </div>

                </div>

            </div>


        );

    }

}

export default Profile;
