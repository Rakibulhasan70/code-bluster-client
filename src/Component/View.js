import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SubjectDetails from './SubjectDetails';
import UseUpdateDetails from './UseUpdateDetails';

const View = () => {
    const { id } = useParams()
    let [products] = UseUpdateDetails(id);
    console.log(products);

    const [subjects, setSubjects] = useState([])
    useEffect(() => {
        fetch(`https://growscribe-server.onrender.com/show`)
            .then(res => res.json())
            .then(data => setSubjects(data))
    }, [subjects])
    return (
        <div>
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

                                    defaultValue={products.firstName}
                                    disabled
                                />
                            </div>
                            <div>
                                <span className="text-md font-semibold">Last Name*</span>
                                <br />
                                <input
                                    className=" border border-1 border-black rounded max-w-xs h-12 w-full"
                                    type="text"

                                    defaultValue={products.lastName}
                                    disabled
                                />
                            </div>
                            <div>
                                <span className="text-md font-semibold">Date of Birth*</span>
                                <br />
                                <input
                                    className=" border border-1 border-black rounded max-w-xs h-12 w-full"
                                    type="date"

                                    defaultValue={products.date}
                                    disabled
                                />
                            </div>
                            <div>
                                <span className="text-md font-semibold">Age</span>
                                <br />
                                <input
                                    className=" border border-1 border-black rounded max-w-xs h-12 w-full"
                                    type="number"

                                    defaultValue={products.age}
                                    disabled
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

                                        defaultValue={products.Standard}
                                        disabled
                                    />
                                </div>
                                <div>
                                    <span className="text-md font-semibold">City*</span>
                                    <br />
                                    <input
                                        className=" border border-1 border-black rounded max-w-xs h-12 w-full"
                                        type="text"

                                        defaultValue={products.city}
                                        disabled
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

                                    defaultValue={products.skill}
                                    disabled>
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
                            <textarea defaultValue={products.brief} name="" id="" cols="20" rows="8" className='border border-1 border-black rounded max-w-3xl w-full' disabled>

                            </textarea>
                        </div>

                        <div className='mt-8 grid grid-cols-4 gap-x-16'>
                            <div>
                                <span className="text-md font-semibold">Enrollment From Date*</span>
                                <br />
                                <input
                                    className=" border border-1 border-black rounded max-w-3xl h-12 w-full px-5"
                                    type="date"

                                    defaultValue={products.EnrollmentFrom}
                                    disabled>

                                </input>
                            </div>
                            <div>
                                <span className="text-md font-semibold">Enrollment To Date*</span>
                                <br />
                                <input
                                    className=" border border-1 border-black rounded max-w-3xl h-12 w-full px-5"
                                    type="date"

                                    defaultValue={products.EnrollmentTo}
                                    disabled>

                                </input>
                            </div>
                            <div>
                                <span className="text-md font-semibold">Status*
                                </span>
                                <br />
                                <select
                                    className=" border border-1 border-black rounded max-w-3xl h-12 w-full px-5"
                                    type="date"

                                    defaultValue={products.status}
                                    disabled>

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
                <div>
                    <table className="table w-full mt-5 ">
                        <thead>
                            <tr>
                                <th>Sr.</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                subjects.map((sub, index) => <SubjectDetails key={sub._id} sub={sub} index={index}></SubjectDetails>)
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default View;