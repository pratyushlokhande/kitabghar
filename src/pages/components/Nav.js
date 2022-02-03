import React from "react";

// Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Nav = () => {
    return (
        <NavContainer layout>
            <NavLogo><span>KITABGHAR</span>.in</NavLogo>
        </NavContainer>
    )
}

const NavContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  z-index: 99;
  background-color: #ffffff;
  padding: 0 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.2);
`;

const NavLogo = styled(motion.div)`
    width: fit-content;
    font-size: 2rem;
    font-weight: 500;
    color: #69d2e7;

    span {
        color: #f08d0c;
    }
`;

export default Nav;