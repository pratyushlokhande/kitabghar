import React, {useEffect, useState, useRef} from 'react'

import { useAuth } from "./components/AuthContext";
import { useNavigate } from "react-router-dom";

// Style and Animation
import styled from 'styled-components';
import { motion } from "framer-motion";

const Login = () => {

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        }
    }, [])

    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
      e.preventDefault();

      try {
        setError("");
        setLoading(true);
        await login(emailRef.current.value, passwordRef.current.value);
        navigate("/admin", { replace: true });
      } catch(err) {
        setError("Failed to log in");
      }

      setLoading(false);
    }

    return (
        <LoginContainer layout>
            <LoginForm onSubmit={handleSubmit}>
                <LoginTitle>Admin Login</LoginTitle>
                <LoginInput type="email" ref={emailRef} placeholder="Email" name="useremail" required/>
                <LoginInput type="password" ref={passwordRef} placeholder="Password" name="password" required/>
                <LoginButton type="submit" disabled={loading}>Login</LoginButton>
                <Error>{error}</Error>
            </LoginForm>
        </LoginContainer>
    )
}

const LoginContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100vh;
  background: rgba(105, 210, 231, 1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled(motion.form)`
  width: 100%;
  max-width: 600px;
  background: #ffffff;
  dipslay: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 5rem 3rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 768px) {
      width: 90%;
      padding: 2rem 1rem;
  }
`;

const LoginTitle = styled(motion.h1)`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
  color: rgba(105, 210, 231, 1);
`;

const LoginInput = styled(motion.input)`
  position: relative;
  width: 100%;
  height: 3rem;
  border: none;
  border-bottom: 1px solid #f08d0c;
  background-color: rgba(240, 141, 12, 0.1);
  padding: 0.5rem;
  font-size: 1.5rem;
  color: #f08d0c;
  margin: 1rem 0;
  text-align: center;

  &:focus {
    outline: none;
  }

  &:focus {
    transform: scaleX(1);
  }

  &::placeholder {
    color: rgba(240, 141, 12, 0.5);
  }
`;

const LoginButton = styled(motion.button)`
  position: relative;
  display: block;
  margin: 1rem auto;
  width: 15rem;
  height: 3rem;
  font-size: 1.5rem;
  font-weight: 500;
  color: #ffffff;
  text-shadow: 5px 7px 7px rgba(0, 0, 0, 0.25);
  background-color: rgba(105, 210, 231, 1);
  border: 2px solid rgba(105, 210, 231, 0.25);
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
        width: 10rem;
  }

  &:hover {
    color: #f08d0c;
    border: 2px solid #f08d0c;
  }
`;

const Error = styled(motion.p)`
  position: relative;
  width: 100%;
  text-align: center;
  color: red;
  font-size: 1.5rem;
`;

export default Login
