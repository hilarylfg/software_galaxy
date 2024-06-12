import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

export default function Catalog() {
    return (
        <>
            <Header />

            <div className="container catalog">
                <div className="filters">
                    <div className="block">
                        <h2>Стоимость</h2>
                        <div className="price">
                                <input
                                    className="price"
                                    type="text"
                                    placeholder="от 1"
                                />
                                <input
                                    className="price last"
                                    type="text"
                                    placeholder="до 99999"
                                />
                        </div>
                    </div>
                    <div className="block">
                        <h2>Наличие</h2>
                        <input type="checkbox" /> В наличии
                        <br />
                        <input type="checkbox" /> Нет в наличии
                    </div>
                    <div className="block">
                        <h2>Разработчик</h2>
                        <input type="checkbox" />
                        Microsoft
                        <br />
                        <input type="checkbox" />
                        Adobe
                        <br />
                        <input type="checkbox" />
                        Autodesk
                    </div>
                    <div className="block">
                        <h2>Русификация</h2>
                        <input type="checkbox" />
                        Да
                        <br />
                        <input type="checkbox" />
                        Нет
                    </div>
                </div>
                <div className="list">
                    <div className="settings">
                        <p>fgsfsd</p>
                    </div>
                    <div className="products">
                        <div className="product">
                            <div className="image">
                                <img src="/img/products/product.png" alt=""/>
                                <button></button>
                            </div>
                            <div className=""></div>
                        </div>
                        <div className="product">
                            ds
                        </div>
                        <div className="product">
                            ds
                        </div>
                        <div className="product">
                            ds
                        </div>
                        <div className="product">
                            ds
                        </div>
                        <div className="product">
                            ds
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
