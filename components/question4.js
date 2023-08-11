import React from 'react';
import { sendData } from '@/firebase/db/dbMethods.js'
export default function Question4(){

    return <div>
    <p>Do you use the dishwasher to wash dishes?</p>
    <button onClick={()=>sendData({q4: 1})}>YES</button>
    <button onClick={()=>sendData({q4: 0})}>NO</button>

    </div>
}