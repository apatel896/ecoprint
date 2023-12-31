import React from 'react';
import { useAuthContext } from '@/components/layout.js';
import { useRouter } from 'next/router';
import { app } from '@/firebase/firebaseconfig.js';
import { getAuth, signOut } from 'firebase/auth'
import { TextField } from '@mui/material'
import { sendData } from '@/firebase/db/dbMethods.js';
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


    return (<div display = "flex">
         <TextField className='welcomeTxtField' label="enter name here" onChange = {e => setName(e.target.value)}> </TextField>
        
         <button onClick={signOutUser}>Sign Out</button>  
         <button onClick={()=>router.push('/survey/start')}>Click to begin survey</button>
         </div>);
}