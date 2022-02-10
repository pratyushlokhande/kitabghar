import React from "react";

// Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

// import Form Components
import FormikContainer from "./FormikContainer";

const FormContainer = ({modal, setModal, setModalMsg}) => {

    return (
      <FormArea layout>
        <FormikContainer modal={modal} setModal={setModal} setModalMsg={setModalMsg}/>
      </FormArea>
    );

};

const FormArea = styled(motion.div)`
  width: 100%;
  padding: 0 10rem;

  @media screen and (max-width: 1200px) {
    padding: 0 5rem;
  }
  @media screen and (max-width: 1024px) {
    padding: 0 3rem;
  }

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;


export default FormContainer;
