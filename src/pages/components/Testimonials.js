import React from "react";

// Hooks
import { useWindowSize } from "../../hooks/UseWindowSize";


// Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

// Slider
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

// Component
import TestimonialItem from "./TestimonialItem";

// Import Data
import getTestimonials from "../../data/TestimonialData";

const Testimonials = () => {

  const wSize = useWindowSize();

  return (
    <TestimonialsContainer layout>
      <TitleContainer>
        <h1>Feedbacks</h1>
        <h3>Your reviews is what keeps us going</h3>
      </TitleContainer>

      <AllTestimonials
        modules={[Autoplay]}
        speed={300}
        spaceBetween={16}
        slidesPerView={wSize.width > 768 ? 3 : 1}
        autoplay={{
          delay: 5000,
        }}
        loop={true}
      >
        {getTestimonials().map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialItem
              id={testimonial.id}
              name={testimonial.name}
              title={testimonial.title}
              comment={testimonial.comment}
              image={testimonial.image}
            />
          </SwiperSlide>
        ))}
      </AllTestimonials>
    </TestimonialsContainer>
  );
};

const TestimonialsContainer = styled(motion.div)`
  width: 100%;
  padding: 0 10rem;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media screen and (max-width: 1200px) {
    padding: 0 5rem;
  }
  @media screen and (max-width: 1024px) {
    padding: 0 3rem;
  }

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

const AllTestimonials = styled(Swiper)`
  width: 100%;
  cursor: grabbing;

  .swiper-slide {
    background-color: #fec89a;
    transform: scale(0.8);
    transform-origin: 50% 50%;
    transition: all 300ms ease-in-out;

    p {
      display: none;
    }

    @media screen and (max-width: 768px) {
      transform: scale(1);
      background-color: #ade8f4;

      p {
        display: block;
      }
    }
  }

  .swiper-slide-next {
    transform: scale(1);
    background-color: #ade8f4;

    p {
      display: block;
    }

    @media screen and (max-width: 768px) {
      background-color: #fec89a;
      transform: scale(0.8);
      transform-origin: 50% 50%;
      transition: all 300ms ease-in-out;

      p {
        display: none;
      }
    }
  }
`;

export default Testimonials;
