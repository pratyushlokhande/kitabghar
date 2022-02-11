// import React, {useState, useEffect} from 'react'

// // Firebase
// import {db} from './firebase-config';
// import { doc, getDoc } from "firebase/firestore";



// const DataTest = () => {
    
//     const [data, setData] = useState([]);
//     const GetData = ({ database, docId, setData }) => {
//       const dataRef = doc(db, database, docId);

//       const getdata = async () => {
//         const data = await getDoc(dataRef);
//         // console.log(data);
//         // setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//         setData(data.data());
//       };
//       getdata();
//     };
// }

// export default DataTest;


