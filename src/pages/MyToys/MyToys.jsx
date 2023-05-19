import React from 'react';
import { FaPen, FaTrashAlt } from 'react-icons/fa';
const MyToys = () => {
    return (
        <div>
            <td className='flex gap-6 items-center'>
                <span className='bg-warning p-4 rounded-2xl cursor-pointer text-white'><FaPen /></span>
                <span className='bg-red-600 text-white p-4 rounded-2xl cursor-pointer'><FaTrashAlt /></span>
            </td>
        </div>
    );
};

export default MyToys;