import React from "react";


const Comp1=(props)=>{
const {model,year,dealer,colour}=props.mycar
return(
<div className="sample">
    <ul>
<ol>{model}</ol>
<ol>{year}</ol>
<ol>{dealer}</ol>
<ol>{colour}</ol>
</ul>
</div>

)


}
export default Comp1;
