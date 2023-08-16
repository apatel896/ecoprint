import app from '@/firebase/firebaseconfig.js';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
const db = getFirestore(app);
export async function writeData(collection, id, data) {
    let result = null; let error = null;
    try {
        result = await setDoc(doc(db, collection, id), data, {merge: true});
    } catch (e) {
        error = e;
    }
    return { result, error };
}
export const sendData = async (data, email) => {
    let req = await fetch('/api/addData',{
        method: "POST",
    
        headers: {
            "Content-Type": "application/json",
            "Email": email
        },
        body: JSON.stringify(data)
    });
};
export async function getDocument(collection, id) {
    let docRef = doc(db, collection, id);

    let result = null;
    let error = null;

    try {
        result = await getDoc(docRef);
    } catch (e) {
        error = e;
    }

    return { result, error };
}
export async function getData(email) {
    const res = await fetch('/api/getData', {
        method: "GET",
        headers: {
            "Email": email
        }
    });
    return res.json();

}
