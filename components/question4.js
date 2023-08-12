import React from 'react';
import { sendData } from '@/firebase/db/dbMethods.js'
export default function Question4(props){

    return <div>
    <p>Do you use the dishwasher to wash dishes?</p>
    <button onClick={()=>sendData({q4: 1}, props.email)}>YES</button>
    <button onClick={()=>sendData({q4: 0}, props.email)}>NO</button>

    </div>
}