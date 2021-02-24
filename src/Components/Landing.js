


export default function Landing() {
    let fakeH1 = '<h1>'
    let fakeEndH1 = '< /h1>'
    return (
        <div className="landing">
            <div>
                <p className='fakeCode'> {fakeH1}</p>
                <h1>Hello</h1>
                <h1>I'm</h1>
                <h1>Andrew</h1>
                <p className='fakeCode'> {fakeEndH1}</p>
            </div>

        </div >
    );
}