import React from 'react';

// Style and Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HomeSection = () => {
    return (
      <HomeSectionContainer>
        <TitleContainer>
          <h1>PAY LESS STUDY MORE</h1>
          <Title>
            KITABGHAR
          </Title>
        </TitleContainer>
        <ButtonContainer>
          <Button>BUY</Button>
          <Button>SELL</Button>
        </ButtonContainer>
      </HomeSectionContainer>
    );
}

const HomeSectionContainer = styled(motion.div)`
    width: 100%;
    height: 100vh;
    background-color: #69d2e7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
`;

const TitleContainer = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 2rem;
        color: #f08d0c;
    }
`;

const Title = styled(motion.div)`
    width: 100%;
    text-align: center;
    font-size: 8rem;
    font-weight: 500;
    color: #ffffff;
    text-shadow: 9px 12px 7px rgba(0, 0, 0, 0.25);
`;

const ButtonContainer = styled(motion.div)`
    display: flex;
    gap: 1rem;
`;

const Button = styled(motion.a)`
    width: 10rem;
    height: 2.5rem;
    background-color: #f08d0c;
    color: #000000;
    display: grid;
    place-items: center;
    font-size: 1.8rem;
    font-weight: 500;
`;

export default HomeSection;