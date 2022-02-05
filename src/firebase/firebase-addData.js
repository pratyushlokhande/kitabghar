// Firebase
import { db } from "./firebase-config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";


const AddData = ({database, ...entries}) => {
    const databaseRef = collection(db, database);

    const addData = async () => {
        const newData = {
            ...entries,
            timestamp: serverTimestamp(),
        };
        await addDoc(databaseRef, newData);
    }

    const response = addData();
    
    response.then((s) => {
        alert("Submission Successfull!");
    }).catch((e) => {
        alert("Something went wrong");
    });
}

export default AddData;