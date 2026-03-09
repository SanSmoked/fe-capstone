import { Link } from 'react-router-dom';
function Nav(){
    return (
    <nav>
        <Link to="/" className="nav-link"><h1>Home</h1></Link>
        <Link to="/about" className="nav-link"><h1>About</h1></Link>
        <Link to="/menu" className="nav-link"><h1>Menu</h1></Link>
        <Link to="/reservations" className="nav-link"><h1>Reservations</h1></Link>
        <Link to="/orderOnline" className="nav-link"><h1>Order Online</h1></Link>
        <Link to="/login" className="nav-link"><h1>Login</h1></Link>
    </nav>
    );
}

export default Nav;