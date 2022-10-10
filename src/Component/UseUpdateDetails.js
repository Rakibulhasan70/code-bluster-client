import { useEffect, useState } from 'react';

const UseUpdateDetails = (Id) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`https://growscribe-server.onrender.com/shows/${Id}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])
    return [products, setProducts]
};

export default UseUpdateDetails;