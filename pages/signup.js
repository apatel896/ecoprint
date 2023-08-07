
import app from "../firebase/firebaseconfig.js"
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React from "react";
import { useRouter } from 'next/navigation'
import { useAuthContext } from "@/components/layout.js";

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
            <h1 className="mt-60 mb-30" style={{padding:0, margin:0}}>Sign up</h1>
            <form onSubmit={handleForm} className="form">
                <label htmlFor="email">
                    <p>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
                </label>
                <label htmlFor="password">
                    <p>Password</p>
                    <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" />
                </label>
                <button type="submit">Sign up</button>
            </form>
            <h2> {error ? "Error occured signing up, try again" : ""} </h2>
        </div>
    </div>);
}

export default Page;