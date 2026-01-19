import { Link } from "react-router";
import { useRef } from 'react';
import {
    ArrowIcon,
    CalendarIcon,
    CiltIcon,
    NumberIcon,
    Digital,
    Download,
    Eye,
    PDF
} from '../../assets/homepage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { isNew } from "../../utils/Date";

export default function Magazines({ MagazinesData }) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="magazines-container">
            <div className="magazines-header">
                <div className="magazines-header-titles">
                    <div className="magazines-title">
                        <h5>Sayılar</h5>
                        <h2>Dergiler</h2>
                    </div>
                    <div className="magazines-arrow">
                        <button ref={prevRef} className="swiper-button-prev-custom">
                            <img src={ArrowIcon} alt="Önceki" style={{ transform: 'rotate(180deg)' }} />
                        </button>
                        <button ref={nextRef} className="swiper-button-next-custom">
                            <img src={ArrowIcon} alt="Sonraki" />
                        </button>
                    </div>
                </div>
                <Link to="/dergiler">
                    Tümünü Görüntüle
                    <img src={ArrowIcon} alt="Ok" />
                </Link>
            </div>
            <div className="magazines-list">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={{ prevEl: prevRef.current, nextEl: nextRef.current, }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    breakpoints={{
                        1000: {
                            slidesPerView: 2,
                        },
                        1500: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {MagazinesData.map((magazine, index) => (
                        <SwiperSlide key={index}>
                            <div className="magazine-item">
                                <>
                                    {isNew(magazine.creatAt) && <span className="new-badge">SON SAYI</span>}
                                    <img src={Digital} alt="Dijital" />
                                </>
                                <div className="magazine-item-info">
                                    <div className="magazine-item-info-header">
                                        <img src={PDF} alt="PDF" />
                                        <span>{magazine.status}</span>
                                    </div>
                                    <span className="magazine-type">{magazine.type}</span>
                                    <span className="magazine-title">
                                        {magazine.title}
                                    </span>
                                    <div className="magazine-item-info-body">
                                        <span>
                                            <img src={CiltIcon} alt="Cilt" />
                                            Cilt: <b>{magazine.cilt}</b>
                                        </span>
                                        <span>
                                            <img src={NumberIcon} alt="Sayı" />
                                            Sayı: <b>{magazine.sayi}</b>
                                        </span>
                                        <span>
                                            <img src={CalendarIcon} alt="takvim" />
                                            <b>{magazine.tarih}</b>
                                        </span>
                                    </div>
                                    <div className="magazine-links">
                                        <div className="magazine-link">
                                            <img src={Eye} alt="Görüntüle" />
                                        </div>
                                        <div className="magazine-link magazine-link-invert">
                                            <img src={Download} alt="İndir" />
                                        </div>
                                        <div className="magazine-link">
                                            <img src={ArrowIcon} alt="Git" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}