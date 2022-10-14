import navBarLogo from './../../images/navbar_logo.svg';
import './navbar.scss';

const Navbar = ({children}) => {
    return (
        <nav className='navbar'>
            <div className='navbar-logo'>
                <img alt='kasa project logo' src={navBarLogo} />
            </div>
            <div className='navbar-content'>
                {children}
            </div>
        </nav>
    )
}

export default Navbar;