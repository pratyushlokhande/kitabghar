import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

// Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

// Formik Control
import FormikControl from './FormikControl';

// Router
import { useLocation } from 'react-router-dom';


const FormikContainer = () => {

    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const radioOptions = [
      { key: "Buy", value: "buy" },
      { key: "Sell", value: "sell" },
    ];

    const gradeOptions = [
        { key: '--Select--', value: '' },
        { key: 'Option 1', value: 'goption1' },
        { key: 'Option 2', value: 'goption2' },
        { key: 'Option 3', value: 'goption3' },
    ];
    const typeOptions = [
        { key: '--Select--', value: '' },
        { key: 'Option 1', value: 'toption1' },
        { key: 'Option 2', value: 'toption2' },
        { key: 'Option 3', value: 'toption3' },
    ];
    const checkboxOptions = [
        { key: 'Option 0', value: 'coption0' },
        { key: 'Option 1', value: 'coption1' },
        { key: 'Option 2', value: 'coption2' },
        { key: 'Option 3', value: 'coption3' },
        { key: 'Option 4', value: 'coption4' },
        { key: 'Option 5', value: 'coption5' },
        { key: 'Option 6', value: 'coption6' },
        { key: 'Option 7', value: 'coption7' },
        { key: 'Option 8', value: 'coption8' },
    ];

    const initialValues = {
        buySell: from,
        name: '',
        phone: '',
        house: '',
        street: '',
        landmark: '',
        city: '',
        selectGrade: '',
        selectType: '',
        books: [],
        price: 0,
    };

    const phoneRegExp =
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;


    const validicationSchema = Yup.object({
      buySell: Yup.string().required("Select atleast one option"),
      name: Yup.string()
        .required("Required")
        .max(20, "Must be 20 characters or less"),
      phone: Yup.string()
        .required("Required")
        .matches(phoneRegExp, "Enter a valid phone number")
        .max(10, "Invalid"),
      house: Yup.string().required("Required"),
      street: Yup.string().required("Required"),
      landmark: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
      selectGrade: Yup.string().required("Required"),
      selectType: Yup.string().required("Required"),
      books: Yup.array().min(1,"Select atleast one Book"),
    });
    const onSubmit = values => console.log(values);

    return (
      <MainForm
        initialValues={initialValues}
        validationSchema={validicationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
              <FormikControl 
                control="radio"
                label="Buy / Sell"
                name="buySell"
                options={radioOptions}
              />
            <FormGroup>
              <FormikControl
                control="input"
                type="text"
                label="Name"
                name="name"
                placeholder="Enter your Name"
              />
              <FormikControl
                control="input"
                type="text"
                label="Phone No."
                name="phone"
                placeholder="Enter your Mobile No."
              />
            </FormGroup>
            <FormGroup>
              <FormikControl
                control="input"
                type="text"
                label="Address"
                name="house"
                placeholder="Flat/House No./Building"
              />
              <FormikControl
                control="input"
                type="text"
                label=""
                name="street"
                placeholder="Area/Colony/Street"
              />
              <FormikControl
                control="input"
                type="text"
                label=""
                name="landmark"
                placeholder="Landmark"
              />
              <FormikControl
                control="input"
                type="text"
                label=""
                name="city"
                placeholder="Town/City"
              />
            </FormGroup>
            <FormGroup>
              <FormikControl 
                control="select"
                label="Select Grade"
                name="selectGrade"
                options={gradeOptions}
              />
              <FormikControl 
                control="select"
                label="Select Type"
                name="selectType"
                options={typeOptions}
              />
            </FormGroup>
            <FormikControl 
              control="checkbox"
              label="Select Books"
              name="books"
              options={checkboxOptions}
            />
            <PriceGroup>
              <Label htmlFor="price">Total Amount</Label>
              <FormikControl 
                control="input"
                type="text"
                name="price"
                placeholder={formik.values.price}
                disabled
                style={{textAlign: "center"}}
              />
            </PriceGroup>
            <SubmitButton type="submit">Submit</SubmitButton>
          </Form>
        )}
      </MainForm>
    );
}

const MainForm = styled(Formik)`
  position: relative;
  width: 100%;
`;

const FormGroup = styled(motion.div)`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    align-items: end;
    margin-top: 3rem;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const PriceGroup = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

const Label = styled(motion.label)`
  font-size: 1.5rem;
  font-weight: 500;
  color: #f08d0c;
`;

const SubmitButton = styled(motion.button)`
  position: relative;
  display: block;
  margin: 5rem auto;
  width: 15rem;
  height: 4rem;
  font-size: 2rem;
  font-weight: 500;
  color: #ffffff;
  text-shadow: 5px 7px 7px rgba(0, 0, 0, 0.25);
  background-color: rgba(105, 210, 231, 1);
  border: 2px solid rgba(105, 210, 231, 0.25);
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #f08d0c;
    border: 2px solid #f08d0c;
  }
`;

export default FormikContainer
