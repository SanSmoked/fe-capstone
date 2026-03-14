import myLogo from '../assets/Logo.svg';
import './Footer.css';

function Footer(){
    return( <footer className="padding-elements footer-section">
            <section className="footer-icon">
                <img src={myLogo} alt="logo" />
            </section>
            <section className="footer-navigation">
                <h2 className="footer-title">Navigation</h2>
                <h1>Home</h1>
                <h1>About</h1>
                <h1>Menu</h1>
                <h1>Reservations</h1>
                <h1>Order Online</h1>
                <h1>Login</h1>
            </section>
            <section className="footer-contact">
                <h2 className="footer-title">Contact</h2>
                <h1>Adress</h1>
                <h1>Phone number</h1>
                <h1>email</h1>
            </section>
            <section className="footer-social">
                <h2 className="footer-title">Social media</h2>
                <h1>Instagram</h1>
                <h1>Facebook</h1>
                <h1>Twitter</h1>
            </section>

        </footer>
    );
}

export default Footer;