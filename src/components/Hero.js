import Chicago from './Chicago';
import './Hero.css';

function Hero(props){
    return (
        <section className="hero-section">
            <div className="padding-elements hero-elements">
                <Chicago/>
                <img className="hero-img" src={props.img} alt="restaurant food" />
            </div>
        </section>
    );
}

export default Hero;