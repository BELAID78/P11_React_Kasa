import './thumb.scss';

const Thumb = ({imagePath, caption}) => {
    return (
        <div className='thumb'>
            <img className='thumb-image' alt={caption} src={imagePath} />
            <div className='thumb-caption'>
                <p>{caption}</p>
            </div>
        </div>
    )
}

export default Thumb;