import React, { useState } from "react";

// Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

// Icon

const EntryToggle = ({ id, name, mode, children }) => {
  const [entryToggle, setEntryToggle] = useState(false);

  return (
    <EntryToggleContainer layout onClick={() => setEntryToggle(!entryToggle)}>
      <EntryToggleHeader layout>
        <h2>
          <span>0{id+1}.</span>
          {name}
        </h2>
        <ModeContainer>{mode}</ModeContainer>
      </EntryToggleHeader>
      {entryToggle ? children : ""}
      <EntryToggleFooter></EntryToggleFooter>
    </EntryToggleContainer>
  );
};

const EntryToggleContainer = styled(motion.div)`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const EntryToggleHeader = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  cursor: pointer;

  h2 {
    font-size: 2rem;
    font-weight: 500;
    color: #000000;
    display: flex;

    span {
      display: block;
      width: 3rem;
      height: inherit;
      color: #f08d0c;
    }

    @media screen and (max-width: 768px) {
      font-size: 1.5rem;

      span {
        width: 2rem;
      }
    }
  }
`;

const EntryToggleFooter = styled(motion.div)`
  width: 100%;
  height: 1px;
  background-color: #f08d0c;
`;

const ModeContainer = styled(motion.div)`
    padding: 0.2rem 1rem;
    border-radius: 5px;
    background: #f08d0c;
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 600;

    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
`;

export default EntryToggle;
