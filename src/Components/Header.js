import hamburger from '../images/hamburger.png'



export default function Header() {
    return (
        <div className="header">
            <div className='desktop'>
                <span className='item-box'>
                    <p className='header-item'>Home</p>
                    <p className='header-item'>About</p>
                    <p className='header-item'>Skills/Experience</p>
                    <p className='header-item'>Contact</p>
                </span>
            </div>
            <div className='mobile'>
                <img className='hamburger' src={hamburger} />
                <div className='drop-down'>
                    <p>Home</p>
                    <p>About</p>
                    <p>Skills/Experience</p>
                    <p>Contact</p>
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