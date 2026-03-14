import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import marioAdrian from '../assets/Mario and Adrian b.jpg';
import './ConfirmedBooking.css';

function ConfirmedBooking(){
    return(
        <>
            <Header/>
            <main>
                <Hero img={marioAdrian}/>
                <section className="padding-elements confirmed-section">
                    <h1 className="confirmed-title">¡Thanks for your reserve!</h1>
                    <p>Your reserve is now confirmed, please be 10 minutes before the hour reserved.</p>
                </section>
            </main>
            <Footer/>
        </>
        );
}

export default ConfirmedBooking;