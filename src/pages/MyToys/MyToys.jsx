import React, { useContext, useEffect, useState } from 'react';
import { FaPen, FaTrashAlt } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])

    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/toy/${id}`,{
                    method:'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount === 1) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })



            }
        })
    }

    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [user])

    return (
        <div className="overflow-x-auto my-12">
            <table className="table w-full">
                {/* head*/}
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Seller Name</th>
                        <th>Toy Name</th>
                        <th>Sub-category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        myToys.map((toy, index) => {
                            return <tr key={toy._id}>
                                <th>{index + 1}</th>
                                <td>{toy.sellerName}</td>
                                <td>{toy.name}</td>
                                <td>{toy.subCategory}</td>
                                <td>${toy.price}</td>
                                <td>{toy.quantity}</td>
                                <td className='flex gap-6 items-center'>
                                    <span className='bg-warning p-4 rounded-2xl cursor-pointer text-white'><FaPen /></span>
                                    <span onClick={() => handleDelete(toy._id)} className='bg-red-600 text-white p-4 rounded-2xl cursor-pointer'><FaTrashAlt /></span>
                                </td>
                            </tr>
                        })
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyToys;







