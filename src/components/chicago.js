import CallToAction from './CallToAction';
import './Chicago.css';

function chicago(){
    return (
        <div className="chicago-banner">
            <h1 className="chicago-title">Little Lemon</h1>
            <h2 className="chicago-subTitle">Chicago</h2>
            <p className="chicago-text">
                we are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
            <CallToAction text="Reserve a table" navigateTo="/reservations"/>
        </div>
    );
}

export default chicago;