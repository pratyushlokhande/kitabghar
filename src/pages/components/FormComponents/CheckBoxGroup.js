import React from "react";

// Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

// Formik Field
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

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
              {options.map((option) => {
                return (
                  <React.Fragment key={option.key}>
                    <CheckboxField
                      type="checkbox"
                      id={option.value}
                      {...field}
                      value={option.value}
                      checked={field.value.includes(option.value)}
                    />
                    <CheckboxLabel htmlFor={option.value}>
                      {field.value.includes(option.value) ? (
                        <IoCheckmarkSharp />
                      ) : (
                        <IoAddSharp />
                      )}
                      {option.key}
                    </CheckboxLabel>
                  </React.Fragment>
                );
              })}
            </CheckboxWrap>
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </CheckboxContainer>
  );
};

const CheckboxContainer = styled(motion.div)`
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

export default CheckBoxGroup;
