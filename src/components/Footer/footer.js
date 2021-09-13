import  React, { useState , useEffect } from 'react'
import {Footerstyle}  from './style';

const Footer = ()=>{
    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <Footerstyle>
            <p> Time : {date.toLocaleTimeString()}</p>
            <p> Date : {date.toLocaleDateString()}</p>
        </Footerstyle>
    )
  }
  
    export default Footer