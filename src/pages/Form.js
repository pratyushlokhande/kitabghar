import React from "react";

// Style and Animation
import { motion, AnimateSharedLayout } from "framer-motion";

// Components
import FormHome from "./components/FormHome";
import FormContainer from "./components/FormContainer";


const Form = ({modal, setModal, setModalMsg}) => {

    // const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

    return (
      <AnimateSharedLayout>
        <motion.div layout>
          <FormHome />
          <FormContainer
            modal={modal}
            setModal={setModal}
            setModalMsg={setModalMsg}
          />
        </motion.div>
      </AnimateSharedLayout>
    );
}

export default Form;