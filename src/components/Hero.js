import Chicago from './chicago';
import restaurantfood from '../assets/restauranfood.jpg';
import './Hero.css';

function Hero(){
    return (
        <div className="hero-home">
            <Chicago/>
            <img className="hero-img" src={restaurantfood} alt="restaurant food" />
        </div>
    );
}

export default Hero;