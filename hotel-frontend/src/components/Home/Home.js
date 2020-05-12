import React from "react";


import mainPicture from '../../images/picture-1.jpg'
import miamiPicture from '../../images/miami.jpg'

import './Home.css';

const Home = () => {

    return (

        <div className="home row">

            <div className="col">

                <div className="row">

                    <div className="col">

                        <div className="main-picture justify-content-end">

                            <img className="header-pic"
                                 src={mainPicture}
                                 alt="hotel"
                                 width="100%"
                                 height="100%"
                            />

                            <div className="container ">

                                <div className="position-absolute main-title text-color-title">

                                    <h1 className="font-weight-bold">Welcome to
                                        <span className="new-line">Stefan Hotel</span>
                                    </h1>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="row">

                    <div className="col">
                        <div className="container">

                            <div className="row">

                                <div className="col-8 my-4">

                                    <h2 className="text-uppercase text-color-title">
                                        Let us put you close to Miami's pulse and even closer to its heart
                                    </h2>

                                    <p>
                                        Miami might stimulate the mind for glitter and glamour,
                                        but it is the city’s Coconut Grove district that serves up its cultural soul.
                                        Art galleries, museums, boutiques and restaurants beckon visitors to this
                                        historic Florida neighborhood, along with Stefan Hotel Coconut Grove,
                                        Miami, a hotel destined to enchant every guest with a truly unique
                                        hospitality experience. Inspired by the peacock hues of blue, violet
                                        and green, the hotel exquisitely blends in to the lush surroundings of
                                        this Biscayne Bay artist enclave, making it a work of art itself.
                                        Enjoy dining that exemplifies Miami’s diverse mix of cultural flavors.
                                        Find inner tranquility with a customized spa experience. Or let the glow
                                        of a fire pit and the comfort of an oversized couch make an evening on our
                                        Courtyard Fountain Terrace all the more memorable. Stefan Hotel Coconut Grove,
                                        Miami is also just minutes from first-class shopping and dining in Brickell,
                                        Miami
                                        , making our Florida hotel the ideal location for those looking for
                                        a vacation within a vacation.
                                        At one of the most luxurious hotels in the heart of Miami, Florida, guests can
                                        experience:
                                        115 guest rooms and suites, each with a private balcony and floor-to-ceiling
                                        windows
                                        Manicured gardens and pool 6,000-square-foot Boutique Spa and fitness center
                                        Extensive event and pre-function space including a 3,200-square-foot garden
                                        courtyard and a 5,200-square-foot Stefan Hotel.
                                    </p>

                                </div>

                                <div className="col-4 my-4">

                                    <img
                                        className="miami-picture"
                                        alt="Miami beach view"
                                        src={miamiPicture}
                                        width="100%"
                                        height="100%"
                                    />

                                </div>

                            </div>

                        </div>
                    </div>

                </div>


            </div>

        </div>

    )

};

export default Home;
