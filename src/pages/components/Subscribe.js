import React from "react";

// Firebase
import AddData from "../../firebase/firebase-addData";


// Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

// Formik
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";


const Subscribe = () => {
  
    const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    

    const validicationSchema = Yup.object({
      email: Yup.string()
                .required("Required")
                .matches(emailRegExp, "Enter a valid E-mail address"),
    })

    const onSubmit = (values, {resetForm}) => {
      const entries = {
        database: "subscriptions",
        ...values,
      }

      AddData(entries);
      resetForm();
    }


    return (
      <SubscribeContainer>
        <TitleContainer>
          <h1>Subscribe</h1>
          <h3>Be the first one to get informed about new arrivals.</h3>
        </TitleContainer>
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={validicationSchema}
          onSubmit={onSubmit}
        >
          <FormContainer>
            <Input
              name="email"
              type="email"
              placeholder="Enter your E-mail"
              autoComplete="off"
              required
            />
            <Button type="submit">Subscribe</Button>
          <ErrorMessage name="email">
            {(msg) => <Error>{msg}</Error>}
          </ErrorMessage>
          </FormContainer>
        </Formik>
      </SubscribeContainer>
    );
}

const SubscribeContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  padding: 5rem 0;
  background-color: #ee6c4d;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const TitleContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 3rem;
    font-weight: 600;
    color: #ffffff;
    text-shadow: 7px 5px 7px rgba(0, 0, 0, 0.25);
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
    color: #000000;
    text-transform: uppercase;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }

    h3 {
      font-size: 1.5rem;
      padding: 0 1rem;
    }
  }
`;

const FormContainer = styled(Form)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
`;

const Input = styled(Field)`
    width: 20rem;
    height: 2.5rem;
    background-color: rgba(255, 255, 255, 0.3);
    border: none;
    border-bottom: 1px solid #ffffff;
    padding: 0.5rem;
    color: #ffffff;
    font-size: 1.2rem;
    font-weight: 500;

    @media screen and (max-width: 768px) {
      width: 90%;
      text-align: center;
    }

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: #ffffff;
        opacity: 0.5;

        @media screen and (max-width: 768px) {
          text-align: center;
        }
    }
`;

const Button = styled(motion.button)`
  width: fit-content;
  height: 2.5rem;
  padding: 0 2rem;
  background-color: #ffffff;
  border: none;
  color: #ee6c4d;
  font-size: 1.2rem;
  font-weight: 500;
`;

const Error = styled(motion.div)`
  position: absolute;
  bottom:3rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.2rem;
  font-weight: 500;
  color: red;
`

export default Subscribe;