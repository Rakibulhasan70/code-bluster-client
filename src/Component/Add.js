import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import Subject from './Subject';

const Add = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        const result = {
            firstName: data?.firstName,
            lastName: data?.lastName,
            date: data?.date,
            age: data?.age,
            city: data?.city,
            skill: data?.skill,
            brief: data?.brief,
            EnrollmentFrom: data?.EnrollmentFrom,
            EnrollmentTo: data?.EnrollmentTo,
            status: data?.status,
            Standard: data?.Standard,

        }
        fetch(`http://localhost:5000/add`, {
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div className='shadow-xl mx-4 pb-12'>
                        <div className='mx-5 my-8 '>
                            <h2 className='font-semibold text-xl'>Add Student</h2>


                            <div className='mt-8 grid grid-cols-4 gap-x-16'>
                                <div>
                                    <span className="text-md font-semibold">First Name*</span>
                                    <br />
                                    <input
                                        className=" border border-1 border-black rounded max-w-xs h-12 w-full"
                                        type="text"
                                        {...register("firstName")}
                                        required
                                    />
                                </div>
                                <div>
                                    <span className="text-md font-semibold">Last Name*</span>
                                    <br />
                                    <input
                                        className=" border border-1 border-black rounded max-w-xs h-12 w-full"
                                        type="text"
                                        {...register("lastName")}
                                        required
                                    />
                                </div>
                                <div>
                                    <span className="text-md font-semibold">Date of Birth*</span>
                                    <br />
                                    <input
                                        className=" border border-1 border-black rounded max-w-xs h-12 w-full"
                                        type="date"
                                        {...register("date")}
                                        required
                                    />
                                </div>
                                <div>
                                    <span className="text-md font-semibold">Age</span>
                                    <br />
                                    <input
                                        className=" border border-1 border-black rounded max-w-xs h-12 w-full"
                                        type="number"
                                        {...register("age")}
                                        required
                                    />
                                </div>
                            </div>

                            <div className='mt-8 grid grid-cols-2 gap-x-16'>
                                <div className=' grid grid-cols-2 gap-x-16'>
                                    <div >
                                        <span className="text-md font-semibold">Standard</span>
                                        <br />
                                        <input
                                            className=" border border-1 border-black rounded max-w-xs h-12 w-full"
                                            type="text"
                                            {...register("Standard")}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <span className="text-md font-semibold">City*</span>
                                        <br />
                                        <input
                                            className=" border border-1 border-black rounded max-w-xs h-12 w-full"
                                            type="text"
                                            {...register("city")}
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <span className="text-md font-semibold">Skills*
                                    </span>
                                    <br />
                                    <select
                                        className=" border border-1 border-black rounded max-w-3xl h-12 w-full px-5"
                                        type="date"
                                        {...register("skill")}
                                        required>
                                        <option value="Select" selected>Select</option>
                                        <option value="Javascript">Javascript</option>
                                        <option value="python">python</option>
                                        <option value="C++">C++</option>
                                        <option value="Java">Java</option>
                                        <option value="React">React</option>
                                    </select>
                                </div>

                            </div>

                            <div className='mt-10'>
                                <span className="text-md font-semibold">Brief Introduction</span>
                                <br />
                                <textarea {...register("brief")} name="" id="" cols="20" rows="8" className='border border-1 border-black rounded max-w-3xl w-full' required>

                                </textarea>
                            </div>

                            <div className='mt-8 grid grid-cols-4 gap-x-16'>
                                <div>
                                    <span className="text-md font-semibold">Enrollment From Date*</span>
                                    <br />
                                    <input
                                        className=" border border-1 border-black rounded max-w-3xl h-12 w-full px-5"
                                        type="date"
                                        {...register("EnrollmentFrom")} required>

                                    </input>
                                </div>
                                <div>
                                    <span className="text-md font-semibold">Enrollment To Date*</span>
                                    <br />
                                    <input
                                        className=" border border-1 border-black rounded max-w-3xl h-12 w-full px-5"
                                        type="date"
                                        {...register("EnrollmentTo")} required>

                                    </input>
                                </div>
                                <div>
                                    <span className="text-md font-semibold">Status*
                                    </span>
                                    <br />
                                    <select
                                        className=" border border-1 border-black rounded max-w-3xl h-12 w-full px-5"
                                        type="date"
                                        {...register("status")} required>

                                        <option value="Select" selected>Select</option>
                                        <option value="Live">Live</option>
                                        <option value="Suspended">Suspended</option>
                                    </select>
                                </div>
                                <div>
                                    <span className="text-md font-semibold">Is Active</span>
                                    <br />
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <input type="checkbox" className="toggle toggle-secondary" />
                                        </label>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className='flex justify-end pb-12 mx-5'>
                        <input type="submit" value='Save' className="btn bg-accent hover:bg-accent  gap-2 text-white px-16 font-bold mt-5 ml-10" />
                        <input type="submit" value='Cancel' className="btn bg-white hover:bg-white text-black px-16 font-bold mt-5 ml-10" />
                    </div>
                </div>
            </form >

            <Subject></Subject>


        </div>
    );
};

export default Add;