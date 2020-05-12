import React from "react";

import Aux from "../../hoc/Auxilliary";

import Home from "../Home/Home";
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";
import Gallery from "../Gallery/Gallery";
import Reservation from "../Reservation/Reservation"
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import Order from "../Order/Order";
import Profile from "../Profile/Profile";

import './Main.css';

const Main = (props) => {

    let component = {};
    let compName = props.componentName;
    console.log(props.obj);
    if (compName) {
        if (compName === 'home')
            component = <Home/>;
        if (compName === 'aboutus')
            component = <AboutUs/>;
        if (compName === 'contactus')
            component = <ContactUs/>;
        if (compName === 'gallery')
            component = <Gallery/>;
        if (compName === 'reservation')
            component = <Reservation/>;
        if (compName === 'signup')
            component = <SignUp/>;
        if (compName === 'login')
            component = <Login />;
        if (compName === 'order')
            component = <Order/>;
        if (compName === 'profile')
            component = <Profile obj={props.obj}/>;
    }

    return (
        <Aux>
            {component}
        </Aux>
    )

};

export default Main;