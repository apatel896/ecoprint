import React from 'react';
import { sendData } from '@/firebase/db/dbMethods.js'
import { TextField } from '@mui/material';
export default function Question3(props){
    const [tableSpoons, setTableSpoons] = React.useState(0);
    return <>    
    <div>
    <p>How many tablespoons of red meat do you eat a day? (A tablespoon of red meat is roughly a thumb's size)</p>
    <TextField onChange={(e)=>setTableSpoons(parseInt(e.target.value))}></TextField>
    <button onClick={()=>sendData({q3:tableSpoons}, props.email)}>Submit</button>
    </div>
    </>
}