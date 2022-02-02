import React from 'react';

// Import Components
import HomeSection from './components/HomeSection';
import AdsSection from './components/AdsSection';
import Collections from './components/Collections';
import Classes from './components/Classes';
import NewArrivals from './components/NewArrivals';
import Trending from './components/Trending';
import Service from './components/Service';

const Home = () => {
    return (
        <div>
            <HomeSection />
            <AdsSection />
            <Collections />
            <Classes />
            <Service />
            <NewArrivals />
            <Trending />
        </div>
    );
}

export default Home;