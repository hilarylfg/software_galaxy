import { Link } from '@inertiajs/react';

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
                        <li><Link href="/">Главная</Link></li>
                        <li><Link href="/about">О нас</Link></li>
                        <li><Link href="/contacts">Сотрудничество</Link></li>
                        <li><Link href="/certificates">Сертификаты</Link></li>
                    </ul>
                </div>
                <div className="contacts">
                    <h4>Контакты</h4>
                    <p><a href="https://yandex.ru/maps/org/kolledzh_svyazi_54_im_p_m_vostrukhina_podrazdeleniye_semenovskoye_5/36750795977/?ll=37.733109%2C55.778749&z=14"><img src="/img/map-footer.png" alt=""/>г. Москва ул. Кирпичная, 33</a></p>
                    <p><img src="/img/mail-footer.png" alt=""/>main@softwaregalaxy.com</p>
                    <p><img src="/img/phone-footer.png" alt=""/>+7(952)812-52-52</p>
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
