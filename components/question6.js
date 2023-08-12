import React from 'react';
import { sendData } from '@/firebase/db/dbMethods.js'
import { TextField } from '@mui/material';
export default function Question6(props){
    const [paper, setPaper] = React.useState(0);
    return <>    
    <div>
    <p>How sheets of paper do use you per day?</p>
    <TextField onChange={(e)=>setPaper(parseInt(e.target.value))}></TextField>
    <button onClick={()=>sendData({q6:paper}, props.email)}>Submit</button>
    </div>
    </>
}