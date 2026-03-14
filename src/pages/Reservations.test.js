import { updateTimes, initializeTimes } from './Reservations';
import { fetchAPI } from '../api';

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}), { virtual: true });
jest.mock('../api');

describe('Reservation Reducer Functions', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('initializeTimes should return the array of times from fetchAPI', () => {
        const fakeTimes = ['17:00', '18:00', '19:00'];
        fetchAPI.mockReturnValue(fakeTimes);
        const result = initializeTimes();

        expect(result).toEqual(fakeTimes);
        expect(fetchAPI).toHaveBeenCalledTimes(1);
    });

    test('updateTimes should return new times when action type is update_times', () => {
        const fakeTimes = ['20:00', '21:00', '22:00'];
        fetchAPI.mockReturnValue(fakeTimes);
        const initialState = ['17:00'];
        const action = { type: 'update_times', date: '2023-10-25' };
        const result = updateTimes(initialState, action);

        expect(result).toEqual(fakeTimes);
        expect(fetchAPI).toHaveBeenCalledTimes(1);
    });

    test('updateTimes should return the exact same state if action type is unknown', () => {
        const initialState = ['17:00', '18:00'];
        const action = { type: 'UNKNOWN_ACTION' };
        const result = updateTimes(initialState, action);

        expect(result).toEqual(initialState);
        expect(fetchAPI).not.toHaveBeenCalled();
    });
});