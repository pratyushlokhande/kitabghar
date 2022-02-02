import React from "react";

// Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

// Slider
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Component
import Book from "./Book";

// Import Data
import getNewArrivals from "../../data/NewArrivalsData";

const NewArrivals = () => {

    const getContainer = (Component) => {
        if(window.innerWidth > 768) {
            return (
                <NoSwiper>
                    {Component}
                </NoSwiper>
            )
        } else {
            return(
                <AllBooks spaceBetween={16} slidesPerView={1}>
                    {Component}    
                </AllBooks>
            )
        }
    }

  return (
    <NewArrivalsContainer>
      <TitleContainer>
        <h1>New Arrivals</h1>
        <h3>A Building with Four Walls and Tomorrow Inside</h3>
      </TitleContainer>

      {getContainer(
          getNewArrivals().map((collection) => (
          <SwiperSlide>
            <Book
              id={collection.id}
              tag={collection.tag}
              name={collection.name}
              grade={collection.grade}
              image={collection.image}
              key={collection.id}
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
`;

const TitleContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
