import './BookingForm.css';
import { useState } from 'react';

function BookingForm(props) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('17:00');
    const [guests, setGuests] = useState(0);
    const [occasion, setOccasion] = useState('birthday')

    const today = new Date().toISOString().split('T')[0];

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            date: date,
            time: time,
            guests: guests,
            occasion: occasion
        }

        setDate('');
        setTime('');
        setGuests(0);
        setOccasion('birthday');

        props.submitForm(formData);
    };

    return (
        <section className="padding-elements">
            <h1 className="bookingForm-title">Book your table</h1>
            <form onSubmit={handleSubmit} className="bookingForm-section">
                <section className="bookingForm-date bookingForm-inputs">
                    <label htmlFor="res-date">Choose date</label>
                    <input
                        type="date"
                        id="res-date"
                        placeholder="Date"
                        name="date"
                        value={date}
                        min={today}
                        onChange={(e => {
                            setDate(e.target.value);
                            props.updateTimes({
                                type: 'update_times',
                                date: e.target.value
                            })
                        })}
                        required
                    />
                </section>

                <section className="bookingForm-time bookingForm-inputs">
                    <label htmlFor="res-time">Choose time</label>
                    <select
                        id="res-time"
                        placeholder="time"
                        name="time"
                        value={time}
                        onChange={(e => {
                            setTime(e.target.value);
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
                </section>

                <section className="bookingForm-guests bookingForm-inputs">
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
                </section>

                <section className="bookingForm-occasion bookingForm-inputs">
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
                </section>
                <section className="bookingForm-submit">
                    <button type="submit" aria-label="Book your table" value="Make Your reservation">
                        <p>Make Your reservation</p>
                    </button>
                </section>
            </form>
        </section>
    );

}



// Date
// Time
// Number of guests
// Occasion (Birthday, anniversary)
// Submit button


export default BookingForm;