import React from 'react';
import { RiDeleteBin6Fill } from 'react-icons/ri';


const SubjectDetails = ({ sub, index }) => {
    const { subject } = sub
    return (
        <tr>
            <td>{index + 1}</td>
            <td className='disabled'>{subject}</td>
            <td className='text-2xl text-red-500 disabled'><RiDeleteBin6Fill /></td>
        </tr>
    );
};

export default SubjectDetails;