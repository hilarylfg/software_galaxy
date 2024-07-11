import { Link } from '@inertiajs/react';

export default function Header() {
  return (
    <header className="container">
            <div className="block">
                <span className="logo"><Link href="/" >Software Galaxy</Link></span>
                <Link href="/catalog"><button><img src="/img/catalog.svg" alt=""/></button></Link>
            </div>
            <input type="text" placeholder="Поиск по сайту"/>
            <nav>
                <ul>
                    <li><Link href="/about">О нас</Link></li>
                    <li><Link href="/contacts">Сотрудничество</Link></li>
                    <li><Link href="/certificates">Сертификаты</Link></li>
                </ul>
            </nav>
            <ul className="buttons">
                <li><div className='button'>
                    <Link href="#"><img src="/img/favorite.svg" alt=''/></Link>
                    <p>Избранное</p>
                    </div></li>
                <li><div className='button'>
                    <Link href="#"><img src="/img/cart.svg" alt=''/></Link>
                    <p>Корзина</p>
                    </div></li>
                <li><div className='button'>
                    <Link href="#"><img src="/img/profile.svg" alt=''/></Link>
                    <p>Профиль</p>
                    </div></li>
            </ul>
        </header>
  )
}
