import React, {Component} from 'react';

import './App.css';
import Layout from "../components/Layout/Layout";
import Rooms from "../api - testing/Rooms";

import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import Aux from "../hoc/Auxilliary";

import ApiSignUp from "../api - testing/SignUp";
import Login from "../api - testing/Login";
import Account from "../api - testing/Account";
import Menu from "../api - testing/Menu";
import Table from "../api - testing/Table";
import RoomReservation from "../api - testing/RoomReservation";
import TableReservation from "../api - testing/TableReservation";
import Services from "../api - testing/Services";
import Order from "../api - testing/Order";
import Payment from "../api - testing/Payment";
import ContactUs from "../api - testing/ContactUs";
import Offers from "../api - testing/Offers";
import Bill from "../api - testing/Bill";

class App extends Component {


    //positionFooterAbsoltue is true when page havent scroll, otherwise  is false
    render() {

        return (

            <Aux>

                <div className="layout-container col px-0">

                    <Router>

                        <Switch>
                            <Route exact path="/">
                                <Redirect from="/" to="/Home"/>
                            </Route>

                            <Route exact path="/Home">
                                <Layout positionFooter={false} componentName={'home'}/>
                            </Route>
                        </Switch>

                        <Switch>
                            <Route exact path="/About Us">
                                <Layout positionFooter={true} componentName={'aboutus'}/>
                            </Route>
                        </Switch>

                        <Switch>
                            <Route exact path="/Contact Us">
                                <Layout positionFooter={true} componentName={'contactus'}/>
                            </Route>
                        </Switch>

                        <Switch>
                            <Route exact path="/Gallery">
                                <Layout positionFooter={true} componentName={'gallery'}/>
                            </Route>
                        </Switch>

                        <Switch>
                            <Route exact path="/Reservation">
                                <Layout positionFooter={true} componentName={'reservation'}/>
                            </Route>
                        </Switch>

                        <Switch>
                            <Route exact path="/Sign Up">
                                <Layout positionFooter={true} componentName={'signup'}/>
                            </Route>
                        </Switch>

                        <Switch>
                            <Route exact path="/Login">
                                <Layout positionFooter={true} componentName={'login'}/>
                            </Route>
                        </Switch>

                        <Switch>
                            <Route exact path="/Order">
                                <Layout positionFooter={true} componentName={'order'}/>
                            </Route>
                        </Switch>

                        <Switch>
                            <Route exact path="/Profile">
                                <Layout positionFooter={true} componentName={'profile'}/>
                            </Route>
                        </Switch>

                        {/*  <Switch>*/}
                        {/*    <Route exact path="/Payment">*/}
                        {/*        <Layout positionFooter={false} componentName={'payment'}/>*/}
                        {/*    </Route>*/}
                        {/*</Switch>*/}

                        <Switch>
                            <Route exact path="/getrooms">
                                <Rooms/>
                            </Route>
                        </Switch>

                        <Switch>
                            <Route exact path="/getsignup">
                                <ApiSignUp/>
                            </Route>
                        </Switch>

                        <Switch>
                            <Route exact path="/getlogin">
                                <Login/>
                            </Route>
                        </Switch>

                        <Switch>
                            <Route exact path="/getaccount">
                                <Account/>
                            </Route>
                        </Switch>

                        <Switch>
                            <Route exact path="/getmenu">
                                <Menu/>
                            </Route>
                        </Switch>

                        <Switch>
                            <Route exact path="/gettable">
                                <Table/>
                            </Route>
                        </Switch>

                        <Switch>
                            <Route exact path="/getroomreservation">
                                <RoomReservation/>
                            </Route>
                        </Switch>

                        <Switch>
                            <Route exact path="/gettablereservation">
                                <TableReservation/>
                            </Route>
                        </Switch>

                        <Switch>
                            <Route exact path="/getservices">
                                <Services/>
                            </Route>
                        </Switch>

                        <Switch>
                            <Route exact path="/getorder">
                                <Order/>
                            </Route>
                        </Switch>

                        <Switch>
                            <Route exact path="/getbills">
                                <Bill/>
                            </Route>
                        </Switch>

                        <Switch>
                            <Route exact path="/getpayments">
                                <Payment/>
                            </Route>
                        </Switch>

                        <Switch>
                            <Route exact path="/getcontactus">
                                <ContactUs/>
                            </Route>
                        </Switch>

                        <Switch>
                            <Route exact path="/getoffers">
                                <Offers/>
                            </Route>
                        </Switch>

                    </Router>

                </div>

            </Aux>

        )
            ;
    }
}

export default App;

// { var variable = something && <input ..... > }