
// Firebase
import {db} from './firebase-config';
import { collection, getDocs } from "firebase/firestore";

const GetData = ({database, setData}) => {

    const dataRef = collection(db, database);

    const getdata = async () => {
      const data = await getDocs(dataRef);
      // console.log(data);
      setData(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getdata();
}

export default GetData;