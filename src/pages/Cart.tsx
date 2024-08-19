import Header from "../components/Header";
import Footer from "../components/Footer";
import Price from "../components/PriceFormatter";
export default function Card() {

    const availability = 'Есть в наличии'

    const availabilityClass = availability === 'Есть в наличии' ? 'in-stock' : 'not-in-stock';

    return (
        <>
            <Header/>

            <div className="container cart">
                <h1 className="title-page">Корзина</h1>
                <div className="main">
                    <div className="products">
                        <div className="product">
                            <img src="/img/products/product.png" alt=""/>
                            <div className="desc">
                                <h2>Windows 5</h2>
                                <p className={availabilityClass}>{availability}</p>
                            </div>
                            <div className="block">
                                <h2> <Price value={19999}/> </h2>
                                <h3> <s> <Price value={4000000}/> </s> </h3>
                            </div>
                            <div className="block">
                                <div className="buttons">
                                    <button>-</button>
                                    <input type="number" placeholder={`${1}`}/>
                                    <button>+</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="form">
                        <button>Перейти к оформлению</button>
                        <hr/>
                        <h3>Ваша корзина</h3>
                        <div className="string">
                            <h4>Товары (1)</h4> <span><Price value={4000}/></span>
                        </div>
                        <div className="string">
                            <h4>Скидка</h4> <span className="sale">- <Price value={500}/></span>
                        </div>
                        <hr/>
                        <div className="string">
                            <h2>Итого :</h2> <span className="final-price"><Price value={3500}/></span>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
}
