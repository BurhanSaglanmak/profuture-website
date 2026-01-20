import { useState } from 'react';
import { Link } from 'react-router';
import {
    logo,
    emailIcon,
    globeIcon,
    editIcon,
    searchIcon,
    home,
} from '../../assets/header';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { label: 'Amaç ve Kapsam', path: '/amac-kapsam' },
        { label: 'Etik İlkeler ve Yayın Politikası', path: '/etik-ilkeler' },
        { label: 'Makale Çağrıları', path: '/makale-cagrilari' },
        { label: 'Sayılar', path: '/sayilar' },
        { label: 'İletişim', path: '/iletisim' }
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="header__logo">
                <Link to="/" >
                    <img src={logo} alt="ProFuture" />
                </Link>
            </div>
            <div className="header__container">
                <div className="header__topbar">
                    <a
                        href="mailto:profuture@gmail.com"
                        className="header__topbar-mail"
                    >
                        <img src={emailIcon} alt="email" />
                        profuture@gmail.com
                    </a>
                    <div className="header__topbar-right">
                        <span>
                            ISSN: <b>345-255</b>
                        </span>
                        <span>
                            Başlangıç <b>2025</b>
                        </span>
                        <span>
                            Periyot <b>Yılda 2 Sayı</b>
                        </span>
                    </div>
                </div>
                <nav className="header__navbar">
                    <Link to="/" className="header__navbar-home">
                        <img src={home} alt="home" />
                    </Link>

                    <button
                        className={`header__navbar-hamburger ${isMenuOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <ul className="header__navbar-list">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link to={item.path}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="header__navbar-buttons">
                        <Link to="/dergi-kurulu" className="header__navbar-buttons-globe">
                            <img src={globeIcon} alt="globe" />
                            Dergi Kurulu
                        </Link>
                        <Link to="/yazar-rehberi" className="header__navbar-buttons-edit">
                            <img src={editIcon} alt="edit" />
                            Yazar Rehberi
                        </Link>
                        <Link to="/" className="header__navbar-buttons-search">
                            <img src={searchIcon} alt="search" />
                        </Link>
                    </div>
                </nav>

                <div className={`header__mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                    <div className="header__logo-mobile">
                        <img src={logo} alt="ProFuture" />
                    </div>
                    <ul className="header__mobile-menu-list">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link to={item.path} onClick={toggleMenu}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="header__mobile-menu-buttons">
                        <Link to="/" className="header__navbar-buttons-globe" onClick={toggleMenu}>
                            <img src={globeIcon} alt="globe" />
                            Dergi Kurulu
                        </Link>
                        <Link to="/" className="header__navbar-buttons-edit" onClick={toggleMenu}>
                            <img src={editIcon} alt="edit" />
                            Yazar Rehberi
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;