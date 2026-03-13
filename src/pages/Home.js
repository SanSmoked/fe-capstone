import Header from '../components/Header';
import Hero from '../components/Hero';
import restaurantfood from '../assets/restauranfood.jpg';
import Footer from '../components/Footer';
import HighLights from '../components/Highlights';
import Testimonials from '../components/Testimonials';

function Home(){
    return (
        <>
        <Header/>
        <main>
            <Hero img={restaurantfood}/>
        </main>
        <HighLights/>
        <Testimonials/>
        <Footer/>
        </>
    );
}

export default Home;