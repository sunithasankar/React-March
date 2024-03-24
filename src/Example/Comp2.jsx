import React from "react";

const Comp2=(props)=>{
const{Banana,Gova,Apple,Grapes,Orange}=props.myfruits
return(
<div className="sample1">
<li>{Banana}</li>
<li>{Gova}</li>
<li>{Apple}</li>
<li>{Grapes}</li>
<li>{Orange}</li>
</div>
)
}


export default Comp2;
