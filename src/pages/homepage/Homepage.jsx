import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { Article, Features, LandingPage, Magazines, CurrentArticles } from "../../components/homepage";

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
                creatAt: "2026-01-01"
            },
            {
                id: 2,
                title: "Teknoloji ve Dijital Dergisi",
                cilt: 1,
                sayi: 1,
                tarih: "Aralık 2022",
                type: "Dergi",
                status: "YENİ",
                creatAt: "2022-12-15"
            },
            {
                id: 3,
                title: "Teknoloji ve Dijital Dergisi",
                cilt: 1,
                sayi: 1,
                tarih: "Aralık 2022",
                type: "Dergi",
                status: "YENİ",
                creatAt: "2022-12-15"
            },
            {
                id: 4,
                title: "Teknoloji ve Dijital Dergisi",
                cilt: 1,
                sayi: 1,
                tarih: "Aralık 2022",
                type: "Dergi",
                status: "YENİ",
                creatAt: "2022-12-15"
            }
        ]
    const articleData = {
        title: "Türkiye Ulusal Dijital Veri ve Altyapıları",
        description: "Bu dosya kapsamında; ulusal ölçekte dijital veri yönetimi, kamu ve özel sektörde teknoloji altyapıları, yapay zekâ uygulamaları, büyük veri analitiği, siber güvenlik, akıllı sistemler ve dijital dönüşüm odaklı özgün, güncel ve disiplinlerarası akademik çalışmalar değerlendirilecektir.",
        link: "/makale-cagrisi"
    }
    const currentArticleData = [
        {
            id: 1,
            badges: ["İklim", "Araştırma Makalesi"],
            title: "Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi",
            page: "12-28",
            editor: "Elif Başkaya Acar, Emre Taran, Halil Başar",
            link: "/makaleler/turkiye-ulusal-dijital-veri-ve-altyapilari"
        },
        {
            id: 2,
            badges: ["İklim", "Araştırma Makalesi"],
            title: "Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi",
            page: "12-28",
            editor: "Elif Başkaya Acar, Emre Taran, Halil Başar",
            link: "/makaleler/turkiye-ulusal-dijital-veri-ve-altyapilari"
        },
        {
            id: 3,
            badges: ["İklim", "Araştırma Makalesi"],
            title: "Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi",
            page: "12-28",
            editor: "Elif Başkaya Acar, Emre Taran, Halil Başar",
            link: "/makaleler/turkiye-ulusal-dijital-veri-ve-altyapilari"
        },
        {
            id: 4,
            badges: ["İklim", "Araştırma Makalesi"],
            title: "Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi",
            page: "12-28",
            editor: "Elif Başkaya Acar, Emre Taran, Halil Başar",
            link: "/makaleler/turkiye-ulusal-dijital-veri-ve-altyapilari"
        },
        {
            id: 4,
            badges: ["İklim", "Araştırma Makalesi"],
            title: "Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi",
            page: "12-28",
            editor: "Elif Başkaya Acar, Emre Taran, Halil Başar",
            link: "/makaleler/turkiye-ulusal-dijital-veri-ve-altyapilari"
        },
    ]
    return (
        <>
            <Header />
            <LandingPage LandingPageData={landingPageData} />
            <Features FeaturesData={featuresData} />
            <Magazines MagazinesData={magazinesData} />
            <Article ArticleData={articleData} />
            <CurrentArticles CurrentArticlesData={currentArticleData} />
            <Footer />
        </>
    )
}