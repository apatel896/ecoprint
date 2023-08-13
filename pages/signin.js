'use client'

import app from "../firebase/firebaseconfig.js";
import styles from "@/styles/Sign.module.css";
import React from "react";
import { useRouter } from 'next/navigation';
import { styled } from "@mui/system";
import { Button } from "@mui/material";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useAuthContext } from "@/components/layout.js";
import Image from 'next/image';
const GradientButton = styled(Button)`
  background: linear-gradient(45deg, #1b4e50 30%, #1b4e50 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;

`;
const auth = getAuth(app);
async function signIn(email, password) {
    let result = null,
        error = null;
    try {
        result = await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}
function Page() {
    const user = useAuthContext();
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState(false);

    const router = useRouter()

    const handleForm = async (event) => {
        event.preventDefault()

        const { result, error } = await signIn(email, password);

        if (error) {
            setError(true);
            return;
        }

        // else successful
        router.push('/user/dashboard')
        return {result, error}
    }
    return (
     
<       div className="wrapper" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", }}>
            <div className={styles.scontainer+' '+styles.bmb}>
            <Image src="/tree.jpg" height= {100} width= {100} style={{borderRadius:70, marginTop: 20}}/>
            <h1 className="mt-60 mb-30" style={{ padding: 0, margin: 0 }}>Sign in</h1>
            <form onSubmit={handleForm} className="form">
              <label htmlFor="email">
                <p className={styles.pder}>Email</p>
                <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
              </label>
              <label htmlFor="password">
                <p>Password</p>
                <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" />
              </label>
              <div className={styles.btnCenter}>
                <GradientButton onClick={handleForm} className={styles.btn} variant="contained" style={{position:"absolute", fontFamily: "Bamboo Gothic"}}>Sign In</GradientButton>
              </div>

            </form>
            <h2>{error ? "Error occurred, try signing in again" : ""}</h2>
          </div>
        </div>
     
      );
      
}

export default Page;