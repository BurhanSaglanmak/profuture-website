
import { Link } from 'react-router';
import {
    ArrowIcon,
    Dergi
} from '../../assets/homepage';

export default function Features({ FeaturesData }) {
    return (
        <div className="features-container">
            <div
                className="features-info">
                <h5>{FeaturesData.header}</h5>
                <h2>{FeaturesData.title}</h2>
                <p>{FeaturesData.description}</p>
                <Link to={`dergi/${FeaturesData.cilt}/${FeaturesData.sayi}`}>
                    Detay
                    <img src={ArrowIcon} alt="Ok" />
                </Link>
            </div>
            <img src={Dergi} alt="Dergi" />
        </div>
    )
}