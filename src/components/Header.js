import myLogo from '../assets/Logo.svg';
import Nav from './Nav';
import './Header.css';

function Header() {
    return <header>
        <img src={myLogo} alt="logo" />
        <Nav></Nav>
    </header>
}

export default Header;