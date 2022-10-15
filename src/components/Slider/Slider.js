import { useEffect, useState } from 'react';
import './slider.scss';
import nextArrow from './../../images/arrow-next.svg';
import prevArrow from './../../images/arrow-prev.svg';

const Slider = ({images}) => {
    const [currentPossition, setCurrentPossition] = useState(1);
    const totalImages = images.length;

    const incrementBy = (value) => {
        if(currentPossition + value <= 0) {
            setCurrentPossition(totalImages)
        }else if(currentPossition + value > totalImages) {
            setCurrentPossition(1)
        } else {
            setCurrentPossition( prevPosition => prevPosition + value)
        }
    }

    return (
        <div className='slider'>
            <div className='slider-content'>
                {
                    images.map((image, index) => <img key={index + Math.random()} className={currentPossition === index + 1 ? 'animate' : 'hidden'} alt={'slider image ' + (index + 1) } src={image} />)
                }
            </div>
            <div className='slider-pagination'>
                <img onClick={() => incrementBy(-1)} className='slider-prev-arrow' alt='' src={prevArrow} />
                <img onClick={() => incrementBy(1)} className='slider-next-arrow' alt='' src={nextArrow} />
                <p className='slider-caption'>{currentPossition}/{totalImages}</p>
            </div>
        </div>
    )
}

export default Slider;