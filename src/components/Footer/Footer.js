import footerLogo from './../../images/footer_logo.svg';

import './footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <img className='footer-logo' alt='kasa project footer' src={footerLogo} />
            <p className='copyright'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;