import React from 'react';

// Style and Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AdsSection = () => {
    return (
      <AdsSectionContainer layout>
        <ImageContainer>
          <img
            src={require("../../assets/Ads/ad-one.jpg")}
            alt={"ad-one.jpg"}
          />
        </ImageContainer>
        <ImageContainer>
          <img
            src={require("../../assets/Ads/ad-one.jpg")}
            alt={"ad-one.jpg"}
          />
        </ImageContainer>
      </AdsSectionContainer>
    );
}

const AdsSectionContainer = styled(motion.div)`
    width: 100%;
    padding: 0 10rem;
    margin-top: 5rem;
    display: flex;
    gap: 1rem;

    @media screen and (max-width: 768px) {
        padding: 0 1rem;
        flex-direction: column;
    }
`;

const ImageContainer = styled(motion.div)`
  flex: 1;
  /* aspect-ratio: 16/9; */
  &:first-child {
    background-color: #ffffff;
  }

  &:last-child {
    background-color: #ffffff;
  }
  img {
    width: 100%;
    object-fit: contain;
    object-position: center;
  }
`;

export default AdsSection;