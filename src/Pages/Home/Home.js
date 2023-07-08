import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Footer  from '../../Components/Footer/footer';
import Navigation from '../../Components/Navigation/Navigation';
// import OurHero from '../../Components/OurHero/OurHero';
import Features from '../../Components/Features/Features';

const Home = () => {
    return (
        <div className=''>
            <Navigation />
            <Banner />
            <Features/>
            {/* <OurHero /> */}
            <Footer />

        </div>
    );
};

export default Home;