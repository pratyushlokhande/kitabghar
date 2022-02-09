import React from "react";

// Hooks
import { useWindowSize } from "../../hooks/UseWindowSize";

// Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

// Slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Component
import Book from "./Book";

// Import Data
import getNewArrivals from "../../data/NewArrivalsData";

const NewArrivals = () => {

  const wSize = useWindowSize();

    const getContainer = (Component) => {
      if (wSize.width > 768) {
        return <NoSwiper>{Component}</NoSwiper>;
      } else if (wSize.width > 576) {
        return (
          <AllBooks
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            spaceBetween={16}
            slidesPerView={2}
            autoplay={{
              delay: 3000,
            }}
          >
            {Component}
          </AllBooks>
        );
      } else {
        return (
          <AllBooks
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={16}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
            }}
          >
            {Component}
          </AllBooks>
        );
      }
    };

  return (
    <NewArrivalsContainer layout>
      <TitleContainer>
        <h1>New Arrivals</h1>
        <h3>A Building with Four Walls and Tomorrow Inside</h3>
      </TitleContainer>

      {getContainer(
          getNewArrivals().map((collection, index) => (
          <SwiperSlide key={index}>
            <Book
              tag={collection.tag}
              name={collection.name}
              grade={collection.grade}
              image={collection.image}
            />
          </SwiperSlide>
        ))
      )}
    </NewArrivalsContainer>
  );
};

const NewArrivalsContainer = styled(motion.div)`
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

const AllBooks = styled(Swiper)`
  width: 100%;
  cursor: grabbing;
`;

const NoSwiper = styled(motion.div)`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
`;

export default NewArrivals;
