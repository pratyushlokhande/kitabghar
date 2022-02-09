import React from "react";

// Style and Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Slider
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Component
import CollectionItem from './CollectionItem';

// Import Data
import getCollections from '../../data/CollectionsData';

const Collections = () => {

    return (
      <CollectionsContainer layout>
        <TitleContainer>
          <h1>Our Collections</h1>
          <h3>The world is in front of you, all you have to do is reach it</h3>
        </TitleContainer>

        <AllCollections
          spaceBetween={16}
          slidesPerView={window.innerWidth > 768 ? 4 : 1}
        >
          {getCollections().map((collection, index) => (
            <SwiperSlide key={index}>
              <CollectionItem
                id={collection.id}
                title={collection.title}
                description={collection.description}
                color={collection.color}
                icon={collection.icon}
              />
            </SwiperSlide>
          ))}
        </AllCollections>
      </CollectionsContainer>
    );
}

const CollectionsContainer = styled(motion.div)`
    width: 100%;
    padding: 0 10rem;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    @media screen and (max-width: 768px) {
      padding: 0 1rem;
    }
`;

const TitleContainer = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1 {
        font-size: 3rem;
        font-weight: 600;
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 400;
      color: #f08d0c;
      text-transform: uppercase;
    }

    @media screen and (max-width: 768px) {
        h1 {
            font-size: 2.5rem;
        }

        h3 {
          font-size: 1.5rem;

        }
    }
`;

const AllCollections = styled(Swiper)`
    width: 100%;
`;

export default Collections;