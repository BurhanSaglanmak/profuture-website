import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { Features, LandingPage, Magazines } from "../../components/homepage";

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
    const magazinesData =
        [
            {
                id: 1,
                title: "Teknoloji ve Dijital Dergisi",
                cilt: 1,
                sayi: 1,
                tarih: "Aralık 2022",
                type: "Dergi",
                status: "YENİ",
            },
            {
                id: 2,
                title: "Teknoloji ve Dijital Dergisi",
                cilt: 1,
                sayi: 1,
                tarih: "Aralık 2022",
                type: "Dergi",
                status: "YENİ",
            },
            {
                id: 3,
                title: "Teknoloji ve Dijital Dergisi",
                cilt: 1,
                sayi: 1,
                tarih: "Aralık 2022",
                type: "Dergi",
                status: "YENİ",
            },
            {
                id: 4,
                title: "Teknoloji ve Dijital Dergisi",
                cilt: 1,
                sayi: 1,
                tarih: "Aralık 2022",
                type: "Dergi",
                status: "YENİ",
            }
        ]
    return (
        <>
            <Header />
            <LandingPage LandingPageData={landingPageData} />
            <Features FeaturesData={featuresData} />
            <Magazines MagazinesData={magazinesData} />
            <Footer />
        </>
    )
}