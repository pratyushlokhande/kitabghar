import React from 'react';

// Style and Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AdsSection = () => {
    return (
        <AdsSectionContainer>
            <ImageContainer>
                {/* <img src={"//unsplash.it/720/480?1"} alt={"img"} /> */}
            </ImageContainer>
            <ImageContainer>
                {/* <img src={"//unsplash.it/720/480?2"} alt={"img"} /> */}
            </ImageContainer>
        </AdsSectionContainer>
    )
}

const AdsSectionContainer = styled(motion.div)`
    width: 100%;
    padding: 0 10rem;
    margin-top: 5rem;
    display: flex;
    gap: 1rem;
    
    img {
        flex: 1;
        object-fit: cover;
        object-position: center;
    }
`;

const ImageContainer = styled(motion.div)`
  flex: 1;
  aspect-ratio: 4/3;
  &:first-child {
    background-color: #b0f47a;
  }

  &:last-child {
    background-color: #b789f2;
  }
  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export default AdsSection;