import React, { useState } from 'react';
import './ToyGallery.css'
import img1 from '../../../public/img1.gif';
import img2 from '../../../public/img2.gif';
import img3 from '../../../public/img3.gif';
import img4 from '../../../public/img4.gif';
import img5 from '../../../public/img5.gif';
import img6 from '../../../public/img6.gif';


const ToyGallery = () => {
    const [seeAll, setSeeAll] = useState(true)

    const images = [
        { id: 1, src: img1, name: 'Ram 1500' },
        { id: 2, src: img2, name: 'Hill Truck' },
        { id: 3, src: img3, name: 'Chevrolet Impala Police Car' },
        { id: 4, src: img4, name: 'Toyota Prius Police Car' },
        { id: 5, src: img5, name: 'Ferrari 488 GTB' },
        { id: 6, src: img6, name: 'Lamborghini Aventador' },
        { id: 7, src: img3, name: 'Chevrolet Impala Police Car' },
        { id: 8, src: img4, name: 'Toyota Prius Police Car' },
        { id: 9, src: img5, name: 'Ferrari 488 GTB' },
        { id: 10, src: img5, name: 'Ferrari 488 GTB' },
        { id: 11, src: img6, name: 'Lamborghini Aventador' },
        { id: 12, src: img6, name: 'Lamborghini Aventador' },
    ];
    const slice = seeAll ? images.slice(0, 6) : images
    return (
        <div>
            <h1 data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500" className='text-5xl font-bold text-center text-gray-600 mb-28 mt-40'>Our Toy Gallery</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {slice.map((image) => (
                    <div data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1000" key={image.id} className="relative">
                        <img className="w-[400px] h-[300px] rounded-2xl overflow-hidden" src={image.src} alt={image.name} />
                        <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500  hover:opacity-50 rounded-2xl flex items-center justify-center w-[400px]">
                            <div className="text-white text-center">
                                <h3 className="text-lg font-bold">{image.name}</h3>
                                <button className="bg-green-400 hover:opacity-100 text-black px-4 py-2 rounded-md mt-2">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='text-center my-12 '>
                <p onClick={() => setSeeAll(false)} className={`bg-green-400 cursor-pointer p-3 text-white font-bold rounded-md  inline-block hover:bg-green-500 ${seeAll ? '' : 'hidden'}`}>See All</p>
            </div>
        </div>
    );
};

export default ToyGallery;