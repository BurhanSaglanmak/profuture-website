import {
    EditorIcon,
    LocationIcon,
    MailIcon,
    MessageIcon,
} from '../../assets/footer';

export default function Footer() {
    let year = new Date().getFullYear();
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-items">
                    <div className="footer-item">
                        <img src={EditorIcon} alt="editor" />
                        <div className="footer-item-text">
                            <span>Dergi Editörü</span>
                            <span><b>
                                Prof. Dr. Elif Başkaya Acar
                            </b>
                            </span>
                            <a
                                href="mailto:elif@gmail.com"
                            >
                                <img src={MailIcon} alt="mail" /> elif@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="footer-item">
                        <img src={MessageIcon} alt="message" />
                        <div className="footer-item-text">
                            <span>Mail Adresi</span>
                            <span>
                                <a href="mailto:profuture@gmail.com">
                                    <b>
                                        profuture@gmail.com
                                    </b>
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="footer-item">
                        <img src={LocationIcon} alt="location" />
                        <div className="footer-item-text">
                            <span>Profuture Teknoloji Yayınevi</span>
                            <span>Ahmet Kemal Mahallesi 1245. Cadde No: 10 Çankaya/Ankara</span>
                        </div>
                    </div>

                </div>
                <span className="footer-disclaimer">
                    Bu sitede yer alan tüm yazılı, görsel ve uygulama içerikleri kaynak gösterilmeden kullanılamaz. Site içerisinde sunulan bilgiler yalnızca bilgilendirme amacıyla hazırlanmış olup, bu bilgilerin kullanımından doğabilecek her türlü sorumluluk kullanıcıya aittir. Siteye erişim sağlayan kullanıcılar, bu şartları okumuş, anlamış ve kabul etmiş sayılır.
                </span>
            </div>
            <span className="footer-copyright">
                Profuture Teknoloji - Tüm Hakları Saklıdır. © {year}
            </span>
        </footer>
    );
}