import React from 'react';

// Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

// Component
import Subscribe from './Subscribe';
import FooterContent from './FooterContent';

const Footer = ({ modal, setModal, setModalMsg }) => {

  return (
    <FooterContainer layout>
      <Subscribe modal={modal} setModal={setModal} setModalMsg={setModalMsg} />
      <FooterContent />
      <FooterFooter>
        <Bar></Bar>
        <p>
          <span>- Kitabghar -</span>.<br /> Proudly developed and managed by
          <br />
          <RefLink
            href="https://linkedin.com/in/pratyushlokhande"
            target="_blank"
          >
            Pratyush
          </RefLink>
          &nbsp; & &nbsp;
          <RefLink href="https://google.com" target="_blank">
            Utkarsh
          </RefLink>
        </p>
      </FooterFooter>
    </FooterContainer>
  );
};

const FooterContainer = styled(motion.div)`
  width: 100%;
  padding: 0 10rem;
  margin-top: 15rem;
  background-color: #69d2e7;
  padding-bottom: 5rem;

  @media screen and (max-width: 1200px) {
    padding: 0 5rem;
  }
  @media screen and (max-width: 1024px) {
    padding: 0 3rem;
  }

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
    margin-top: 18rem;
  }
`;

const FooterFooter = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* gap: 1rem; */

  p {
    font-size: 1.2rem;
    font-weight: 500;
    color: #ffffff;
    padding: 1rem 0;
    text-align: center;
    
    span {
        color: #f08d0c;
        font-weight: 600;
        text-transform: uppercase;
    }
  }
`;

const RefLink = styled(motion.a)`
  color: #ffffff;
`;

const Bar = styled(motion.div)`
  width: 100%;
  height: 1px;
  background-color: #ffffff;
`;

export default Footer;