import React from "react";

// Style and Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CollectionItem = ({ id, title, description, color, icon, key}) => {
    return (
        <CollectionItemContainer style={{backgroundColor: color}} key={key}>
            <ItemHeader>
                <h4>{id}</h4>
                <h3>{title}</h3>
            </ItemHeader>
            <ItemFooter>
                <img src={require(`../../assets/collectionIcons/${icon}`)} alt={icon} />
            </ItemFooter>
            <Description>
                <p>{description}</p>
            </Description>
        </CollectionItemContainer>
    )
}




const ItemHeader = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;

    h4 {
        font-size: 3rem;
        color: #f08d0c;
    }

    h3 {
        font-size: 2.5rem;
        font-weight: 600;
        text-shadow: 5px 7px 7px rgba(0, 0, 0, 0.25);
        color: #ffffff;
    }
`;


const ItemFooter = styled(motion.div)`
    width: 30%;
    margin-left: auto;
    aspect-ratio: 1/1;
    transition: transform 0.3s ease-in-out;

    img {
        width: 100%;
        object-fit: contain;
        filter: sepia(20%);
    }
`;

const Description = styled(motion.div)`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    transform: translateY(100%);
    transition: transform 0.3s ease-in-out;

    p {
        font-size: 1.2rem;
        font-weight: 400;
        color: #ffffff;
    }
`;

const CollectionItemContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  aspect-ratio: 3/4;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    ${Description} {
      transform: translateY(0);
    }

    ${ItemFooter} {
        transform: translateX(150%);
    }
  }
`;

export default CollectionItem;