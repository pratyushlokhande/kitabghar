import React from "react";

// Style and Animation
import { motion, AnimateSharedLayout } from "framer-motion";

// Components
import FormHome from "./components/FormHome";
import FormContainer from "./components/FormContainer";


const Form = () => {
    return (
        <AnimateSharedLayout>
            <motion.div layout>
                <FormHome />
                <FormContainer />
            </motion.div>
        </AnimateSharedLayout>
    )
}

export default Form;