import changeLaptop from '../images/change-squared-laptop.png'
import modofloLaptop from '../images/modoflo-laptop.png'
import lemonLaptop from '../images/lemonprop-laptop.png'

import adobe from '../images/tech-icons/adobe.png';
import css from '../images/tech-icons/css.png';
import github from '../images/tech-icons/github.png';
import heroku from '../images/tech-icons/heroku.png';
import html from '../images/tech-icons/html.png';
import javascript from '../images/tech-icons/javascript.png';
import node from '../images/tech-icons/node.png';
import postman from '../images/tech-icons/postman.png';
import postgresql from '../images/tech-icons/postgresql.png';
import react from '../images/tech-icons/react.png';
import redux from '../images/tech-icons/redux.png';


export default function SkillsExperience() {
    let fakeH2 = '< h2 >'
    let fakeEndH2 = '< /h2 >'
    let fakeP = '< p >'
    let fakeEndP = '< /p >'
    return (
        <div className="skillsExperience">
            {/* <span className='line-box'>
                <div className='separating-line'></div>
            </span> */}

            <span className='main-box'>
                <p className='fakeCode'> {fakeH2}</p>
                <h2>skills & experience</h2>
                <p className='fakeCode'> {fakeEndH2}</p>
            </span>

            <span className='master-content-box'>
                <span className='projects-box'>
                    <span className='line-box'>
                        <div className='separating-line'></div>
                    </span>
                    <span className='single-project-box'>
                        <img src={modofloLaptop} />
                        <span className='description-box'>
                            <h3>Project Title Here</h3>
                            <p> Consequat occaecat consectetur eiusmod culpa qui deserunt laboris. Ipsum et nostrud id sint sit deserunt sunt excepteur laboris. Est esse eu reprehenderit sint dolor sint. Sunt dolor ut sit duis nisi est duis. Labore eu qui excepteur officia velit nisi irure consectetur aute velit laboris.</p>
                        </span>
                    </span>
                    <span className='line-box'>
                        <div className='separating-line'></div>
                    </span>
                    <span className='single-project-box'>
                        <img src={changeLaptop} />
                        <span className='description-box'>
                            <h3>Project Title Here</h3>
                            <p> Consequat occaecat consectetur eiusmod culpa qui deserunt laboris. Ipsum et nostrud id sint sit deserunt sunt excepteur laboris. Est esse eu reprehenderit sint dolor sint. Sunt dolor ut sit duis nisi est duis. Labore eu qui excepteur officia velit nisi irure consectetur aute velit laboris.</p>
                        </span>
                    </span>
                    <span className='line-box'>
                        <div className='separating-line'></div>
                    </span>
                    <span className='single-project-box'>
                        <img src={lemonLaptop} />
                        <span className='description-box'>
                            <h3>Project Title Here</h3>
                            <p> Consequat occaecat consectetur eiusmod culpa qui deserunt laboris. Ipsum et nostrud id sint sit deserunt sunt excepteur laboris. Est esse eu reprehenderit sint dolor sint. Sunt dolor ut sit duis nisi est duis. Labore eu qui excepteur officia velit nisi irure consectetur aute velit laboris.</p>
                        </span>
                    </span>
                </span>

                <span className='images-box'>
                    <div className='logo-box'>
                        <p>JavaScript</p>
                        <img src={javascript} />
                    </div>
                    <div className='logo-box'>
                        <p>HTML5</p>
                        <img src={html} />
                    </div>
                    <div className='logo-box'>
                        <p>CSS3</p>
                        <img src={css} />
                    </div>
                    <div className='logo-box'>
                        <p>GitHub</p>
                        <img src={github} />
                    </div>
                    <div className='logo-box'>
                        <p>React.js</p>
                        <img src={react} />
                    </div>
                    <div className='logo-box'>
                        <p>Redux</p>
                        <img src={redux} />
                    </div>
                    <div className='logo-box'>
                        <p>PostgreSQL</p>
                        <img src={postgresql} />
                    </div>
                    <div className='logo-box'>
                        <p>Heroku</p>
                        <img src={heroku} />
                    </div>
                    <div className='logo-box'>
                        <p>Adobe</p>
                        <img src={adobe} />
                    </div>
                    <div className='logo-box'>
                        <p>Node.js</p>
                        <img src={node} />
                    </div>
                    <div className='logo-box'>
                        <p>Postman</p>
                        <img src={postman} />
                    </div>
                </span>
            </span>



        </div >
    );
}