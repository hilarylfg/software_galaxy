import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

export default function Card() {
    return (
        <>
            <Header />

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
                            <p></p>
                        </div>
                        <div className="price" id="bg">
                            <h2>15 999 ₽</h2>
                            <button className="addToCart">В корзину</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
