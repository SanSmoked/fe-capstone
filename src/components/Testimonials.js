import CustomersReviews from './CustomerReviews';
import profileUserIcon from '../assets/profile_user_icon.svg';
import './Testimonials.css';

const customers= [
    {
        name: 'Sara Lopez',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        stars: '★★★★★',
        img: profileUserIcon
    },
    {
        name: 'Jon bo',
        review: 'Lorem ipsum dolor sit amet',
        stars: '★★★★',
        img: profileUserIcon
    },
    {
        name: 'Sarah Connor',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        stars: '★★★★★',
        img: profileUserIcon
    },
    {
        name: 'John Doe',
        review: 'Lorem ipsum dolor sit amet, consectetur',
        stars: '★★★★★',
        img: profileUserIcon
    }
];

function Testimonials(){
    return(
        <section className="testimonials-section">
            <div className="padding-elements">
                <h1 className="testimonials-title">What our customers say!</h1>
                <div className='testimonials-customers'>
                    {customers.map((customer) => {
                        return <CustomersReviews key={customer.name} name={customer.name} review={customer.review} stars={customer.stars} img={customer.img}/>
                    })}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;