import React, { useEffect, useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import HomeDetails from './HomeDetails';
import { Link } from 'react-router-dom';


const Home = () => {
    const [shows, setShow] = useState([])
    useEffect(() => {
        fetch(`https://growscribe-server.onrender.com/shows`)
            .then(res => res.json())
            .then(data => setShow(data))
    }, [shows])
    return (
        <div className='shadow-xl mx-2 pb-24'>
            <div className='mx-5 mt-10  '>
                <div className='flex justify-between '>
                    <h2 className='font-semibold text-2xl text-black'>Student List</h2>
                    <Link to='/add'>    <button className="btn bg-black hover:bg-black gap-2 text-white px-8 font-bold ">
                        <FaPlus></FaPlus>
                        Add
                    </button></Link>
                </div>
                <div className='flex items-center '>
                    <div className='flex'>
                        <div className="form-control  ">
                            <label className="label">
                                <span className="label-text text-lg mb-[-5px]">From Enrollment Date</span>
                            </label>
                            <input type="date" placeholder="dd/mm/yyyy" className='input  border-opacity-60 w-full  h-10' />

                        </div>
                        <div className="form-control  ml-6 ">
                            <label className="label">
                                <span className="label-text text-lg mb-[-5px]">To Enrollment Date</span>
                            </label>
                            <input type="date" placeholder="dd/mm/yyyy" className='input  border-opacity-60  w-full  h-10' />
                        </div>

                        <div className="form-control  ml-6  ">
                            <label className="label">
                                <span className="label-text  text-lg mb-[-5px]">Skill</span>

                            </label>
                            <input type="text" placeholder="All" className='input placeholder:text-black placeholder:pl-16 placeholder:<BsChevronDown/>  border-opacity-60  w-full  h-10' />
                        </div>
                        {/* <div className='mt-1 ml-6'>
                        <h2 className='pb-2' >skill</h2>
                        <input className='border-2 p-2 border-black rounded w-4/5  h-10' type="text" />
                    </div> */}
                    </div>
                    <div className='flex ml-16 mt-10 '>
                        <div className='flex justify-between'>
                            <button className='input  h-10 bg-primary text-white px-9'>Filter</button>
                            <button className='input  h-10 bg-secondary ml-6 text-white px-9'>Clear</button>
                            <button className='input  h-10 bg-accent ml-6 text-white'>Export Excel</button>
                        </div>
                        <div>
                            <button className='input  h-10 bg-black text-white ml-12'>Total:{shows.length}</button>
                        </div>
                    </div>
                </div>
                <div>
                    <input type="text" placeholder="Bulk Action" className='input placeholder:text-black  border-opacity-60 mt-5  h-10' />
                    <button className='input  h-10 bg-neutral ml-6 font-semibold px-9'>Apply</button>
                </div>

                <div className='flex  justify-between'>
                    <div className='mt-5'>
                        Show
                        <select className='border border-1 w-10 border-black mx-2'>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="10">15</option>
                        </select>
                        entries
                    </div>
                    <div>
                        <span className="text-md font-semibold">Search: </span>
                        <input
                            className=" border border-1 border-black rounded max-w-xs h-10"
                            type="text"
                        />
                    </div>
                </div>
                <table className="table w-full mt-5 ">
                    <thead>
                        <tr>
                            <th><input type="checkbox" /></th>
                            <th>Sr.</th>
                            <th>Name</th>
                            <th>City</th>

                            <th>Status</th>
                            <th>Std.</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            shows.map((show, index) => <HomeDetails key={show._id} show={show} index={index}></HomeDetails>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;