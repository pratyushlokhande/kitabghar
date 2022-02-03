import React from "react";

// Style and Animation
import { motion, AnimateSharedLayout } from "framer-motion";

// Components
import FormHome from "./components/FormHome";

// import Form Components
import BuySell from "./components/FormComponents/BuySell";

const Form = () => {
    return (
        <AnimateSharedLayout>
            <motion.div layout>
                <FormHome />
                <BuySell />
            </motion.div>
        </AnimateSharedLayout>
    )
}

export default Form;