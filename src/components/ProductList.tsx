import ProductBlock from '../components/ProductBlock.jsx';

export default function ProductList({ products }) {
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
