import Banner from "./Header/Hhome";
import Nav from "./nav";
import "./css/blog.css";
import BlogNav from "./blognav";

import BlogCommentCard from "./BlogComment";

import Rating from "./Rating";
import Offer_card from "./card/offer-card";
import Footer from "./footer";
import { Button, getToggleButtonGroupUtilityClass, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import moment from "moment";
import { RedoRounded } from "@mui/icons-material";
export default function Blog() {
  var {url}=useParams()
const navgate=useNavigate()
const[snk,setSnk]=useState(false)
  const seturl=(acturl)=>{
    navgate("/blog/"+acturl)
    
  }
  const[api,setapi]=useState([{
    data:'',
    
  }])
  const handleClose = () => {
    setSnk(false);
  };
  const[comment,setcomment]=useState()
  const[data,setdata]=useState({
    name:'',
    mobile:'',
    email:'',
    message:'',
    url:url,
    rating:2
  })
  const[offc,setoffc]=useState();
  const run=()=>{}
  useEffect(()=>{},[run])
 
 const sendData=()=>{
  if(data.message&&data.whatsapp&&data.mobile&&data.email&&data.name!='')
  axios.post('http://localhost/adaman/Commentblog.php',data).then((res) => {
    setSnk(true)
getblog()
 })
 }
 const rat=(val)=>{
  setdata({...data,rating:val});

 }
 const getblog=()=>{
  axios.post('http://localhost/adaman/Perblog.php',url).then((res) => {
    const d1 = eval(res.data)
   
    
  if(d1[0].data)
    setapi(d1);
   
    console.log(d1);
    axios.post('http://localhost/adaman/PerblogComment.php',url).then((resp) => {
      const d1 = eval(resp.data)
     
      
    
      setcomment(d1);
     
      console.log(d1);
      
      
      })
    
    })
    axios.get('http://localhost/adaman/hblog.php').then((res) => {
      const d1 = eval(res.data)
     
      d1.sort(function(a,b){
        return b.id-a.id;
      })
      console.log(d1);
      soc(d1)
      axios.get('http://localhost/adaman/hTourPackagelat.php').then((res) => {
        const d2 = eval(res.data)
       
        d2.sort(function(a,b){
          return b.id-a.id;
        })
        
        setoffc(d2);
       
        
        
        })
    })
 }
 const[nav,setnav]=useState([]);
 const navblog=()=>{
  axios.post('http://localhost/adaman/navblog.php',url).then((res) => {
    const d1 = eval(res.data)
   
    d1.sort(function(a,b){
      return b.id-a.id;
    })
    console.log(d1);
    setnav(d1)
  }) 
 }
 const[oc,soc]=useState();
  useEffect(()=>{
    window.scrollTo(0,0)
    getblog();
    navblog();
      
   },[url])

  return (
    <>
    <div className="main_bl">
      <Nav />
      <Banner current="Blog Details" name="Blog"/>
      <div className="tour_page_body">
           
           <div className="wrap">
             <div className="wrap_float">
             <div className="left_content">
          <div className="hd">
            <h2>
              {url}
            </h2>
            <div className="ico_bl">
             
              <p>{moment(api.date).format("DD MMMM Y")}</p>
            </div>
          </div>
          <div className="img_bl">
            <img
            width={'100%'}
            src={"http://localhost/adaman/image/"+api[0].img}
              alt=""
            />
          </div>
          <div className="bl_body">
           {ReactHtmlParser(api[0].data)}
          </div>
          <div className="nav_bl"><BlogNav data={nav}  len={nav.length} seturl={seturl}/></div>
          {comment && comment.length>0 && comment.map((val)=>{
            return <div className="comm_bl"><BlogCommentCard data={val}/> </div>
          })}
          <div className="slidebar rm" style={{display:'none'}}>
          <div className="c_con">
                  <div className="offer">
                  <h4> New Post</h4>
                 {oc && oc.map((val,i)=>{
                    return <Offer_card img={val.img} key={i} date={val.date}t_name={val.url} url={`blog/${val.url}`}isp='false'/> 
                 })}
                 
                 
                  </div>
                  </div>
                  <div className="c_con">
                  <div className="offer">
                  <h4> Latest Package</h4>
                 {offc&&offc.map((val,i)=>{
                  return  <Offer_card img={val.img} t_name={val.menu_name} isp={true} url={"tour/"+val.url} price={val.startingp}/>
                 })}
                  
                  </div>
                  </div>
                  </div>
          <div className="comment_bl">
            <h4>Leave Your Comment</h4>
            <div >
       
           
            <div className="popup-body bb" style={{maxWidth:'100%'}}>
              <div className="form">
                <div className="row_bl">
                <input
                  type="text"
                  className="input"
                  value={data.name}
                  onChange={(e)=>setdata({...data,name:e.target.value})}
                  placeholder="Your Name"
                />
             
                <input
                  type="email"
                  value={data.email}
                  onChange={(e)=>setdata({...data,email:e.target.value})}
                  className="input"
                  placeholder="Your Email"
                /></div>
                 <div className="row_bl">
                <input
                  type="number"
                  className="input"
                  value={data.mobile}
                  onChange={(e)=>setdata({...data,mobile:e.target.value})}
                  placeholder="Mobile Number"
                />
             
                <input
                  type="Number"
                  className="input"
                  value={data.whatsapp}
                  onChange={(e)=>setdata({...data,whatsapp:e.target.value})}
                  placeholder="What's App Number"
                /></div>
                 <textarea className="textarea"  value={data.message} onChange={(e)=>setdata({...data,message:e.target.value})} placeholder="Write Message"/>
              
             <Rating rat={rat}/>
             <br/>
             <div className="sub" style={{marginTop:'30px'}}>
               <Button variant="contained"sx={{backgroundColor:'orangered'}}  onClick={()=>sendData()}>Submit</Button></div>
               
              </div>
           
        </div>
        <div className="close" />
        <div style={{maxWidth:'500px',zIndex:100000}}>
     
     <Snackbar
       anchorOrigin={{ vertical:"bottom", horizontal:"left" }}
       open={snk}
       severity="error"
       sx={{width:'100%',maxWidth:'300px',color:'red'}}
       onClose={handleClose}
       message="Message Sent!"
      
     />
   </div>
      </div>
        </div>
        </div>
        <div className="right_content sidebar" >
        <div className="c_con">
                  <div className="offer">
                  <h4> New Post</h4>
                 {oc && oc.map((val,i)=>{
                    return <Offer_card img={val.img} key={i} date={val.date}t_name={val.url} url={`blog/${val.url}`}isp='false'/> 
                 })}
                 
                 
                  </div>
                  </div>
                  <div className="c_con">
                  <div className="offer">
                  <h4> Latest Package</h4>
                 {offc&&offc.map((val,i)=>{
                  return  <Offer_card img={val.img} t_name={val.menu_name} isp={true} url={"tour/"+val.url} price={val.startingp}/>
                 })}
                  
                  </div>
                  </div>
        </div>
        </div>
       
      </div>
      </div>
      </div>
      <Footer/>
    </>
  );
}
