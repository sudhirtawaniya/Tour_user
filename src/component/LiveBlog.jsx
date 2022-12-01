import axios from "axios";
import { useEffect, useState } from "react";
import BlogCard from "./Blogcard";
import Card from "./card/card";
import Footer from "./footer";

import Banner from "./Header/Hhome";
import Nav from "./nav";
export default function LiveBlog() {
  useEffect(()=>{window.scrollTo(0,0)},[])
  const [api,setapi]=useState([{
    url:'',
    img:'',
    date:''
   }]);
   
   useEffect(()=>{
    
    axios.get('http://localhost/adaman/blog.php').then((res) => {
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
       <Banner current="Live Blog" name=" Blog"/>
      
           
           <div style={{marginTop:'40px',
   
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'}}>
             
              {api.map((val)=>{
                return <BlogCard heading={val.url} date={val.date} img={val.img}/>

              })}
             
              </div>
                
        
      </div>
        <Footer/>          

    </div>
    </>
}