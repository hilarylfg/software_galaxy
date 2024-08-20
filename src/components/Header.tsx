import SearchInput from "../components/SearchInput";
import {Heart, Menu, ShoppingCart, User} from "lucide-react";
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header className="container">
            <div className="block">
                <Link to="/" ><span className="logo">Software Galaxy</span></Link>
                <Link to="/catalog"><button> <Menu width={28} color="white"/> </button></Link>
            </div>
            <SearchInput/>
            <nav>
                <ul>
                    <li><Link to="/about">О нас</Link></li>
                    <li><Link to="/contacts">Сотрудничество</Link></li>
                    <li><Link to="/certificates">Сертификаты</Link></li>
                </ul>
            </nav>
            <ul className="buttons">
                <li><div className='button'>
                    <Link to="#"><Heart width={25}/>
                        <p>Избранное</p></Link>
                </div></li>
                <li><div className='button'>
                    <Link to="/cart"><ShoppingCart width={25}/>
                        <p>Корзина</p></Link>
                </div></li>
                <li><div className='button'>
                    <Link to="#"><User width={25}/>
                        <p>Профиль</p></Link>
                </div></li>
            </ul>
        </header>
    )
}
