import React from "react";

// Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";


const Subscribe = () => {
    return (
      <SubscribeContainer>
        <TitleContainer>
          <h1>Subscribe</h1>
          <h3>Be the first one to get informed about new arrivals.</h3>
        </TitleContainer>

        <FormContainer>
            <Input type={"email"} placeholder={"Enter your E-mail"} required />
            <Button type={"submit"}>Subscribe</Button>
        </FormContainer>
      </SubscribeContainer>
    );
}

const SubscribeContainer = styled(motion.div)`
  width: 100%;
  padding: 5rem 0;
  background-color: #ee6c4d;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
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
    color: #ffffff;
    text-shadow: 7px 5px 7px rgba(0, 0, 0, 0.25);
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
    color: #000000;
    text-transform: uppercase;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }

    h3 {
      font-size: 1.5rem;
      padding: 0 1rem;
    }
  }
`;

const FormContainer = styled(motion.form)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
`;

const Input = styled(motion.input)`
    width: 20rem;
    height: 2.5rem;
    background-color: rgba(255, 255, 255, 0.3);
    border: none;
    border-bottom: 1px solid #ffffff;
    padding: 0.5rem;
    color: #ffffff;
    font-size: 1.2rem;
    font-weight: 500;

    @media screen and (max-width: 768px) {
      width: 90%;
      text-align: center;
    }

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: #ffffff;
        opacity: 0.5;

        @media screen and (max-width: 768px) {
          text-align: center;
        }
    }
`;

const Button = styled(motion.button)`
  width: fit-content;
  height: 2.5rem;
  padding: 0 2rem;
  background-color: #ffffff;
  border: none;
  color: #ee6c4d;
  font-size: 1.2rem;
  font-weight: 500;
`;

export default Subscribe;