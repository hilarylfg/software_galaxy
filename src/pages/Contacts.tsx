import CheckEmail from "../components/CheckEmail"
import Footer from "../components/Footer"
import Header from "../components/Header"
import {MapPinned, Phone} from "lucide-react";

export default function Contacts() {
    return (
        <>
            <Header/>
            <div className="container hero-contacts">
                <div className="head-block">
                    <h3 className="current-page">Главная / <b className="current-page">Контакты</b></h3>
                    <h1>Lorem Ipsum is simply dummy text of the printing and.</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
                <img src="/img/HugeGlobal.svg" alt="" className="map"/>
                <div className="block">
                    <div className="follow">
                        <h2>Follow us</h2>
                        <ul>
                            <li><a href="https://t.me/hilarylfg1769"><img src="/img/telegram.svg" alt=""/></a></li>
                            <li><a href="#"><img src="/img/vk.svg" alt=""/></a></li>
                            <li><a href="#"><img src="/img/instagram.svg" alt=""/></a></li>
                            <li><a href="#"><img src="/img/youtube.svg" alt=""/></a></li>
                        </ul>
                    </div>
                    <hr/>
                    <div className="string"><Phone/> <h3>+7(952)812-52-52</h3></div>
                    <hr/>
                    <div className="string"><MapPinned/><h3>г.Москва ул. Кирпичная, 33</h3></div>

                </div>
            </div>

            <CheckEmail/>

            <Footer/>
        </>
    )
}
