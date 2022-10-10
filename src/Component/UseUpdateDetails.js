import { useEffect, useState } from 'react';

const UseUpdateDetails = (Id) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/shows/${Id}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])
    return [products, setProducts]
};

export default UseUpdateDetails;