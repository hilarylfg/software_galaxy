import React, { useEffect, useState } from 'react';

export default function Filters({ products, setFilteredProducts }) {
    const [filters, setFilters] = useState({
        available: [],
        developers: [],
        editions: [],
        minPrice: '',
        maxPrice: '',
        minRating: '',
        maxRating: ''
    });

    useEffect(() => {
        if (products.length > 0) handleFilter();
    }, [filters, products]);

    const handleFilter = () => {
        let filtered = products;

        Object.keys(filters).forEach(key => {
            if (Array.isArray(filters[key]) && filters[key].length > 0) {
                filtered = filtered.filter(product => filters[key].includes(product[key]));
            } else if (filters[key]) {
                if (key === 'minPrice') {
                    filtered = filtered.filter(product => (product.newPrice || product.price) >= filters[key]);
                } else if (key === 'maxPrice') {
                    filtered = filtered.filter(product => (product.newPrice || product.price) <= filters[key]);
                } else if (key === 'minRating') {
                    filtered = filtered.filter(product => product.rating >= filters[key]);
                } else if (key === 'maxRating') {
                    filtered = filtered.filter(product => product.rating <= filters[key]);
                }
            }
        });

        setFilteredProducts(filtered);
    };

    const handleCheckboxChange = (category, value) => (event) => {
        setFilters(prevFilters => {
            const newValues = event.target.checked
                ? [...prevFilters[category], value]
                : prevFilters[category].filter(v => v !== value);
            return { ...prevFilters, [category]: newValues };
        });
    };

    const handleInputChange = (category) => (event) => {
        setFilters(prevFilters => ({ ...prevFilters, [category]: event.target.value }));
    };

    const renderCheckbox = (category, value, label) => (
        <div key={value}>
            <input
                type="checkbox"
                value={value}
                checked={filters[category].includes(value)}
                onChange={handleCheckboxChange(category, value)}
            />
            {label}
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
                <h2>Наличие</h2>
                {renderCheckbox('available', 'Есть в наличии', 'Есть в наличии')}
                {renderCheckbox('available', 'Нет в наличии', 'Нет в наличии')}
            </div>
            <div className="filter-block">
                <h2>Разработчик</h2>
                {renderCheckbox('developers', 'Microsoft', 'Microsoft')}
                {renderCheckbox('developers', 'Adobe', 'Adobe')}
                {renderCheckbox('developers', 'Autodesk', 'Autodesk')}
            </div>
            <div className="filter-block">
                <h2>Версия</h2>
                {renderCheckbox('editions', 'Home', 'Home')}
                {renderCheckbox('editions', 'Pro', 'Pro')}
                {renderCheckbox('editions', 'Enterprise', 'Enterprise')}
            </div>
        </div>
    );
}
