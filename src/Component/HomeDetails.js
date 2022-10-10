import React, { useState } from 'react';
import { AiFillEyeInvisible } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import AddDelete from './AddDelete';
import { useNavigate } from 'react-router-dom';



const HomeDetails = ({ show, index }) => {
    const { firstName, lastName, city, status, Standard, _id, } = show;



    const navigate = useNavigate();
    const handleInventory = id => {
        navigate(`/update/${id}`)
    }

    const handleView = id => {
        navigate(`/view/${id}`)
    }

    const [products, setProducts] = AddDelete()

    const handleDeleteBtn = id => {
        const url = `https://growscribe-server.onrender.com/addDelete/${id}`
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



    // const handleDeleteBtn = id => {
    //     const procced = window.confirm('Are you sure for delete ??')
    //     if (procced) {
    //         const url = `https://growscribe-server.onrender.com/addDelete/${id}`
    //         console.log(url);
    //         fetch(url, {
    //             method: "DELETE"
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data)
    //                 const remainingItem = products.filter(product => product._id !== id)
    //                 setProducts(remainingItem)
    //             })

    //     }
    // }
    return (

        <tr>
            <td><input type="checkbox" name="" id="" /></td>
            <td>{index + 1}</td>
            <td>{firstName + lastName}</td>
            <td>{city}</td>
            <td>{status} </td>
            <td>{Standard}</td>

            <td className='flex'>
                <button onClick={() => handleInventory(_id)} className='flex items-center ml-5  gap-x-2 cursor-pointer border-2 p-1 rounded border-black'><FaEdit /> Edit</button>
                <div className="card-actions justify-center ">
                    <label for="my-modal-6" className="flex items-center ml-5  gap-x-2 cursor-pointer border-2 p-1 rounded border-black "><RiDeleteBin6Fill />Delete</label>
                    <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Are You Sure You want to Delete????</h3>

                            <div className="modal-action">
                                <label for="my-modal-6" className="btn">Cancel</label>
                                <label for="my-modal-6" onClick={() => handleDeleteBtn(_id)} className="btn bg-red-500 border-0">Delete</label>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 onClick={() => handleView(_id)} className='flex items-center ml-5  gap-x-2 border-2 p-1 cursor-pointer  rounded border-black'><AiFillEyeInvisible /> View</h2>
            </td>
            <td>
                {[...Array()]}
            </td>

        </tr >

    );
};

export default HomeDetails;