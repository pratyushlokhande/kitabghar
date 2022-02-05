import React from 'react';

// Style and Animation
import { motion, AnimateSharedLayout } from "framer-motion";

// Import Components
import HomeSection from './components/HomeSection';
import AdsSection from './components/AdsSection';
import Collections from './components/Collections';
import Classes from './components/Classes';
import Service from './components/Service';
import NewArrivals from './components/NewArrivals';
import Trending from './components/Trending';
import Availablity from './components/Availablity';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';

const Home = () => {

    return (
        <AnimateSharedLayout>
            <motion.div layout>
                <HomeSection />
                <AdsSection />
                <Collections />
                <Classes />
                <Service />
                <NewArrivals />
                <Trending />
                <Availablity />
                <Testimonials />
                <Faq />
            </motion.div>
        </AnimateSharedLayout>
    );
}

export default Home;