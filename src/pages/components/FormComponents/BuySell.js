import React from 'react';

// Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const BuySell = () => {

    return (
      <BuySellContainer layout>
        <BuySellButton>
          <RadioButton id="buy" type="radio" name="radio" value="buy" checked={true} />
          <Label for="buy">Buy</Label>
        </BuySellButton>

        <BuySellButton>
          <RadioButton id="sell" type="radio" name="radio" value="sell" />
          <Label for="sell">Sell</Label>
        </BuySellButton>
      </BuySellContainer>
    );

}

const BuySellContainer = styled(motion.div)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

const Label = styled(motion.label)`
  display: flex;
  align-items: center;
  padding: 0.375em 0.75em 0.375em 0.375em;
  border-radius: 99em;
  transition: 0.25s ease;
  &:hover {
    background-color: mix(#fff, #f08d0c, 84%);
  }
  &:before {
    display: flex;
    flex-shrink: 0;
    content: "";
    background-color: #fff;
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    margin-right: 0.375em;
    transition: 0.25s ease;
    box-shadow: inset 0 0 0 0.125em #f08d0c;
  }
`;

const RadioButton = styled(motion.input)`
  position: absolute;
  left: -9999px;
  &:checked + Label {
    background-color: mix(#fff, #f08d0c, 84%);
    &:before {
      box-shadow: inset 0 0 0 0.4375em #f08d0c;
    }
  }
`;

const BuySellButton = styled(motion.div)`
    display: flex;
	cursor: pointer;
	font-weight: 500;
	position: relative;
	overflow: hidden;
	margin-bottom: 0.375em;		

    ${RadioButton} {
		position: absolute;
		left: -9999px;
		&:checked + ${Label} {
			background-color: mix(#fff, #f08d0c, 84%);
			&:before {
				box-shadow: inset 0 0 0 0.4375em #f08d0c;
			}
		}
    }
`;





export default BuySell;