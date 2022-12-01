import BlogCard from "./Blogcard";
import Card from "./card/card";
import Feedback from "./Feedback";
import Nav from "./nav";
import Swiper from "./Swiper";
import './css/home.css'
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Home() {
    useEffect(()=>{window.scrollTo(0,0)},[])
    useEffect(()=>{window.scrollTo(0,0)},[])
    const [api,setapi]=useState([{
      tour:''
     }]);
     const [bapi,setbapi]=useState([{
      url:'',
      img:'',
      date:''
     }]);
     
     useEffect(()=>{
      
      axios.get('http://localhost/adaman/hTourPackage.php').then((res) => {
        const d1 = eval(res.data)
       
        d1.sort(function(a,b){
          return b.id-a.id;
        })
        
        setapi(d1);
        console.log(api);
        
        
        })
        axios.get('http://localhost/adaman/hblog.php').then((res) => {
          const d1 = eval(res.data)
         
          d1.sort(function(a,b){
            return b.id-a.id;
          })
          
          setbapi(d1);
          console.log(bapi);
          
          
          })

     },[])
    const navigate=useNavigate();
    return<>
    <Nav/>
    <div className="container_h">
    <div className="tour_page right-sidebar" style={{marginTop:'70px'}}>
    <Swiper/>
    </div>
    <div className="main">
     
      <div className="tour_page right-sidebar">
       
       <div className="wrap">
            <div className="hd_h">
                
                <h2>Popular Tour Packages</h2>
               
                <Button onClick={()=>navigate("/tourdetails")} className="mbtn" variant="contained">View All Tour</Button>
            </div>
            <div className="wrap_float"style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}  >
              {api.map((ele,i)=>{
                
                return  <div className="card"  style={{width:'auto',margin:"20px"}} >
                <Card menu_name={ele.menu_name} strp={ele.startingp} day={ele.day} night={ele.night} url={ele.url} img={ele.img} /></div>
              })}
              </div></div>
                
        
      </div>
      <Feedback />
      <div className="blogsection" style={{width:'100%',padding:"10px"}}>
      <div className="hd_h" style={{justifyContent:'center',width:'100%'}}>
                
                <h2 style={{textAlign:'center',width:'100%'}}>Live Blogs</h2>
               
               
            </div>
            <div className="blogc">
            {bapi.map((val,i)=>{
                
                return  <BlogCard heading={val.url} date={val.date} img={val.img}/>

              })}
        </div>
        </div>

    </div>
    <Footer/>
    </div>
    </>
}