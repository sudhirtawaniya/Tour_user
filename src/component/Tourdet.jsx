import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState,useEffect } from 'react';
import ReactHtmlParser from "react-html-parser";
export default function TourDetails(props) {
  var data=props.data
  const[open,setopen]=useState(false);
  const transitionBox = (e) => {
    var box=document.getElementById(e+"con").style.display="none"
    if (box.style.display === "none") {
      box.style.display = "block";
      if (box.style.height === "50px") box.style.height = "0";
      setTimeout(() => box.style.height = "50px", 1);
    } else {
      box.style.height = "0";
      box.addEventListener(
        "transitionend",
        () => box.style.display = "none", {
          once: true
        }
      );
    }
  }
    const changeclass=(e)=>{
        setopen(!open)
        if(document.getElementById(e.currentTarget.id).classList.contains("active")){
            document.getElementById(e.currentTarget.id).classList.remove("active");
            transitionBox(e.currentTarget.id);
           
        }
        else{
            document.getElementById(e.currentTarget.id).classList.add("active");
            document.getElementById(e.currentTarget.id+"con").style.display="block"
        }
        
    }
   
    
    return (<>
    
    
   
    <div className="programm" id="programm-days">
      <div className="day_item" >
        <div className="day_item-head " id={props.id} onClick={(e)=>changeclass(e)}>
          <div className="preview">
            <div className="image">
             {props.ind}
            </div>
            <div className="p">{props.day} : {props.title}</div>
          </div>
          <div className="_title"></div>
          <div className="element" >
          {open?<KeyboardArrowUpIcon />:<KeyboardArrowDownIcon />}
          </div>
        </div>
        
        <div className="day_item-body" id={props.id+"con"} style={{ display: "none" }}>
          <div className="text">
          {ReactHtmlParser(data)}
          </div>
      
        </div>
      </div>
     
    </div>
   
  </>)
}