


export default function About() {
    let fakeH2 = '< h2 >'
    let fakeEndH2 = '< /h2 >'
    let fakeP = '< p >'
    let fakeEndP = '< /p >'
    return (
        <div className="about" id='about'>
            {/* <span className='line-box'>
                <div className='separating-line'></div>
            </span> */}
            <div className='main-box'>
                <p className='fakeCode'> {fakeH2}</p>
                <h2>about</h2>
                <p className='fakeCode'> {fakeEndH2}</p>
            </div>
            <div className='content-box'>
                <p className='fakeCode'> {fakeP}</p>
                <p className='paragraph'>
                    Hi there! <br></br>
                    <br></br>
                    My name is Andrew Smith - I'm a Utah-based full stack web developer that loves to see projects come to life!<br></br>
                    <br></br>
                     When I am not coding, you can find me researching productivity hacks, leading worship with my guitar, testing new beard products, playing volleyball, and attempting to be the best husband and dad that I can be.<br></br>
                    <br></br>
                    I have a diverse set of skills, ranging from React on the front end to PostgreSQL for database architecture, and I am constantly pushing myself to learn more!<br></br>
                    <br></br>
                    Feel free to reach out, even if just to say "hi"... I would love to connect with you!
                </p>
                <p className='fakeCode'> {fakeEndP}</p>
            </div>
        </div>

    );
}