import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useProducts() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                setError(error);
                console.error('There was an error fetching the products!', error);
            });
    }, []);

    return { products, error };
};
