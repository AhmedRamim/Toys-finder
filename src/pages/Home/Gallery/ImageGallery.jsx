import React from 'react';
import './ImageGallery.css'
const ImageGallery = () => {
  return (
    <div>
      <h1 className='text-center font-bold text-5xl text-gray-600 mt-40 mb-12'>Our Latest Collection</h1>
      <div className='md:flex items-center p-5 md:p-0 gap-10'>
        <div className='md:w-1/2'>
          <h1 className='text-5xl leading-[65px] font-semibold'>Discover  <span className='text-green-500'>Our Latest</span> Collection of Exciting Toys!</h1>
          <p className='mt-6'>Discover our latest the thrill of toy collection! From interactive gadgets to exciting playsets, our newest arrivals are designed to captivate young minds and ignite imagination. Explore captivating puzzles, innovative STEM toys, and thrilling outdoor adventures. With something for every child, our latest toys promise endless hours of joy and entertainment. Shop now and experience the excitement of our newest additions!</p>
          <p className='bg-green-400 p-3 rounded-md inline-block text-white font-bold mt-4 cursor-pointer'>Shop Now</p>
        </div>
        <div className="gallery md:w-1/2 text-center overflow-hidden  h-[700px] flex items-center ">
          <div className="img-box relative w-[100px] border-2 border-black h-[500px] t m-3 rounded-[50px] img"><h3 className="text-xl font-bold absolute bottom-3 " >Sports Car</h3></div>
          <div className="img-box w-[100px] h-[500px] m-3 rounded-[50px] img1"><h3 className="text-xl font-bold" >Truck</h3></div>
          <div className="img-box w-[100px] h-[500px] m-3 rounded-[50px] img2"><h3 className="text-xl font-bold text-black" >Jip</h3></div>
          <div className="img-box w-[100px] h-[500px] m-3 rounded-[50px] img3"><h3 className="text-xl font-bold text-white" >Police Car</h3></div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;