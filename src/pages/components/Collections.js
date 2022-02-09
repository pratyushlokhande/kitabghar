import React from "react";

// Hooks
import { useWindowSize } from "../../hooks/UseWindowSize";

// Style and Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Slider
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Component
import CollectionItem from './CollectionItem';

// Import Data
import getCollections from '../../data/CollectionsData';

const Collections = () => {

    const wSize = useWindowSize();


    const getContainer = (Component) => {
      if (wSize.width > 768) {
        return <NoSwiper>{Component}</NoSwiper>;
      } else if (wSize.width > 576) {
        return (
          <AllCollections
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            spaceBetween={16}
            slidesPerView={2}
            autoplay={{
              delay: 3000,
            }}
          >
            {Component}
          </AllCollections>
        );
      } else {
        return (
          <AllCollections modules={[Pagination]} pagination={{clickable: true}} spaceBetween={16} slidesPerView={1}>
            {Component}
          </AllCollections>
        );
      }
    };

    return (
      <CollectionsContainer layout>
        <TitleContainer>
          <h1>Our Collections</h1>
          <h3>The world is in front of you, all you have to do is reach it</h3>
        </TitleContainer>

        {/* <AllCollections
          spaceBetween={16}
          slidesPerView={wSize.width > 768 ? 4 : 1}
        > */}
          {getContainer(
            getCollections().map((collection, index) => (
            <SwiperSlide key={index}>
              <CollectionItem
                id={collection.id}
                title={collection.title}
                description={collection.description}
                color={collection.color}
                icon={collection.icon}
              />
            </SwiperSlide>
          )))}
        {/* </AllCollections> */}
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

const NoSwiper = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

export default Collections;