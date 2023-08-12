import {useAuthContext} from '@/components/layout.js'
import {getData} from '@/firebase/db/dbMethods.js';
import React from 'react';

export default function Finished() {
    const {user} = useAuthContext();
    const [data, setData] = React.useState({});
    let bullets = [];
    let curr = getData(user.email);
    curr.then((result) => {
        setData(result);
    })

    console.log(data);
    return <><p>{JSON.stringify(data)}</p></>


}