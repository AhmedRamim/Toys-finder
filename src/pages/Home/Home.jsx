import React from 'react';
import Banner from './Banner';
import ImageGallery from './Gallery/ImageGallery';
import useTitle from '../../hooks/useTitle';

import ShopByCategory from '../ShopByCategory/ShopByCategory';
import Testimonial from '../Testimonial/Testimonial';
import ToyGallery from '../ToyGallery/ToyGallery';


const Home = () => {
    useTitle("Toy's Finder")
    
    return (
        <div>
            <Banner></Banner>
            <ImageGallery></ImageGallery>
            <ShopByCategory></ShopByCategory>
            <ToyGallery></ToyGallery>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;