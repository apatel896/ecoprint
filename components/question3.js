import React from 'react';
import { sendData } from '@/firebase/db/dbMethods.js'
import { TextField } from '@mui/material';
export default function Question2(){
    const [tableSpoons, setTableSpoons] = React.useState(0);
    return <>    
    <div>
    <p>How many tablespoons of red meat do you eat a day?</p>
    <TextField onChange={(e)=>setTableSpoons(parseInt(e.target.value))}></TextField>
    <button onClick={()=>sendData({q3:tableSpoons})}>Submit</button>
    </div>
    </>
}