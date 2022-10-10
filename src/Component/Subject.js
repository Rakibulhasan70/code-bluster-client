import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaPlus } from 'react-icons/fa';
import Swal from 'sweetalert2';
import ShowSubject from './ShowSubject';

const Subject = () => {
    const [shows, setShow] = useState([])
    useEffect(() => {
        fetch(`https://growscribe-server.onrender.com/show`)
            .then(res => res.json())
            .then(data => setShow(data))
    }, [shows])
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        const result = {
            sr: data?.sr,
            subject: data?.subject,
        }
        fetch(`https://growscribe-server.onrender.com/subjectAdd`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(result)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    Swal.fire({
                        title: 'Successfully Updated!',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                    reset()
                }
                else {
                    Swal.fire({
                        title: 'Faild to update!',
                        icon: 'error',
                        confirmButtonText: 'ok'
                    })
                }
            })
    };
    return (
        <div>
            <div className='mx-5 shadow-xl pb-32'>
                <h2 className='font-semibold text-xl mt-10'>Subject*
                </h2>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Sr No</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                shows.map(show => <ShowSubject key={show._id} show={show}></ShowSubject>)
                            }

                            <label htmlFor="my-modal-3" className=" bg-black hover:bg-black gap-2 text-white px-8 font-bold mt-5 ml-10 btn modal-button">
                                <FaPlus></FaPlus>
                                Add More
                            </label >


                            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box relative">
                                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                    <h3 className="text-lg font-bold">Select your Subject</h3>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <input   {...register("sr")} type="number" placeholder="Enter the serial Number" className="input input-bordered w-full max-w-xs mt-5" required />

                                        <input   {...register("subject")} type="text" placeholder="Choice your subject" className="input input-bordered w-full max-w-xs mt-5" />


                                        <div className='flex justify-end  mx-5'>
                                            <input type="submit" value='Save' className="btn bg-accent hover:bg-accent  gap-2 text-white px-16 font-bold mt-5 ml-10" required />
                                        </div>
                                    </form>


                                </div>
                            </div>

                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

export default Subject;