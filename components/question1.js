import React from 'react';
import { sendData } from '@/firebase/db/dbMethods.js'
export default function Question1(){

    return <div>
    <p>Do you leave the sink running while you brush?</p>
    <button onClick={()=>sendData({q1: 1})}>YES</button>
    <button onClick={()=>sendData({q1: 0})}>NO</button>

    </div>
}