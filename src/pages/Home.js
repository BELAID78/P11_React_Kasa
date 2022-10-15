import { useEffect, useState } from 'react';
import Thumb from '../components/Thumb/Thumb';
import Header from './../components/Header/Header';
import homeHeaderImage from './../images/home.svg';

const Home = () => {
    const [logements, setLogements] = useState([]);

    useEffect(() => {
        fetch('/logements.json')
        .then(response => response.json())
        .then(data => {
            setLogements(data);
        })
        .catch(err => console.log(err));

    }, []);

    return (
        <>
            <Header imagePath={homeHeaderImage} caption='Chez vous, partout et ailleurs'></Header>
            <div className='container'>
                <div className="row">
                    {
                        logements.map(logement => 
                            <div key={logement.id} className='col-sm-4'>
                                <Thumb imagePath={logement.cover} caption={logement.title}></Thumb>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Home;