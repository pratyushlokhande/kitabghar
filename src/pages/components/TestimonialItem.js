import React from "react";

// Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const TestimonialItem = ({ id, name, title, comment, image }) => {


  return (
    <TestimonialContainer key={id}>
      <TestimonialImageContainer>
        <img src={image} alt={name} />
      </TestimonialImageContainer>
      <TestimonialInfoContainer>
        <h2>{name}</h2>
        <h3>{title}</h3>
      </TestimonialInfoContainer>
        <TestimonialCommentContainer>
            <p>{comment}</p>
        </TestimonialCommentContainer>
    </TestimonialContainer>
  );
};

const TestimonialContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  aspect-ratio: 3/4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem; 
`;

const TestimonialImageContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
    
  img {
    width: 40%;
    aspect-ratio: 1;
    border-radius: 50%;
    object-fit: cover;
  }

`;

const TestimonialInfoContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  text-align: center;

  h2 {
    font-size: 2rem;
    font-weight: 600;
    color: #ffffff;
    text-shadow: 5px 4px 7px rgba(0, 0, 0, 0.25);
    text-transform: uppercase;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    color: #f08d0c;
    text-transform: uppercase;
  }
`;

const TestimonialCommentContainer = styled(motion.div)`
    width: 80%;
    margin: 0 auto;

    p {
        text-align: center;
        font-size: 1.2rem;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.8);
    }
`;

export default TestimonialItem;
