import React from 'react';
import { sendData } from '@/firebase/db/dbMethods.js'
import { TextField } from '@mui/material';
export default function Question7(props){
    const [watts, setWatts] = React.useState(0);
    return <>    
    <div>
    <p>How many KiloWatts of Electricity do you use per month? (Check Electricity Bill)</p>
    <TextField onChange={(e)=>setWatts(parseInt(e.target.value))}></TextField>
    <button onClick={()=>sendData({q7:watts}, props.email)}>Submit</button>
    </div>
    </>
}