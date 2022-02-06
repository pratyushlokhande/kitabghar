import React, {useState, useEffect} from 'react'

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

    console.log(data);

    return (
        <AnimateSharedLayout>
            <AdminContainer layout>
                <AdminHeader layout>
                    ADMIN PANEL
                </AdminHeader>
                {data && <AdminBody>
                    {data.map((entry, index) => (
                        <Entry key={entry.id} idx={index} {...entry}/>
                    ))}
                </AdminBody>}    
            </AdminContainer>
        </AnimateSharedLayout>
    )
}

const AdminContainer = styled(motion.div)`
    position: relative;
    width: 100%;
    padding: 0 10rem;
`;

const AdminHeader = styled(motion.div)`
    width: 100%;
    height: 30vh;
    display: grid;
    place-items: center;

    font-size: 2.5rem;
    font-weight: 600;
    color: orange;
    text-shadow: 5px 7px 7px rgba(0, 0, 0, 0.25);
    margin-top: 2.5rem;
`;

const AdminBody = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default Admin
