import arrow from '../images/down-arrow.png';
import profilePic from '../images/for-landing.png';


export default function Landing() {
    let fakeH1 = '< h1 >'
    let fakeEndH1 = '< /h1 >'
    let fakeH2 = '< h2 >'
    let fakeEndH2 = '< /h2 >'
    let intro = '(I build websites... the right way)'
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
                    <p className='fakeCode h2'> {fakeH2}</p>
                    <p className='intro'>{intro}</p>
                    <p className='fakeCode h2'> {fakeEndH2}</p>
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