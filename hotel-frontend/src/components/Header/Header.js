import React from "react";

import Aux from "../../hoc/Auxilliary";

import logo from "../../images/logo-hotel.png";

import './Header.css';


const Header = (props) => {

    let showProfile;
    if (!props.isLogin) {
        showProfile = (
            <Aux>
                <li><a href="/">Home</a></li>
                <li><a href="/About Us">About Us</a></li>
                <li><a href="/Gallery">Gallery</a></li>
                <li><a href="/Reservation">Reservation</a></li>
                <li><a href="/Contact Us">Contact Us</a></li>
                <li><a href="/Sign Up">Sign Up</a></li>
                <li><a href="/Login">Login</a></li>
            </Aux>
        )
    } else {
        showProfile = (
            <Aux>
                <li><a href="/">Home</a></li>
                <li><a href="/About Us">About Us</a></li>
                <li><a href="/Gallery">Gallery</a></li>
                <li><a href="/Reservation">Reservation</a></li>
                <li><a href="/Order">Order</a></li>
                <li><a href="/Contact Us">Contact Us</a></li>
                <li><a href="/Profile">Profile</a></li>
                <li><a href="/Profile">Username: <span className="new-line text-center">{props.username}</span></a></li>
            </Aux>
        )
    }

    return (
        <div className="header row">
            <div className="container row mx-auto
                    justify-content-between
                    align-items-center
                    py-2">
                <div className="left-nav col-2 px-0">
                    <img
                        className="logo-hotel"
                        alt="logo"
                        src={logo}
                        width="100%"
                        height="100%"
                    />
                </div>
                <div className="right-nav col">
                    <nav className="navbar navbar-inverse justify-content-end">
                        <ul className="nav navbar-nav flex-row nav-menu align-items-center">
                            {showProfile}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;
