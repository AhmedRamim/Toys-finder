import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
const ShopByCategory = () => {
    const [tab, setTab] = useState('Truck')
    const [tabData, setTabData] = useState([])
    useEffect(() => {
        fetch(`https://toys-car-server.vercel.app/tab/${tab}`)
            .then(res => res.json())
            .then(data => setTabData(data))
    }, [tab])
    // console.log(tabData);
    return (
        <div className='md:my-40 p-5 md:p-0'>
            <h1 data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1500" className='text-5xl text-gray-600 font-bold text-center my-28'>Shop by category</h1>
            <Tabs>
                <TabList className='text-center'>
                    <Tab onClick={() => setTab('Truck')} >Truck</Tab>
                    <Tab onClick={() => setTab('Sports car')} >Sports car</Tab>
                    <Tab onClick={() => setTab('Mini Police car')} >Mini Police car</Tab>
                    <hr className='border-2' />
                </TabList>

                <TabPanel>
                    <div className='md:flex flex-wrap  gap-8 mt-12 justify-center'>
                        {
                            tabData.map(data => {
                                return <div data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="1000" key={data._id} className="card w-full md:w-96 bg-base-100 my-6 md:my-0 hover:shadow-2xl hover:transition-shadow duration-700">
                                    <figure><img src={data.photoURL} alt="Loading..." /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{data.name}</h2>
                                        <p><span>Price:</span>${data.price}</p>
                                        <p><Rating className='text-yellow-500'
                                            placeholderRating={data.rating}
                                            emptySymbol={<FaRegStar></FaRegStar>}
                                            placeholderSymbol={<FaStar></FaStar>}
                                            fullSymbol={<FaStar></FaStar>}
                                            readonly
                                        /> {data.rating}</p>

                                        <Link to={`/singleToys/${data._id}`}>
                                            <p className="bg-green-400 p-3 rounded-lg text-white inline-block ">View Details</p>
                                        </Link>

                                    </div>
                                </div>
                            })
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='md:flex flex-wrap gap-8 mt-12 justify-center'>
                        {
                            tabData.map(data => {
                                return <div key={data._id} className="card w-full md:w-96 my-6 md:my-0  bg-base-100  hover:shadow-2xl hover:transition-all duration-500">
                                    <figure><img src={data.photoURL} alt="Loading..." /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{data.name}</h2>
                                        <p><span>Price:</span>${data.price}</p>
                                        <p><Rating className='text-yellow-500'
                                            placeholderRating={data.rating}
                                            emptySymbol={<FaRegStar></FaRegStar>}
                                            placeholderSymbol={<FaStar></FaStar>}
                                            fullSymbol={<FaStar></FaStar>}
                                            readonly
                                        /> {data.rating}</p>
                                        <Link to={`/singleToys/${data._id}`}>
                                            <p className="bg-green-400 p-3 rounded-lg text-white inline-block ">View Details</p>
                                        </Link>

                                    </div>
                                </div>
                            })
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='md:flex flex-wrap gap-8 mt-12 items-center justify-center'>
                        {
                            tabData.map(data => {
                                return <div key={data._id} className="card w-full md:w-96 my-6 md:my-0 bg-base-100 hover:shadow-2xl hover:transition-all duration-500">
                                    <figure><img src={data.photoURL} alt="Loading..." /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{data.name}</h2>
                                        <p><span>Price:</span>${data.price}</p>
                                        <p><Rating className='text-yellow-500'
                                            placeholderRating={data.rating}
                                            emptySymbol={<FaRegStar></FaRegStar>}
                                            placeholderSymbol={<FaStar></FaStar>}
                                            fullSymbol={<FaStar></FaStar>}
                                            readonly
                                        /> {data.rating}</p>
                                        <Link to={`/singleToys/${data._id}`}>
                                            <p className="bg-green-400 p-3 rounded-lg text-white inline-block ">View Details</p>
                                        </Link>

                                    </div>
                                </div>
                            })
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;