import React from "react";

// Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

// import Form Components
import FormikContainer from "./FormikContainer";

const FormContainer = ({modal, setModal}) => {

    return (
      <FormArea layout>
        <FormikContainer modal={modal} setModal={setModal} />
      </FormArea>
    );

};

const FormArea = styled(motion.div)`
    width: 100%;
    padding: 0 10rem;

    @media screen and (max-width: 768px) {
        padding: 0 1rem;
    }
`;


export default FormContainer;
