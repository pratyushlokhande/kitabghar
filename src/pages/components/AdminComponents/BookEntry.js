import React from 'react'

// Style and Animation
import styled from 'styled-components'
import { motion } from 'framer-motion'

const BookEntry = ({ book, idx }) => {
    return (
        <BookEntryContainer>
            <h4>{`0${idx+1}. ${book}`}</h4>
        </BookEntryContainer>
    )
}

const BookEntryContainer = styled(motion.div)`
    width: 100%;
    display: flex;
    align-items: center;

    h4 {
        font-size: 1.2rem;
        font-weight: 500;
        color: orange;
    }
`;

export default BookEntry;
