import React from "react";
import Cdata from "./Cdata";
import './Body.css'


export default function Cards() {
  
  return (
    Cdata.map((props) => {
      return(
    <div className="card1" >
<img src={props.img} className ="ellipse"  alt="group1"/>
<img src={props.r1} className ="r1"  alt="group1"/>
<div className ="text1">{props.text1 }  </div>
<div className ="text-1">{props.text2 }  </div>
<div className ="text11">{props.text3 }  </div>
<div className ="text12">{props.text4 }  </div>
<img src={props.tick} className ={ props.tick ? "tick":""}  />
<img src={props.home} className ={props.home ? "home":""}  />
<img src={props.home1} className ={props.home1 ? "home1":""}  />
<img src={props.home2} className ={props.home2 ? "home2":""}  />
<img src={props.home3} className ={props.home3 ? "home3":""}  />
<img src={props.home4} className ={props.home4 ? "home4":""}  />
</div>
  )
}
  ))
}



