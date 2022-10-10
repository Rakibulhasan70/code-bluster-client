import React, { useEffect, useState } from 'react';

const UseDelete = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://growscribe-server.onrender.com/subjectAdd')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])
    return [products, setProducts]
};

export default UseDelete;