import React, {useState, useEffect} from 'react'

import { useAuth } from './components/AuthContext';
import { useNavigate } from 'react-router-dom';

// style and animation
import styled from 'styled-components'
import { motion, AnimateSharedLayout } from 'framer-motion'

// Firebase
import GetData from '../firebase/firebase-getData';
import Entry from './components/AdminComponents/Entry';

const Admin = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        GetData({database: 'form-entries', setData: setData});
    }, []);

    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    const navigation = useNavigate();

    async function handleLogout() {
      setError("");

      try {
        await logout();
        navigation("/login", { replace: true });
      } catch {
        setError("Failed to log out");
      }
    }

    return (
      <AnimateSharedLayout>
        <AdminContainer layout>
          <AdminHeader layout>
            ADMIN PANEL
            <br />
            <span>{currentUser.email}</span>
          </AdminHeader>
          {data && (
            <AdminBody>
              {data.map((entry, index) => (
                <Entry key={entry.id} idx={index} {...entry} />
              ))}
            </AdminBody>
          )}
          <LogoutButton onClick={handleLogout} layout>
            Logout
          </LogoutButton>
          <Error layout>{error}</Error>
        </AdminContainer>
      </AnimateSharedLayout>
    );
}

const AdminContainer = styled(motion.div)`
    position: relative;
    width: 100%;
    padding: 0 10rem;

    @media screen and (max-width: 768px) {
        padding: 0 1rem;
    }
`;

const AdminHeader = styled(motion.div)`
    width: 100%;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    font-weight: 600;
    color: orange;
    text-shadow: 5px 7px 7px rgba(0, 0, 0, 0.25);
    margin-top: 3rem;

    span {
        font-size: 1rem;
        font-weight: 500;
        color: rgba(105, 210, 231, 1);
    }
`;

const AdminBody = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const LogoutButton = styled(motion.button)`
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
  margin-top: 3rem;

  &:hover {
    color: #f08d0c;
    border: 2px solid #f08d0c;
  }
`;

const Error = styled(motion.div)`
    position: relative;
    width: 100%;
    text-align: center;
    color: red;
    font-size: 1.5rem;
`;

export default Admin
