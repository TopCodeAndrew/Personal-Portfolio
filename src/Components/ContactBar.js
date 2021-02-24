import githubIcon from '../images/github-icon.png';
import linkedInIcon from '../images/linkedIn-icon.png';
import spotifyIcon from '../images/spotify-icon.png';
import emailIcon from '../images/email-icon.png';


export default function ContactBar() {
    return (
        <div className="contactBar">
            <img src={linkedInIcon} />
            <img src={emailIcon} />
            <img src={githubIcon} />
            <img src={spotifyIcon} />
        </div>
    );
}