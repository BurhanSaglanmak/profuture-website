import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { Features, LandingPage } from "../../components/homepage";

export default function HomePage() {

    const landingPageData = {
        title: "Profuture Teknoloji Dergisi Son Sayıda Yayında",
        description: "Protufure teknoloji mekanizmaları değişikliği alanlarında özgün akademik çalışmalar içeren yeni sayıya şimdi erişin.",
        cilt: 2,
        sayi: 7,
        tarih: "Haziran 2025"
    };

    const featuresData = {
        header: "Dergi Amacı ve Kapsamı",
        title: "Profuture Teknoloji Dergisi Nedir?",
        description: "Profuture Teknoloji Dergisi, teknoloji alanında özgün akademik çalışmaların yayınlandığı hakemli bir dergidir. Dergi, yenilikçi araştırmaları ve gelişmeleri paylaşarak teknoloji topluluğuna katkıda bulunmayı amaçlamaktadır.",
        cilt: 2,
        sayi: 7,
    }
    return (
        <>
            <Header />
            <LandingPage LandingPageData={landingPageData} />
            <Features FeaturesData={featuresData} />
            <Footer />
        </>
    )
}