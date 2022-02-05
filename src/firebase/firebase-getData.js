import {useEffect, useState} from 'react';

// Firebase
import {db} from './firebase-config';
import { collection, getDocs } from "firebase/firestore";

const GetData = ({database}) => {

    const dataRef = collection(db, database);

  const [data, setData] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      const data = await getDocs(dataRef);
      // console.log(data);
      setData(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getdata();
  }, []);

  if(data.length > 0) {
    //   return (data);
      console.log(data);
  }
}

export default GetData;