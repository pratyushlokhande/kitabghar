import React from "react";

// Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

// import Form Components
import FormikContainer from "./FormikContainer";

const FormContainer = () => {

    return (
      <FormArea layout>
        <FormikContainer />
      </FormArea>
    );

};

const FormArea = styled(motion.div)`
    width: 100%;
    padding: 0 10rem;
`;


export default FormContainer;