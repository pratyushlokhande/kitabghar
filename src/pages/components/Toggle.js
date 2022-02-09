import React, {useState} from 'react';

// Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

// Icon
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Toggle = ({ id, question, children }) => {
    const [toggle, setToggle] = useState(false);

    return (
      <ToggleContainer layout onClick={() => setToggle(!toggle)}>
        <ToggleHeader layout>
          <div>0{id}.</div>
          <h2>
            {question}
          </h2>
          { toggle ? <ArrowUp /> : <ArrowDown /> }
        </ToggleHeader>
        {toggle ? children : ""}
        <ToggleFooter />
      </ToggleContainer>
    );
}

const ToggleContainer = styled(motion.div)`
    width: 100%;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const ToggleHeader = styled(motion.div)`
  width: 100%;
  display: grid;
  /* justify-content: space-between; */
  grid-template-columns: 3rem auto 3rem;
  background: #ffffff;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    grid-template-columns: 2rem 1fr 2rem;
  }

  div {
    display: block;
    font-size: 2rem;
    color: #f08d0c;

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }
  }

  h2 {
    position: relative;
    font-size: 2rem;
    font-weight: 500;
    color: #000000;
    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;

const ToggleFooter = styled(motion.div)`
    width: 100%;
    height: 1px;
    background-color: #f08d0c;
`;

const ArrowDown = styled(FiChevronDown)`
  position: relative;
  margin-left: auto;
  font-size: 2rem;
  color: #f08d0c;
`;
const ArrowUp = styled(FiChevronUp)`
  position: relative;
  margin-left: auto;
  font-size: 2rem;
  color: #f08d0c;
`;

export default Toggle;