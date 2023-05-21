import React, { useContext, useEffect, useState } from 'react';

import { Link, Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../providers/AuthProvider';

const AllToys = () => {
    const { user } = useContext(AuthContext)
    useTitle("Toy's Finder" + ' - ' + 'AllToys')
    const [alltoys, setAlltoys] = useState([])
    const navigate = useNavigate()
    const [searchText, setSearchText] = useState('')
    useEffect(() => {
        fetch('https://toys-car-server.vercel.app/alltoys')
            .then(res => res.json())
            .then(data => setAlltoys(data))
    }, [])
    const handleSearch = (text) => {
        if (text.length === 0) {
            return Swal.fire({
                title: 'No Search Input!',
                text: 'Please Input Search Text At least one Character',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }
        fetch(`https://toys-car-server.vercel.app/toySearchByName/${text}`)
            .then(res => res.json())
            .then(data => setAlltoys(data))
    }
    const handleDetails = (id) => {
        if (!user) {
            Swal.fire({
                title: ' You are not logged In',
                text: "You have to log in first to view details",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {
               
                if (result.isConfirmed) {
                   return navigate(`/singleToys/${id}`)
                }
            })
        }
        else{
            navigate(`/singleToys/${id}`)
        }
    }
    // console.log(alltoys);
    return (
        <div>
            <div className='text-center'>
                <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                <button onClick={() => handleSearch(searchText)} className='btn btn-success ml-2 text-white'>Search</button>
            </div>
            <div className="overflow-x-auto mt-12 mb-36">
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
                            alltoys.map((toy, index) => {
                                return <tr key={toy._id}>
                                    <th>{index + 1}</th>
                                    <td>{toy.sellerName}</td>
                                    <td>{toy.name}</td>
                                    <td>{toy.subCategory}</td>
                                    <td>${toy.price}</td>
                                    <td>{toy.quantity}</td>
                                    <td>
                                       
                                        <span onClick={() =>handleDetails(toy._id)} className='bg-success p-2 text-white font-semibold cursor-pointer rounded-lg'>Details</span>
                                    </td>
                                </tr>
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;