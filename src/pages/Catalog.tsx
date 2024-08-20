import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Filters from "../components/Filters";

import {useEffect, useState} from "react";
import {SearchX} from "lucide-react";
import {getProducts} from "../utils.ts";
import {Product} from "../@types/types.ts";

export default function Catalog() {

    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (error) {
                console.error('Failed to fetch products:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Header />

            <div className="container">
                <h1 className="title-page">Каталог</h1>
                <div className="catalog">
                    <Filters products={products} setFilteredProducts={setFilteredProducts} />
                    <div className="list">
                        <ProductList products={filteredProducts}/>
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