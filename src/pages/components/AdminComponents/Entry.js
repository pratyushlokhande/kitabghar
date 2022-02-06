import React from "react";

// Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

// EntryToggle
import EntryToggle from "./EntryToggle";
import BookEntry from "./BookEntry";

const Entry = (data) => {
  return (
    <EntryToggle name={data.name} mode={data.mode} id={data.idx}>
      <EntryContainer>
        <ul>
            <li>
                <h3>Garde : </h3><span>{data.class}</span>
            </li>
            <li>
                <h3>Address : </h3><span>{data.address}</span>
            </li>
            <li>
                <h3>Phone : </h3><span>{data.phone}</span>
            </li>
            <li>
                <h3>Type : </h3><span>{data.type}</span>
            </li>
            <li>
                <h3>Books : </h3>
                <span>
                    <ul>
                        {data.books.map((book, idx) => (
                            <BookEntry key={idx} idx={idx} book={book}/>
                        ))}
                    </ul>
                </span>
            </li>
        </ul>
      </EntryContainer>
    </EntryToggle>
  );
};

const EntryContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 2rem;

  ul {
      width: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    li {
        width: 100%;
        display: flex;
        
        h3 {
            flex: 1;
            font-size: 1.5rem;
            font-weight: 500;
            color: #59d5d5;
        }

        span {
            flex: 1;
            /* display: block; */
            font-size: 1.2rem;
            font-weight: 400;
        }
    }
  }
`;

export default Entry;
