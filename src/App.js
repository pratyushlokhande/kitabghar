import React, {useState, useEffect} from "react";

// Pages
import GlobalStyles from "./pages/components/GlobalStyles";
import Nav from "./pages/components/Nav";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Footer from "./pages/components/Footer";
import Modal from "./pages/components/Modal";
import Admin from "./pages/Admin";

// Import Router
import {  Routes, Route, useLocation } from "react-router-dom";

// Animation
import {AnimatePresence} from 'framer-motion';

function App() {

  const location = useLocation();

  const [modal, setModal] = useState(false);

  useEffect(() => {
    if(modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [modal])
  
  

  return (
    <>
      <GlobalStyles />
      <Nav />
      {modal && <Modal modal={modal} setModal={setModal} />}
      <AnimatePresence initial={false} exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/form"
            element={<Form modal={modal} setModal={setModal} />}
          />
          <Route
            exact
            path="/admin"
            element={<Admin />}
          />
        </Routes>
      </AnimatePresence>
      <Footer modal={modal} setModal={setModal} />
    </>
  );
}

export default App;
