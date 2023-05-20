import React from 'react';
import Banner from './Banner';
import ImageGallery from './Gallery/ImageGallery';
import useTitle from '../../hooks/useTitle';

import ShopByCategory from '../ShopByCategory/ShopByCategory';


const Home = () => {
    useTitle("Toy's Finder")
    
    return (
        <div>
            <Banner></Banner>
            <ImageGallery></ImageGallery>
            <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;