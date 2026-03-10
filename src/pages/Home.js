import Header from '../components/Header';
import Hero from '../components/Hero';
import restaurantfood from '../assets/restauranfood.jpg';
import Footer from '../components/Footer';

function Home(){
    return (
        <>
        <Header></Header>
        <main>
            <Hero img={restaurantfood}/>
        </main>
        <Footer></Footer>
        </>
    );
}

export default Home;