import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Price from "@/Components/PriceFormatter.jsx";

export default function Catalog() {
    return (
        <>
            <Header/>

            <div className="container">
                <h1 className="catalog-title">Каталог</h1>
                <div className="catalog">
                    <div className="filters">
                        <div className="block">
                            <h2>Стоимость</h2>
                            <div className="price-filter">
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
                            <h3>Найдено: 50 Товаров</h3>
                            <h4>Сортировка: по популярности</h4>
                        </div>
                        <div className="products">
                            <div className="product">
                                <div className="images">
                                    <img src="/img/products/product.png" alt=""/>
                                    <a href="#"><img className="favorite addToFavorite" src="/img/favorite.svg" alt=""/></a>
                                </div>
                                <h1>Windows 11 Pro</h1>
                                <p>В наличии</p>
                                <div className="prices">
                                    <h2><Price value={15999}/></h2>
                                    <h3><strike><Price value={19999}/></strike></h3>
                                    <h4>-{Math.round((19999 - 15999) / 19999 * 100)}%</h4>
                                </div>
                                <button>Подробнее</button>
                            </div>
                            <div className="product">
                                <div className="images">
                                    <img src="/img/products/product.png" alt=""/>
                                    <a href="#"><img className="favorite addToFavorite" src="/img/favorite.svg" alt=""/></a>
                                </div>
                                <h1>Windows 11 Pro</h1>
                                <p>В наличии</p>
                                <div className="prices">
                                    <h2><Price value={15999}/></h2>
                                    <h3><strike><Price value={19999}/></strike></h3>
                                    <h4>-{Math.round((19999 - 15999) / 19999 * 100)}%</h4>
                                </div>
                                <button>Подробнее</button>
                            </div>
                            <div className="product">
                                <div className="images">
                                    <img src="/img/products/product.png" alt=""/>
                                    <a href="#"><img className="favorite addToFavorite" src="/img/favorite.svg" alt=""/></a>
                                </div>
                                <h1>Windows 11 Pro</h1>
                                <p>В наличии</p>
                                <div className="prices">
                                    <h2><Price value={15999}/></h2>
                                    <h3><strike><Price value={19999}/></strike></h3>
                                    <h4>-{Math.round((19999 - 15999) / 19999 * 100)}%</h4>
                                </div>
                                <button>Подробнее</button>
                            </div>
                            <div className="product">
                                <div className="images">
                                    <img src="/img/products/product.png" alt=""/>
                                    <a href="#"><img className="favorite addToFavorite" src="/img/favorite.svg" alt=""/></a>
                                </div>
                                <h1>Windows 11 Pro</h1>
                                <p>В наличии</p>
                                <div className="prices">
                                    <h2><Price value={15999}/></h2>
                                    <h3><strike><Price value={19999}/></strike></h3>
                                    <h4>-{Math.round((19999 - 15999) / 19999 * 100)}%</h4>
                                </div>
                                <button>Подробнее</button>
                            </div>
                            <div className="product">
                                <div className="images">
                                    <img src="/img/products/product.png" alt=""/>
                                    <a href="#"><img className="favorite addToFavorite" src="/img/favorite.svg" alt=""/></a>
                                </div>
                                <h1>Windows 11 Pro</h1>
                                <p>В наличии</p>
                                <div className="prices">
                                    <h2><Price value={15999}/></h2>
                                    <h3><strike><Price value={19999}/></strike></h3>
                                    <h4>-{Math.round((19999 - 15999) / 19999 * 100)}%</h4>
                                </div>
                                <button>Подробнее</button>
                            </div>
                            <div className="product">
                                <div className="images">
                                    <img src="/img/products/product.png" alt=""/>
                                    <a href="#"><img className="favorite addToFavorite" src="/img/favorite.svg" alt=""/></a>
                                </div>
                                <h1>Windows 11 Pro</h1>
                                <p>В наличии</p>
                                <div className="prices">
                                    <h2><Price value={15999}/></h2>
                                    <h3><strike><Price value={19999}/></strike></h3>
                                    <h4>-{Math.round((19999 - 15999) / 19999 * 100)}%</h4>
                                </div>
                                <button>Подробнее</button>
                            </div>
                            <div className="product">
                                <div className="images">
                                    <img src="/img/products/product.png" alt=""/>
                                    <a href="#"><img className="favorite addToFavorite" src="/img/favorite.svg" alt=""/></a>
                                </div>
                                <h1>Windows 11 Pro</h1>
                                <p>В наличии</p>
                                <div className="prices">
                                    <h2><Price value={15999}/></h2>
                                    <h3><strike><Price value={23999}/></strike></h3>
                                    <h4>-{Math.round((23999 - 15999) / 23999 * 100)}%</h4>
                                </div>
                                <button>Подробнее</button>
                            </div>
                            <div className="product">
                                <div className="images">
                                    <img src="/img/products/product.png" alt=""/>
                                    <a href="#"><img className="favorite addToFavorite" src="/img/favorite.svg" alt=""/></a>
                                </div>
                                <h1>Windows 11 Pro</h1>
                                <p>В наличии</p>
                                <div className="prices">
                                    <h2><Price value={15999}/></h2>
                                    <h3><strike><Price value={19999}/></strike></h3>
                                    <h4>-{Math.round((19999 - 15999) / 19999 * 100)}%</h4>
                                </div>
                                <button>Подробнее</button>
                            </div>



                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
}
