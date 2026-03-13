import CallToAction from './CallToAction';
import ProductCard from './ProductCard';
import './Highlights.css';
import greekSalad from '../assets/greek salad.jpg';
import bruchetta from '../assets/bruchetta.svg';
import lemmonDessert from '../assets/lemon dessert.jpg';

const products = [
    {
        name: 'Greek salad',
        img: greekSalad,
        price: 12.99,
        description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
    },
    {
        name: 'Bruchetta',
        img: bruchetta,
        price: 5.99,
        description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
    },
    {
        name: 'Lemon Dessert',
        img: lemmonDessert,
        price: 5.00,
        description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'
    }
]

function HighLights () {
    return(
        <section className="padding-elements">
            <div className="highLights-section highLights-header">
                <p className='highLights-title'>This weeks Specials</p>
                <CallToAction text="Menu" navigateTo="/menu"/>
            </div>
            <div className="highLights-section">
                {products.map((product)=>{
                    return <ProductCard key={product.name} name={product.name} img={product.img} price={product.price} description={product.description}/>
                })}
            </div>

        </section>
    );
}

export default HighLights;