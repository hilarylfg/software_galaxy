import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import ProductList from "@/Components/ProductList.jsx";

import {useState} from "react";
import Filters from "@/Components/Filters.jsx";
import useProducts from "@/Hooks/useProducts.jsx";
import {Head} from "@inertiajs/react";
import {SearchX} from "lucide-react";

export default function Catalog() {

    const { products, error } = useProducts();
    const [filteredProducts, setFilteredProducts] = useState(products);

    return (
        <>
            <Head title="Software Galaxy | Каталог"/>

            <Header />

            <div className="container">
                <h1 className="catalog-title">Каталог</h1>
                <div className="catalog">
                    <Filters products={products} setFilteredProducts={setFilteredProducts} />
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
