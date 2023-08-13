
import app from "../firebase/firebaseconfig.js"
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React from "react";
import { useRouter } from 'next/navigation'
import { useAuthContext } from "@/components/layout.js";
import styles from "@/styles/Sign.module.css";

const auth = getAuth(app);
async function signUp(email, password) {
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}


function Page() {
    const user = useAuthContext;
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState(false);
    const router = useRouter()

    const handleForm = async (event) => {
        event.preventDefault()

        const { result, error } = await signUp(email, password);

        if (error) {
            setError(true);
            return;
        }

        // else successful
        router.push('/user/dashboard');
        return;
    }
    return (<div className="wrapper">
        <div className="form-wrapper">
        <div className={styles.box}>
            <form onSubmit={handleForm} className="form">
                <span className={styles.textcenter}>Login</span>

                <div className={styles.inputcontainer}>
                    <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email"/>
                        <label>Email</label>
                </div>
                <div className={styles.inputcontainer}>
                    <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password"/>
                        <label>Password</label>
                </div>
                <button type="button" className={styles.btn}>Sign Up</button>
            </form>
        </div>

            <h2 style={{margin:0, padding:0}}> {error ? "Error occured signing up, try again" : ""} </h2>
        </div>
    </div>
    );
}

export default Page;