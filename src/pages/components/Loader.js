import React from "react";

// Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Loader = ({opacity}) => {
  return (
    <LoaderContainer animate={{opacity: opacity}}>
      <Loading>
        <p>Loading</p>
        <span></span>
      </Loading>
    </LoaderContainer>
  );
};

const LoaderContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

const Loading = styled.div`
  width: 80px;
  height: 50px;
  position: relative;

  p {
    top: 0;
    padding: 0;
    margin: 0;
    color: #69d2e7;
    animation: text 3.5s ease both infinite;
    font-size: 12px;
    letter-spacing: 1px;

    @keyframes text {
      0% {
        letter-spacing: 1px;
        transform: translateX(0px);
      }

      40% {
        letter-spacing: 2px;
        transform: translateX(26px);
      }

      80% {
        letter-spacing: 1px;
        transform: translateX(32px);
      }

      90% {
        letter-spacing: 2px;
        transform: translateX(0px);
      }

      100% {
        letter-spacing: 1px;
        transform: translateX(0px);
      }
    }
  }
  span {
    background-color: #69d2e7;
    border-radius: 50px;
    display: block;
    height: 16px;
    width: 16px;
    bottom: 0;
    position: absolute;
    transform: translateX(64px);
    animation: loading 3.5s ease both infinite;

    &:before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      background-color: #f08d0c;
      border-radius: inherit;
      animation: loading2 3.5s ease both infinite;
    }

    @keyframes loading {
      0% {
        width: 16px;
        transform: translateX(0px);
      }

      40% {
        width: 100%;
        transform: translateX(0px);
      }

      80% {
        width: 16px;
        transform: translateX(64px);
      }

      90% {
        width: 100%;
        transform: translateX(0px);
      }

      100% {
        width: 16px;
        transform: translateX(0px);
      }
    }
    @keyframes loading2 {
      0% {
        transform: translateX(0px);
        width: 16px;
      }

      40% {
        transform: translateX(0%);
        width: 80%;
      }

      80% {
        width: 100%;
        transform: translateX(0px);
      }

      90% {
        width: 80%;
        transform: translateX(15px);
      }
      100% {
        transform: translateX(0px);
        width: 16px;
      }
    }
  }
`;

export default Loader;
