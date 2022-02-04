import React from 'react'

// Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

// Formik Field
import { Field, ErrorMessage } from "formik";
import TextError from './TextError';

// Icons
import { IoBagAddOutline, IoBagRemoveOutline } from "react-icons/io5";

const RadioButton = (props) => {

    const { label, name, options, ...rest } = props;

    return (
      <RadioButtonContainer>
        <Label>{label}</Label>
        <Field name={name} {...rest}>
          {({ field }) => {
            return (
              <RadioButtonWrap>
                {options.map((option) => {
                  return (
                    <React.Fragment key={option.key}>
                      <RadioButtonField
                        type="radio"
                        id={option.value}
                        {...field}
                        value={option.value}
                        checked={field.value === option.value}
                      />
                      <RadioButtonLabel htmlFor={option.value}>
                        {option.value === "buy" ? (
                          <IoBagAddOutline />
                        ) : (
                          <IoBagRemoveOutline />
                        )}
                        {option.key}
                      </RadioButtonLabel>
                    </React.Fragment>
                  );
                })}
              </RadioButtonWrap>
            );
          }}
        </Field>
        <ErrorMessage name={name}>
          {(msg) => <ErrorDiv>{msg}</ErrorDiv>}
        </ErrorMessage>
      </RadioButtonContainer>
    );
}

const RadioButtonContainer = styled(motion.div)`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 5rem 0;
`;

const Label = styled(motion.label)`
  font-size: 1.5rem;
  font-weight: 500;
  color: #f08d0c;
`;

const RadioButtonField = styled(motion.input)`
  appearance: none;

  &:checked + label {
    background-color: #f08d0c;
    color: #ffffff;
  }
`;


const RadioButtonWrap = styled(motion.div)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

const RadioButtonLabel = styled(motion.label)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  gap: 0.5rem;
  width: 8rem;
  height: 3rem;
  background-color: #ffffff;
  color: #f08d0c;
  border: 1px solid #f08d0c;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f6bd605e;
  }
`;

const ErrorDiv = styled(motion.div)`
    position: absolute;
    bottom: -1.5rem;
    left: 50%;
    transform: translateX(-50%);
    color: red;
`;

export default RadioButton
