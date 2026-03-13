import './ProductCard.css';
import iconBike from '../assets/icon_bike.svg'

function ProductCard(props){
    return(
        <section className="productCard-section">
            <img src={props.img} alt={props.name}/>
            <div className="productCard-content">
                <h1 className="productCard-name">{props.name}</h1>
                <h1 className="productCard-price">${props.price}</h1>
                <p className="productCard-description">{props.description}</p>
                <h2 className="productCard-delivery">Order a delivery <img src={iconBike} alt="bike icon"/></h2>
            </div>
        </section>
    );
}

export default ProductCard;