import React from 'react'
import "./Header.css"
import mobs from "../images/image-mockups.png"
export const Header = () => {
    return (
        <div className='header'>
            <div>
                <div className='content'>
                    <h1>Next Generation Digital Banking</h1>
                    <p>
                        Take your financial life online. Your Easybank account will be a
                        one-stop-shop for spending, saving, budgeting, investing, and much
                        more.
                    </p>
                    <button className='btn'>Request Invite</button>
                </div>
            </div>
            <div >
                <img src={mobs} alt='' />
            </div>
        </div>
    )
}
