import React from 'react'


// Style and animation
import styled from 'styled-components'
import {motion} from 'framer-motion'

const Modal = ({modal, setModal}) => {

    const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

    const toggleModal = (e) => {
        e.preventDefault()
        setModal(!modal);
    }

    return (
        <ModalContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ...transition }}
        >
          <ModalContent
            initial={{
              opacity: 0,
              y: -100,
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{
              opacity: 1,
              y: 0,
              translateX: "-50%",
              translateY: "-50%",
            }}
            exit={{
              opacity: 0,
              y: 100,
              translateX: "-50%",
              translateY: "-50%",
            }}
            transition={{ ...transition, delay: 0.6 }}
          >
            <ModalHeader>KITABGHAR</ModalHeader>
            <ModalBody>
              <ModalText>
                Submission Successfull!
                <br /> Thanks for filling up the form.
              </ModalText>
              <ModalAction onClick={toggleModal}>Close</ModalAction>
            </ModalBody>
          </ModalContent>
        </ModalContainer>
    );
}

const ModalContainer = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 50;
    background-color: rgba(0,0,0,0.5);
`;

const ModalContent = styled(motion.div)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ffffff;
    padding: 3rem 6rem;

    @media screen and (max-width: 768px) {
        width: 90%;
        padding: 3rem 0;
    }
`;

const ModalHeader = styled(motion.div)`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  text-shadow: 5px 7px 7px rgba(0, 0, 0, 0.25);
  color: #f08d0c;
  margin-bottom: 2rem;
`;

const ModalBody = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`;

const ModalText = styled(motion.div)`
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
`;

const ModalAction = styled(motion.button)`
  width: 10rem;
  height: 2.5rem;
  background-color:#69d2e7;
  color: #000000;
  display: grid;
  place-items: center;
  font-size: 1.8rem;
  font-weight: 500;
  border: none;
`;

export default Modal;
