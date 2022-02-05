import React from "react";

// Pages
import GlobalStyles from "./pages/components/GlobalStyles";
import Nav from "./pages/components/Nav";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Footer from "./pages/components/Footer";

// Import Router
import {  Routes, Route, useLocation } from "react-router-dom";

// Animation
import {AnimatePresence} from 'framer-motion';

function App() {

  const location = useLocation();
  

  return (
    <>
      <GlobalStyles />
      <Nav />
      <AnimatePresence initial={false} exitBeforeEnter>
        <Routes location={location} key={location.key}> 
          <Route exact path="/" element={<Home />} />
          <Route exact path="/form" element={<Form />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
