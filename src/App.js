import React, {useState, useEffect} from "react";

import 'kursor/dist/kursor';

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


// Hooks
import { useWindowSize } from "./hooks/UseWindowSize";

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
  
  // Get window size
  const wSize = useWindowSize();
  useEffect(() => {
    document.documentElement.style.setProperty("--vh", `${wSize.height / 100}px`);
  }, [wSize.height]);
  

  return (
    <>
      <GlobalStyles />
      <Nav />
      {modal && <Modal modal={modal} setModal={setModal} />}
        <AuthProvider>
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
      <Footer modal={modal} setModal={setModal} />
    </>
  );
}

export default App;
