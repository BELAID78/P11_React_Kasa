import Accordion from './../components/Accordion/Accordion'
import Text from './../components/Text/Text'
import Header from './../components/Header/Header';
import aboutHeaderPicture from './../images/about.svg';

const About = () => {
    return (
        <>
            <Header imagePath={aboutHeaderPicture} />
            <div className='container'>
                <Accordion isOpen={true} title='Fiabilité'>
                    <Text>
                        Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
                    </Text>
                </Accordion>

                <Accordion isOpen={false} title='Respect'>
                    <Text>
                        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                    </Text>
                </Accordion>

                <Accordion isOpen={false} title='Service'>
                    <Text>
                        Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
                    </Text>
                </Accordion>

                <Accordion isOpen={false} title='Sécurité'>
                    <Text>
                        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                    </Text>
                </Accordion>
            </div>
        </>
    )
}

export default About;