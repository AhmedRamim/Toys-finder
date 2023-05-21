import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const AddToys = () => {
  useTitle("Toy's Finder" + ' - ' + 'AddToys')
  const { user } = useContext(AuthContext)
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

    const addToys = { name, sellerName, sellerEmail, subCategory, photoURL, price, rating, quantity, description }

    fetch('https://toys-car-server.vercel.app/addToys', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(addToys)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Your Toy are added',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })





  }
  return (
    <form data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1000" onSubmit={handleAddToy} className=" rounded-lg mx-auto p-6 shadow-md  bg-green-50 md:w-[900px]">
      <h1 className='text-5xl font-semibold text-center font-mono text-gray-600 mb-12'>Add A Toy</h1>
      <div className="flex flex-wrap mb-4">
        <div className="w-1/2 pr-2">
          <label className="block text-sm font-bold mb-2" htmlFor="name">Toy Name:</label>
          <input className="w-full px-3 py-2 border rounded" type="text" id="name" name="name" required />
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
          <select className="w-full px-3 py-2 border rounded" id="subCategory" name="subCategory" required>

            <option value="Sports car">Sports car</option>
            <option value="Truck">Truck</option>
            <option value="Mini Police car">Mini Police car</option>
          </select>
        </div>
      </div>

      <div className="flex flex-wrap mb-4">
        <div className="w-1/2 pr-2">
          <label className="block text-sm font-bold mb-2" htmlFor="price">Price:</label>
          <input className="w-full px-3 py-2 border rounded" type="number" id="price" name="price" required />
        </div>
        <div className="w-1/2 pl-2">
          <label className="block text-sm font-bold mb-2" htmlFor="rating">Rating:</label>
          <input className="w-full px-3 py-2 border rounded" type="number" id="rating" name="rating" step='0.1' min="0" max="5" required />
        </div>
      </div>

      <div className="mb-4">
        <div className="w-full pr-2">
          <label className="block text-sm font-bold mb-2" htmlFor="quantity">Available Quantity:</label>
          <input className="w-full px-3 py-2 border rounded" type="number" id="quantity" name="quantity" required />
        </div>
        <div className="w-full pr-2 mt-4 mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="toyPhoto">Toy Photo URL:</label>
          <input className="w-full px-3 py-2 border rounded" type="text" id="photoURL" name="photoURL" required />
        </div>
        <div className="w-full pl-2">
          <label className="block text-sm font-bold mb-2" htmlFor="description">Description:</label>
          <textarea className="w-full px-3 py-2 border rounded" id="description" name="description" rows="5" required></textarea>
        </div>
      </div>

      <div className="text-center">
        <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default AddToys;