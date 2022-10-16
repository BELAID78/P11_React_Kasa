import { useNavigate } from 'react-router-dom';
import './thumb.scss';

const Thumb = ({imagePath, caption, id}) => {
    const navigate = useNavigate();

    const thumbHandleClick = (id) => {
        navigate(`detail/${id}`);
    }

    return (
        <div className='thumb'  onClick={() => thumbHandleClick(id)}>
            <img className='thumb-image' alt={caption} src={imagePath} />
            <div className='thumb-caption'>
                <p>{caption}</p>
            </div>
        </div>
    )
}

export default Thumb;