import React from 'react'

// Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

// Formik Field
import { Field, ErrorMessage } from "formik";
import TextError from './TextError';


const Select = (props) => {
    const { label, name, options, placeholder, ...rest } = props;
    return (
        <SelectContainer>
            <Label htmlFor={name}>{label}</Label>
            <SelectWrap>
                <Field as="select" name={name} {...rest}>
                    {
                        options.map((option) => (
                            <option key={option.value} value={option.value}>{option.key}</option>
                        ))
                    }
                </Field>
                <SelectArrow></SelectArrow>
            </SelectWrap>
            <ErrorMessage name={name} >{msg => <ErrorDiv>{msg}</ErrorDiv>}</ErrorMessage>
        </SelectContainer>
    )
}

const SelectContainer = styled(motion.div)`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled(motion.label)`
  font-size: 1.5rem;
  font-weight: 500;
  color: #f08d0c;
`;


const SelectWrap = styled(motion.div)`
  position: relative;
  width: 100%;

  select {
    position: relative;
    width: 100%;
    height: 3rem;
    border: none;
    border-bottom: 1px solid #f08d0c;
    background-color: rgba(240, 141, 12, 0.1);
    padding: 0.5rem;
    padding-right: 3.5rem;
    font-size: 1.5rem;
    color: #f08d0c;

    &:focus {
      outline: none;
    }
  }
`;

const SelectArrow = styled(motion.div)`
  position: absolute;
  right: 0;
  top: 0;
  width: 3rem;
  height: 100%;
  background-color: #f08d0c;
  pointer-events: none;

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-left: 0.75em solid transparent;
    border-right: 0.75em solid transparent;
    left: 50%;
    transform: translateX(-50%);
  }

  &::before {
    border-bottom: 0.75em solid #ffffff;
    top: 20%;
  }
  &::after {
    border-top: 0.75em solid #ffffff;
    bottom: 20%;
  }
`;

const ErrorDiv = styled(motion.div)`
  position: absolute;
  bottom: 1rem;
  right: 4rem;
  color: red;
`;

export default Select
