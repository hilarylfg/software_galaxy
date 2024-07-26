import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import ProductList from "@/Components/ProductList.jsx";

import {useState} from "react";
import Filters from "@/Components/Filters.jsx";
import useProducts from "@/Hooks/useProducts.jsx";
import {Head} from "@inertiajs/react";

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
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
}
