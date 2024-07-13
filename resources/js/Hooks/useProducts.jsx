import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useProducts(filters) {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const params = {
                    ...filters
                };

                const response = await axios.get('http://localhost:8000/api/products', { params });
                setProducts(response.data);
            } catch (error) {
                setError(error);
                console.error('Произошла ошибка при загрузке продуктов!', error);
            }
        };

        fetchProducts();
    }, [filters]);

    return { products, error };
}
