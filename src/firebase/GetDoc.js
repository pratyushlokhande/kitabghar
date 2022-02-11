
// Firebase
import { db } from "./firebase-config";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";

export const getBooks = async ({ database, docId }) => {
    const dataRef = doc(db, database, docId);
    const data = await getDoc(dataRef);

    if(data.exists) {
        return data.data();
    } else {
        return {};
    }
};

export const getAllBooks = async ({ database }) => {
    const dataRef = collection(db, database);
    const data = await getDocs(dataRef);

    if(!data.empty) {
        return (data.docs.map((doc) => ({ id: doc.id, value: doc.data() })));
    } else {
        return [];
    }
} 