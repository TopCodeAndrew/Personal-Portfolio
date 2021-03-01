import React, { useState } from 'react';
import hamburger from '../images/hamburger.png';



export default function Header() {

    const [menuToggle, setMenuToggle] = useState(false)

    function toggleOpen() {
        setMenuToggle(!menuToggle);
        console.log(menuToggle)
    }

    return (
        <div className="header">
            <div className='desktop'>
                <span className='item-box'>
                    <div className='link-box'>
                        <p className='header-item'>Home</p>
                    </div>
                    <div className='link-box'>
                        <p className='header-item'>About</p>
                    </div>
                    <div className='link-box'>
                        <p className='header-item'>Skills</p>
                    </div>
                    <div className='link-box'>
                        <p className='header-item'>Contact</p>
                    </div>
                </span>
            </div>
            <div className='mobile'>
                <img
                    className='hamburger'
                    src={hamburger}
                    onClick={toggleOpen}
                    alt='hamburger-icon' />

                <div className='drop-down-container'>{menuToggle ? <div className='drop-down'>
                    <p>Home</p>
                    <p>About</p>
                    <p>Skills/Experience</p>
                    <p>Contact</p>
                </div>
                    :
                    null}
                </div>
            </div>
        </div>
    );
}

//create the state to know if it should be visible
//create a function that changes that state
//create a function that returns 'show' if state is true, and 'hide' if state is false
//put that function next to 'drop-down' in the drop-down div
//in css, put the 'show' and 'hide' properties as a sibling of 'drop-down'