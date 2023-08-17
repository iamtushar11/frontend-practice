import React from 'react'
import online from "../images/icon-online.svg"
import budget from "../images/icon-budgeting.svg"
import onboard from "../images/icon-onboarding.svg"
import api from "../images/icon-api.svg"
import "./Services.css"
export const Services = () => {
    return (
        <div className='main1'>
            <div className='section1'>
                <div className='container'>
                    <div className='title'>
                        <h2>Why choose My Easybank?</h2>
                        <p>We leverage Open Banking to turn your bank account into your
                            financial hub. Control your finances like never before.</p>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="card">
                                <img className="img" src={online} alt="" />
                                <h2>Online Banking</h2>
                                <p>
                                    Our modern web and mobile applications allow you to keep track
                                    of your finances wherever you are in the world.
                                </p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img className="img" src={budget} alt="" />
                                <h2>Simple Budgeting</h2>
                                <p>
                                    See exactly where your money goes each month. Receive
                                    notifications when you’re close to hitting your limits.
                                </p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img className="img" src={onboard} alt="" />
                                <h2>Fast Onboarding</h2>
                                <p>
                                    We don’t do branches. Open your account in minutes online and
                                    start taking control of your finances right away.
                                </p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img className="img" src={api} alt="" />
                                <h2>Open API</h2>
                                <p>
                                    Manage your savings, investments, pension, and much more from
                                    one account. Tracking your money has never been easier.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
