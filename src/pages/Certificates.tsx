import CheckEmail from "../components/CheckEmail";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Certificates() {
    return (
        <>
            <Header />
            <div className="container certificates">
                <div className="head">
                    <h3 className="current-page">
                        Главная / <b className="current-page">Сертификаты</b>
                    </h3>
                    <h1>Сертификаты</h1>
                    <p>
                        Наша компания завоевала доверие у ведущих разработчиков
                        программного обеспечения и получила партнерские статусы
                        таких известных брендов как Microsoft, 1C, Corel, Kerio,
                        Abbyy, Eset Corporate и т.д. Это – далеко не предел
                        наших целей и планов. Всех наших специалистов объединяет
                        одна задача – развитие и достижени е новых высот в
                        области IT-индустрии.
                    </p>
                </div>
                <div className="photos">
                    <div>
                        <img src="/img/certificates/certificate1.png" alt=""/>
                    </div>
                    <div>
                        <img src="/img/certificates/certificate2.png" alt=""/>
                    </div>
                    <div>
                        <img src="/img/certificates/certificate3.png" alt=""/>
                    </div>
                    <div>
                        <img src="/img/certificates/certificate4.jpg" alt=""/>
                    </div>
                    <div>
                        <img src="/img/certificates/certificate5.jpg" alt=""/>
                    </div>
                    <div>
                        <img src="/img/certificates/certificate6.jpg" alt=""/>
                    </div>
                    <div>
                        <img src="/img/certificates/certificate7.webp" alt=""/>
                    </div>
                    <div>
                        <img src="/img/certificates/certificate8.jpg" alt=""/>
                    </div>
                    <div>
                        <img src="/img/certificates/certificate9.webp" alt=""/>
                    </div>
                </div>
            </div>

            <CheckEmail />

            <Footer/>
        </>
    );
}
