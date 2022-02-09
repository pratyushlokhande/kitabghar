import React from 'react';

// Style and Animation
import styled from 'styled-components';
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
            <HomeContainer layout>
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
            </HomeContainer>
        </AnimateSharedLayout>
    );
}

const HomeContainer = styled(motion.div)`
    width: 100%;
`;

export default Home;