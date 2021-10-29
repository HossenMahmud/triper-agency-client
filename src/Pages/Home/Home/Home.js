import React from 'react';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import Packages from '../Packages/Packages';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <ChooseUs></ChooseUs>
            <Packages></Packages>
        </>
    );
};

export default Home;