import './About.css';
import aboutImage from '../assets/Mario and Adrian A.jpg';

function About(){
    return(
        <section className="padding-elements about-section">
            <div>
                <h1 className="about-title">Little Lemon</h1>
                <h2 className="about-subTitle">Chicago</h2>
                <p className="about-text">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                </p>
            </div>
            <img src={aboutImage} alt="about"/>
        </section>
    );
}

export default About;