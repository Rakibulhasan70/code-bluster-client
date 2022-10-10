import React from 'react';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import UseDelete from './UseDelete';


const ShowSubject = ({ show }) => {
    const { subject, sr, _id } = show;

    const [products, setProducts] = UseDelete()
    const handleDeleteBtn = id => {
        const procced = window.confirm('Are you sure for delete ??')
        if (procced) {
            const url = `http://localhost:5000/subjectAdd/${id}`
            console.log(url);
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remainingItem = products.filter(product => product._id !== id)
                    setProducts(remainingItem)
                })

        }
    }
    return (
        <tr>
            <td>{sr}</td>
            <td>{subject}</td>
            <td onClick={() => handleDeleteBtn(_id)} className='text-2xl text-red-500'><RiDeleteBin6Fill /></td>

        </tr>
    );
};

export default ShowSubject;