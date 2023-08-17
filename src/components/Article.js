import React from 'react'
import currency from "../images/image-currency.jpg"
import restaurant from "../images/image-restaurant.jpg"
import plane from "../images/image-plane.jpg"
import conf from "../images/image-confetti.jpg"
import "./Article.css"
export const Article = () => {
    return (

        <div className='section'>
            <div class="container">
                <div class="title">
                    <h2>Latest Articles</h2>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="card">
                            <img className="img2" src={currency} alt="" />
                            <small>By Claire Robinson</small>
                            <h3>Receive money in any currency with no fees</h3>
                            <p className="para">
                                The world is getting smaller and we’re becoming more mobile.
                                So why should you be forced to only receive money in a single
                                ….
                            </p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img className="img2" src={restaurant} alt="" />
                            <small>By Wilson Hutton</small>
                            <h3>Treat yourself without worrying about money</h3>
                            <p className="para">
                                Our simple budgeting feature allows you to separate out your
                                spending and set realistic limits each month. That means you …
                            </p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img className="img2" src={plane} alt="" />
                            <small>By Wilson Hutton</small>
                            <h3>Take your Easybank card wherever you go</h3>
                            <p className="para">
                                We want you to enjoy your travels. This is why we don’t charge
                                any fees on purchases while you’re abroad. We’ll even show you
                                …
                            </p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img className="img2" src={conf} alt="" />
                            <small>By Claire Robinson</small>
                            <h3>Our invite-only Beta accounts are now live!</h3>
                            <p className="para">
                                After a lot of hard work by the whole team, we’re excited to
                                launch our closed beta. It’s easy to request an invite through
                                the site ...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
