import React, { useContext, useEffect, useState } from 'react';
import { FaPen, FaTrashAlt } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])
    const [control, setControl] = useState(false)
    const [sortBy, setSortBy] = useState('');

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
                fetch(`http://localhost:5000/toy/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        setControl(!control)
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
        let apiUrl = `http://localhost:5000/myToys/${user?.email}`;
    
        if (sortBy) {
          apiUrl += `?sortBy=${sortBy}`;
        }
    
        fetch(apiUrl)
          .then((res) => res.json())
          .then((data) =>  {
            // Parse price values as integers
            const parsedData = data.map((toy) => ({
              ...toy,
              price: parseInt(toy.price),
            }));
    
            // Sort toys based on price
            if (sortBy === 'lower') {
              parsedData.sort((a, b) => a.price - b.price);
            } else if (sortBy === 'higher') {
              parsedData.sort((a, b) => b.price - a.price);
            }
    
            setMyToys(parsedData);
          });
      }, [user,control, sortBy]);

      const handleSortByChange = (e) => {
        setSortBy(e.target.value);
      };

    return (
        <div className="overflow-x-auto my-12">
            <div className='flex justify-end mb-12'>
                <select value={sortBy}  onChange={handleSortByChange} className='border-4 p-2 border-success'>
                    <option value="">Sort By</option>
                    <option value="lower">Lower Price</option>
                    <option value="higher">Higher Price</option>
                </select>
            </div>
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







