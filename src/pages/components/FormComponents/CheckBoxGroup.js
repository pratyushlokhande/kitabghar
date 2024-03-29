import React from "react";

// Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

// Formik Field
import { Field, ErrorMessage } from "formik";

// Icons
import { IoCheckmarkSharp, IoAddSharp } from "react-icons/io5";

const CheckBoxGroup = (props) => {
  const { label, name, options, ...rest } = props;

  return (
    <CheckboxContainer>
      <Label>{label}</Label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return (
            <CheckboxWrap>
              {options.map((option, index) => {
                return (
                  <React.Fragment key={index}>
                    <CheckboxField
                      type="checkbox"
                      id={option.key}
                      {...field}
                      value={option.key}
                      checked={field.value.includes(option.key)}
                    />
                    <CheckboxLabel htmlFor={option.key}>
                      {field.value.includes(option.key) ? (
                        <IoCheckmarkSharp />
                      ) : (
                        <IoAddSharp />
                      )}
                      {option.value}
                    </CheckboxLabel>
                  </React.Fragment>
                );
              })}
            </CheckboxWrap>
          );
        }}
      </Field>
      <ErrorMessage name={name}>
        {(msg) => <ErrorDiv>{msg}</ErrorDiv>}
      </ErrorMessage>
    </CheckboxContainer>
  );
};

const CheckboxContainer = styled(motion.div)`
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

const CheckboxField = styled(motion.input)`
  appearance: none;

  &:checked + label {
    background-color: #f08d0c;
    color: #ffffff;
  }
`;

const CheckboxWrap = styled(motion.div)`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const CheckboxLabel = styled(motion.label)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  gap: 0.5rem;
  padding: 0.5rem;
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

export default CheckBoxGroup;
