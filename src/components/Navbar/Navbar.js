import { useNavigate } from 'react-router-dom';
import navBarLogo from './../../images/navbar_logo.svg';
import './navbar.scss';

const Navbar = ({children}) => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
    };

    return (
        <nav className='navbar'>
            <div onClick={() => navigateToHome()} className='navbar-logo'>
                <img alt='kasa project logo' src={navBarLogo} />
            </div>
            <div className='navbar-content'>
                {children}
            </div>
        </nav>
    )
}

export default Navbar;