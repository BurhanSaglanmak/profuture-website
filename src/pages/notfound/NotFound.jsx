import { Link } from "react-router";

export default function NotFound() {
    return (
        <div className="notfound" >
            <h1>404</h1>
            <h2 >Sayfa Bulunamadı</h2>
            <p>
                Aradığınız sayfa mevcut değil veya taşınmış olabilir.
            </p>
            <Link to="/">
                Ana Sayfaya Dön
            </Link>
        </div>
    );
}