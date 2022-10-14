import './unorganizedList.scss';

const UnorganizedList = ({lists}) => {
    return (
        <ul className='unorganizedList'>
            { lists.map(list => <li key={Math.random()}>{list}</li>) }
        </ul>
    )
}

export default UnorganizedList;