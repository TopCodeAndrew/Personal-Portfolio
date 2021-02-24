


export default function Landing() {
    let fakeH1 = '< h1 >'
    let fakeEndH1 = '< /h1 >'
    return (
        <div className="landing">
            <div className='main-box'>
                <p className='fakeCode'> {fakeH1}</p>
                <div className='big-letter-box'>
                    <h1>Hello.</h1>
                    <h1 className='red'>I'm</h1>
                    <h1 className='red'>Andrew</h1>
                </div>
                <p className='fakeCode'> {fakeEndH1}</p>
            </div>

        </div >
    );
}