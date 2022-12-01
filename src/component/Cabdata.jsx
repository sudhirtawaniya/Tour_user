
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Collapse, IconButton, TableCell, Typography } from '@mui/material';
import { getValue } from '@mui/system';
import { useEffect, useState } from 'react';
export default function Cabdata(props) {
var[id,setid]=useState([{}])
  const getValue=(val,mid,pickup)=>{
    
   
      
      props.cab(val,props.ind-1,props.title,pickup);

    setid([...id,{id:mid,data:val}])
   
    // props.cab(id);
  }
 

  const[open,setopen]=useState(false);
  const[opent,setopent]=useState([true]);
    const changeclass=(e)=>{
     
      
        if(document.getElementById(e.currentTarget.id).classList.contains("active")){
            document.getElementById(e.currentTarget.id).classList.remove("active");
            document.getElementById(e.currentTarget.id+"con").style.display="none"
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
          <div className="p">{props.title}</div>
          </div>
          <div className="_title" style={{minHeight:"40px"}}></div>
          <div className="element" >
          {open?<KeyboardArrowUpIcon className='rotate' onClick={()=>setopen(false)}/>:<KeyboardArrowDownIcon onClick={()=>setopen(true)}/>}
          </div>
        </div>
        <div className="day_item-body" id={props.id+"con"} style={{ display: "none" }}>
          <div className="text">
          <table style={{width:'100%'}} >
<thead >

  
  <tr >
    <th  style={{width:'20%'}}>
      <Collapse in={opent[0]} timeout="auto" unmountOnExit>
        <Typography align="center" variant="h6" >
          Pax
        </Typography>
      </Collapse>
    </th>
    <th  style={{width:'20%'}}>
      <Collapse in={opent[0]} timeout="auto" unmountOnExit>
        <Typography align="center" variant="h6" >
          Car
        </Typography>
      </Collapse>
    </th>
    <th  style={{width:'20%'}}>
      <Collapse in={opent[0]} timeout="auto" unmountOnExit>
        <Typography align="center" variant="h6" >
          Cargo
        </Typography>
      </Collapse>
    </th>
    <th  style={{width:'20%'}}>
      <Collapse in={opent[0]} timeout="auto" unmountOnExit>
        <Typography align="center" variant="h6" >
          Cost
        </Typography>
      </Collapse>
    </th>
    <th  style={{width:'20%'}}>
      <Collapse in={opent[0]} timeout="auto" unmountOnExit>
        <Typography align="center" variant="h6" >
          Select
        </Typography>
      </Collapse>
    </th>
  </tr>
</thead>
<tbody style={{paddingTop:'20px'}}>
  {props.data && props.data.map((val,i)=>{
  
    return <tr Collapse={0}>
    <th>
      <Collapse in={opent[0]} timeout="auto" unmountOnExit>
        <Typography align="center" variant="body1">
         {val.pax}
        </Typography>
      </Collapse>
    </th>
    <th className="d_fr">
      <Collapse in={opent[0]} timeout="auto" unmountOnExit>
        <Typography align="center" variant="body1">
          {val.car}
        </Typography>
      </Collapse>
    </th>
    <th className="d_fr">
      <Collapse in={opent[0]} timeout="auto" unmountOnExit>
        <Typography align="center" variant="body1">
          {val.cargo}
        </Typography>
      </Collapse>
    </th>
    <th className="d_fr">
      <Collapse in={opent[0]} timeout="auto" unmountOnExit>
        <Typography align="center" variant="body1">
          {val.cost}
        </Typography>
      </Collapse>
    </th>
    <th className="d_fr">
     
      <Collapse in={opent[0]} timeout="auto" unmountOnExit>
        <Typography align="center" variant="body1">
          <input
            type="radio"
            onClick={()=>{getValue(val,props.id,props.pickup);}}
            id={props.m_id}
            name={props.m_id}
            value={val}
          ></input>
        </Typography>
      </Collapse>
    </th>
  </tr>

  })}
  
  
</tbody>
</table>
          </div>
      
        </div>
      </div>
     
    </div>
   
  </>)
}