import React from 'react';
import { useAuthContext } from '@/components/layout.js';
import { useRouter } from 'next/router';
import { app } from '@/firebase/firebaseconfig.js';
import { getAuth, signOut } from 'firebase/auth'
import { TextField } from '@mui/material'
import { writeData } from '@/firebase/db/dbMethods.js';
export default function Dashboard() {
    const [currName, setName] = React.useState("");
    const auth = getAuth(app);
    const { user } = useAuthContext();
    const router = useRouter();
    React.useEffect(() => {
        if (user == null) {
            router.push('/');
        }
    }, [user]);
    const signOutUser = () => signOut(auth);
    const sendName = async () => {
        let req = await fetch('http://localhost:3000/api/addData',{
            method: "POST",
        
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: currName })
        });
    };


    return (<div display = "flex">
         <TextField className='welcomeTxtField' label="enter name here" onChange = {e => setName(e.target.value)}> </TextField>
         <button onClick = {sendName}>
            Click to register name w/ database
        </button>
        
         <button onClick={signOutUser}>Sign Out</button>  
         </div>);
}