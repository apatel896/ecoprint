import React from 'react';
import { sendData } from '@/firebase/db/dbMethods.js'
import { TextField } from '@mui/material';
export default function Question7(){
    const [watts, setWatts] = React.useState(0);
    return <>    
    <div>
    <p>How many watts of Electricity do you use per day?</p>
    <TextField onChange={(e)=>setWatts(parseInt(e.target.value))}></TextField>
    <button onClick={()=>sendData({q7:watts})}>Submit</button>
    </div>
    </>
}