import githubIcon from '../images/github-icon.png';
import linkedInIcon from '../images/linkedIn-icon.png';
import spotifyIcon from '../images/spotify-icon.png';
import emailIcon from '../images/email-icon.png';


export default function ContactBar() {
    return (
        <div className="contactBar">
            <div className='button-box'>
                <div className='img-box'>
                    <img src={linkedInIcon} />
                    <div className='popout'> LinkedIn</div>
                </div>
                <div className='img-box '>
                    <img className='round' src={emailIcon} />
                    <div className='popout'> Email </div>
                </div>
                <div className='img-box'>
                    <img src={githubIcon} />
                    <div className='popout'> Github</div>
                </div>
                <div className='img-box'>
                    <img className='round' src={spotifyIcon} />
                    <div className='popout'> Spotify</div>
                </div>
            </div>
        </div>
    );
}