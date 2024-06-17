import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

export default function Catalog() {
    return (
        <>
            <Header/>

            <div className="container catalog">
                <div className="filters">
                    <div className="block">
                        <h2>Стоимость</h2>
                        <div className="price">
                            <input
                                type="text"
                                placeholder="от 1"
                            />
                            <input
                                type="text"
                                placeholder="до 99999"
                            />
                        </div>
                    </div>
                    <div className="block">
                        <h2>Наличие</h2>
                        <input className="cb" type="checkbox"/> В наличии
                        <br/>
                        <input className="cb" type="checkbox"/> Нет в наличии
                    </div>
                    <div className="block">
                        <h2>Разработчик</h2>
                        <input className="cb" type="checkbox"/>
                        Microsoft
                        <br/>
                        <input className="cb" type="checkbox"/>
                        Adobe
                        <br/>
                        <input className="cb" type="checkbox"/>
                        Autodesk
                    </div>
                    <div className="block">
                        <h2>Русификация</h2>
                        <input className="cb" type="checkbox"/>
                        Да
                        <br/>
                        <input className="cb" type="checkbox"/>
                        Нет
                    </div>
                </div>
                <div className="list">
                    <div className="settings">
                        <p>fgsfsd</p>
                    </div>
                    <div className="products">
                        <div className="product">
                            <div className="images">
                                <img src="/img/products/product.png" alt=""/>
                                <a href="#"><img className="favorite addToFavorite" src="/img/favorite.svg" alt=""/></a>
                            </div>
                            <h1>Windows 11 Pro</h1>
                            <p>В наличии</p>
                            <h2>15 999 ₽</h2>
                            <button>Подробнее</button>
                        </div>
                        <div className="product">
                            <div className="images">
                                <img src="/img/products/product.png" alt=""/>
                                <a href="#"><img className="favorite addToFavorite" src="/img/favorite.svg" alt=""/></a>
                            </div>
                            <h1>Windows 11 Pro</h1>
                            <p>В наличии</p>
                            <h2>15 999 ₽</h2>
                            <button>Подробнее</button>
                        </div>
                        <div className="product">
                            <div className="images">
                                <img src="/img/products/product.png" alt=""/>
                                <a href="#"><img className="favorite addToFavorite" src="/img/favorite.svg" alt=""/></a>
                            </div>
                            <h1>Windows 11 Pro</h1>
                            <p>В наличии</p>
                            <h2>15 999 ₽</h2>
                            <button>Подробнее</button>
                        </div>
                        <div className="product">
                            <div className="images">
                                <img src="/img/products/product.png" alt=""/>
                                <a href="#"><img className="favorite addToFavorite" src="/img/favorite.svg" alt=""/></a>
                            </div>
                            <h1>Windows 11 Pro</h1>
                            <p>В наличии</p>
                            <h2>15 999 ₽</h2>
                            <button>Подробнее</button>
                        </div>
                        <div className="product">
                            <div className="images">
                                <img src="/img/products/product.png" alt=""/>
                                <a href="#"><img className="favorite addToFavorite" src="/img/favorite.svg" alt=""/></a>
                            </div>
                            <h1>Windows 11 Pro</h1>
                            <p>В наличии</p>
                            <h2>15 999 ₽</h2>
                            <button>Подробнее</button>
                        </div>
                        <div className="product">
                            <div className="images">
                                <img src="/img/products/product.png" alt=""/>
                                <a href="#"><img className="favorite addToFavorite" src="/img/favorite.svg" alt=""/></a>
                            </div>
                            <h1>Windows 11 Pro</h1>
                            <p>В наличии</p>
                            <h2>15 999 ₽</h2>
                            <button>Подробнее</button>
                        </div>
                        <div className="product">
                            <div className="images">
                                <img src="/img/products/product.png" alt=""/>
                                <a href="#"><img className="favorite addToFavorite" src="/img/favorite.svg" alt=""/></a>
                            </div>
                            <h1>Windows 11 Pro</h1>
                            <p>В наличии</p>
                            <h2>15 999 ₽</h2>
                            <button>Подробнее</button>
                        </div>

                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
}
