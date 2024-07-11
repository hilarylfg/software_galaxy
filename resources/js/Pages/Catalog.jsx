import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import ProductBlock from "@/Components/ProductBlock.jsx";

export default function Catalog() {

    const title = "Windows"

    return (
        <>
            <Header/>

            <div className="container">
                <h1 className="catalog-title">Каталог</h1>
                <div className="catalog">
                    <div className="filters">
                        <div className="filter-block">
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
                        <div className="filter-block">
                            <h2>Наличие</h2>
                            <input className="cb" type="checkbox"/> В наличии
                            <br/>
                            <input className="cb" type="checkbox"/> Нет в наличии
                        </div>
                        <div className="filter-block">
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
                        <div className="filter-block">
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
                            <ProductBlock title={title} price={25999} newPrice={19999} rating={2} comments={4}/>
                            <ProductBlock title={title} price={45000}/>
                            <ProductBlock title={title} price={25999} newPrice={19999}/>
                            <ProductBlock title={title} price={25999} newPrice={19999}/>
                            <ProductBlock title={title} price={25999} newPrice={19999}/>
                            <ProductBlock title={title} price={25999} newPrice={19999}/>

                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
}
