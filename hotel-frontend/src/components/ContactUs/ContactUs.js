import React, {Component} from 'react';

import createContactUs from '../../repository/post/axiosContactUs';

import './ContactUs.css';

class ContactUs extends Component {

    state = {
        firstName: null,
        lastName: null,
        email: null,
        comment: null
    };


  handleSubmit = (event) => {
        event.preventDefault();
        const newContactUs = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            comment: this.state.comment,
        };
        createContactUs.addContactUs(newContactUs).then(response => {
            console.log(response);
            console.log(response.data);
        });

    };


    handleChange = (event) => {

        if (event.target.name === "firstname") {
              this.setState({
                firstName: event.target.value
            });
        } else if (event.target.name === "lastname") {
              this.setState({
                lastName: event.target.value
            });
        } else if (event.target.name === "email") {
               this.setState({
                email: event.target.value
            })
        } else if (event.target.name === "comment") {
               this.setState({
                comment: event.target.value
            })
        }
    };

    render() {
        return (

            <div className="contact-us row">

                <div className="col">

                    <div className="container">

                        <div className="contact-us-main">
                            <div className="contact-us-title">
                                <h1 className="text-center text-color-title">
                                    Contact Us
                                </h1>
                            </div>

                            <div className="d-flex py-5">

                                <div className="contact-us-hotel-info col-5 align-self-center">

                                    <h1>Stefan Hotel, Miami</h1>

                                    <ul>

                                        <li>
                                            455 Grand Bay Dr.

                                        </li>

                                        <li>
                                            Miami, FL 33149 United States

                                        </li>

                                        <li>
                                            Phone: +13053654500

                                        </li>

                                        <li>
                                            via Email
                                        </li>

                                    </ul>

                                </div>

                                <div className="col-7 p-0">


                                    <div className="col mr-1">

                                        <form method="POST" onSubmit={this.handleSubmit}>

                                            <label className="font-weight-bold">
                                                First name:</label>
                                            <input
                                                required
                                                type="text"
                                                name="firstname"
                                                placeholder="First name"
                                                onChange={this.handleChange}
                                            />

                                            <label className="font-weight-bold">
                                                Last name:</label>

                                            <input
                                                required
                                                name="lastname"
                                                type="text"
                                                placeholder="Last name"
                                                onChange={this.handleChange}
                                            />


                                            <label className="font-weight-bold">
                                                Email:</label>

                                            <input type="email"
                                                   required
                                                   name="email"
                                                   placeholder="name@example.com"
                                                   onChange={this.handleChange}/>


                                            <label className="font-weight-bold">
                                                Enter ...</label>

                                            <input as="textarea" rows="3"
                                                   onChange={this.handleChange}
                                                   name="comment"/>

                                            <input
                                                type="submit"
                                                className="my-3"
                                                name="contactus"
                                                onSubmit={this.handleSubmit}
                                            />

                                        </form>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        )
    }


}

export default ContactUs;