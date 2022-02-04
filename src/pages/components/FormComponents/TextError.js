import React from 'react'

// Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";


const TextError = (props) => {
    return (
        <Error layout>
            {props.children}
        </Error>
    )
}

const Error = styled(motion.div)`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  color: red;
`;

export default TextError
