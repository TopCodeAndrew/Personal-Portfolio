import githubIcon from '../images/github-icon.png';
import linkedInIcon from '../images/linkedIn-icon.png';
import spotifyIcon from '../images/spotify-icon.png';
import emailIcon from '../images/email-icon.png';


export default function ContactBar() {
    return (
        <div className="contactBar">
            <div className='button-box'>
                <div className='img-box'><img src={linkedInIcon} /></div>
                <div className='img-box'><img src={emailIcon} /></div>
                <div className='img-box'><img src={githubIcon} /></div>
                <div className='img-box'><img src={spotifyIcon} /></div>
            </div>
        </div>
    );
}