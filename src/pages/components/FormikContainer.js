import React, { useRef, useState } from "react";
import { Formik, Form, FieldArray } from "formik";
import * as Yup from "yup";

// Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

// Icons
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

// Formik Control
import FormikControl from "./FormikControl";

// Router
import { useLocation } from "react-router-dom";

// Firebase
import AddData from "../../firebase/firebase-addData";
import { getBooks, getAllBooks } from "../../firebase/GetDoc";

const FormikContainer = ({ modal, setModal, setModalMsg }) => {
  const ref = useRef(null);

  const [bookOptions, setBookOptions] = useState([]);

  const loadBooks = async (e) => {
    e.preventDefault();
    const { selectGrade, selectType } = ref.current.values;

    if (selectGrade && selectType) {
      if (selectType === "all") {
        getAllBooks({ database: selectGrade }).then((data) => {
          if (data.length > 0) {
            var allBooks = [];
            data.forEach((type) => {
              const { id, value } = type;
              var res = Object.keys(value).map((key) => {
                return {
                  key: `${key}-${id}`,
                  value: value[key],
                };
              });
              allBooks = [...allBooks, ...res];
            });
            setBookOptions(allBooks);
          } else {
            setModalMsg("No data found");
            setModal(!modal);
          }
        });
      } else {
        getBooks({ database: selectGrade, docId: selectType }).then((data) => {
          if (data) {
            var res = Object.keys(data).map((key) => {
              return {
                key: `${key}-${selectType}`,
                value: data[key],
              };
            });
            setBookOptions(res);
          } else {
            setModalMsg("No data found");
            setModal(!modal);
          }
        });
      }
    }
  };

  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const buySellOptions = [
    { key: "Buy", value: "buy" },
    { key: "Sell", value: "sell" },
  ];

  const gradeOptions = [
    { key: "--Select--", value: "" },
    { key: "Class 6", value: "class-6" },
    { key: "Class 7", value: "class-7" },
    { key: "Class 8", value: "class-8" },
    { key: "Class 9", value: "class-9" },
    { key: "Class 10", value: "class-10" },
    { key: "Class 11", value: "class-11" },
    { key: "Class 12", value: "class-12" },
  ];
  const typeOptions = [
    { key: "--Select--", value: "" },
    { key: "All", value: "all" },
    { key: "NCERT", value: "ncert" },
    { key: "MP Board", value: "mp-board" },
    { key: "Reference Books", value: "reference" },
    { key: "Competitive Books", value: "competitive" },
  ];
  // const bookOptions = [
  //   { key: "Math NCERT", value: "math-ncert" },
  //   { key: "Science Competitive", value: "science-competitive" },
  //   { key: "English NCERT", value: "english-ncert" },
  //   { key: "Hindi NCERT", value: "Hindi-ncert" },
  //   { key: "Aptitude Competitive", value: "aptitude-competitive" },
  //   { key: "S Chand Reference", value: "Science Reference" },
  //   { key: "SST XamIdea Reference", value: "xamidea-reference" },
  //   { key: "Computer Competitive", value: "computer-competitive" },
  // ];

  const initialValues = {
    buySell: from,
    name: "",
    phone: "",
    house: "",
    street: "",
    landmark: "",
    city: "",
    selectGrade: "",
    selectType: "",
    books: [],
    customBooks: [""],
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
    books: Yup.array().min(1, "Select atleast one Book"),
  });
  const onSubmit = (values, { resetForm }) => {
    const address = `${values.house} ${values.street} ${values.landmark} ${values.city}`;
    const data = {
      database: "form-entries",
      mode: values.buySell,
      name: values.name,
      phone: values.phone,
      address: address,
      books: values.books,
      cbooks: values.customBooks,
      amount: values.price,
      class: values.selectGrade,
      type: values.selectType,
      status: false,
    };

    AddData(data, modal, setModal, setModalMsg);
    resetForm();
  };

  return (
    <MainForm
      initialValues={initialValues}
      validationSchema={validicationSchema}
      onSubmit={onSubmit}
      innerRef={ref}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="radio"
            label="Buy / Sell"
            name="buySell"
            options={buySellOptions}
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
          <LoadButton onClick={loadBooks}>Load Books</LoadButton>
          {bookOptions.length > 0 && (
            <FormikControl
              control="checkbox"
              label="Select Books"
              name="books"
              options={bookOptions}
            />
          )}
          <CustomBooksGroup>
            <Label htmlFor="customBooks">Add Custom Books</Label>
            <FieldArray name="customBooks">
              {(arrayHelpers) => {
                const { push, remove, form } = arrayHelpers;
                const { customBooks } = form.values;
                return (
                  <CustomBookEntries>
                    {customBooks.map((book, index) => (
                      <CustomBookWrap key={index}>
                        <FormikControl
                          control="input"
                          type="text"
                          name={`customBooks.${index}`}
                          placeholder="Enter Book Name"
                        />
                        <Button type="button" onClick={() => push("")}>
                          <FiPlusCircle />
                        </Button>
                        {index > 0 && (
                          <Button type="button" onClick={() => remove(index)}>
                            <FiMinusCircle />
                          </Button>
                        )}
                      </CustomBookWrap>
                    ))}
                  </CustomBookEntries>
                );
              }}
            </FieldArray>
          </CustomBooksGroup>
          {/* <PriceGroup>
              <Label htmlFor="price">Total Amount</Label>
              <FormikControl 
                control="input"
                type="text"
                name="price"
                placeholder={formik.values.price}
                disabled
                style={{textAlign: "center"}}
              />
            </PriceGroup> */}
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      )}
    </MainForm>
  );
};

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

// const PriceGroup = styled(motion.div)`
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     gap: 1rem;
// `;

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

const CustomBooksGroup = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Button = styled(motion.button)`
  position: relative;
  border: none;
  background-color: #f08d0c;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 500;
  height: 3rem;
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:last-child {
    background-color: orange;
  }
`;

const CustomBookWrap = styled(motion.div)`
  display: flex;
  align-items: end;
`;

const CustomBookEntries = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  input {
    width: fit-content;
  }
`;

const LoadButton = styled(SubmitButton)`
  background-color: #f08d0c;
  height: 3rem;
  font-size: 1.5rem;
  border: none;

  &:hover {
    border: none;
    color: rgba(105, 210, 231, 1);
  }
`;

export default FormikContainer;
