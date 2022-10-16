import { useNavigate } from 'react-router-dom';
import './../sass/layouts/_error.scss';

const Error = () => {
    const navigate = useNavigate();

    return (
        <div className="error">
            <p className="error-code">404</p>
            <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
            <p className="error-redirect" onClick={() => navigate('/')}>Retourner sue la page d'accueil</p>
        </div>
    )
}

export default Error;