import CheckEmail from "@/Components/CheckEmail"
import Footer from "@/Components/Footer"
import Header from "@/Components/Header"

export default function Contacts() {
  return (
    <>
      <Header/>
      <div className="container hero-contacts">
            <div className="head-block">
                <h3 className="current-page">Главная   /   <b className="current-page">Контакты</b></h3>
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
                <h3><img src="/img/phone.svg" className="h3" alt=""/>+7(952)812-52-52</h3>
                <hr/>
                <h3><img src="/img/gps.svg" className="h3" alt=""/>г.Москва ул. Кирпичная, 33</h3>
            </div>
        </div>

      <CheckEmail />

      <Footer/>
    </>
  )
}
