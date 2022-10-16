import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Accordion from "../components/Accordion/Accordion";
import Profile from "../components/Profile/Profile";
import Slider from "../components/Slider/Slider";
import Tag from "../components/Tag/Tag";
import Text from "../components/Text/Text";
import UnorganizedList from './../components/UnorganizedList/UnorganizedList';

import './../sass/layouts/_detail.scss';

const Detail = () => {
    const [house, setHouse] = useState({});

    const {id} = useParams();

    useEffect(() => {

        fetch('/logements.json')
        .then(response => response.json())
        .then(data => {
            const foundedHouse = data.find(currentHouse => currentHouse.id === id);
            setHouse(foundedHouse);
        })
        .catch(err => console.log(err));

    }, [id]);

    if(Object.keys(house).length <= 0) {
        return <p>Loading ...</p>;
    }

    return (
        <div className="container">

            <Slider images={house.pictures} />

            <div className="row">
                <div className="col-sm-6">

                    <h2 className="pink-color">{house.title}</h2>

                    <p className="pink-color">{house.location}</p>

                    {
                        house.tags.map(tag => <Tag key={id + Math.random()}>{tag}</Tag>)
                    }

                    <Accordion isOpen={true} title='Description'>
                        <Text>{house.description}</Text>
                    </Accordion>

                </div>

                <div className='col-sm-6'>
                    <Profile name={house.host.name} avatar={house.host.picture} rating={house.rating} />

                    <Accordion isOpen={true} title='Equipements'>
                        <UnorganizedList lists={house.equipments}/>
                    </Accordion>
                </div>
                
            </div>
        </div>
    )
}

export default Detail;