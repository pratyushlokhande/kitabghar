import React from "react";

// Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
// animate={{height: "5rem"}}
const Nav = () => {

  const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

  return (
    <NavContainer
      layout
      animate={{ height: "5rem" }}
      transition={{ ...transition, delay: 1 }}
    >
      <NavLogo to={"/"}>
        <span>KITABGHAR</span>.in
      </NavLogo>
    </NavContainer>
  );
};

const NavContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  /* height: 5rem; */
  height: 100%;
  z-index: 99;
  background-color: #ffffff;
  padding: 0 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.2);
`;

const NavLogo = styled(Link)`
  width: fit-content;
  font-size: 2rem;
  font-weight: 500;
  color: #69d2e7;
  text-decoration: none;
  span {
    color: #f08d0c;
  }
`;

export default Nav;
