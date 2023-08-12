import React from 'react';
import { sendData } from '@/firebase/db/dbMethods.js'
import { TextField } from '@mui/material';
export default function Question8(props){
    const [size, setSize] = React.useState(0);
    const [people, setPeople] = React.useState(0);
    return <>    
    <div>
    <p>What size if your living space in sqaure feet?</p>
    <TextField onChange={(e)=>setSize(parseInt(e.target.value))}></TextField>
    <button onClick={()=>sendData({q81:size}, props.email)}>Submit</button>
    <p>How many people live in your home including yourself?</p>
    <TextField onChange={(e)=>setPeople(parseInt(e.target.value))}></TextField>
    <button onClick={()=>sendData({q82:people}, props.email)}>Submit</button>
    </div>
    </>
}