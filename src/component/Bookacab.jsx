import Card from "./card/card";
import Hbooknow from "./Header/Hbooknow";
import Banner from "./Header/Hhome";
import Nav from "./nav";
import TourDetails from "./Tourdet";
import $ from 'jquery';
import Cabdata from "./Cabdata";
import { useEffect, useRef, useState } from "react";
import Format_cab from "./BookCabTemplate";
import Footer from "./footer";
import axios from "axios";
import { elementAcceptingRef } from "@mui/utils";
import { Snackbar } from "@mui/material";
import Offer_card from "./card/offer-card";
import SuccessModel from "./success";
export default function BookCab() {
  const [model,setmodel]=useState(false);
  const [suc,setsuc]=useState(false);
  const [onk,setSnk]=useState(false);
  const [onk1,setSnk1]=useState(false);
  const ref=useRef()
  var [pax,setpax]=useState();
  var [str,setstr]=useState();
  var [end,setend]=useState();
  const [contact,setcon]=useState({
    name:'',
    email:'',
    mno:'',
    wno:'',
    arr_date:'',
    hotel:'',
    cargo:'',
    car:'',
    pickup:'',
    person:1,
    tr_id:'',
    type:'cab',
    id:[],
    m_id:[],
    price:''

  })
  const [cabdata,setcab]=useState([])
  const setcabdata=(val,ind,text,pick)=>{
    cabdata[ind]={det:val,data:text};
    contact.pickup=pick
    contact.cargo=val.cargo
    contact.car=val.car
    setcon(contact)
    setprice(1);
    
   
    
  }
  const [api,setapi]=useState([{
    tour:'',
    id:0,
    content:[]
   }]);
   const remove=(ind)=>{
    console.log(cabdata);
    cabdata[ind]={};
    setcab([...cabdata])
   }
  const[offc,setoffc]=useState();
  const sucrun=()=>{
    setsuc(true)
    setmodel(false)
  }
  const offrun=()=>{
    
    setsuc(false)
  }
  useEffect(()=>{
    window.scroll(0,0)
    axios.get('http://localhost/adaman/bookcab.php').then((res) => {
      const d1 = eval(res.data)
     
      d1.sort(function(a,b){
        return b.id-a.id;
      })
      
      setapi(d1);
      axios.get('http://localhost/adaman/hTourPackagelat.php').then((res) => {
        const d1 = eval(res.data)
       
        d1.sort(function(a,b){
          return b.id-a.id;
        })
        
        setoffc(d1);
        console.log(d1);
        
       
        })
      
      
      })

   },[])
  const stateChange=(e)=>{
setmodel(e);
  }
  
    function popupFunction(){  
   
        var scrollTop = $(window).scrollTop();
        var windowH = $(window).innerHeight();

        $("body").addClass("pop-up-open");
        $("body").attr("data-top", scrollTop);
       
            $("body").css("top", scrollTop);
        
        $("body").css({
            "top": "-" + scrollTop + "px"
        });
    } 


function popupCloseFunction(){
  
        var scTop = $("body").attr("data-top");
       
            var scTop = $("body").css("top");
        
        var suffix = scTop.match(/\d+/);
        $("body").removeClass("pop-up-open");
        $("body").removeAttr("style");

        $("html, body").scrollTop(parseInt(suffix));
    
}
    const query=(a)=>{
        
        $("#js-popup-open").on("click", function(e){
          
          e.preventDefault();
          var thisHref = $(this).attr("data-href"),
              popup = $(thisHref);
          
          $(".popup").not(popup).removeClass("opened");
          popup.addClass("opened");
          $("#overlay").fadeIn(100);
          $("html, body").addClass("locked");
          $("body").addClass("body-margin");
      });
      
      $(".popup .close").on("click", function(){
          var thisParent = $(this).parent(".popup");
          
          thisParent.removeClass("opened");
          
          $("#overlay").fadeOut(100);
          $("html, body").removeClass("locked");
          $("body").removeClass("body-margin");
      });
      
      $("#overlay").on("click", function(){
          
          $(".popup").removeClass("opened");
          $("#overlay").fadeOut(100);
          $("html, body").removeClass("locked");
          $("body").removeClass("body-margin");
      });
        }
        const [price,setprice]=useState();
        const setpr=(pr)=>{
          setprice(pr);
        }
        const handleClose = () => {
          setSnk(false);
          setSnk1(false);
        };
  return (
    <>
         <div className="container">
        <Nav />
        <div className="tour_page right-sidebar">
         <Banner current="Book A Cab" name="Book A Cab"/>
         
        <div className="tour_page_body" style={{padding:'10px'}}>
           
            <div className="wrap">
              <div className="wrap_float">
                <div className="left_content">
          <div className="overview js-section content-block" id="overview">
            {api.map((val, i) => {
              return (
                <Cabdata
                  ind={i +1}
                  id={val.id}
                  m_id={val.id}
                  title={val.displayname}
                  data={val.content}
                  pickup={val.pickup}
                  pr={setpr}
                  cab={setcabdata}
                />
              );
            })}
          </div>
          <div className="sidebar rm" style={{display:'none'}}>
                  <a
                    className="book-now button  js-popup-open br-btn"
                    data-href="#book-now"
                    onClick={()=>{setcab(cabdata)
                      if(price){
                        var i=0;
                        for( i=0;i<cabdata.length;i++){
                          try {
                            var pax2=cabdata[i].det.pax;
                            
                          } catch (error) {
                            continue;
                          }
                        pax=cabdata[i].det.pax;
                        str=parseInt(cabdata[i].det.pax.charAt(0));
                        end=parseInt(cabdata[i].det.pax.charAt(2));
                        console.log(str+"en");
                        setstr(str)
                        setend(end)
                        break
                        }
                        var ispax=true;
                         i=0;
                       for( i=0;i<cabdata.length;i++){
                        try {
                          var pax2=cabdata[i].det.pax;
                          
                        } catch (error) {
                          continue;
                        }
                        if((cabdata[i].det.pax!=pax)){
                          console.log("enter"+cabdata[i].det.pax);
                          ispax=false;
                         
                        }
                       }
                       if(ispax)
                       {document.getElementById("js-popup-open").click()}
                       else
                      alert("Please Select Same Pax")
                      }
                      else{
                        setSnk1(true);
                      }
                    }}
                  >
                    <span>Book now</span>
                    
                  </a>
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
        <div style={{display:'none'}} >
          <a id="js-popup-open" data-href="#book-now" className="book-now button js-popup-open br-btn" onClick={query(true)}>ok</a>
        </div>
        <div className="right_content sidebar" >
                  <a
                    className="book-now button js-popup-open br-btn"
                    data-href="#book-now"
                    style={{marginTop:'50px'}}
                    onClick={()=>{setcab(cabdata)
                      if(price){
                        
                        var i=0;
                        for( i=0;i<cabdata.length;i++){
                          try {
                            var pax2=cabdata[i].det.pax;
                            
                          } catch (error) {
                            continue;
                          }
                        pax=cabdata[i].det.pax;
                        str=parseInt(pax.charAt(0));
                        end=parseInt( pax.charAt(2));

                        setstr(str)
                        setend(end)
                        break
                        }
                       
                        var ispax=true;
                        i=0;
                       for( i=0;i<cabdata.length;i++){
                        try {
                          var pax2=cabdata[i].det.pax;
                          
                        } catch (error) {
                          continue;
                        }
                        if((cabdata[i].det.pax!=pax)){
                          console.log("enter"+cabdata[i].det.pax);
                          ispax=false;
                         
                        }
                       }
                       if(ispax)
                       {document.getElementById("js-popup-open").click()}
                       else
                      alert("Please Select Same Pax")
                      }
                      else{
                        setSnk1(true);
                      }
                    }}
                  >
                    <span>Book now</span>
                    
                  </a>
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
      </div></div></div>
      
      <div className="overlay" id="overlay" />
      
     
     
    
      <div className="popup book-now-popup " id="book-now">
        <div className="scroll">
          <div className="scroll_wrap">
            <div className="popup-head">
              <div className="title">Book Now</div>
            </div>
            <div className="popup-body">
              <div className="form">
                <input
                  type="text"
                  required
                  className="input"
                  value={contact.name}
                  onChange={(e)=>setcon({...contact,name :e.target.value})}
                  placeholder="Your Name"
                />
             
                <input
                  type="email"
                  required
                  value={contact.email}
                  onChange={(e)=>setcon({...contact,email:e.target.value})}
                  className="input"
                  placeholder="Your Email"
                />
                <input
                  type="tel"
                  required
                  value={contact.mno}
                  onChange={(e)=>setcon({...contact,mno:e.target.value})}
                  className="input"
                  placeholder="Your Number Phone"
                />
                 <input
                  type="tel"
                  required
                  value={contact.wno}
                  onChange={(e)=>setcon({...contact,wno:e.target.value})}
                  className="input"
                  placeholder="Your Whats App Number"
                />
                   <input
                  type="text"
                  required
                  className="input"
                  value={contact.hotel}
                  onChange={(e)=>setcon({...contact,hotel:e.target.value})}
                  placeholder="Hotel Name"
                />
                <input
                   type="text"
                   ref={ref}
                   required
                   className="input"
                   onClick={() => (ref.current.type = "date")}
                   onBlur={() => (ref.current.type = "date")}
                   value={contact.arr_date}
                   onChange={(e)=>setcon({...contact,arr_date:e.target.value})}
                  placeholder="Date of arrival"
                  defaultValue={""}
                />
              
                <label for="person">Person:</label>

<select name="person"  className="input" onChange={(e)=>setcon({...contact,person:e.target.value})}id="person">
 {
 end&&[...Array(end+1)].map((val,i)=>{
if(i>=str&&i<=end){
  return <option value={i}>{i}</option>
}
 })
 }
 
</select>
               
               
                <button className="submit button " onClick={()=>{
                   if(contact.email&&contact.arr_date&&contact.email&&contact.mno&&contact.name&&contact.person&&contact.wno!='')
                   {
                    
                       var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
                       
                       if(re.test(contact.mno)&&re.test(contact.wno)){
                        
                        
                     
                        
                         setmodel(true)
                      
                         setSnk(true);
                       }
                       else{
                         alert("Please Enter Valid Mobile Number");
                       }
                   
                     }
                  else
                  setSnk(true);
                  
                   
                }
                  
                  }>
                  Book Now 
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="close" />
      </div>
   
     {<Format_cab open={model}  sucrun={sucrun} data={contact} rm={remove} cab={cabdata} stateChange={stateChange} />}
      <SuccessModel open={suc} offrun={offrun}/>
      </div>
      <Footer/>
      <div style={{maxWidth:'500px',overflow:'hidden'}}>
     
     <Snackbar
       anchorOrigin={{ vertical:"bottom", horizontal:"left" }}
       open={onk}
       severity="error"
       sx={{width:'100%',maxWidth:'300px',color:'red'}}
       onClose={handleClose}
       message="Please Fill All Filds"
      
     />
   </div>
   <div style={{maxWidth:'500px',overflow:'hidden'}}>
     
     <Snackbar
       anchorOrigin={{ vertical:"bottom", horizontal:"left" }}
       open={onk1}
       severity="error"
       sx={{width:'100%',maxWidth:'300px',color:'red'}}
       onClose={handleClose}
       message="Please Select Any Cab"
      
     />
   </div>
    </>
  );
}
