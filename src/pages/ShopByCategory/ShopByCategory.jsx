import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    const [tab, setTab] = useState('Truck')
    const [tabData, setTabData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/tab/${tab}`)
            .then(res => res.json())
            .then(data => setTabData(data))
    }, [tab])
    console.log(tabData);
    return (
        <div className='my-40'>
            <h1 className='text-5xl text-gray-600 font-bold text-center my-28'>Shop by category</h1>
            <Tabs>
                <TabList className='text-center'>
                    <Tab onClick={() => setTab('Truck')} >Truck</Tab>
                    <Tab onClick={() => setTab('Sports car')} >Sports car</Tab>
                    <Tab onClick={() => setTab('Mini Police car')} >Mini Police car</Tab>
                </TabList>

                <TabPanel>
                    <div className='flex gap-8 mt-12 justify-center'>
                        {
                            tabData.map(data => {
                                return <div key={data._id} className="card w-96 bg-base-100 shadow-xl">
                                    <figure><img src={data.photoURL} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{data.name}</h2>
                                        <p><span>Price:</span>${data.price}</p>

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
                <div className='flex gap-8 mt-12 justify-center'>
                        {
                            tabData.map(data => {
                                return <div key={data._id} className="card w-96 bg-base-100 shadow-xl">
                                    <figure><img src={data.photoURL} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{data.name}</h2>
                                        <p><span>Price:</span>${data.price}</p>

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
                <div className='flex gap-8 mt-12 items-center justify-center'>
                        {
                            tabData.map(data => {
                                return <div key={data._id} className="card w-96 bg-base-100 shadow-xl">
                                    <figure><img src={data.photoURL} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{data.name}</h2>
                                        <p><span>Price:</span>${data.price}</p>

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