import React from 'react';
import { sendData } from '@/firebase/db/dbMethods.js'
export default function Question5(){

    return <div>
    <p>Do you drive Smooth or Jerky?</p>
    <button onClick={()=>sendData({q5: 1})}>Smooth</button>
    <button onClick={()=>sendData({q5: 0})}>Jerky</button>

    </div>
}