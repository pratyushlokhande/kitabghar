import React from "react";

// Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";


const ClassItem = ({ grade, name, color}) => {
    return (
        <ClassItemContainer style={{ backgroundColor: color }}>
            <h3>{name}</h3>
            <h1>{grade}</h1>
        </ClassItemContainer>
    )
}

const ClassItemContainer = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1/1;

    h3 {
        font-size: 2rem;
        font-weight: 500;
        color: #f08d0c;
    }

    h1 {
        font-size: 3rem;
        font-weight: 600;
        color: #ffffff;
        text-shadow: 5px 7px 7px rgba(0, 0, 0, 0.25);
    }
`;

export default ClassItem;