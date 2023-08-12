import React from 'react';
import { sendData } from '@/firebase/db/dbMethods.js'
import { TextField } from '@mui/material';
export default function Question9(props){
    const [trash, setTrash] = React.useState(0);
    return <>    
    <div>
    <p>How pounds of non-recyclable trash do you produce per day?</p>
    <TextField onChange={(e)=>setTrash(parseInt(e.target.value))}></TextField>
    <button onClick={()=>sendData({q9:trash}, props.email)}>Submit</button>
    </div>
    </>
}