import ProductBlock from '../components/ProductBlock.jsx';
import {Product} from "../@types/types.ts";

interface Props {
    products: Product[];
}

export default function ProductList({ products } : Props) {
    return (
        <>
            <div className="settings">
                <h3>Найдено: {products.length} товаров</h3>
                <h4>Сортировка: по популярности</h4>
            </div>
            <div className="products">
                {products.map(product => (
                    <ProductBlock
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </>
    );
}
