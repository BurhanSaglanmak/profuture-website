
import { Link } from 'react-router';
import {
    ArrowWhiteIcon,
    CalendarIcon,
    CiltIcon,
    LandingBG,
    NumberIcon
} from '../../assets/homepage';

export default function LandingPage({ LandingPageData }) {
    return (
        <div
            style={{
                backgroundImage: `url(${LandingBG})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '750px',
            }}
            className="landing-page-container">
            <h1>{LandingPageData.title}</h1>
            <p>{LandingPageData.description}</p>
            <div
                className="landing-page-info">
                <span>
                    <img src={CiltIcon} alt="Cilt" />
                    Cilt: <b>{LandingPageData.cilt}</b>
                </span>
                <span>
                    <img src={NumberIcon} alt="Sayı" />
                    Sayı: <b>{LandingPageData.sayi}</b>
                </span>
                <span>
                    <img src={CalendarIcon} alt="takvim" />
                    <b>{LandingPageData.tarih}</b>
                </span>
            </div>
            <Link to={`dergi/${LandingPageData.cilt}/${LandingPageData.sayi}`}>
                Dergiyi Görüntüle
                <img src={ArrowWhiteIcon} alt="Ok" />
            </Link>
        </div>
    )
}