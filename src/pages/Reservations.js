import { useReducer } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm';
import restaurant from '../assets/restaurant.jpg';

export const updateTimes = (state, action) => {
    return state;
}

export const initializeTimes  = () => ['17:00','18:00','19:00','20:00','21:00','22:00'];

function Reservations(){
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    return (
        <>
        <Header/>
        <main>
            <Hero img={restaurant}/>
            <BookingForm availableTimes={availableTimes} bookTime={dispatch}/>
        </main>
        <Footer/>
        </>
    );
}

export default Reservations;