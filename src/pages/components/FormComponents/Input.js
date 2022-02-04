import React from 'react'

// Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

// Formik Field
import { Field, ErrorMessage } from "formik";
import TextError from './TextError';

function Input(props) {

    const {label, name, placeholder, ...rest} = props;

    return (
        <InputBoxContainer>
            <Label htmlFor={name}>{label}</Label>
            <InputWrap>
                <InputField id={name} name={name} {...rest} placeholder={placeholder} />
                <Bar />
                <ErrorMessage name={name} component={TextError} />
            </InputWrap>
        </InputBoxContainer>
    )
}



const InputBoxContainer = styled(motion.div)`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputWrap = styled(motion.div)`
  position: relative;
  width: 100%;
`;

const Bar = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: rgba(105, 210, 231, 1);
  transform: scaleX(0);
  transform-origin: left;
  transition: all 0.5s ease-in-out;
`;

const InputField = styled(Field)`
  position: relative;
  width: 100%;
  height: 3rem;
  border: none;
  border-bottom: 1px solid #f08d0c;
  background-color: rgba(240, 141, 12, 0.1);
  padding: 0.5rem;
  font-size: 1.5rem;
  color: #f08d0c;

  &:focus {
    outline: none;
  }

  &:focus + ${Bar} {
    transform: scaleX(1);
  }

  &::placeholder {
    color: rgba(240, 141, 12, 0.5);
  }
`;

const Label = styled(motion.label)`
  font-size: 1.5rem;
  font-weight: 500;
  color: #f08d0c;
`;



export default Input
