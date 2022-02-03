import React, {useState} from 'react';

// Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

// Icon
import { TiArrowDownOutline } from "react-icons/ti";

const Toggle = ({ id, question, children }) => {
    const [toggle, setToggle] = useState(false);

    return (
      <ToggleContainer layout onClick={() => setToggle(!toggle)}>
        <ToggleHeader layout>
          <h2>
            <span>0{id}.</span>
            {question}
          </h2>
          <TiArrowDownOutline fontSize={"2rem"} color={"#f08d0c"} />
        </ToggleHeader>
        {toggle ? children : ""}
        <ToggleFooter></ToggleFooter>
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
    }
`;

const ToggleFooter = styled(motion.div)`
    width: 100%;
    height: 1px;
    background-color: #f08d0c;
`;

export default Toggle;