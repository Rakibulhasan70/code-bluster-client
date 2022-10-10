import React, { useEffect, useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import HomeDetails from './HomeDetails';
import { Link } from 'react-router-dom';
import { HiSortAscending } from "react-icons/hi";
import { HiSortDescending } from "react-icons/hi";


const Home = () => {
    // const [shows, setShow] = useState([])

    const [allUsers, setAllUsers] = useState([]);
    const [searchedUsers, setSearchedUsers] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [selectedPage, setSelectedPage] = useState(0);
    const [reservedUsers, setReservedUsers] = useState([]);

    // const [productss, setProducts] = useState([])

    useEffect(() => {
        fetch(`https://growscribe-server.onrender.com/shows`)
            .then(res => res.json())
            .then(data => {
                const firstHundred = data.slice(0, 100);
                setAllUsers(firstHundred);
                setSearchedUsers(firstHundred.slice(0, 5));
                setPageCount(firstHundred.length / 5);
                setReservedUsers(firstHundred);
            })
    }, [])

    const handleSearchUser = (e) => {
        const searchText = e.target.value.toLowerCase();
        const filteredUsers = reservedUsers.filter(
            (user) =>
                user.firstName.toLowerCase().includes(searchText) ||
                user.lastName.toLowerCase().includes(searchText) ||
                user.city.toLowerCase().includes(searchText) ||
                user.status.toLowerCase().includes(searchText)
        );

        if (searchText === "") {
            setSearchedUsers(reservedUsers.slice(0, 5));
            setPageCount(5);
            setSelectedPage(0);
            setAllUsers(reservedUsers);
        } else {
            setSearchedUsers(filteredUsers.slice(0, 5));
            setPageCount(Math.ceil(filteredUsers.length / 5));
            setAllUsers(filteredUsers);
            setSelectedPage(0);
        }
    };

    const showUsers = (number) => {
        setSelectedPage(number);
        const filteredUsers = allUsers.slice(number * 10, number * 10 + 10);
        setSearchedUsers(filteredUsers);
    };


    const sortCityInAscending = () => {
        const sortedUsers = allUsers.sort(function (a, b) {
            if (a.city < b.city) {
                return -1;
            }
            if (b.city < a.city) {
                return 1;
            }
            return 0;
        });
        setSearchedUsers(sortedUsers.slice(0, 10));
        setAllUsers(sortedUsers);
        setSelectedPage(0);
    };

    const sortCityInDescending = () => {
        const sortedUsers = allUsers.sort(function (a, b) {
            if (a.city > b.city) {
                return -1;
            }
            if (b.city > a.city) {
                return 1;
            }
            return 0;
        });
        setSearchedUsers(sortedUsers.slice(0, 10));
        setAllUsers(sortedUsers);
        setSelectedPage(0);
    };

    const sortStatusInAsceding = () => {
        const sortedUsers = allUsers.sort(function (a, b) {
            if (a.status < b.status) {
                return -1;
            }
            if (b.status < a.status) {
                return 1;
            }
            return 0;
        });
        setSearchedUsers(sortedUsers.slice(0, 10));
        setAllUsers(sortedUsers);
        setSelectedPage(0);
    }

    const sortStatusInDescending = () => {
        const sortedUsers = allUsers.sort(function (a, b) {
            if (a.status > b.status) {
                return -1;
            }
            if (b.status > a.status) {
                return 1;
            }
            return 0;
        });
        setSearchedUsers(sortedUsers.slice(0, 10));
        setAllUsers(sortedUsers);
        setSelectedPage(0);
    }

    const sortNameInAsceding = () => {
        const sortedUsers = allUsers.sort(function (a, b) {
            if (a.firstName < b.firstName) {
                return -1;
            }
            if (b.firstName < a.firstName) {
                return 1;
            }
            return 0;
        });
        setSearchedUsers(sortedUsers.slice(0, 10));
        setAllUsers(sortedUsers);
        setSelectedPage(0);
    }

    const sortNameInDescending = () => {
        const sortedUsers = allUsers.sort(function (a, b) {
            if (a.firstName > b.firstName) {
                return -1;
            }
            if (b.firstName > a.firstName) {
                return 1;
            }
            return 0;
        });
        setSearchedUsers(sortedUsers.slice(0, 10));
        setAllUsers(sortedUsers);
        setSelectedPage(0);
    }

    const sortStdInAscending = () => {
        const sortedUsers = allUsers.sort(function (a, b) {
            return a.Standard - b.Standard;
        });
        setSearchedUsers(sortedUsers.slice(0, 10));
        setAllUsers(sortedUsers);
        setSelectedPage(0);
    };

    const sortStdInDescending = () => {
        const sortedUsers = allUsers.sort(function (a, b) {
            return b.Standard - a.Standard;
        });
        setSearchedUsers(sortedUsers.slice(0, 10));
        setAllUsers(sortedUsers);
        setSelectedPage(0);
    };
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(5)

    useEffect(() => {
        fetch(`https://secret-fortress-11551.herokuapp.com/data?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                // setProducts(data)
                // setSearchData(data)
            })
    }, [])

    useEffect(() => {
        fetch('https://secret-fortress-11551.herokuapp.com/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 20)
                setPageCount(pages)
            })
    }, [])

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
                            <button className='input  h-10 bg-black text-white ml-12'>Total:{searchedUsers.length}</button>
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
                            className=" border border-1 border-black rounded max-w-xs h-10 placeholder:text-gray-600 placeholder:pl-2"
                            type="text"
                            placeholder='Search here'
                            onChange={handleSearchUser}
                        />
                    </div>
                </div>
                <div>
                    {searchedUsers.length === -0 ? (
                        <p className="mt-3 text-xl text-center text-red-500 mb-4">
                            No matching records found
                        </p>
                    ) : (
                        ""
                    )}
                    <div>
                        <table className="table w-full mt-5 ">
                            <thead>
                                <tr>
                                    <th><input type="checkbox" /></th>
                                    <th>Sr.</th>
                                    <th>
                                        Name{" "}
                                        <HiSortAscending
                                            onClick={sortNameInAsceding}
                                            title="Ascending Order"
                                            className="inline text-base cursor-pointer mx-1"
                                        ></HiSortAscending>
                                        <HiSortDescending
                                            onClick={sortNameInDescending}
                                            title="Descending Order"
                                            className="inline text-base cursor-pointer"
                                        ></HiSortDescending>
                                    </th>
                                    <th>
                                        City{" "}
                                        <HiSortAscending
                                            onClick={sortCityInAscending}
                                            title="Ascending Order"
                                            className="inline text-base cursor-pointer mx-1"
                                        ></HiSortAscending>
                                        <HiSortDescending
                                            onClick={sortCityInDescending}
                                            title="Descending Order"
                                            className="inline text-base cursor-pointer"
                                        ></HiSortDescending>
                                    </th>
                                    <th>
                                        Status{" "}
                                        <HiSortAscending
                                            onClick={sortStatusInAsceding}
                                            title="Ascending Order"
                                            className="inline text-base cursor-pointer mx-1"
                                        ></HiSortAscending>
                                        <HiSortDescending
                                            onClick={sortStatusInDescending}
                                            title="Descending Order"
                                            className="inline text-base cursor-pointer"
                                        ></HiSortDescending>
                                    </th>
                                    <th>
                                        Std.{" "}
                                        <HiSortAscending
                                            onClick={sortStdInAscending}
                                            title="Ascending Order"
                                            className="inline text-base cursor-pointer mx-1"
                                        ></HiSortAscending>
                                        <HiSortDescending
                                            onClick={sortStdInDescending}
                                            title="Descending Order"
                                            className="inline text-base cursor-pointer"
                                        ></HiSortDescending>
                                    </th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    searchedUsers.map((show, index) => <HomeDetails key={show._id} show={show} index={index}></HomeDetails>)
                                }
                            </tbody>
                        </table>
                    </div>

                    {/* <div className="text-center mt-5">
                        {[...Array(parseInt(pageCount)).keys()]?.map((number, index) => (
                            <button
                                onClick={() => showUsers(parseInt(number))}
                                className={`btn btn-sm border border-primary bg-base-100 hover:border-primary text-primary hover:bg-primary hover:text-white font-bold m-1 rounded-md ${selectedPage === number
                                    ? "bg-primary text-white"
                                    : ""
                                    }`}
                                key={parseInt(index)}
                            >
                                {parseInt(number) + 1}
                            </button>
                        ))}
                    </div> */}
                    <div className='pagination w-50 mx-auto my-5 text-center    flex items-center justify-center'>

                        <h5 className='px-3'>Page:</h5>
                        {[...Array(parseInt(pageCount)).keys()]?.map((number, index) => (
                            <button
                                onClick={() => showUsers(parseInt(number))}
                                className={`btn btn-sm border border-primary bg-base-100 hover:border-primary text-primary hover:bg-primary hover:text-white font-bold m-1 rounded-md ${selectedPage === number
                                    ? "bg-primary text-white"
                                    : ""
                                    }`}
                                key={parseInt(index)}
                            >
                                {parseInt(number) + 1}
                            </button>
                        ))}
                        <select onChange={e => setSize(e.target.value)}>
                            <option selected value="10">10</option>

                        </select>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;