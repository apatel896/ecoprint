import {useAuthContext} from '@/components/layout.js'
import {getData} from '@/firebase/db/dbMethods.js';
import React from 'react';
import {useRouter} from 'next/router';

export default function Finished() {
    const router = useRouter();
    const {user} = useAuthContext();
    const [data, setData] = React.useState(null);
    let bullets = [];
    let curr = null;
    React.useEffect(()=> {
        curr = getData(user.email);
        curr.then((result) => {
            setData(result);
        });
    }, []);
    if (data) {
        if (!data["q1"]) {
            bullets.push("Try not to leave the sink running when you brush");
        }
        if (data["q2"] > 20) {
            bullets.push("Try to shower faster");
        }
        if (data["q3"] > 1) {
            bullets.push("Reduce meat intake per day (eat less red meat, eat more poultry, seafood, etc)");
        }
        if (!data["q4"]) {
            bullets.push("Learn how to use dishwasher. It uses less water and is more efficient");
        }
        if (!data["q5"]) {
            bullets.push("Drive more smoothly. It is more fuel efficient.")
        }
        if (data["q6"] > 5) {
            bullets.push("Use less paper and more digital substitutes");
        }
        if (data["q7"] > 800 ) {
            bullets.push("Use less electricity");
        }
        if (data["q81"]/data["q82"] > 215) {
            bullets.push("Try to plant more trees on your property");
        }

        if (data["q9"] > 2) {
            bullets.push("Recycle more");
        }
    }
    console.log(bullets)
    return (
        <div>
        <button onClick={()=>{router.push('user/dashboard')}}>Dashboard</button>
        <ul>
            {bullets.map((rec) => {
                return <li>{rec}</li>
            })}
        </ul>
        </div>
    );
}