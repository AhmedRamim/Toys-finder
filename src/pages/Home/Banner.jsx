import React from 'react';

const Banner = () => {
    return (
        <div data-interval='6000' data-wrap='true' data-pause='true' className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/jZFWstq/slider1.jpg" className="w-full" />
                <div className='w-[352px] h-[280px] border-red-500 border-4 absolute  right-24 top-[135px]'></div>
                <span className='absolute right-32 top-[160px] w-auto max-w-[352px] bg-[#222] p-4 rounded'>
                    
                    <div className='text-center space-y-3'>
                        <h1 className='text-7xl text-white  font-semibold'>REMOTE CAR</h1>
                        <div>
                            <p className='text-[#a1a1a1]'>get up to 45% off *only</p>
                            <div>
                                <button className='btn my-3'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </span>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/ZN6vmsH/slider2.jpg" className="w-full" />
                <div className='w-[352px] h-[280px] border-red-500 border-4 absolute  left-24 top-[135px]'></div>
                <span className='absolute left-32 top-[160px] w-auto max-w-[352px] bg-[#222] p-4 rounded'>
                    
                    <div className='text-center space-y-3'>
                        <h1 className='text-7xl text-white  font-semibold'>NEW ARRIVAL</h1>
                        <div>
                            <p className='text-[#a1a1a1]'>get up to 50% off *only</p>
                            <div>
                                <button className='btn my-3'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </span>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/wRRZd9s/slider3.jpg" className="w-full" />
                <div className='w-[352px] h-[280px] border-red-500 border-4 absolute  right-24 top-[135px]'></div>
                <span className='absolute right-32 top-[160px] w-auto max-w-[352px] bg-[#222] p-4 rounded'>
                    
                    <div className='text-center space-y-3'>
                        <h1 className='text-7xl text-white  font-semibold'>BATTERY CAR</h1>
                        <div>
                            <p className='text-[#a1a1a1]'>get up to 30% off *only</p>
                            <div>
                                <button className='btn my-3'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </span>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            
        </div>     
    );
};

export default Banner;