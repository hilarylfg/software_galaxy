import Header from "../components/Header";
import Footer from "../components/Footer";
import Price from "../components/PriceFormatter.jsx";
import RatingForProducts from "../components/RatingForProducts.jsx";

export default function Card() {
    return (
        <>

            <Header/>

            <div className="container card">
                <h3 className="current-page">
                    Главная / Microsoft /{" "}
                    <b className="current-page">Windows 11</b>
                </h3>
                <div className="product">
                    <div className="image">
                        <img src="/img/products/product-test.png" alt=""/>
                    </div>
                    <div className="info">
                        <div className="specs">
                            <h1>Windows 11</h1>
                            <p>от Microsoft</p>
                            <RatingForProducts rating={5}/>
                        </div>
                        <div className="price">
                            <h2><Price value={15999}/></h2>
                            <div className="sale">
                                <h3><s><Price value={19999}/></s></h3>
                                <h4>-{Math.round((19999 - 15999) / 19999 * 100)}%</h4>
                            </div>
                            <button className="addToCart">В корзину</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
}
