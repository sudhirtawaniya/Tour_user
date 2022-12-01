import React from 'react';
import ReactHtmlParser from "react-html-parser";
export default function Inclusion(props) {
 var data=props.data
    return (<>
  
    
    
    <div className="programm" id="programm-days">
      <div className="day_item" >
        <div className="day_item-head " id={props.id} >
          <div className="preview">
            <div className="image">
             {props.ind}
            </div>
          <div className="p">{props.title}</div>
          </div>
          <div className="_title" style={{minHeight:"40px"}}></div>
        
        </div>
        <div className="day_item-body" id={props.id+"con"} style={{ display: "block" }}>
          <div className="text">
            
           {ReactHtmlParser(data)}
          </div>
      
        </div>
      </div>
     
    </div>
   
  </>)
}