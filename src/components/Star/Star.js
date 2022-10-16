import './star.scss';
import emptyStarImage from './../../images/empty_start.png';
import filledStarImage from './../../images/fill_start.png';

const Star = ({rating}) => {

    let starItem = [];

    for(let i = 1; i <= 5; i++) {
        starItem.push( <img key={Math.rendom()} alt='' src={(i <= rating) ? filledStarImage : emptyStarImage} /> )
    }

    return (
        <div className='star'>
            {starItem}
        </div>
    )
}

export default Star;