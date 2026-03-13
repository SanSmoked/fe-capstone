import './CustomerReviews.css';

function CustomersTestimonials (props) {
    return(
        <section className="customerReviews-section">
            <p className="customerReviews-stars">{props.stars}</p>
            <div className="customerReviews-info">
                <img src={props.img} alt="customer"/>
                <h1 className="customerReviews-name">{props.name}</h1>
            </div>
            <p className="customerReviews-review">"{props.review}"</p>
        </section>
    );
}

export default CustomersTestimonials;