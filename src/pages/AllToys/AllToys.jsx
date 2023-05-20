import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const AllToys = () => {
    useTitle("Toy's Finder" + ' - '+'AllToys')
    const [alltoys, setAlltoys] = useState([])
    const [searchText, setSearchText] = useState('')
    useEffect(() => {
        fetch('http://localhost:5000/alltoys')
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
        fetch(`http://localhost:5000/toySearchByName/${text}`)
            .then(res => res.json())
            .then(data => setAlltoys(data))
    }
    // console.log(alltoys);
    return (
        <div>
            <div className='text-center'>
                <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                <button onClick={() => handleSearch(searchText)} className='btn btn-success ml-2 text-white'>Search</button>
            </div>
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
                            alltoys.map((toy, index) => {
                                return <tr key={toy._id}>
                                    <th>{index + 1}</th>
                                    <td>{toy.sellerName}</td>
                                    <td>{toy.name}</td>
                                    <td>{toy.subCategory}</td>
                                    <td>${toy.price}</td>
                                    <td>{toy.quantity}</td>
                                    <td><Link to={`/singleToys/${toy._id}`}>
                                        <span className='bg-success p-2 text-white font-semibold cursor-pointer rounded-lg'>Details</span>
                                    </Link></td>
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