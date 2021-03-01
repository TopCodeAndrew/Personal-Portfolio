import githubIcon from '../images/github-icon.png';
import linkedInIcon from '../images/linkedIn-icon.png';
import calendarIcon from '../images/calendar-icon.png';
import emailIcon from '../images/email-icon.png';


export default function ContactBar() {

    const openNewTab = (url) => {
        const win = window.open(`${url}`, "_blank");
        win.focus();
    }

    const subject = "Hey Andrew... let's connect!"

    const newEmail = () => {
        window.open(`mailto:andrewjsuccess@gmail.com?subject=${subject}`)
        // &body=Body%20goes%20here')
    }

    return (
        <div className="contactBar">
            <div className='button-box'>
                <div className='img-box' onClick={() => openNewTab('https://www.linkedin.com/in/andrewsmithutah/')}>
                    <img src={linkedInIcon} />
                    <div className='popout'> LinkedIn</div>
                </div>
                <div className='img-box' onClick={() => newEmail()}>
                    <img className='round' src={emailIcon} />
                    <div className='popout'> Email </div>
                </div>
                <div className='img-box' onClick={() => openNewTab('https://github.com/TopCodeAndrew')}>
                    <img src={githubIcon} />
                    <div className='popout'> Github</div>
                </div>
                <div className='img-box' onClick={() => openNewTab('https://calendly.com/andrewjsuccess/30min')}>
                    <img className='round' src={calendarIcon} />
                    <div className='popout'> Book Call </div>
                </div>
            </div>
        </div>
    );
}

