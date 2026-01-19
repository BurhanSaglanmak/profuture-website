import { Link } from 'react-router';
import {
    ArrowIcon,
    Dergi4lu,
    ProfutureInfo,
    Promotion,
    ArticleBG
} from '../../assets/homepage';

export default function Article({ ArticleData }) {
    return (
        <div
            style={{
                backgroundImage: `url(${ArticleBG})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}
            className="article-section"
        >
            <img src={Dergi4lu} alt="Dergi 4'lü" className='magazine' />
            <div
                className="article-content">
                <img src={Promotion} alt="Promotion" />
                <h5>Makale Çağrısı</h5>
                <h2>{ArticleData.title}</h2>
                <p>{ArticleData.description}</p>
                <Link to={ArticleData.link}>
                    Makale Gönder
                    <img src={ArrowIcon} alt="Arrow Icon" />
                </Link>
            </div>
            <img src={ProfutureInfo} alt="Profuture Info" className='info' />
        </div>
    );
}