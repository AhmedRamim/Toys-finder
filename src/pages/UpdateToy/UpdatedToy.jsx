import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const UpdatedToy = () => {
    useTitle("Toy's Finder" + ' - '+'updateToy')
    const {user} = useContext(AuthContext)
    const allData = useLoaderData()
    const handleAddToy = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const photoURL = form.photoURL.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const updateToy = {name,sellerName,sellerEmail,subCategory,photoURL,price,rating,quantity,description}
        fetch(`https://toys-car-server.vercel.app/updateToy/${allData?._id}`,{
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updateToy)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount===1){
                Swal.fire({
                    title: 'Update Successful!',
                    text: 'Your Toy are Updated',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <form onSubmit={handleAddToy} className=" rounded-lg mx-auto p-6 shadow-md  bg-slate-200 md:w-[900px]">
            <h1 className='text-5xl font-semibold text-center mb-12'>Update A Toy</h1>
            <div className="flex flex-wrap mb-4">
                <div className="w-1/2 pr-2">
                    <label className="block text-sm font-bold mb-2" htmlFor="name" >Toy Name:</label>
                    <input defaultValue={allData.name} readOnly className="w-full px-3 py-2 border rounded" type="text" id="name" name="name" required />
                </div>
                <div className="w-1/2 pl-2">
                    <label className="block text-sm font-bold mb-2" htmlFor="sellerName">Seller Name:</label>
                    <input defaultValue={user?.displayName} readOnly className="w-full px-3 py-2 border rounded" type="text" id="sellerName" name="sellerName" />
                </div>
            </div>

            <div className="flex flex-wrap mb-4">
                <div className="w-1/2 pr-2">
                    <label className="block text-sm font-bold mb-2" htmlFor="sellerEmail">Seller Email:</label>
                    <input defaultValue={user?.email} readOnly className="w-full px-3 py-2 border rounded" type="email" id="sellerEmail" name="sellerEmail" />
                </div>
                <div className="w-1/2 pl-2">
                    <label className="block text-sm font-bold mb-2" htmlFor="subCategory">Sub-category:</label>
                    <select className="w-full px-3 py-2 border rounded" id="subCategory" defaultValue={allData.subCategory} disabled  name="subCategory" required>

                        <option value="Sports car">Sports car</option>
                        <option value="Truck">Truck</option>
                        <option value="Mini Police car">Mini Police car</option>
                    </select>
                </div>
            </div>

            <div className="flex flex-wrap mb-4">
                <div className="w-1/2 pr-2">
                    <label className="block text-sm font-bold mb-2" htmlFor="price">Price:</label>
                    <input defaultValue={allData.price}  className="w-full px-3 py-2 border rounded" type="number" id="price" name="price" required />
                </div>
                <div className="w-1/2 pl-2">
                    <label className="block text-sm font-bold mb-2" htmlFor="rating">Rating:</label>
                    <input defaultValue={allData.rating} readOnly className="w-full px-3 py-2 border rounded" type="number" id="rating" name="rating" step='0.1' min="0" max="5" required />
                </div>
            </div>

            <div className="mb-4">
                <div className="w-full pr-2">
                    <label className="block text-sm font-bold mb-2" htmlFor="quantity">Available Quantity:</label>
                    <input defaultValue={allData.quantity} className="w-full px-3 py-2 border rounded" type="number" id="quantity" name="quantity" required />
                </div>
                <div className="w-full pr-2 mt-4 mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="toyPhoto">Toy Photo URL:</label>
                    <input defaultValue={allData.photoURL} readOnly className="w-full px-3 py-2 border rounded" type="text" id="photoURL" name="photoURL" required />
                </div>
                <div className="w-full pl-2">
                    <label className="block text-sm font-bold mb-2" htmlFor="description">Description:</label>
                    <textarea defaultValue={allData.description} className="w-full px-3 py-2 border rounded" id="description" name="description" rows="5" required></textarea>
                </div>
            </div>

            <div className="text-center">
                <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" value="Submit" />
            </div>
        </form>
    );
};

export default UpdatedToy;