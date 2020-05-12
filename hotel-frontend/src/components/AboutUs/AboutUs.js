import React from "react";

import Aux from "../../hoc/Auxilliary";

import './AboutUs.css'


const AboutUs = () => {


    return (

        <Aux>

            <div className="about-us row mx-0 main-part">

                <div className="col">

                    <div className="container">

                        <div className="row">

                            {/*text*/}
                            <div className="col-12 my-4">

                                <h2 className="text-uppercase text-color-title mt-5">
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
                                    Miami is also just minutes from first-class shopping and dining in Brickell, Miami
                                    , making our Florida hotel the ideal location for those looking for
                                    a vacation within a vacation.
                                    At one of the most luxurious hotels in the heart of Miami, Florida, guests can
                                    experience:
                                    115 guest rooms and suites, each with a private balcony and floor-to-ceiling windows
                                    Manicured gardens and pool 6,000-square-foot Boutique Spa and fitness center
                                    Extensive event and pre-function space including a 3,200-square-foot garden
                                    courtyard and a 5,200-square-foot Stefan Hotel.
                                </p>

                            </div>

                        </div>

                        <div className="row">

                            <div className="col">

                                <h4 className="text-uppercase pl-4">
                                    We organise:
                                </h4>

                            </div>

                        </div>

                        {/*we organise - ul*/}
                        <div className="row ">

                            <div className="col">

                                <ul className="d-flex w-100">

                                    <div className="col">

                                        <li className="text-capitalize">
                                            wedding receptions
                                        </li>
                                        <li className="text-capitalize">
                                            first communion parties
                                        </li>
                                        <li className="text-capitalize">
                                            baptisms
                                        </li>
                                        <li className="text-capitalize">
                                            name-day parties
                                        </li>
                                        <li className="text-capitalize">
                                            funeral receptions
                                        </li>
                                        <li className="text-capitalize">
                                            prom
                                        </li>

                                    </div>

                                    <div className="col">

                                        <li className="text-capitalize">
                                            mid-school balls
                                        </li>
                                        <li className="text-capitalize">
                                            graduate balls
                                        </li>
                                        <li className="text-capitalize">
                                            bachelorette and bachelor parties
                                        </li>
                                        <li className="text-capitalize">
                                            celebrations of defending a thesis
                                        </li>
                                        <li className="text-capitalize">
                                            conferences
                                        </li>
                                        <li className="text-capitalize">
                                            trainings
                                        </li>

                                    </div>

                                    <div className="col">

                                        <li className="text-capitalize">
                                            galas
                                        </li>
                                        <li className="text-capitalize">
                                            business breakfasts
                                        </li>
                                        <li className="text-capitalize">
                                            company anniversary parties
                                        </li>
                                        <li className="text-capitalize">
                                            integration events and many others
                                        </li>

                                    </div>

                                </ul>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </Aux>
    )


};

export default AboutUs;
