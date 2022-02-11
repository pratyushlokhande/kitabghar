import React, {useState, useEffect} from "react";

// Pages
import GlobalStyles from "./pages/components/GlobalStyles";
import Nav from "./pages/components/Nav";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Footer from "./pages/components/Footer";
import Modal from "./pages/components/Modal";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import {AuthProvider} from "./pages/components/AuthContext";
import PrivateRoute from "./pages/components/PrivateRoute";

// Loader
import Loader from "./pages/components/Loader";

// Import Router
import {  Routes, Route, useLocation } from "react-router-dom";

// Animation
import {AnimatePresence} from 'framer-motion';

function App() {

  const location = useLocation();

  const [modal, setModal] = useState(false);

  const [modalMsg, setModalMsg] = useState('');

  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setOpacity(0);
    } , 1500);
  }, [])

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
      <Loader opacity={opacity} />
      {modal && <Modal modal={modal} setModal={setModal} modalMsg={modalMsg} />}
      <AuthProvider>
        <AnimatePresence initial={false} exitBeforeEnter>
          <Routes location={location} key={location.key}>
            <Route exact path="/" element={<Home modal={modal} setModal={setModal} setModalMsg={setModalMsg} />} />
            <Route
              exact
              path="/form"
              element={
                <Form
                  modal={modal}
                  setModal={setModal}
                  setModalMsg={setModalMsg}
                />
              }
            />
            <Route
              exact
              path="/admin"
              element={
                <PrivateRoute>
                  <Admin />
                </PrivateRoute>
              }
            />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </AnimatePresence>
      </AuthProvider>
      <Footer modal={modal} setModal={setModal} setModalMsg={setModalMsg} />
    </>
  );
}

export default App;
