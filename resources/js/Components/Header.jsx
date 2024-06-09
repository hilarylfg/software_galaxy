import { Link } from '@inertiajs/react';

export default function Header() {
  return (
    <header className="container">
            <div className="block">
                <span className="logo"><Link href="/" >Software Galaxy</Link></span>
                <button><img src="/img/catalog.svg" alt=""/></button>
            </div>
            <input type="text" placeholder="Поиск по сайту"/>
            <nav>
                <ul>
                    <li><Link href="/about">О нас</Link></li>
                    <li><Link href="/contacts">Сотрудничество</Link></li>
                    <li><Link href="/certificates">Сертификаты</Link></li>
                </ul>
            </nav>
            <ul className="btns">
                <li><div className='btn'>
                    <Link href="#"><img src="/img/favorite.svg"/></Link>
                    <p>Избранное</p>
                    </div></li>
                <li><div className='btn'>
                    <Link href="#"><img src="/img/cart.svg"/></Link>
                    <p>Корзина</p>
                    </div></li>
                <li><div className='btn'>
                    <Link href="#"><img src="/img/profile.svg"/></Link>
                    <p>Войти</p>
                    </div></li>
            </ul>
        </header>
  )
}
