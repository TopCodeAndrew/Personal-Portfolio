import arrow from '../images/down-arrow.png';
import profilePic from '../images/profile-pic.jpg';


export default function Landing() {
    let fakeH1 = '< h1 >'
    let fakeEndH1 = '< /h1 >'
    return (
        <div className="landing">
            <div className='master-container'>
                <div className='main-box'>
                    <p className='fakeCode'> {fakeH1}</p>
                    <div className='big-letter-box'>
                        <h1>Hello.</h1>
                        <h1 className='red'>I'm</h1>
                        <h1 className='red'>Andrew</h1>
                    </div>
                    <p className='fakeCode'> {fakeEndH1}</p>
                </div>
                <img className='profile-pic' src={profilePic} alt='profile-pic' />
            </div>
            <div className='pull-down'>
                <p>Learn more about what I do</p>
                <img
                    className='down-arrow'
                    src={arrow}
                    alt='down-arrow' />
            </div>

        </div >
    );
}