import {useEffect, useState} from 'react';

export default function Filters({products, setFilteredProducts}) {
    const [available, setAvailable] = useState('');
    const [developer, setDeveloper] = useState('');
    const [edition, setEdition] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [minRating, setMinRating] = useState('');
    const [maxRating, setMaxRating] = useState('');

    useEffect(() => {
        if (products.length > 0) {
            handleFilter();
        }
    }, [available, developer, edition, minPrice, maxPrice, newPrice, minRating, maxRating, products]);

    const handleFilter = () => {
        if (products.length === 0) return;

        let filtered = products;

        if (available) {
            filtered = filtered.filter(product => product.available === available);
        }

        if (developer) {
            filtered = filtered.filter(product => product.developer === developer);
        }

        if (edition) {
            filtered = filtered.filter(product => product.edition === edition);
        }

        if (minPrice) {
            filtered = filtered.filter(product => product.newPrice ? product.newPrice >= minPrice : product.price >= minPrice);
        }

        if (maxPrice) {
            filtered = filtered.filter(product => product.newPrice ? product.newPrice <= maxPrice : product.price <= maxPrice);
        }

        if (minRating) {
            filtered = filtered.filter(product => product.rating >= minRating);
        }

        if (maxRating) {
            filtered = filtered.filter(product => product.rating <= maxRating);
        }

        setFilteredProducts(filtered);
    };

    const handleCheckboxChange = (setter) => (value) => (event) => {
        setter(event.target.checked ? value : '');
    };

    return (
        <div className="filters">
            <div className="filter-block">
                <h2>Стоимость</h2>
                <div className="price-filter">
                    <input
                        type="number"
                        value={minPrice}
                        placeholder="от 1"
                        onChange={(e) => setMinPrice(e.target.value)}
                        step="100"
                        min={1}
                        max={999999}
                    />
                    <input
                        type="number"
                        value={maxPrice}
                        placeholder="до 999999"
                        onChange={(e) => setMaxPrice(e.target.value)}
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
                        value={minRating}
                        placeholder="от 1"
                        onChange={(e) => setMinRating(e.target.value)}
                        step="0.1"
                        min={1}
                        max={5}
                    />
                    <input
                        type="number"
                        value={maxRating}
                        placeholder="до 5"
                        onChange={(e) => setMaxRating(e.target.value)}
                        step="0.1"
                        min={1}
                        max={5}
                    />
                </div>
            </div>
            <div className="filter-block">
                <h2>Наличие</h2>
                <input
                    type="checkbox"
                    value="Есть в наличии"
                    checked={available === 'Есть в наличии'}
                    onChange={handleCheckboxChange(setAvailable)('Есть в наличии')}
                />
                Есть в наличии
                <br/>
                <input
                    type="checkbox"
                    value="Нет в наличии"
                    checked={available === 'Нет в наличии'}
                    onChange={handleCheckboxChange(setAvailable)('Нет в наличии')}
                />
                Нет в наличии
            </div>
            <div className="filter-block">
                <h2>Разработчик</h2>
                <input
                    type="checkbox"
                    value="Microsoft"
                    checked={developer === 'Microsoft'}
                    onChange={handleCheckboxChange(setDeveloper)('Microsoft')}
                />
                Microsoft
                <br/>
                <input
                    type="checkbox"
                    value="Adobe"
                    checked={developer === 'Adobe'}
                    onChange={handleCheckboxChange(setDeveloper)('Adobe')}
                />
                Adobe
                <br/>
                <input
                    type="checkbox"
                    value="Autodesk"
                    checked={developer === 'Autodesk'}
                    onChange={handleCheckboxChange(setDeveloper)('Autodesk')}
                />
                Autodesk
            </div>
            <div className="filter-block">
                <h2>Версия</h2>
                <input
                    type="checkbox"
                    value="Home"
                    checked={edition === 'Home'}
                    onChange={handleCheckboxChange(setEdition)('Home')}
                />
                Home
                <br/>
                <input
                    type="checkbox"
                    value="Pro"
                    checked={edition === 'Pro'}
                    onChange={handleCheckboxChange(setEdition)('Pro')}
                />
                Pro
                <br/>
                <input
                    type="checkbox"
                    value="Enterprise"
                    checked={edition === 'Enterprise'}
                    onChange={handleCheckboxChange(setEdition)('Enterprise')}
                />
                Enterprise
            </div>
        </div>
    );
};
