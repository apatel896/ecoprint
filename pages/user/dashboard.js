import React from 'react';
import { useAuthContext } from '@/components/layout.js';
import { useRouter } from 'next/router';
import { app } from '@/firebase/firebaseconfig.js';
import { getAuth, signOut } from 'firebase/auth'
export default function Dashboard() {
    const auth = getAuth();
    const { user } = useAuthContext();
    const router = useRouter();
    React.useEffect(() => {
        if (user == null) {
            router.push('/');
        }
    }, [user]);
    const signOutUser = () => signOut(auth);
    return (<div> <button onClick={signOutUser}>Sign Out</button>  </div>);
}