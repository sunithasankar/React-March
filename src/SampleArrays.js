import React from "react";
import { userEmployes } from './Data.js';

console.log(userEmployes);



const SampleArrays=()=>{
  return (
    <div>
   {userEmployes.map((user)=>{
   return(
    <div className="Datastyle">
        <li>{user.id}.Name:{user.name}</li>
        <li style={{color:"red"}}>Email:{user.email}</li>
        <li style={{fontSize:"20px",color:"blue"}}> City:{user.address.city}</li>
    </div>
   )


   })}
    </div>
  )
}

export default SampleArrays;
