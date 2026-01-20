import { Link } from 'react-router';
import {
    ArrowIcon,
    Download,
    Eye,
    PDF,
    CurrentImage,
    Page,
    Text,
    Email
} from '../../assets/homepage';

export default function CurrentArticles({ CurrentArticlesData }) {

    return (
        <div
            className='current-articles'>
            <div className='current-articles-image'>
                {CurrentArticlesData[0] &&
                    <>
                        <div>
                            <span className="new-badge">SON SAYI</span>
                            <img src={CurrentImage} alt="Current Articles" className='last-article' />
                        </div>
                        <div>
                            <span className="download-icon">
                                <img src={Download} alt="Download Icon" />
                            </span>
                            <span className="view-icon">
                                <img src={Eye} alt="Eye Icon" />
                                Görüntüle
                            </span>
                        </div>
                    </>
                }
            </div>

            <div className="current-articles-content" >
                <div className="current-articles-content-info">
                    <div>
                        <h5>Profuture Teknoloji Dergisi</h5>
                        <h2>Güncel Yazılar</h2>
                    </div>
                    <Link to="/dergiler/profuture-teknoloji-dergisi-sayi-4">
                        Tüm Yazıları Görüntüle
                        <img src={ArrowIcon} alt="Arrow Icon" />
                    </Link>
                </div>
                {CurrentArticlesData.slice(1).map((data, index) =>
                    <div className="current-articles-content-articles" key={index}>
                        <div className="article-item">
                            <div className="article-item-info">
                                <div className="article-item-info-badges">
                                    {data?.badges?.map((badge, index) =>
                                        <span key={index}>{badge}</span>
                                    )}
                                </div>
                                <h6>
                                    <img src={PDF} alt="PDF Icon" />
                                    {data.title}
                                </h6>
                                <div className="article-item-info-footer">
                                    <span>
                                        <img src={Page} alt="Page Icon" />
                                        Sayfa: <b>{data.page}</b>
                                    </span>
                                    <span>
                                        <img src={Text} alt="Text Icon" />
                                        <b>{data.editor}</b>
                                    </span>
                                </div>
                            </div>
                            <div className="article-item-actions">
                                <Link to="/" className='link'>
                                    <img src={Email} alt="Email Icon" />
                                </Link>
                                <Link to="/" className='link'>
                                    <img src={Download} alt="Download Icon" />
                                </Link>
                                <Link to={data.link} className='view-icon'>
                                    <img src={Eye} alt="görüntüle" />
                                    Görüntüle
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}   
