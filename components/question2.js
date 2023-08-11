import React from 'react';
import { sendData } from '@/firebase/db/dbMethods.js'
import { TextField } from '@mui/material';
export default function Question2(){
    const [gallons, setGallons] = React.useState(0);
    return <>    
    <div>
    <p>How many gallons of water do you use when you shower?</p>
    <TextField onChange={(e)=>setGallons(parseInt(e.target.value))}></TextField>
    <button onClick={()=>sendData({q2:gallons})}>Submit</button>
    </div>
    </>
}