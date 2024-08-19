import {Mail, MapPinned, Phone} from "lucide-react";
import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div className="blocks container">
                <div>
                    <span className="logo"> Software Galaxy</span>
                    <p>далекооооо</p>
                </div>
                <div>
                    <h4>Важное</h4>
                    <ul>
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="/about">О нас</Link></li>
                        <li><Link to="/contacts">Сотрудничество</Link></li>
                        <li><Link to="/certificates">Сертификаты</Link></li>
                    </ul>
                </div>
                <div className="contacts">
                    <div><h4>Контакты</h4></div>
                    <div className="string"><a href="#"><MapPinned/><p>г. Москва ул. Кирпичная, 33</p></a></div>
                    <div className="string"><Mail/><p>main@softwaregalaxy.com</p></div>
                    <div className="string"><Phone/><p>+7(952)812-52-52</p></div>
                </div>
                <div className="socials">
                    <ul>
                        <li><a href="https://t.me/maratik_63"><img src="/img/telegram.svg" alt=""/></a></li>
                        <li><a href="#"><img src="/img/vk.svg" alt=""/></a></li>
                        <li><a href="#"><img src="/img/instagram.svg" alt=""/></a></li>
                        <li><a href="https://www.youtube.com/@DERGIDVER"><img src="/img/youtube.svg" alt=""/></a></li>
                    </ul>
                </div>
            </div>
            <hr/>
            <p>© 2024 Software Galaxy Все права защищены</p>
        </footer>
    )
}
