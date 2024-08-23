import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Filters from "../components/Filters";

import {getProducts} from "../utils";
import {Product} from "../../@types/types";
import Progress from "../components/Loading.tsx";

import {useEffect, useState} from "react";
import {SearchX} from "lucide-react";



export default function Catalog() {

    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = getProducts();
                setProducts(data);
            } catch (error) {
                console.error('Failed to fetch products:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <>
            <Header />

            <div className="container">
                <h1 className="title-page">Каталог</h1>
                <div className="catalog">
                    <Filters products={products} setFilteredProducts={setFilteredProducts} />
                    <div className="list">
                        <ProductList products={filteredProducts}/>
                        {filteredProducts.length === 0 && !isLoading &&
                            <div className="not-found-products">
                                <SearchX width={100} height={100}/>
                                <h2>Нет товаров, соответствующих выбранным фильтрам.</h2>
                            </div>
                        }
                        {isLoading && <Progress/>}
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
}