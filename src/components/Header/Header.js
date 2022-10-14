import './header.scss';

const Header = ({imagePath, caption}) => {
    return (
        <div className='header'>
            <img alt='header' src={imagePath} />
            { 
                caption && <div className="header-caption">
                                <p>{caption}</p>
                            </div>
            }
        </div>
    )
}

export default Header;