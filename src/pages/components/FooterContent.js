import React from "react";

// Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const FooterContent = () => {

    return (
        <FooterContentContainer>
            <FooterContentLeft>
                <h2>PUSTAKSHALA</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque inventore quisquam aspernatur iure aut exercitationem, necessitatibus suscipit rem accusantium.</p>
            </FooterContentLeft>
            <FooterContentRight>
                <h2>CONTACT US</h2>
                <ul>
                    <li>
                        <h3>Mobile No.</h3>
                        +91 1234567890
                    </li>
                    <li>
                        <h3>Email</h3>
                        abcdefgh@gmail.com
                    </li>
                    <li>
                        <h3>Address</h3>
                        No. 123, ABC Street, XYZ City, ABC State, 12345
                    </li>
                </ul>
            </FooterContentRight>
        </FooterContentContainer>    
    )

}

const FooterContentContainer = styled(motion.div)`
    width: 100%;
    display: flex;
    gap: 1rem;
    margin-top: -5rem;
    padding-bottom: 5rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        margin-top: -8rem;
    }
`;

const FooterContentLeft = styled(motion.div)`
    flex: 1;

    h2 {
        font-size: 2rem;
        font-weight: 600;
        color: #ffffff;
        text-shadow: 7px 5px 7px rgba(0, 0, 0, 0.25);
        text-transform: uppercase;
    }

    p {
        width: 70%;
        font-size: 1.2rem;
        font-weight: 400;
        color: #000000;
        margin-top: 1rem;
    }

    @media screen and (max-width: 768px) {
        p {
            width: 100%;
        }
    }
`;

const FooterContentRight = styled(motion.div)`
  flex: 1;

  h2 {
    font-size: 2rem;
    font-weight: 600;
    color: #f08d0c;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    
    @media screen and (max-width: 768px) {
        gap: 1rem;
    }

    li {
        display: flex;
        font-size: 1.2rem;
        font-weight: 400;

        h3 {
            width: 10rem;
            color: #fff;
            font-weight: 500;
        }

        @media screen and (max-width: 768px) {
            flex-direction: column;
            gap: 0.5rem;
        }
    }
  }
`;


export default FooterContent;