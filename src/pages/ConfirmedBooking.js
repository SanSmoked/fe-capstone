import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import marioAdrian from '../assets/Mario and Adrian b.jpg';

function ConfirmedBooking(){
    return(
        <>
            <Header/>
            <main>
                <Hero img={marioAdrian}/>
                <h1>si funciono mi papacho, eso es todo mi leon, aca te esperamos con el chimbo parado</h1>
            </main>
            <Footer/>
        </>
        );
}

export default ConfirmedBooking;