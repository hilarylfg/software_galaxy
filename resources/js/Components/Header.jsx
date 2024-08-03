import { Link } from '@inertiajs/react';
import SearchInput from "@/Components/SearchInput.jsx";
import {Heart, Menu, ShoppingCart, User} from "lucide-react";

export default function Header() {
  return (
    <header className="container">
            <div className="block">
                <Link href="/" ><span className="logo">Software Galaxy</span></Link>
                <Link href="/catalog"><button> <Menu width={28} color="white"/> </button></Link>
            </div>
            <SearchInput/>
            <nav>
                <ul>
                    <li><Link href="/about">О нас</Link></li>
                    <li><Link href="/contacts">Сотрудничество</Link></li>
                    <li><Link href="/certificates">Сертификаты</Link></li>
                </ul>
            </nav>
            <ul className="buttons">
                <li><div className='button'>
                    <Link href="#"><Heart width={25}/>
                    <p>Избранное</p></Link>
                    </div></li>
                <li><div className='button'>
                    <Link href="/cart"><ShoppingCart width={25}/>
                    <p>Корзина</p></Link>
                    </div></li>
                <li><div className='button'>
                    <Link href="#"><User width={25}/>
                    <p>Профиль</p></Link>
                    </div></li>
            </ul>
        </header>
  )
}
