// Firebase
import { db } from "./firebase-config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";


const AddData = ({database, ...entries}, modal, setModal) => {
    const databaseRef = collection(db, database);

    const addData = async () => {
        const newData = {
            ...entries,
            timestamp: serverTimestamp(),
        };
        await addDoc(databaseRef, newData);
    }

    const response = addData();
    
    response.then(() => {
        setModal(!modal);
    }).catch((e) => {
        alert("Something went wrong" + e);
    });
}

export default AddData;