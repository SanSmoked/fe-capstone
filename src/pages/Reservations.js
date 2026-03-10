import { useReducer } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm';
import restaurant from '../assets/restaurant.jpg';

const updateTimes = (state, action) => {
    console.log('entro', action);
    return state;
}

function Reservations(){
    // based on the docum, this should be a function
    const initialState = ['17:00','18:00','19:00','20:00','21:00','22:00'];

    const [availableTimes, dispatch] = useReducer(updateTimes, initialState);

    return (
        <>
        <Header></Header>
        <main>
            <h1>Aqui si se ven las verdaderas reservas mi papacho</h1>
            <Hero img={restaurant}/>
            <BookingForm availableTimes={availableTimes} bookTime={dispatch}/>
        </main>
        <Footer></Footer>
        </>
    );
}

export default Reservations;