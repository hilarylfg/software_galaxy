import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductList from "../components/ProductList";

import {useEffect, useState} from "react";
import Filters from "../components/Filters";
import {SearchX} from "lucide-react";
import {getProducts} from "../utils.ts";

export default function Catalog() {
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Функция для загрузки продуктов
        const loadProducts = async () => {
            try {
                const products = await getProducts();
                setFilteredProducts(products);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadProducts();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>; // Можно заменить на спиннер или другой индикатор загрузки
    }

    return (
        <>
            <Header />

            <div className="container">
                <h1 className="title-page">Каталог</h1>
                <div className="catalog">
                    <Filters products={getProducts()} setFilteredProducts={setFilteredProducts} />
                    <div className="list">
                        <ProductList products={filteredProducts} />
                        {filteredProducts.length === 0 &&
                            <div className="not-found-products">
                                <SearchX width={100} height={100}/>
                                <h2>Нет товаров, соответствующих выбранным фильтрам.</h2>
                            </div>
                        }
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
}
