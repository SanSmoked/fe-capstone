import Chicago from './Chicago';
import './Hero.css';

function Hero(props){
    return (
        <div className="hero-home">
            <Chicago/>
            <img className="hero-img" src={props.img} alt="restaurant food" />
        </div>
    );
}

export default Hero;