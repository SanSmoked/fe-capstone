import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm Component', () => {
    const mockAvailableTimes = ['17:00', '18:00', '19:00'];
    const mockSubmitForm = jest.fn();
    const mockUpdateTimes = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders the BookingForm heading and static elements', () => {
        render(
            <BookingForm
                availableTimes={mockAvailableTimes}
                submitForm={mockSubmitForm}
                updateTimes={mockUpdateTimes}
            />
        );

        const headingElement = screen.getByText('Book your table');
        expect(headingElement).toBeInTheDocument();

        const submitButton = screen.getByRole('button', { name: /Book your table/i });
        expect(submitButton).toBeInTheDocument();
    });

    test('calls updateTimes prop when the date input is changed', () => {
        render(
            <BookingForm
                availableTimes={mockAvailableTimes}
                submitForm={mockSubmitForm}
                updateTimes={mockUpdateTimes}
            />
        );

        const dateInput = screen.getByLabelText('Choose date');
        fireEvent.change(dateInput, { target: { value: '2026-10-25' } });

        expect(mockUpdateTimes).toHaveBeenCalledTimes(1);
        expect(mockUpdateTimes).toHaveBeenCalledWith({
            type: 'update_times',
            date: '2026-10-25'
        });
    });

    test('calls submitForm prop with correct form data when submitted', () => {
        render(
            <BookingForm
                availableTimes={mockAvailableTimes}
                submitForm={mockSubmitForm}
                updateTimes={mockUpdateTimes}
            />
        );

        const dateInput = screen.getByLabelText('Choose date');
        const guestsInput = screen.getByLabelText('Number of guests');
        const submitButton = screen.getByRole('button', { name: /Book your table/i });

        fireEvent.change(dateInput, { target: { value: '2026-10-25' } });
        fireEvent.change(guestsInput, { target: { value: '4' } });
        fireEvent.click(submitButton);

        expect(mockSubmitForm).toHaveBeenCalledTimes(1);
        expect(mockSubmitForm).toHaveBeenCalledWith({
            date: '2026-10-25',
            time: '17:00',
            guests: '4',
            occasion: 'birthday'
        });
    });
});
