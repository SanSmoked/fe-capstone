import { useReducer } from 'react';
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from '../api';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm';
import restaurant from '../assets/restaurant.jpg';

export const updateTimes = (state, action) => {
    if(action.type === 'update_times'){
        const newDate = new Date(action.date)
        return fetchAPI(newDate);
    }
    return state;
}

export const initializeTimes  = () => {
    const today = new Date();

    return fetchAPI(today);
};

function Reservations(){
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    const navigate = useNavigate();

    const submitForm = (formData) => {
    const result = submitAPI(formData);
        if (result) {
            navigate('/confirmed-booking');
        }
    }

    return (
        <>
        <Header/>
        <main>
            <Hero img={restaurant}/>
            <BookingForm availableTimes={availableTimes} updateTimes={dispatch} submitForm={submitForm}/>
        </main>
        <Footer/>
        </>
    );
}

export default Reservations;