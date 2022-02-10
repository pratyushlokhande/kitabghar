// Firebase
import { db } from "./firebase-config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";


const AddData = ({database, ...entries}, modal, setModal, setModalMsg) => {
    const databaseRef = collection(db, database);

    const getMsg = () => {
        if (database === "subscriptions") {
          return "Thank you for subscribing!\nWe will keep you updated about latest arrivals.";
        } else {
          return "Thank you for your submission!\nWe will be in touch soon.";
        }
    }

    const addData = async () => {
        const newData = {
            ...entries,
            timestamp: serverTimestamp(),
        };
        await addDoc(databaseRef, newData);
    }

    const response = addData();
    
    response.then(() => {
        setModalMsg(getMsg());
        setModal(!modal);
    }).catch((e) => {
        setModalMsg('Something went wrong. Please try again.');
        setModal(!modal);
    });
}

export default AddData;