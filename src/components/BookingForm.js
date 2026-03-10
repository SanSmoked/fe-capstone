import { useState } from 'react';

function BookingForm(props) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('17:00');
    const [guests, setGuests] = useState(0);
    const [occasion, setOccasion] = useState('birthday')

    const handleSubmit = (e) => {
        e.preventDefault();
        const result = {
            date: date,
            time: time,
            guests: guests,
            occasion: occasion
        }

        setDate('');
        setTime('');
        setGuests(0);
        setOccasion('birthday');

        console.log(result);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                placeholder="Date"
                name="date"
                value={date}
                onChange={(e => setDate(e.target.value))}
            />
            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                placeholder="time"
                name="time"
                value={time}
                onChange={(e => {
                    setTime(e.target.value);
                    props.bookTime(time);// I think I should useEffect here to call the function
                })}
            >
                {props.availableTimes.map((time)=> (
                    <option
                    key={time}
                    value={time}>
                        {time}
                    </option>
                ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                name="guests"
                value={guests}
                onChange={(e => setGuests(e.target.value))}
            />
            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                placeholder="occasion"
                name="occasion"
                value={occasion}
                onChange={(e => setOccasion(e.target.value))}
            >
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    );

}



// Date
// Time
// Number of guests
// Occasion (Birthday, anniversary)
// Submit button


export default BookingForm;