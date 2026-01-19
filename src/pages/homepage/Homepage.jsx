import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import LandingPage from "../../components/homepage/LandingPage";

export default function HomePage() {

    const landingPageData = {
        title: "Profuture Teknoloji Dergisi Son Sayıda Yayında",
        description: "Protufure teknoloji mekanizmaları değişikliği alanlarında özgün akademik çalışmalar içeren yeni sayıya şimdi erişin.",
        cilt: 2,
        sayi: 7,
        tarih: "Haziran 2025"
    };

    return (
        <>
            <Header />
            <LandingPage LandingPageData={landingPageData} />
            <Footer />
        </>
    )
}