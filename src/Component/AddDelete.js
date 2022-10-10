import React, { useEffect, useState } from 'react';

const AddDelete = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://growscribe-server.onrender.com/addDelete')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])
    return [products, setProducts]
};

export default AddDelete;