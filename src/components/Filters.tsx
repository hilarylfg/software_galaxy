import {ChangeEvent, useEffect, useState} from 'react';
import {Product} from "../@types/types.ts";

interface FiltersProps {
    products: Product[];
    setFilteredProducts: (products: Product[]) => void;
}

interface FiltersState {
    available: string[];
    developer: string[];
    edition: string[];
    sale: string[];
    minPrice: string;
    maxPrice: string;
    minRating: string;
    maxRating: string;
}

export default function Filters({ products, setFilteredProducts } : FiltersProps) {
    const [updatedProducts, setUpdatedProducts] = useState<Product[]>([]);
    const [filters, setFilters] = useState<FiltersState>({
        available: [],
        developer: [],
        edition: [],
        sale: [],
        minPrice: '',
        maxPrice: '',
        minRating: '',
        maxRating: ''
    });

    useEffect(() => {
        const productsWithUpdatedFields = products.map(product => ({
            ...product,
            sale: product.newPrice ? 'Есть скидка' : 'Нет скидки',
            available: product.availableCount > 0 ? 'Есть в наличии' : 'Нет в наличии',
            hot: product.countRating > 250 && product.rating > 4.3 ? 1 : 0
        }));
        setUpdatedProducts(productsWithUpdatedFields);
    }, [products]);

    useEffect(() => {
        if (updatedProducts.length > 0) handleFilter();
    }, [filters, updatedProducts]);
    
    const handleFilter = () => {
        let filtered = updatedProducts;

        (Object.keys(filters) as Array<keyof FiltersState>).forEach(key => {
            const filterKey = key;
            const filterValue = filters[filterKey]; // Получаем значение фильтра

            if (Array.isArray(filterValue) && filterValue.length > 0) {
                filtered = filtered.filter(product => filterValue.includes(product[filterKey as keyof Product] as unknown as string));
            } else if (filterValue) {
                const numericValue = Number(filterValue); // Преобразуем строку в число
                if (filterKey === 'minPrice') {
                    filtered = filtered.filter(product => (product.newPrice || product.price) >= numericValue);
                } else if (filterKey === 'maxPrice') {
                    filtered = filtered.filter(product => (product.newPrice || product.price) <= numericValue);
                } else if (filterKey === 'minRating') {
                    filtered = filtered.filter(product => product.rating >= numericValue);
                } else if (filterKey === 'maxRating') {
                    filtered = filtered.filter(product => product.rating <= numericValue);
                }
            }
        });

        setFilteredProducts(filtered);
    };

    const handleCheckboxChange = (category: keyof FiltersState, value: string) => (event: ChangeEvent<HTMLInputElement>) => {
        setFilters(prevFilters => {
            const currentFilterValues = prevFilters[category] as string[];
            const newValues = event.target.checked
                ? [...currentFilterValues, value]
                : currentFilterValues.filter(v => v !== value);

            return { ...prevFilters, [category]: newValues };
        });
    };

    const handleInputChange = (category: keyof FiltersState) => (event: ChangeEvent<HTMLInputElement>) => {
        setFilters(prevFilters => ({ ...prevFilters, [category]: event.target.value }));
    };

    const renderCheckbox = (category: keyof FiltersState, value: string) => (
        <div key={value}>
            <input
                type="checkbox"
                value={value}
                checked={filters[category].includes(value)}
                onChange={handleCheckboxChange(category, value)}
            />
            {value}
        </div>
    );

    return (
        <div className="filters">
            <div className="filter-block">
                <h2>Стоимость</h2>
                <div className="price-filter">
                    <input
                        type="number"
                        value={filters.minPrice}
                        placeholder="от 1"
                        onChange={handleInputChange('minPrice')}
                        step="100"
                        min={1}
                        max={999999}
                    />
                    <input
                        type="number"
                        value={filters.maxPrice}
                        placeholder="до 999999"
                        onChange={handleInputChange('maxPrice')}
                        step="100"
                        min={1}
                        max={999999}
                    />
                </div>
            </div>
            <div className="filter-block">
                <h2>Рейтинг</h2>
                <div className="price-filter">
                    <input
                        type="number"
                        value={filters.minRating}
                        placeholder="от 1"
                        onChange={handleInputChange('minRating')}
                        step="0.1"
                        min={1}
                        max={5}
                    />
                    <input
                        type="number"
                        value={filters.maxRating}
                        placeholder="до 5"
                        onChange={handleInputChange('maxRating')}
                        step="0.1"
                        min={1}
                        max={5}
                    />
                </div>
            </div>
            <div className="filter-block">
                <h2>Скидка</h2>
                {renderCheckbox('sale', 'Есть скидка')}
                {renderCheckbox('sale', 'Нет скидки')}
            </div>
            <div className="filter-block">
                <h2>Наличие</h2>
                {renderCheckbox('available', 'Есть в наличии')}
                {renderCheckbox('available', 'Нет в наличии')}
            </div>
            <div className="filter-block">
                <h2>Разработчик</h2>
                {renderCheckbox('developer', 'Microsoft')}
                {renderCheckbox('developer', 'Adobe')}
                {renderCheckbox('developer', 'Autodesk')}
            </div>
            <div className="filter-block">
                <h2>Версия</h2>
                {renderCheckbox('edition', 'Home')}
                {renderCheckbox('edition', 'Pro')}
                {renderCheckbox('edition', 'Enterprise')}
            </div>
        </div>
    );
}
