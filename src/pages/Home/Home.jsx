import React from 'react';
import Banner from './Banner';
import ImageGallery from './Gallery/ImageGallery';
import useTitle from '../../hooks/useTitle';

const Home = () => {
    useTitle("Toy's Finder")
    return (
        <div>
            <Banner></Banner>
            <ImageGallery></ImageGallery>
        </div>
    );
};

export default Home;