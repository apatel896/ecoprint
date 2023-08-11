import app from '@/firebase/firebaseconfig.js';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
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
export const sendData = async (data) => {
    let req = await fetch('http://localhost:3000/api/addData',{
        method: "POST",
    
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
};