import React from "react";

// Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Book = ({tag, name, grade, image}) => {

    return (
      <BookContainer>
        <BookImageContainer>
          <img
            src={require(`../../assets/book-thumbnail/${image}`)}
            alt={image}
          />
          <div></div>
          <h4>{tag}</h4>
        </BookImageContainer>
        <BookInfoContainer>
          <h2>{name}</h2>
          <h3>{grade}</h3>
        </BookInfoContainer>
      </BookContainer>
    );
}

const BookContainer = styled(motion.div)`
    position: relative;
    width: 100%;
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
`;

const BookImageContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  aspect-ratio: 3/4;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background: rgb(0, 0, 0); */
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(243, 243, 255, 0.053658963585434205) 35%,
      rgba(0, 212, 255, 0) 100%
    );
  }

  h4 {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
    color: #ffffff;
    background-color: #f08d0c;
    display: grid;
    place-items: center;
    padding: 0.2rem;
  }
`;

const BookInfoContainer = styled(motion.div)`
    position: absolute;
    left: 0;
    bottom: 2rem;
    width: 100%;
    text-align: center;

    h2 {
        font-size: 2rem;
        font-weight: 500;
        color: #ffffff;
        text-shadow: 5px 7px 7px rgba(0, 0, 0, 0.25);
    }

    h3 {
        font-size: 1.5rem;
        font-weight: 600;
        color: #f08d0c;
    }
`;

export default Book;