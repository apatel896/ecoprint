
import React from 'react';
import {
    onAuthStateChanged,
    getAuth,
} from 'firebase/auth';
import app from '../firebase/firebaseconfig.js';

const auth = getAuth(app);

export const AuthContext = React.createContext({});

export const useAuthContext = () => React.useContext(AuthContext);

export default function BackgroundPic({
    children
}) {
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <main style={{ backgroundImage: 'url("/forest.jpg")',backgroundSize:"cover",backgroundPosition:"center",height:"100vh",width:"100vw" }}>
        <AuthContext.Provider value={{ user }}>
            {loading ? <h1>Loading</h1> : children}
        </AuthContext.Provider>
        </main>
    );
};