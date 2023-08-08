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