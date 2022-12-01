import Card from "./card/card";
import Hbooknow from "./Header/Hbooknow";
import Banner from "./Header/Hhome";
import Nav from "./nav";
import './css/pd.css'
import { useEffect, useState } from "react";
import Footer from "./footer";
import axios from "axios";
export default function PackageD() {
  useEffect(()=>{window.scrollTo(0,0)},[])
  const [api,setapi]=useState([{
    tour:''
   }]);
   
   useEffect(()=>{
    
    axios.get('http://localhost/adaman/TourPackage.php').then((res) => {
      const d1 = eval(res.data)
     
      d1.sort(function(a,b){
        return b.id-a.id;
      })
      
      setapi(d1);
      console.log(api);
      
      
      })
   },[])
    return<>
    <div className="container">
      <Nav />
      <div className="tour_page right-sidebar">
       <Banner current="Package Tour" name="Package Details"/>
       <div className="wrap">
            <div className="wrap_float"style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}  >
              {api.map((ele)=>{
                console.log(ele);
                return  <div className="card"  style={{width:'auto',margin:"20px"}} >
                <Card menu_name={ele.menu_name} strp={ele.startingp} day={ele.day} night={ele.night} url={ele.url} img={ele.img}/></div>
              })}
             
              
              </div></div>
                
        
      </div>
                  
    <Footer/>
    </div>
   
   
  </>
}