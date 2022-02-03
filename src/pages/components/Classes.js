import React from "react";

// Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

// Slider
import {Autoplay} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

// Component
import ClassItem from "./ClassItem";

// Import Data
import getClasses from "../../data/ClassData";

const Classes = () => {


    return (
      <ClassesContainer layout>
        <TitleContainer>
          <h1>Grades Covered</h1>
          <h3>A Building with Four Walls and Tomorrow Inside</h3>
        </TitleContainer>

        <AllClasses
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={window.innerWidth > 768 ? 5 : 1}
          autoplay={{
            delay: 2500,
          }}
          loop={true}
        >
          {getClasses().map((collection) => (
            <SwiperSlide>
              <ClassItem
                id={collection.id}
                grade={collection.grade}
                name={collection.name}
                color={collection.color}
                key={collection.id}
              />
            </SwiperSlide>
          ))}
        </AllClasses>
      </ClassesContainer>
    );
}

const ClassesContainer = styled(motion.div)`
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

const AllClasses = styled(Swiper)`
  width: 100%;
  cursor: grabbing;
`;

export default Classes;