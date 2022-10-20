import './profile.scss';

import Star from '../Star/Star';

const Profile = ({name, avatar, rating}) => {
    const firstName = name.split(' ')[0],
        lastName    = name.split(' ')[1];

    return (
        <div className='profile'>
            <div className='avatar'>
                <span className='pink-color'>{firstName}<br />{lastName}</span>
                <img alt={name + ' picture'} src={avatar} />
            </div>

            <Star rating={rating} />
        </div>
    )
}

export default Profile;